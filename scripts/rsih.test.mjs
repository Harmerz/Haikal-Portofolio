import assert from "node:assert/strict";
import {
  readEntries,
  saveEntry,
  searchEntries,
  buildEntriesCsv,
  STORAGE_KEY,
} from "../src/app/rsih/storage.ts";

const data = new Map();
const storage = {
  getItem: (key) => data.get(key) ?? null,
  setItem: (key, value) => data.set(key, value),
};

assert.deepEqual(readEntries(storage), []);
saveEntry(storage, { bib: "0012", angka: "007" });
assert.deepEqual(readEntries(storage), [{ bib: "0012", angka: "007" }]);
saveEntry(storage, { bib: "12", angka: "25" });
saveEntry(storage, { bib: "0012", angka: "0" });
assert.deepEqual(readEntries(storage), [
  { bib: "12", angka: "25" },
  { bib: "0012", angka: "0" },
]);
const entries = [
  { bib: "001", angka: "007" },
  { bib: "1", angka: "25" },
  { bib: "0500", angka: "0" },
  { bib: "000", angka: "9" },
];
for (const query of ["1", "01", "001", " 1 "]) {
  assert.deepEqual(searchEntries(entries, query), entries.slice(0, 2));
}
assert.deepEqual(searchEntries(entries, "500"), [entries[2]]);
assert.deepEqual(searchEntries(entries, "0"), [entries[3]]);
for (const query of ["", " ", "2", "1e0", "1.0", "-1"]) {
  assert.deepEqual(searchEntries(entries, query), []);
}
assert.equal(
  buildEntriesCsv(entries),
  "\uFEFFNomor BIB,Nomor angka\r\n001,007\r\n1,25\r\n0500,0\r\n000,9\r\n"
);
assert.equal(buildEntriesCsv([]), "\uFEFFNomor BIB,Nomor angka\r\n");
assert.throws(() => saveEntry(storage, { bib: "abc", angka: "1" }));
assert.throws(() => saveEntry(storage, { bib: "1", angka: "" }));
const before = storage.getItem(STORAGE_KEY);
assert.throws(() =>
  saveEntry(
    {
      getItem: storage.getItem,
      setItem: () => {
        throw new Error("Quota exceeded");
      },
    },
    { bib: "99", angka: "1" }
  )
);
assert.equal(storage.getItem(STORAGE_KEY), before);
for (const corrupt of ["{", "null", "{}", '[{"bib":"1","angka":2}]']) {
  storage.setItem(STORAGE_KEY, corrupt);
  assert.throws(() => readEntries(storage));
  assert.throws(() => saveEntry(storage, { bib: "1", angka: "2" }));
  assert.equal(storage.getItem(STORAGE_KEY), corrupt);
}
console.log("RSIH storage checks passed.");
