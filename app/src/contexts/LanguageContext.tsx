"use client";

import React, { createContext, useContext, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { TranslationMessages } from '@/types/translations';
import { getResumeMessages, type Language } from '@/lib/resume-messages';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  messages: TranslationMessages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLanguage = 'ko' }: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  // Keep the existing, separate portfolio's in-page language selector working.
  const [portfolioLanguage, setPortfolioLanguage] = useState<Language>('ko');
  const isPortfolio = pathname === '/portfolio';
  const language = isPortfolio ? portfolioLanguage : initialLanguage;
  const messages = useMemo(() => getResumeMessages(language), [language]);

  const setLanguage = (nextLanguage: Language) => {
    if (isPortfolio) setPortfolioLanguage(nextLanguage);
    else router.push(`/${nextLanguage}`, { scroll: false });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
