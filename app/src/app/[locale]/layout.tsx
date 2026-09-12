import RootDocument from '@/components/RootDocument';
import { isLanguage, languages } from '@/lib/resume-messages';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLanguage(locale)) notFound();
  return <RootDocument language={locale === 'jp' ? 'ja' : locale}>{children}</RootDocument>;
}
