import type { Metadata } from "next";
import BibRecorder from "./BibRecorder";

export const metadata: Metadata = {
  title: { absolute: "RSIH — Catatan BIB" },
  description: "Catat nomor BIB dan nomor angka, lalu cari dengan cepat.",
  alternates: { canonical: "/rsih" },
  robots: { index: false, follow: false },
};

export default function RsihPage() {
  return <BibRecorder />;
}
