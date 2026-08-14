"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { LINKEDIN_URL, type PortfolioMode } from "@/config/site";

const Footer = ({ mode }: { mode: PortfolioMode }) => {
  const { t } = useLanguage();

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
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{t(dict.footer.aiData)}:</span>
          <a
            href="/portfolio.md"
            download
            className="font-medium underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900"
          >
            {t(dict.footer.markdown)}
          </a>
          <span aria-hidden="true">&middot;</span>
          <a
            href="/portfolio.pdf"
            download
            className="font-medium underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900"
          >
            {t(dict.footer.pdf)}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
