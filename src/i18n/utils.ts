import en from './en.json';
import es from './es.json';
import pt from './pt.json';
import zh from './zh.json';
import fr from './fr.json';
import hi from './hi.json';
import de from './de.json';
import ja from './ja.json';
import ru from './ru.json';
import ko from './ko.json';

export type Translations = typeof en;

export type Locale = 'en' | 'es' | 'pt' | 'zh' | 'fr' | 'hi' | 'de' | 'ja' | 'ru' | 'ko';

export const locales: Locale[] = ['en', 'es', 'pt', 'zh', 'fr', 'hi', 'de', 'ja', 'ru', 'ko'];

export const defaultLocale: Locale = 'en';

const translations: Record<Locale, Translations> = { en, es, pt, zh, fr, hi, de, ja, ru, ko };

export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  zh: '中文',
  fr: 'Français',
  hi: 'हिन्दी',
  de: 'Deutsch',
  ja: '日本語',
  ru: 'Русский',
  ko: '한국어',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  zh: 'zh_CN',
  fr: 'fr_FR',
  hi: 'hi_IN',
  de: 'de_DE',
  ja: 'ja_JP',
  ru: 'ru_RU',
  ko: 'ko_KR',
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function getAlternateLinks(currentPath: string) {
  return locales.map((locale) => ({
    locale,
    href: `https://dokos.app${getLocalePath(locale)}${currentPath}`,
  }));
}
