"use client";

import Link from "next/link";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageProvider";
import { dict } from "@/i18n/dictionaries";
import { CTA_URL } from "@/config/site";

export default function Header() {
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t(dict.nav.home), external: false },
    { href: "/software-engineer", label: t(dict.nav.software), external: false },
    { href: "/data-engineer", label: t(dict.nav.data), external: false },
    { href: CTA_URL, label: t(dict.nav.contact), external: true },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-sm font-bold text-gray-900">
          Haikal Hilmi
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}
