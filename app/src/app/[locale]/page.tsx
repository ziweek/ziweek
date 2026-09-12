import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ResumePage from '@/components/resume/ResumePage';
import { getResumeMessages, isLanguage } from '@/lib/resume-messages';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLanguage(locale)) notFound();
  const { profile } = getResumeMessages(locale);
  return { title: `${profile.title.content} - ${profile.subtitle}`, description: profile.description };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLanguage(locale)) notFound();
  return <ResumePage key={locale} language={locale} />;
}
