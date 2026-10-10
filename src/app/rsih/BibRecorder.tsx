"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { readEntries, saveEntry, STORAGE_KEY, type BibEntry } from "./storage";

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-lg text-slate-950 placeholder:text-slate-500 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20 disabled:bg-slate-100";

export default function BibRecorder() {
  const [entries, setEntries] = useState<BibEntry[]>([]);
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [bib, setBib] = useState("");
  const [angka, setAngka] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const bibInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function load() {
      try {
        setEntries(readEntries(window.localStorage));
        setError("");
        setReady(true);
      } catch {
        setReady(false);
        setError(
          "Data tersimpan belum bisa dibaca. Pastikan penyimpanan browser aktif, lalu muat ulang. Data lama tidak ditimpa."
        );
      }
    }
    load();
    function sync(event: StorageEvent) {
      if (event.key === STORAGE_KEY || event.key === null) load();
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const result = entries.find((entry) => entry.bib === query.trim());
  const isUpdate = entries.some((entry) => entry.bib === bib.trim());

  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready) return;
    const entry = { bib: bib.trim(), angka: angka.trim() };
    try {
      setEntries(saveEntry(window.localStorage, entry));
      setError("");
      setMessage(
        `BIB ${entry.bib} berhasil disimpan dengan angka ${entry.angka}.`
      );
      setBib("");
      setAngka("");
      bibInput.current?.focus();
    } catch {
      setMessage("");
      setError(
        "Data belum tersimpan. Periksa ruang penyimpanan dan izin browser, lalu coba simpan lagi."
      );
    }
  }

  return (
    <main className="min-h-svh bg-slate-50 px-4 py-8 text-slate-900 selection:bg-teal-100 selection:text-teal-950 sm:py-12">
      <div className="mx-auto max-w-lg">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">RSIH</h1>
            <p className="mt-1 text-sm text-slate-600">
              Catatan BIB & nomor angka
            </p>
          </div>
          <span className="text-sm text-slate-600" aria-live="polite">
            {ready ? `${entries.length} BIB tersimpan` : "Memuat data…"}
          </span>
        </header>

        <section
          aria-labelledby="search-title"
          className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
        >
          <h2 id="search-title" className="text-xl font-semibold">
            Cari nomor BIB
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Masukkan nomor BIB untuk melihat angkanya.
          </p>
          <label
            htmlFor="bib-search"
            className="mt-5 block text-sm font-medium"
          >
            Nomor BIB
          </label>
          <input
            id="bib-search"
            type="search"
            inputMode="numeric"
            autoComplete="off"
            maxLength={32}
            placeholder="Contoh: 0012"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className={inputClass}
            aria-describedby="search-result"
          />
          <div
            id="search-result"
            role="status"
            className="mt-5 min-h-28 border-t border-slate-200 pt-5"
          >
            {!ready ? (
              <p className="text-sm text-slate-600">
                {error ? "Pencarian belum tersedia." : "Memuat data tersimpan…"}
              </p>
            ) : !query.trim() ? (
              <p className="text-sm leading-6 text-slate-600">
                {entries.length
                  ? "Ketik nomor BIB lengkap di atas. Hasil langsung muncul di sini."
                  : "Belum ada data. Tambahkan BIB lewat form di bawah."}
              </p>
            ) : result ? (
              <div>
                <p className="text-sm break-all text-slate-600">
                  Nomor angka untuk BIB{" "}
                  <span className="font-semibold text-slate-900">
                    {result.bib}
                  </span>
                </p>
                <p className="mt-2 text-4xl font-bold break-all text-teal-800 tabular-nums">
                  {result.angka}
                </p>
              </div>
            ) : (
              <p className="text-sm leading-6 break-all text-slate-600">
                BIB{" "}
                <span className="font-semibold text-slate-900">
                  {query.trim()}
                </span>{" "}
                belum ditemukan. Tambahkan melalui form di bawah.
              </p>
            )}
          </div>
        </section>

        <section
          aria-labelledby="input-title"
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
        >
          <h2 id="input-title" className="text-xl font-semibold">
            Input data
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Pasangkan nomor BIB dengan nomor angka.
          </p>
          <form onSubmit={handleSave} className="mt-5">
            <label htmlFor="bib-input" className="block text-sm font-medium">
              Nomor BIB
            </label>
            <input
              ref={bibInput}
              id="bib-input"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              pattern="[0-9]+"
              maxLength={32}
              required
              disabled={!ready}
              placeholder="Contoh: 0012"
              value={bib}
              onChange={(event) => {
                setBib(event.target.value);
                setMessage("");
              }}
              className={inputClass}
            />
            <label
              htmlFor="angka-input"
              className="mt-5 block text-sm font-medium"
            >
              Nomor angka
            </label>
            <input
              id="angka-input"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              pattern="[0-9]+"
              maxLength={64}
              required
              disabled={!ready}
              placeholder="Contoh: 25"
              value={angka}
              onChange={(event) => {
                setAngka(event.target.value);
                setMessage("");
              }}
              className={inputClass}
            />
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {isUpdate
                ? "BIB ini sudah ada. Menyimpan akan memperbarui nomor angkanya."
                : "Nol di depan tetap disimpan. BIB 0012 berbeda dengan 12."}
            </p>
            <button
              type="submit"
              disabled={!ready}
              className="mt-5 min-h-12 w-full rounded-xl bg-teal-800 px-4 py-3 font-semibold text-white transition-colors hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-800 active:bg-teal-950 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
            >
              {isUpdate ? "Perbarui data" : "Simpan data"}
            </button>
            <p
              role="status"
              className="mt-3 text-sm leading-6 break-words text-teal-800"
            >
              {message}
            </p>
          </form>
        </section>

        {error && (
          <p role="alert" className="mt-4 text-sm leading-6 text-red-800">
            {error}
          </p>
        )}
        <p className="mt-6 text-center text-xs leading-5 text-slate-600">
          Data tetap tersimpan setelah refresh di browser ini.
          <br />
          Menghapus data browser akan menghapus catatan BIB.
        </p>
      </div>
    </main>
  );
}
