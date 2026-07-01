// Shared i18n primitives — safe to import anywhere (no client code here).

export type Lang = "en" | "id" | "de" | "fr" | "es" | "it";

export const LANGS: Lang[] = ["en", "id", "de", "fr", "es", "it"];
export const DEFAULT_LANG: Lang = "en";

/** A string available in all supported languages. */
export interface Localized {
  en: string;
  id: string;
  de: string;
  fr: string;
  es: string;
  it: string;
}

/** Helper to build a Localized value inline. */
export const t = (
  en: string,
  id: string,
  de: string,
  fr: string,
  es: string,
  it: string,
): Localized => ({ en, id, de, fr, es, it });
