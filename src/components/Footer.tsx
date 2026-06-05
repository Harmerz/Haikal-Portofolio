"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white py-6 text-black">
      <div className="container mx-auto px-6 text-center">
        <p className="text-black">
          © {new Date().getFullYear()} Haikal Hilmi. {t(dict.footer.tagline)}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
