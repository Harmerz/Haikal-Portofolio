"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { LINKEDIN_URL, type PortfolioMode } from "@/config/site";

const Footer = ({ mode }: { mode: PortfolioMode }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white py-6 text-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-6 text-center sm:flex-row sm:gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
