"use client";

import React from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { TranslationMessages } from "@/types/translations";
import { HiExternalLink } from "react-icons/hi";

export default function Title() {
  const { messages } = useTranslations();
  const resumeData = messages as TranslationMessages;
  const profile = resumeData?.profile;

  if (!profile) return null;

  return (
    <div className="md:col-span-2 print:col-span-2">
      <h1 className="text-3xl font-bold text-resume-heading mb-2 print:text-2xl print:text-black">
        {profile.title?.url ? (
          <a
            href={profile.title.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-resume-accent transition-colors hover:text-resume-accent-strong"
          >
            {profile.title.content?.toUpperCase()}{' '}
            <HiExternalLink className="inline w-6 h-6 opacity-70" />
          </a>
        ) : (
          profile.title?.content?.toUpperCase()
        )}, {profile.subtitle}
      </h1>
    </div>
  );
}
