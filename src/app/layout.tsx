import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haikalhilmi.my.id"),
  title: "Haikal Hilmi - Home",
  description:
    "Portfolio website of Haikal Hilmi - Data Engineer & Software Engineer",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          {children}
          {modal}
        </LanguageProvider>
      </body>
    </html>
  );
}
