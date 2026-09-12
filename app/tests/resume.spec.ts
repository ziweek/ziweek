import { test, expect } from '@playwright/test';
import personal from '../src/config/personal.json';

for (const [path, language] of [['/', 'ko'], ['/ko', 'ko'], ['/en', 'en'], ['/jp', 'ja']]) {
  test(`${path} provides its language and working contacts without JavaScript`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    const response = await page.goto(`http://127.0.0.1:3107${path}`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', language);
    await expect(page.locator('body')).not.toContainText('{{personal.');
    await expect(page.getByRole('link', { name: personal.contact.email, exact: true })).toHaveAttribute('href', `mailto:${personal.contact.email}`);
    await context.close();
  });
}

test('language selection survives reload, sharing and history', async ({ page, context }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /한국어/ }).click();
  await page.getByRole('button', { name: /English/ }).click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole('heading', { name: 'Skills Summary', exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Skills Summary', exact: true })).toBeVisible();
  const shared = await context.newPage();
  await shared.goto(page.url());
  await expect(shared.locator('html')).toHaveAttribute('lang', 'en');
  await page.goBack();
  await expect(page).toHaveURL('http://127.0.0.1:3107/');
  await expect(page.getByRole('heading', { name: '보유 역량 요약', exact: true })).toBeVisible();
});

test('unsupported locale returns 404', async ({ request }) => {
  expect((await request.get('/fr')).status()).toBe(404);
});

test('the default Korean page exposes Korean metadata', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /백엔드 개발자로서 데이터와 AI를 활용해/
  );
});

test('desktop and mobile offer one print action and printable content', async ({ page }) => {
  await page.goto('/');
  const print = page.getByRole('button', { name: '인쇄 / PDF로 저장', exact: true });
  await expect(print).toHaveCount(1);
  await page.evaluate(() => {
    window.print = () => document.body.setAttribute('data-print-called', 'true');
  });
  await print.click();
  await expect(page.locator('body')).toHaveAttribute('data-print-called', 'true');
  await page.setViewportSize({ width: 375, height: 812 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
  await page.getByRole('button', { name: 'Toggle menu' }).click();
  await expect(print).toBeVisible();
  await page.emulateMedia({ media: 'print' });
  await expect(page.getByRole('navigation')).toBeHidden();
  await expect(page.getByRole('heading', { name: '보유 역량 요약', exact: true })).toBeVisible();
});
