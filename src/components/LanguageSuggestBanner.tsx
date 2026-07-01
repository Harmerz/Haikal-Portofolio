"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

export default function LanguageSuggestBanner() {
  const { t, suggestEnglish, setLang, dismissEnglishSuggestion } =
    useLanguage();

  if (!suggestEnglish) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50 flex max-w-xs flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm shadow-lg">
      <div className="flex items-start gap-3">
        <p className="flex-1 text-gray-700">
          {t(dict.languageSuggest.message)}
        </p>
        <button
          type="button"
          onClick={dismissEnglishSuggestion}
          aria-label="Dismiss"
          className="shrink-0 text-gray-400 transition-colors hover:text-gray-700"
        >
          ×
        </button>
      </div>
      <button
        type="button"
        onClick={() => setLang("en")}
        className="self-start rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-gray-700"
      >
        {t(dict.languageSuggest.action)}
      </button>
    </div>
  );
}
