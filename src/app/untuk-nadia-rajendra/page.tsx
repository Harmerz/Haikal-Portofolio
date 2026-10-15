import type { Metadata } from "next";
import Image from "next/image";
import styles from "./wedding.module.css";

const title = "Untuk Nadia & Rajendra — dari Haikal Hilmi";
const description =
  "Sepucuk surat, doa baik, dan tanda kasih untuk perjalanan baru Nadia & Rajendra. 15 Oktober 2026.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  category: "personal",
  keywords: ["Nadia", "Rajendra", "Haikal Hilmi", "ucapan pernikahan"],
  alternates: { canonical: "/untuk-nadia-rajendra" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title,
    description,
    url: "/untuk-nadia-rajendra",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/untuk-nadia-rajendra/nadia-rajendra.jpg",
        width: 715,
        height: 1080,
        alt: "Nadia dan Rajendra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/untuk-nadia-rajendra/nadia-rajendra.jpg"],
  },
};

export default function WeddingLetterPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skip} href="#surat">
        Langsung ke surat
      </a>
      <header className={styles.header}>
        <span className={styles.headerNames}>
          Haikal Hilmi{" "}
          <svg
            className={styles.headerArrow}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 12h14m-5-5 5 5-5 5" />
          </svg>{" "}
          Nadia & Rajendra
        </span>
        <time dateTime="2026-10-15">15 Oktober 2026</time>
      </header>

      <section className={styles.cover} aria-labelledby="wedding-title">
        <div className={styles.intro}>
          <h1 id="wedding-title">
            <span>Untuk</span> Nadia <i>&</i>
            <br />
            Rajendra<span className={styles.period}>.</span>
          </h1>
          <p className={styles.dedication}>
            Selamat memulai perjalanan paling indah:
            <br className={styles.desktopBreak} /> menjadi rumah bagi satu sama
            lain.
          </p>
          <a className={styles.openLink} href="#surat">
            Ada surat untuk kalian{" "}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4v16m-6-6 6 6 6-6" />
            </svg>
          </a>
          <div className={styles.coverFoot}>
            <span>Dengan doa & bahagia,</span>
            <span>Hilmi</span>
          </div>
        </div>
        <figure className={styles.portrait}>
          <Image
            src="/untuk-nadia-rajendra/nadia-rajendra.jpg"
            alt="Nadia Nadhira dan Rajendra Pramudhita berfoto bersama di depan rangkaian bunga."
            fill
            priority
            sizes="(max-width: 700px) 100vw, 48vw"
          />
          <figcaption>Nadia Nadhira & Rajendra Pramudhita</figcaption>
        </figure>
      </section>

      <section
        id="surat"
        className={styles.correspondence}
        aria-label="Surat dari Haikal Hilmi"
      >
        <div className={styles.letterAside}>
          <p>
            Beberapa kata.
            <br />
            Banyak doa baik.
          </p>
          <span>
            Untuk hari ini,
            <br />
            dan hari-hari setelahnya.
          </span>
        </div>
        <details className={styles.envelope}>
          <summary>
            <span className={styles.envelopeTo}>
              Kepada
              <br />
              <strong>Nadia & Rajendra</strong>
            </span>
            <span className={styles.seal} aria-hidden="true">
              H
            </span>
            <span className={styles.envelopeAction}>
              <span className={styles.closedLabel}>Buka surat</span>
              <span className={styles.openLabel}>Tutup surat</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 9 7 7 7-7" />
              </svg>
            </span>
          </summary>
          <article className={styles.letter}>
            <p className={styles.salutation}>
              Nadia & Rajendra yang berbahagia,
            </p>
            <p>
              Selamat menempuh hidup baru! Senang sekali bisa ikut merayakan
              kabar baik kalian lewat sepucuk surat kecil ini.
            </p>
            <p>
              Semoga Allah memberkahi pernikahan kalian, melapangkan rezeki, dan
              menjaga langkah kalian dalam kebaikan. Semoga rumah yang kalian
              bangun menjadi tempat paling nyaman untuk pulang, bercerita, dan
              bertumbuh bersama.
            </p>
            <p>
              Di hari-hari yang mudah, semoga kalian tak lupa bersyukur. Di
              hari-hari yang berat, semoga kalian selalu ingat untuk saling
              menggenggam. Teruslah menjadi teman terbaik bagi satu sama lain.
            </p>
            <blockquote>
              <p lang="ar" dir="rtl">
                بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ
                بَيْنَكُمَا فِي خَيْرٍ
              </p>
              <p>
                Semoga Allah memberkahi kalian berdua, melimpahkan berkah atas
                kalian, dan menyatukan kalian dalam kebaikan.
              </p>
            </blockquote>
            <p>
              Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia
              selalu, Nadia & Rajendra.
            </p>
            <div className={styles.signature}>
              <span>Dengan doa terbaik,</span>
              <strong>Haikal Hilmi</strong>
            </div>
            <div className={styles.gift}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M5 12h22v6H5zm3 6v11h16V18M16 12v17M16 12c-9 0-10-9-5-9 4 0 5 9 5 9Zm0 0c9 0 10-9 5-9-4 0-5 9-5 9Z" />
              </svg>
              <div>
                <h2>Sedikit tanda kasih</h2>
                <p>
                  Ada titipan kecil yang menyertai doa ini. Semoga berkenan dan
                  ikut menambah hangat hari bahagia kalian.
                </p>
              </div>
            </div>
          </article>
        </details>
      </section>

      <footer className={styles.footer}>
        <p>
          Untuk cinta yang dirawat,
          <br />
          <i>setiap hari.</i>
        </p>
        <div>
          <span>Dibuat khusus untuk Nadia & Rajendra</span>
          <span>Dari Haikal Hilmi · 15.10.2026</span>
        </div>
      </footer>
    </main>
  );
}
