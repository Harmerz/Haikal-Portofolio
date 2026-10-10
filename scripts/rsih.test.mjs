import assert from "node:assert/strict";
import {
  readEntries,
  saveEntry,
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
