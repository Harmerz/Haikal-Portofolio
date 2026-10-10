export type BibEntry = { bib: string; angka: string };

export const STORAGE_KEY = "rsih-bib-entries-v1";

export function searchEntries(entries: BibEntry[], query: string): BibEntry[] {
  const bib = query.trim();
  if (!/^\d+$/.test(bib)) return [];
  const normalized = bib.replace(/^0+(?=\d)/, "");
  return entries.filter(
    (entry) => entry.bib.replace(/^0+(?=\d)/, "") === normalized
  );
}

export function buildEntriesCsv(entries: BibEntry[]): string {
  return (
    "\uFEFFNomor BIB,Nomor angka\r\n" +
    entries.map((entry) => `${entry.bib},${entry.angka}\r\n`).join("")
  );
}

export function readEntries(storage: Pick<Storage, "getItem">): BibEntry[] {
  const raw = storage.getItem(STORAGE_KEY);
  if (raw === null) return [];
  const entries: unknown = JSON.parse(raw);
  if (
    !Array.isArray(entries) ||
    !entries.every(
      (entry) =>
        entry !== null &&
        typeof entry === "object" &&
        typeof entry.bib === "string" &&
        /^\d{1,32}$/.test(entry.bib) &&
        typeof entry.angka === "string" &&
        /^\d{1,64}$/.test(entry.angka)
    )
  ) {
    throw new Error("Data BIB tersimpan tidak valid.");
  }
  return entries;
}

export function saveEntry(
  storage: Pick<Storage, "getItem" | "setItem">,
  entry: BibEntry
): BibEntry[] {
  if (!/^\d{1,32}$/.test(entry.bib) || !/^\d{1,64}$/.test(entry.angka)) {
    throw new Error("Isi nomor BIB dan nomor angka dengan digit 0–9.");
  }
  // Read the latest saved entries so another tab's additions are preserved.
  const entries = readEntries(storage);
  const next = [...entries.filter((item) => item.bib !== entry.bib), entry];
  storage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}
