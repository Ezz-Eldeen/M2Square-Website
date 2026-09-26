import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
// Add this inside src/i18n/utils.ts
export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') {
    return cleanPath === '/' ? '/' : cleanPath;
  }
  return cleanPath === '/' ? '/ar' : `/ar${cleanPath}`;
}