// Shared i18n primitives — safe to import anywhere (no client code here).

export type Lang = "en" | "id";

export const LANGS: Lang[] = ["en", "id"];
export const DEFAULT_LANG: Lang = "en";

/** A string available in both supported languages. */
export interface Localized {
  en: string;
  id: string;
}

/** Helper to build a Localized value inline. */
export const t = (en: string, id: string): Localized => ({ en, id });
