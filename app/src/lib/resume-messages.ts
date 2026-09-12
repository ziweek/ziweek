import ko from '@/messages/ko.json';
import en from '@/messages/en.json';
import jp from '@/messages/jp.json';
import personal from '@/config/personal.json';
import type { TranslationMessages } from '@/types/translations';

export const languages = ['ko', 'en', 'jp'] as const;
export type Language = (typeof languages)[number];

export function isLanguage(value: string): value is Language {
  return languages.some((language) => language === value);
}

// Replace string values, not serialized JSON, so quotes and backslashes stay intact.
export function resolvePersonal<T>(input: T, config: unknown = personal): T {
  const visit = (value: unknown): unknown => {
    if (typeof value === 'string') {
      return value.replace(/\{\{personal\.([^}]+)\}\}/g, (_, path: string) => {
        let replacement: unknown = config;
        for (const key of path.split('.')) {
          replacement = replacement !== null && typeof replacement === 'object'
            && Object.prototype.hasOwnProperty.call(replacement, key)
            ? (replacement as Record<string, unknown>)[key]
            : undefined;
        }
        if (typeof replacement !== 'string') {
          throw new Error(`Missing personal configuration: ${path}`);
        }
        return replacement;
      });
    }
    if (Array.isArray(value)) return value.map(visit);
    if (value !== null && typeof value === 'object') {
      return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, visit(item)]));
    }
    return value;
  };
  return visit(input) as T;
}

const messages = { ko, en, jp };

export function getResumeMessages(language: Language): TranslationMessages {
  return resolvePersonal(messages[language]) as unknown as TranslationMessages;
}
