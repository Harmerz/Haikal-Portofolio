"use client";

import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  type ChartConfiguration,
} from "chart.js";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  dlabel,
  fmt,
  jlabel,
  joinedSortKey,
  pct,
  sum,
  type RiotData,
  type RiotLost,
  type RiotMonth,
  type RiotPerson,
} from "./riot";
import s from "./riot.module.css";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip
);
Chart.defaults.font.family = "Inter, system-ui, sans-serif";

/* ---------------------------------------------------------------- helpers */

type Css = (name: string) => string;

const NAV = [
  ["ringkasan", "Ringkasan"],
  ["tren", "Tren member"],
  ["orang", "Per orang"],
  ["nonmember", "Non-member"],
  ["lain", "Event lain"],
  ["proxy", "Diisikan orang lain"],
  ["cek", "Cek manual"],
] as const;

function baseOpts(css: Css) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: false as const,
    interaction: { mode: "index" as const, intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: css("--surface"),
        titleColor: css("--ink"),
        bodyColor: css("--ink"),
        borderColor: css("--axis"),
        borderWidth: 1,
        padding: 10,
        boxWidth: 10,
        boxHeight: 2,
        usePointStyle: false,
        titleFont: { family: "Inter", weight: 600 },
        bodyFont: { family: "Inter" },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { color: css("--axis") },
        ticks: { color: css("--muted"), font: { family: "Inter", size: 11 }, maxRotation: 0, autoSkipPadding: 10 },
      },
      y: {
        beginAtZero: true,
        grid: { color: css("--grid"), lineWidth: 1 },
        border: { display: false },
        ticks: { color: css("--muted"), font: { family: "Inter", size: 11 }, precision: 0 },
      },
    },
  };
}

function barDs(css: Css, label: string, data: number[], color: string, extra: object = {}) {
  return {
    type: "bar",
    label,
    data,
    backgroundColor: color,
    hoverBackgroundColor: color,
    maxBarThickness: 24,
    borderRadius: { topLeft: 4, topRight: 4 },
    borderSkipped: "bottom",
    borderColor: css("--surface"),
    borderWidth: { top: 0 },
    ...extra,
  };
}

function lineDs(css: Css, label: string, data: number[], color: string, extra: object = {}) {
  return {
    type: "line",
    label,
    data,
    borderColor: color,
    backgroundColor: color,
    borderWidth: 2,
    pointRadius: 0,
    pointHoverRadius: 5,
    pointHoverBorderColor: css("--surface"),
    pointHoverBorderWidth: 2,
    tension: 0,
    spanGaps: true,
    ...extra,
  };
}

type Tip = { dataIndex: number; raw?: unknown };

function stackedOpts(css: Css, callbacks: Record<string, (it: Tip[] & Tip) => unknown>) {
  const b = baseOpts(css);
  return {
    ...b,
    scales: { x: { ...b.scales.x, stacked: true }, y: { ...b.scales.y, stacked: true } },
    plugins: { ...b.plugins, tooltip: { ...b.plugins.tooltip, callbacks } },
  };
}

function withTip(css: Css, callbacks: Record<string, (it: Tip[] & Tip) => unknown>, extra: object = {}) {
  const b = baseOpts(css);
  return { ...b, ...extra, plugins: { ...b.plugins, tooltip: { ...b.plugins.tooltip, callbacks } } };
}

/** Draws a Chart.js chart into a canvas and rebuilds it when deps change. */
function ChartCanvas({ build, label }: { build: () => object; label: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, build() as unknown as ChartConfiguration);
    return () => chart.destroy();
  }, [build]);
  return <canvas ref={ref} aria-label={label} role="img" />;
}

/* ---------------------------------------------------------------- table */

type Col<T> = {
  key: string;
  label: string;
  num?: boolean;
  nosort?: boolean;
  val?: (r: T) => string | number | null;
  cell?: (r: T) => ReactNode;
};

function DataTable<T>({
  cols,
  rows,
  sort,
  dir: initialDir = -1,
  onClick,
  selected,
  onCount,
}: {
  cols: Col<T>[];
  rows: T[];
  sort?: string;
  dir?: number;
  onClick?: (r: T) => void;
  selected?: (r: T) => boolean;
  onCount?: (n: number) => void;
}) {
  const [sortKey, setSortKey] = useState<string | null>(sort ?? null);
  const [dir, setDir] = useState(initialDir);

  const sorted = useMemo(() => {
    if (!sortKey) return rows;
    const c = cols.find((x) => x.key === sortKey);
    if (!c) return rows;
    const get = (r: T) => (c.val ? c.val(r) : (r as Record<string, unknown>)[sortKey]) as string | number;
    return rows.slice().sort((a, b) => {
      const va = get(a);
      const vb = get(b);
      return (va > vb ? 1 : va < vb ? -1 : 0) * dir;
    });
  }, [rows, cols, sortKey, dir]);

  useEffect(() => onCount?.(sorted.length), [sorted.length, onCount]);

  function clickHead(c: Col<T>) {
    if (c.nosort) return;
    if (sortKey === c.key) setDir(-dir);
    else {
      setSortKey(c.key);
      setDir(c.num ? -1 : 1);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          {cols.map((c) => (
            <th
              key={c.key}
              className={[c.num ? s.num : "", c.nosort ? s.nosort : ""].join(" ").trim() || undefined}
              onClick={() => clickHead(c)}
              aria-sort={sortKey === c.key ? (dir < 0 ? "descending" : "ascending") : undefined}
            >
              {c.label}
              {sortKey === c.key ? (dir < 0 ? " ↓" : " ↑") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.slice(0, 5000).map((r, i) => (
          <tr
            key={i}
            className={
              onClick ? [s.click, selected?.(r) ? s.sel : ""].join(" ").trim() : undefined
            }
            onClick={onClick ? () => onClick(r) : undefined}
          >
            {cols.map((c) => {
              let content: ReactNode;
              if (c.cell) content = c.cell(r);
              else {
                const v = c.val ? c.val(r) : (r as Record<string, unknown>)[c.key];
                content =
                  v == null || v === "" ? "–" : c.num ? fmt(v as number) : String(v);
              }
              return (
                <td key={c.key} className={c.num ? s.num : undefined}>
                  {content}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------------------------------------------------------------- report */

function heatVar(r: number) {
  return r <= 0 ? "--q0" : r <= 0.34 ? "--q1" : r <= 0.67 ? "--q2" : r < 1 ? "--q3" : "--q4";
}

const truncate = (t: string, n: number) => (t.length > n ? t.slice(0, n - 1) + "…" : t);

export default function RiotReport({ data: D, onLogout }: { data: RiotData; onLogout: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [themeTick, setThemeTick] = useState(0);
  const [active, setActive] = useState("ringkasan");
  const [current, setCurrent] = useState<RiotPerson | null>(null);
  const [q, setQ] = useState("");
  const [fStatus, setFStatus] = useState("");
  const [fMin, setFMin] = useState(1);
  const [peopleCount, setPeopleCount] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  const W = useMemo(() => D.events.filter((e) => e.category === "WNR"), [D]);
  const O = useMemo(() => D.events.filter((e) => e.category !== "WNR"), [D]);
  const P = D.people;
  const M = D.monthly;

  // Re-read CSS colors on theme change.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const on = () => setThemeTick((t) => t + 1);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const css = useCallback<Css>(
    (name) => (rootRef.current ? getComputedStyle(rootRef.current).getPropertyValue(name).trim() : ""),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [themeTick]
  );

  // Nav highlight.
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* ------------ tiles + findings */
  const totAll = sum(W, (e) => e.total);
  const tiles: [string, string, string][] = [
    ["Jumlah WNR", fmt(W.length), `${dlabel(D.period[0])} s/d ${dlabel(D.period[1])}`],
    ["Rata-rata peserta per WNR", fmt(totAll / W.length, 1), `total ${fmt(totAll)} nama`],
    ["Rata-rata member per WNR", fmt(sum(W, (e) => e.member) / W.length, 1), "tanpa ** dan sudah di grup"],
    ["Rata-rata non-member per WNR", fmt(sum(W, (e) => e.nonmember) / W.length, 1), "dengan ** atau belum di grup"],
    ["Orang unik pernah ikut WNR", fmt(P.filter((p) => p.wnr).length), "setelah alias digabung"],
    ["Non-member yang jadi member", fmt(P.filter((p) => p.status === "Non-member → Member").length), "non-member lalu masuk grup"],
  ];

  const findings = useMemo(() => {
    const full = M.filter((m) => m.n_wnr >= 3);
    if (!full.length) return [];
    const peak = full.reduce((a, b) => (b.avg_member > a.avg_member ? b : a));
    const afterPeak = M.filter((m) => m.month > peak.month && m.n_wnr >= 1);
    const nmPeak = full.reduce((a, b) => (b.avg_nonmember > a.avg_nonmember ? b : a));
    const nmLow = full.reduce((a, b) => (b.avg_nonmember < a.avg_nonmember ? b : a));
    const lastFull = full.slice(-3);
    const first3 = full.slice(0, 3);
    const avgOf = (ms: RiotMonth[], k: "avg_member" | "avg_nonmember") => {
      const n = sum(ms, (m) => m.n_wnr);
      return n ? sum(ms, (m) => m[k] * m.n_wnr) / n : 0;
    };
    const nmTop = P.filter((p) => p.wnr_as_nonmember)
      .sort((a, b) => b.wnr_as_nonmember - a.wnr_as_nonmember)
      .slice(0, 3);
    const proxyN = P.filter((p) => p.proxy_share >= 50 && p.wnr >= 5).length;
    return [
      `Di antara bulan yang punya minimal 3 WNR, rata-rata member per WNR paling tinggi di ${peak.label} (${fmt(peak.avg_member, 1)} orang dari ${peak.n_wnr} WNR). Bulan sesudahnya: ${afterPeak.map((m) => `${m.label} ${fmt(m.avg_member, 1)}${m.n_wnr < 3 ? ` (${m.n_wnr} WNR)` : ""}`).join(", ") || "belum ada data"}.`,
      `Rata-rata member per WNR di 3 bulan pertama (${first3.map((m) => m.label).join(", ")}) ${fmt(avgOf(first3, "avg_member"), 1)} orang. Di 3 bulan terakhir yang punya minimal 3 WNR (${lastFull.map((m) => m.label).join(", ")}) ${fmt(avgOf(lastFull, "avg_member"), 1)} orang.`,
      `Non-member per WNR paling banyak di ${nmPeak.label} (${fmt(nmPeak.avg_nonmember, 1)}) dan paling sedikit di ${nmLow.label} (${fmt(nmLow.avg_nonmember, 1)}). Di 3 bulan terakhir rata-ratanya ${fmt(avgOf(lastFull, "avg_nonmember"), 1)}.`,
      `Non-member paling rajin: ${nmTop.map((p) => `${p.name} (${p.wnr_as_nonmember}x sebagai non-member, status sekarang ${p.status})`).join("; ")}.`,
      `${fmt(proxyN)} orang yang ikut minimal 5 WNR tercatat paling tidak separuh pendaftarannya diisikan dari akun WA orang lain. Detail ada di tab Diisikan orang lain.`,
      `Bulan dengan WNR sedikit (Feb dan Mar 2026 saat Ramadan, Jun 2025 dan Nov 2026 di ujung data) membuat rata-rata bulanan kurang stabil. Grafik per WNR lebih bisa dipegang untuk bulan-bulan itu.`,
    ];
  }, [M, P]);

  const fewNote = M.filter((m) => m.n_wnr < 2)
    .map((m) => `${m.label} (${m.n_wnr} WNR)`)
    .join(", ");

  /* ------------ chart builders */
  const buildEvent = useCallback(() => {
    const roll = W.map((_, i) => {
      const sl = W.slice(Math.max(0, i - 3), i + 1);
      return +(sum(sl, (x) => x.member) / sl.length).toFixed(1);
    });
    return {
      data: {
        labels: W.map((e) => dlabel(e.date)),
        datasets: [
          lineDs(css, "Rata-rata member 4 WNR", roll, css("--ink-2"), { order: 0 }),
          barDs(css, "Member", W.map((e) => e.member), css("--s1"), { stack: "a", order: 1, borderRadius: 0 }),
          barDs(css, "Non-member", W.map((e) => e.nonmember), css("--s2"), { stack: "a", order: 1, borderWidth: { bottom: 2 } }),
        ],
      },
      options: stackedOpts(css, {
        title: (it) => `${dlabel(W[it[0].dataIndex].date)} · ${W[it[0].dataIndex].title}`,
        afterBody: (it) => {
          const e = W[it[0].dataIndex];
          return [`Total ${e.total} · orang baru ${e.new}`];
        },
      }),
    };
  }, [W, css]);

  const buildMonth = useCallback(() => {
    const pt = { pointRadius: 3, pointBorderColor: css("--surface"), pointBorderWidth: 2 };
    return {
      data: {
        labels: M.map((m) => m.label),
        datasets: [
          lineDs(css, "Member", M.map((m) => m.avg_member), css("--s1"), pt),
          lineDs(css, "Non-member", M.map((m) => m.avg_nonmember), css("--s2"), pt),
        ],
      },
      options: withTip(css, { afterTitle: (it) => `${M[it[0].dataIndex].n_wnr} WNR di bulan ini` }),
    };
  }, [M, css]);

  const buildUniq = useCallback(
    () => ({
      data: {
        labels: M.map((m) => m.label),
        datasets: [barDs(css, "Member unik", M.map((m) => m.uniq_member), css("--s1"))],
      },
      options: withTip(css, { afterTitle: (it) => `${M[it[0].dataIndex].n_wnr} WNR di bulan ini` }),
    }),
    [M, css]
  );

  const buildLast = useCallback(() => {
    const isMem = (p: RiotPerson) =>
      p.wnr &&
      (p.status === "Member" || p.status === "Non-member → Member" || p.status.startsWith("Campur"));
    const lastCnt = D.months.map((mo) => P.filter((p) => isMem(p) && p.last_wnr.slice(0, 7) === mo).length);
    return {
      data: { labels: D.month_labels, datasets: [barDs(css, "Member", lastCnt, css("--s1"))] },
      options: withTip(css, { label: (it) => ` ${it.raw} member terakhir ikut WNR di bulan ini` }),
    };
  }, [D, P, css]);

  const topNM = useMemo(
    () =>
      P.filter((p) => p.wnr_as_nonmember)
        .sort((a, b) => b.wnr_as_nonmember - a.wnr_as_nonmember || b.wnr - a.wnr)
        .slice(0, 20),
    [P]
  );

  const buildNM = useCallback(
    () => ({
      data: {
        labels: topNM.map((p) => p.name),
        datasets: [
          barDs(css, "WNR sebagai non-member", topNM.map((p) => p.wnr_as_nonmember), css("--s2"), {
            borderRadius: { topRight: 4, bottomRight: 4 },
            borderSkipped: "left",
          }),
        ],
      },
      options: withTip(
        css,
        { afterLabel: (it) => `Status: ${topNM[it.dataIndex].status} · total WNR ${topNM[it.dataIndex].wnr}` },
        {
          indexAxis: "y",
          interaction: { mode: "nearest", intersect: true, axis: "y" },
          scales: {
            x: { beginAtZero: true, grid: { color: css("--grid") }, border: { display: false }, ticks: { color: css("--muted"), precision: 0 } },
            y: { grid: { display: false }, ticks: { color: css("--ink-2"), font: { family: "Inter", size: 12 }, autoSkip: false } },
          },
        }
      ),
    }),
    [topNM, css]
  );

  const buildDetail = useCallback(() => {
    if (!current) return {};
    const miss = current.monthly.map((n, i) => Math.max(0, D.wnr_per_month[i] - n));
    return {
      data: {
        labels: D.month_labels,
        datasets: [
          barDs(css, "Ikut", current.monthly, css("--s1"), { stack: "a", borderRadius: 0 }),
          barDs(css, "Tidak ikut", miss, css("--track"), { stack: "a", borderWidth: { bottom: 2 } }),
        ],
      },
      options: stackedOpts(css, {
        afterTitle: (it) => `${D.wnr_per_month[it[0].dataIndex]} WNR di bulan ini`,
      }),
    };
  }, [current, D, css]);

  /* ------------ people */
  const peopleRows = useMemo(() => {
    const term = q.trim().toLowerCase();
    return P.filter(
      (p) =>
        p.wnr >= fMin &&
        (!fStatus || p.status.startsWith(fStatus)) &&
        (!term || p.name.toLowerCase().includes(term) || (p.variants || "").toLowerCase().includes(term))
    );
  }, [P, q, fStatus, fMin]);

  const showDetail = useCallback((p: RiotPerson) => {
    setCurrent(p);
    requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, []);

  const peopleCols = useMemo<Col<RiotPerson>[]>(
    () => [
      { key: "name", label: "Nama" },
      { key: "status", label: "Status", cell: (r) => <span className={s.badge}>{r.status}</span> },
      { key: "wnr", label: "WNR", num: true },
      {
        key: "trend",
        label: "Tren bulanan",
        nosort: true,
        cell: (r) => (
          <div className={s.heat}>
            {r.monthly.map((n, i) => {
              const held = D.wnr_per_month[i];
              return (
                <i
                  key={i}
                  className={held ? undefined : s.na}
                  style={held ? { background: `var(${heatVar(n / held)})` } : undefined}
                  title={`${D.month_labels[i]}: ${n} dari ${held} WNR`}
                />
              );
            })}
          </div>
        ),
      },
      { key: "rate_since_first", label: "% ikut", num: true, cell: (r) => pct(r.rate_since_first) },
      { key: "last_wnr", label: "Terakhir ikut", cell: (r) => (r.last_wnr ? dlabel(r.last_wnr) : "–") },
      { key: "wnr_after_last", label: "Terlewat", num: true },
      { key: "joined_group", label: "Masuk grup", val: joinedSortKey, cell: (r) => jlabel(r.joined_group) || "–" },
    ],
    [D]
  );

  const nmCols = useMemo<Col<RiotPerson>[]>(
    () => [
      { key: "name", label: "Nama" },
      { key: "wnr_as_nonmember", label: "WNR dengan **", num: true },
      { key: "wnr", label: "Total WNR", num: true },
      { key: "status", label: "Status sekarang" },
      { key: "status_since", label: "Berubah sejak", cell: (r) => (r.status_since ? dlabel(r.status_since) : "–") },
      { key: "last_wnr", label: "Terakhir ikut", cell: (r) => (r.last_wnr ? dlabel(r.last_wnr) : "–") },
      { key: "rate_since_first", label: "% ikut sejak pertama", num: true, cell: (r) => pct(r.rate_since_first) },
      { key: "joined_group", label: "Masuk grup", val: joinedSortKey, cell: (r) => jlabel(r.joined_group) || "–" },
    ],
    []
  );

  const monthCols = useMemo<Col<RiotMonth>[]>(
    () => [
      { key: "label", label: "Bulan", val: (r) => r.month, cell: (r) => r.label },
      { key: "n_wnr", label: "Jumlah WNR", num: true },
      { key: "avg_member", label: "Rata-rata member", num: true, cell: (r) => fmt(r.avg_member, 1) },
      { key: "avg_nonmember", label: "Rata-rata non-member", num: true, cell: (r) => fmt(r.avg_nonmember, 1) },
      { key: "uniq_member", label: "Member unik", num: true },
      { key: "uniq_nonmember", label: "Non-member unik", num: true },
    ],
    []
  );

  const nmRows = useMemo(() => P.filter((p) => p.wnr_as_nonmember), [P]);
  const otherPRows = useMemo(() => P.filter((p) => p.other_total), [P]);
  const proxyRows = useMemo(() => P.filter((p) => p.proxy_filled >= 2), [P]);

  const isSel = useCallback((r: RiotPerson) => current?.name === r.name, [current]);
  const onPeopleCount = useCallback((n: number) => setPeopleCount(n), []);

  /* ------------ detail facts */
  const detailFacts: [string, string][] = current
    ? [
        ["Status", current.status + (current.status_since ? ` (sejak ${dlabel(current.status_since)})` : "")],
        ["Total WNR", `${current.wnr}x (${current.wnr_as_member} sebagai member, ${current.wnr_as_nonmember} sebagai non-member)`],
        ["% ikut sejak WNR pertama", pct(current.rate_since_first)],
        ["WNR pertama / terakhir", current.first_wnr ? `${dlabel(current.first_wnr)} / ${dlabel(current.last_wnr)}` : "–"],
        ["WNR terlewat sejak terakhir ikut", current.wnr_after_last == null ? "–" : String(current.wnr_after_last)],
        ...(current.joined_group
          ? ([[
              "Masuk grup WA (jadi member)",
              jlabel(current.joined_group) +
                (current.joined_basis.includes("dicocokkan") ? " (dicocokkan lewat akun WA)" : ""),
            ]] as [string, string][])
          : []),
        ...(current.left_group ? ([["Keluar grup WA", dlabel(current.left_group)]] as [string, string][]) : []),
        [
          "Status diambil dari",
          current.status_basis === "isian manual"
            ? "isian manual"
            : current.status_basis === "tanda ** dan grup WA"
              ? "tanda ** dan tanggal masuk/keluar grup WA"
              : "tanda ** di daftar",
        ],
        ...(current.stars_count ? ([["Ditulis dengan ** di WNR", `${current.stars_count}x`]] as [string, string][]) : []),
        ["Event lain", `${current.other_klub} klub, ${current.other_undangan} undangan`],
        [
          "Diisikan orang lain",
          `${current.proxy_filled}x dari ${current.self_filled + current.proxy_filled + current.fill_unknown} (${current.proxy_share}%)`,
        ],
        ["Paling sering diisikan oleh", current.proxy_top || "–"],
      ]
    : [];

  const nM = D.months.length;

  return (
    <div ref={rootRef}>
      <header className={s.top}>
        <div className={`${s.wrap} ${s.topRow}`}>
          <div>
            <h1>Kehadiran Wednesday Night Run RIOT Jogja</h1>
            <p className={s.sub} style={{ marginTop: 8 }}>
              Data dari export chat grup RIOT JOGJA, {dlabel(D.period[0])} sampai {dlabel(D.period[1])}. &quot;Ikut&quot;
              artinya nama tercantum di versi terakhir daftar WNR.
            </p>
          </div>
          <button type="button" className={s.btn} onClick={onLogout}>
            Keluar
          </button>
        </div>
      </header>

      <nav className={s.tabs} aria-label="Bagian laporan">
        <div className={s.wrap}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? s.on : undefined}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main className={s.wrap}>
        <section id="ringkasan" className={s.section}>
          <h2>Ringkasan</h2>
          <div className={s.tiles}>
            {tiles.map(([l, v, h]) => (
              <div key={l} className={s.tile}>
                <div className={s.lab}>{l}</div>
                <div className={s.val}>{v}</div>
                <div className={s.hint}>{h}</div>
              </div>
            ))}
          </div>
          <div className={s.card}>
            <h3>Temuan utama</h3>
            <ul className={s.findings}>
              {findings.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="tren" className={s.section}>
          <h2>Tren member dan non-member</h2>
          <p className={s.lead}>
            Jumlah nama di daftar final tiap WNR, dipisah member dan non-member. Nama dengan ** dihitung non-member. Nama
            tanpa ** dihitung member, kecuali chat menunjukkan dia belum masuk grup WA RIOT (atau sudah keluar) pada
            tanggal itu. Garis menunjukkan rata-rata member dari 4 WNR terakhir supaya naik turunnya lebih mudah dibaca.
          </p>
          <div className={s.card}>
            <h3>Peserta per WNR</h3>
            <div className={s.legend}>
              <span><i className={s.sw} style={{ background: "var(--s1)" }} />Member</span>
              <span><i className={s.sw} style={{ background: "var(--s2)" }} />Non-member</span>
              <span><i className={s.ln} style={{ background: "var(--ink-2)" }} />Rata-rata member 4 WNR terakhir</span>
            </div>
            <div className={s.chartBox}>
              <ChartCanvas build={buildEvent} label="Grafik peserta per WNR" />
            </div>
          </div>
          <div className={s.grid2}>
            <div className={s.card}>
              <h3>Rata-rata per WNR tiap bulan</h3>
              <div className={s.legend}>
                <span><i className={s.ln} style={{ background: "var(--s1)" }} />Member</span>
                <span><i className={s.ln} style={{ background: "var(--s2)" }} />Non-member</span>
              </div>
              <div className={`${s.chartBox} ${s.sm}`}>
                <ChartCanvas build={buildMonth} label="Rata-rata member dan non-member per WNR per bulan" />
              </div>
              {fewNote && <p className={s.note}>Bulan dengan kurang dari 2 WNR: {fewNote}.</p>}
            </div>
            <div className={s.card}>
              <h3>Member unik yang ikut WNR tiap bulan</h3>
              <div className={`${s.chartBox} ${s.sm}`}>
                <ChartCanvas build={buildUniq} label="Member unik per bulan" />
              </div>
              <p className={s.note}>
                Satu orang dihitung sekali per bulan, berapa kali pun ikut. Angka ikut dipengaruhi jumlah WNR di bulan itu.
              </p>
            </div>
          </div>
          <div className={s.card}>
            <h3>Member menurut bulan terakhir ikut WNR</h3>
            <div className={`${s.chartBox} ${s.sm}`}>
              <ChartCanvas build={buildLast} label="Member menurut bulan terakhir ikut WNR" />
            </div>
            <p className={s.note}>
              Orang berstatus member di daftar terakhirnya, dikelompokkan menurut bulan WNR terakhir yang mereka ikuti. Bar
              di bulan-bulan awal menunjukkan member yang sudah lama tidak tercatat ikut WNR.
            </p>
          </div>
          <div className={s.card}>
            <h3>Tabel bulanan</h3>
            <div className={s.tblWrap}>
              <DataTable cols={monthCols} rows={M} sort="label" dir={1} />
            </div>
          </div>
        </section>

        <section id="orang" className={s.section}>
          <h2>Per orang</h2>
          <p className={s.lead}>
            Klik nama untuk melihat grafik bulanan orang itu. Kotak kecil di kolom tren menunjukkan seberapa sering dia ikut
            WNR di tiap bulan. &quot;% ikut&quot; dihitung dari WNR pertama orang itu. &quot;Terlewat&quot; adalah jumlah
            WNR sesudah terakhir dia ikut. &quot;Masuk grup&quot; artinya jadi member, diambil dari pesan sistem WA. Member
            lama yang sudah ada di grup sejak awal data ditulis &quot;sebelum 25 Jun 2025&quot;.
          </p>
          {current && (
            <div ref={detailRef} className={s.card} style={{ scrollMarginTop: 56 }}>
              <button type="button" className={`${s.btn} ${s.close}`} onClick={() => setCurrent(null)}>
                Tutup
              </button>
              <h3>{current.name}</h3>
              <p className={s.note}>Ditulis di daftar sebagai: {current.variants || "–"}</p>
              <div className={s.dl}>
                {detailFacts.map(([k, v]) => (
                  <div key={k}>
                    <b>{k}</b>
                    {v}
                  </div>
                ))}
              </div>
              <div className={s.legend}>
                <span><i className={s.sw} style={{ background: "var(--s1)" }} />Ikut</span>
                <span><i className={s.sw} style={{ background: "var(--track)" }} />Tidak ikut</span>
              </div>
              <div className={`${s.chartBox} ${s.sm}`}>
                <ChartCanvas build={buildDetail} label={`WNR per bulan ${current.name}`} />
              </div>
              <p className={s.dates}>
                {current.wnr_dates.length
                  ? "Tanggal ikut: " + current.wnr_dates.map(dlabel).join(", ")
                  : "Belum pernah ikut WNR."}
              </p>
            </div>
          )}
          <div className={s.controls}>
            <input
              type="search"
              placeholder="Cari nama atau variasi nama"
              aria-label="Cari nama"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <select aria-label="Filter status" value={fStatus} onChange={(e) => setFStatus(e.target.value)}>
              <option value="">Semua status</option>
              <option>Member</option>
              <option>Non-member</option>
              <option>Non-member → Member</option>
              <option>Member → Non-member</option>
              <option value="Campur">Campur</option>
            </select>
            <select aria-label="Minimal ikut WNR" value={fMin} onChange={(e) => setFMin(+e.target.value)}>
              <option value={1}>Ikut WNR minimal 1x</option>
              <option value={5}>Minimal 5x</option>
              <option value={10}>Minimal 10x</option>
              <option value={20}>Minimal 20x</option>
            </select>
          </div>
          <div className={s.heatLegend}>
            <span>
              Tren bulanan (kiri ke kanan: {D.month_labels[0]} sampai {D.month_labels[nM - 1]}):
            </span>
            {(
              [
                ["--q0", "tidak ikut"],
                ["--q1", "≤ 1/3 WNR"],
                ["--q2", "≤ 2/3"],
                ["--q3", "> 2/3"],
                ["--q4", "semua WNR"],
              ] as const
            ).map(([v, l]) => (
              <span key={v}>
                <i style={{ background: `var(${v})` }} />
                {l}
              </span>
            ))}
          </div>
          <div className={s.tblWrap}>
            <DataTable
              cols={peopleCols}
              rows={peopleRows}
              sort="wnr"
              dir={-1}
              onClick={showDetail}
              selected={isSel}
              onCount={onPeopleCount}
            />
          </div>
          <p className={s.count}>{fmt(peopleCount)} orang ditampilkan</p>
        </section>

        <section id="nonmember" className={s.section}>
          <h2>Non-member paling rajin</h2>
          <p className={s.lead}>
            Diurutkan menurut berapa kali orang ikut WNR saat belum jadi member. Kolom status dan masuk grup menunjukkan
            apakah dia akhirnya masuk grup RIOT.
          </p>
          <div className={s.card}>
            <h3>20 non-member teratas</h3>
            <div className={`${s.chartBox} ${s.tall}`}>
              <ChartCanvas build={buildNM} label="20 non-member teratas" />
            </div>
          </div>
          <div className={s.tblWrap}>
            <DataTable cols={nmCols} rows={nmRows} sort="wnr_as_nonmember" dir={-1} onClick={showDetail} />
          </div>
        </section>

        <section id="lain" className={s.section}>
          <h2>Event lain</h2>
          <p className={s.lead}>
            Event klub RIOT dan event undangan atau kolaborasi. Race eksternal, PO merch, duplikat, dan event yang dipindah
            jadwal tidak dihitung.
          </p>
          <div className={s.grid2}>
            <div className={s.card}>
              <h3>Daftar event</h3>
              <div className={s.tblWrap}>
                <DataTable
                  cols={[
                    { key: "date", label: "Tanggal", cell: (r) => dlabel(r.date) },
                    { key: "title", label: "Event", cell: (r) => truncate(r.title, 48) },
                    { key: "category", label: "Kategori" },
                    { key: "total", label: "Ikut", num: true },
                    { key: "nonmember", label: "Non-member", num: true },
                  ]}
                  rows={O}
                  sort="date"
                  dir={1}
                />
              </div>
            </div>
            <div className={s.card}>
              <h3>Paling sering ikut event lain</h3>
              <div className={s.tblWrap}>
                <DataTable
                  cols={[
                    { key: "name", label: "Nama" },
                    { key: "other_klub", label: "Klub", num: true },
                    { key: "other_undangan", label: "Undangan", num: true },
                    { key: "other_total", label: "Total", num: true },
                    { key: "wnr", label: "WNR", num: true },
                  ]}
                  rows={otherPRows}
                  sort="other_total"
                  dir={-1}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="proxy" className={s.section}>
          <h2>Diisikan orang lain</h2>
          <p className={s.lead}>
            Nama yang biasanya ditambahkan ke daftar dari akun WA orang lain. Akun dikenali dari nama yang paling sering
            didaftarkan akun itu dan nama profil WA di screenshot anggota grup.
          </p>
          <div className={s.tblWrap}>
            <DataTable
              cols={[
                { key: "name", label: "Nama" },
                { key: "proxy_share", label: "% diisikan orang lain", num: true, cell: (r) => `${r.proxy_share}%` },
                { key: "proxy_filled", label: "Diisikan orang lain", num: true },
                { key: "self_filled", label: "Diisi sendiri", num: true },
                { key: "fill_unknown", label: "Tidak diketahui", num: true },
                { key: "proxy_top", label: "Paling sering diisikan oleh" },
              ]}
              rows={proxyRows}
              sort="proxy_share"
              dir={-1}
            />
          </div>
        </section>

        <section id="cek" className={s.section}>
          <h2>Cek manual</h2>
          <p className={s.lead}>
            Nama yang sempat ada di daftar lalu hilang di versi terakhir. Penyebabnya bisa batal ikut, bisa juga tertimpa
            saat dua orang copy-paste daftar bersamaan. Nama ini tidak dihitung ikut.
          </p>
          <div className={s.tblWrap}>
            <DataTable<RiotLost>
              cols={[
                { key: "date", label: "Tanggal", cell: (r) => dlabel(r.date) },
                { key: "title", label: "Event", cell: (r) => truncate(r.title, 40) },
                { key: "person", label: "Nama" },
                { key: "versions_present", label: "Ada di versi", num: true, cell: (r) => `${r.versions_present} dari ${r.n_versions}` },
                { key: "last_seen", label: "Terakhir terlihat" },
                { key: "added_by", label: "Ditambahkan oleh" },
              ]}
              rows={D.lost}
              sort="date"
              dir={1}
            />
          </div>
          <h3 style={{ marginTop: 22 }}>Waiting list (tidak dihitung ikut)</h3>
          <div className={s.tblWrap} style={{ marginTop: 8 }}>
            <DataTable
              cols={[
                { key: "date", label: "Tanggal", cell: (r) => dlabel(r.date) },
                { key: "title", label: "Event" },
                { key: "person", label: "Nama" },
              ]}
              rows={D.waiting}
              sort="date"
              dir={1}
            />
          </div>
        </section>

        <footer className={s.footer}>
          <p>
            Metode: daftar final = versi terakhir daftar tiap event. Tanda ** = non-member. Tanpa ** = member, kecuali chat
            menunjukkan orang itu belum masuk grup WA RIOT atau sudah keluar pada tanggal event. Data masuk/keluar grup hanya
            tersedia sejak 25 Jun 2025. Variasi nama digabung sesuai file review alias. Waiting list tidak dihitung. Dibuat{" "}
            {dlabel(D.generated)}.
          </p>
        </footer>
      </main>
    </div>
  );
}
