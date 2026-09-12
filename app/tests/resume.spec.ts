import { test, expect } from '@playwright/test';
import personal from '../src/config/personal.json';

function contrastRatio(foreground: number[], background: number[]) {
  const luminance = ([red, green, blue]: number[]) => {
    const channels = [red, green, blue].map((channel) => {
      const value = channel / 255;
      return value <= 0.04045
        ? value / 12.92
        : ((value + 0.055) / 1.055) ** 2.4;
    });

    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  };

  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

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

test('light theme section headings meet readable text contrast', async ({ browser }) => {
  const context = await browser.newContext({ colorScheme: 'light' });
  const page = await context.newPage();
  await page.goto('/');

  const colors = await page.getByRole('heading', { name: '보유 역량 요약', exact: true }).evaluate((heading) => {
    const toRgb = (color: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Canvas context unavailable');
      context.fillStyle = color;
      context.fillRect(0, 0, 1, 1);
      return Array.from(context.getImageData(0, 0, 1, 1).data.slice(0, 3));
    };

    const page = heading.closest('.resume-page');
    if (!page) throw new Error('Resume page unavailable');

    return {
      foreground: toRgb(getComputedStyle(heading).color),
      background: toRgb(getComputedStyle(page).backgroundColor),
    };
  });

  expect(contrastRatio(colors.foreground, colors.background)).toBeGreaterThanOrEqual(4.5);
  await context.close();
});

test('mobile introduction uses natural line spacing', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en');

  const introduction = page.locator('.resume-document p').first();
  await expect(introduction).not.toHaveCSS('text-align', 'justify');
});

test('mobile contact details align with the reading flow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const contact = page.getByRole('link', { name: personal.contact.email, exact: true }).locator('..').locator('..');
  await expect(contact).toHaveCSS('text-align', 'left');
});

test('resume body uses the loaded Geist font stack', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toHaveCSS('font-family', /Geist/);
});

test('resume uses the selected cobalt and graphite palette across themes', async ({ browser }) => {
  const darkContext = await browser.newContext({ colorScheme: 'dark' });
  const darkPage = await darkContext.newPage();
  await darkPage.goto('/');
  const darkHeading = darkPage.getByRole('heading', { name: '보유 역량 요약', exact: true });

  await expect(darkPage.locator('.resume-page')).toHaveCSS('background-color', 'rgb(13, 17, 23)');
  await expect(darkHeading).toHaveCSS('color', 'rgb(96, 165, 250)');
  await darkContext.close();

  const lightContext = await browser.newContext({ colorScheme: 'light' });
  const lightPage = await lightContext.newPage();
  await lightPage.goto('/');
  const lightHeading = lightPage.getByRole('heading', { name: '보유 역량 요약', exact: true });

  await expect(lightHeading).toHaveCSS('color', 'rgb(29, 78, 216)');
  await lightContext.close();
});
