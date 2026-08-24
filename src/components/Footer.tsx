"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { LINKEDIN_URL, type PortfolioMode } from "@/config/site";
import type { PortfolioScope } from "@/lib/portfolio-export";

const copyLabels = {
  copy: {
    en: "Copy page",
    id: "Salin halaman",
    de: "Seite kopieren",
    fr: "Copier la page",
    es: "Copiar página",
    it: "Copia pagina",
  },
  copied: {
    en: "Copied",
    id: "Tersalin",
    de: "Kopiert",
    fr: "Copié",
    es: "Copiado",
    it: "Copiato",
  },
  failed: {
    en: "Copy failed",
    id: "Gagal menyalin",
    de: "Kopieren fehlgeschlagen",
    fr: "Échec de la copie",
    es: "Error al copiar",
    it: "Copia non riuscita",
  },
  more: {
    en: "More export actions",
    id: "Opsi ekspor lainnya",
    de: "Weitere Exportaktionen",
    fr: "Autres options d’export",
    es: "Más opciones de exportación",
    it: "Altre opzioni di esportazione",
  },
};

const Footer = ({
  mode,
  exportScope = "general",
}: {
  mode: PortfolioMode;
  exportScope?: PortfolioScope;
}) => {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const exportQuery =
    exportScope === "general" ? "" : "?scope=" + exportScope;
  const exportScopeLabel =
    exportScope === "general" ? "General" : exportScope.toUpperCase();
  const markdownUrl = "/portfolio.md" + exportQuery;
  const pdfUrl = "/portfolio.pdf" + exportQuery;

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (copyState === "idle") return;
    const timeout = window.setTimeout(() => setCopyState("idle"), 2200);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const copyMarkdown = async () => {
    try {
      const response = await fetch(markdownUrl);
      if (!response.ok) throw new Error("Portfolio export unavailable");
      await navigator.clipboard.writeText(await response.text());
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  const copyLabel =
    copyState === "copied"
      ? t(copyLabels.copied)
      : copyState === "failed"
        ? t(copyLabels.failed)
        : t(copyLabels.copy);

  return (
    <footer className="bg-white py-6 text-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-6 text-center sm:flex-row sm:flex-wrap sm:gap-4">
        <p className="text-black">
          © {new Date().getFullYear()} Haikal Hilmi. {t(dict.footer.tagline)}
        </p>
        {mode === "general" && (
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-600 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900"
          >
            LinkedIn
          </a>
        )}
        <span className="hidden text-gray-300 sm:inline" aria-hidden="true">
          |
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            {t(dict.footer.aiData)}
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-gray-700">
              {exportScopeLabel}
            </span>
            :
          </span>
          <div ref={menuRef} className="relative flex items-stretch">
            <button
              type="button"
              onClick={copyMarkdown}
              className="inline-flex min-w-28 items-center justify-center gap-2 rounded-l-lg border border-gray-200 bg-white px-3 py-1.5 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-950 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              aria-live="polite"
            >
              {copyState === "copied" ? (
                <svg
                  viewBox="0 0 18 18"
                  className="size-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="m3.5 9.5 3.25 3.25 7.75-8" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 18 18"
                  className="size-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="5.25" y="5.25" width="11" height="11" rx="2" />
                  <path d="M12.5 3a2 2 0 0 0-2.25-1.25L3.33 2.78A2 2 0 0 0 1.65 5.05l1.03 6.92" />
                </svg>
              )}
              <span>{copyLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex w-9 items-center justify-center rounded-r-lg border border-l-0 border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              aria-label={t(copyLabels.more)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
            >
              <svg
                viewBox="0 0 18 18"
                className={
                  "size-3.5 transition-transform " +
                  (menuOpen ? "rotate-180" : "")
                }
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="m4.25 6.5 4.75 4.75 4.75-4.75" />
              </svg>
            </button>

            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 bottom-full z-20 mb-2 min-w-48 overflow-hidden rounded-xl border border-gray-200 bg-white p-1.5 text-left shadow-sm"
              >
                <a
                  href={markdownUrl}
                  download
                  role="menuitem"
                  className="flex items-center justify-between rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gray-900"
                >
                  {t(dict.footer.markdown)}
                  <span className="text-xs text-gray-400">.md</span>
                </a>
                <a
                  href={pdfUrl}
                  download
                  role="menuitem"
                  className="flex items-center justify-between rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gray-900"
                >
                  {t(dict.footer.pdf)}
                  <span className="text-xs text-gray-400">.pdf</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
