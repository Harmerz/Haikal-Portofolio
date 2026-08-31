"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LANGS, type Lang } from "@/i18n/config";

const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
};

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${lang.toUpperCase()} — switch language`}
        className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 uppercase transition-colors hover:text-gray-900"
      >
        {lang}
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 text-sm shadow-lg"
        >
          {LANGS.map((code) => (
            <li key={code} role="option" aria-selected={lang === code}>
              <button
                type="button"
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2 text-left transition-colors ${
                  lang === code
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>{LANG_LABELS[code]}</span>
                <span className="text-xs uppercase opacity-70">{code}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
