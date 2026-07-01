"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DEFAULT_LANG, LANGS, type Lang, type Localized } from "./config";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Resolve a Localized value to the active language. */
  t: (value: Localized) => string;
  /** True when the active language was auto-detected (not chosen) and isn't English yet. */
  suggestEnglish: boolean;
  /** Dismiss the "switch to English" suggestion without changing the language. */
  dismissEnglishSuggestion: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";
const DISMISSED_KEY = "lang-suggest-dismissed";

/** Map a browser language tag (e.g. "de-DE") to a supported Lang, or null. */
function detectBrowserLang(): Lang | null {
  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const tag of candidates) {
    const primary = tag.split("-")[0].toLowerCase();
    const match = LANGS.find((l) => l === primary);
    if (match) return match;
  }
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [suggestEnglish, setSuggestEnglish] = useState(false);

  // Hydrate from localStorage, or auto-detect, after mount (avoids SSR hydration mismatch).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(stored as Lang)) {
      setLangState(stored as Lang);
      return;
    }

    const detected = detectBrowserLang();
    if (detected) {
      setLangState(detected);
      const dismissed = window.localStorage.getItem(DISMISSED_KEY) === "true";
      if (detected !== "en" && !dismissed) {
        setSuggestEnglish(true);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const dismissEnglishSuggestion = useCallback(() => {
    setSuggestEnglish(false);
    window.localStorage.setItem(DISMISSED_KEY, "true");
  }, []);

  const setLang = useCallback(
    (next: Lang) => {
      setLangState(next);
      window.localStorage.setItem(STORAGE_KEY, next);
      dismissEnglishSuggestion();
    },
    [dismissEnglishSuggestion],
  );

  const translate = useCallback(
    (value: Localized) => value[lang],
    [lang],
  );

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translate,
        suggestEnglish,
        dismissEnglishSuggestion,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
