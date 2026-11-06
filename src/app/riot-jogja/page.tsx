import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import RiotGate from "./RiotGate";
import s from "./riot.module.css";

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-riot-body",
});
const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-riot-heading",
});

export const metadata: Metadata = {
  title: { absolute: "Kehadiran WNR RIOT Jogja" },
  description: "Laporan kehadiran Wednesday Night Run RIOT Jogja.",
  alternates: { canonical: "/riot-jogja" },
  robots: { index: false, follow: false },
};

export default function RiotJogjaPage() {
  return (
    <div className={`${s.root} ${body.variable} ${heading.variable}`}>
      <RiotGate />
    </div>
  );
}
