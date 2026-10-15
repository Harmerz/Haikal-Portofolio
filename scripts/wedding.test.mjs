import assert from "node:assert/strict";

const base = process.argv[2] ?? "http://localhost:3100";
const response = await fetch(`${base}/untuk-nadia-rajendra`);
assert.equal(response.status, 200);
const html = await response.text();
assert.match(html, /<html lang="id"/);
assert.match(
  html,
  /<title>Untuk Nadia &amp; Rajendra — dari Haikal Hilmi<\/title>/
);
assert.match(html, /name="robots" content="noindex, nofollow"/);
assert.match(
  html,
  /rel="canonical" href="https:\/\/haikalhilmi.my.id\/untuk-nadia-rajendra"/
);
assert.match(html, /<details\b/);
assert.match(html, /Sedikit tanda kasih/);
assert.doesNotMatch(
  html,
  /No\. Rekening|ID Transaksi|Jago|Rp100\.000|Software Engineer/
);

const home = await fetch(base);
assert.equal(home.status, 200);
assert.match(await home.text(), /<html lang="en"/);
const rsih = await fetch(`${base}/rsih`);
assert.match(await rsih.text(), /<html lang="id"/);
console.log(
  "Wedding page, metadata, receipt privacy, and existing layouts passed."
);
