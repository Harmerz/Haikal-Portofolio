export type RiotEvent = {
  id: string;
  date: string;
  month: string;
  title: string;
  category: string;
  total: number;
  member: number;
  nonmember: number;
  new: number;
};

export type RiotMonth = {
  month: string;
  label: string;
  n_wnr: number;
  avg_member: number;
  avg_nonmember: number;
  avg_total: number;
  uniq_member: number;
  uniq_nonmember: number;
};

export type RiotPerson = {
  name: string;
  status: string;
  status_since: string;
  wnr: number;
  wnr_as_member: number;
  wnr_as_nonmember: number;
  first_wnr: string;
  last_wnr: string;
  rate_since_first: number | null;
  wnr_after_last: number | null;
  monthly: number[];
  wnr_dates: string[];
  other_total: number;
  other_klub: number;
  other_undangan: number;
  self_filled: number;
  proxy_filled: number;
  fill_unknown: number;
  proxy_share: number;
  proxy_top: string;
  variants: string;
  joined_group: string;
  joined_basis: string;
  left_group: string;
  status_basis: string;
  stars_count?: number;
};

export type RiotLost = {
  date: string;
  title: string;
  person: string;
  versions_present: number;
  n_versions: number;
  last_seen: string;
  added_by: string;
};

export type RiotWaiting = { date: string; title: string; person: string };

export type RiotData = {
  generated: string;
  period: [string, string];
  months: string[];
  month_labels: string[];
  wnr_per_month: number[];
  events: RiotEvent[];
  monthly: RiotMonth[];
  people: RiotPerson[];
  lost: RiotLost[];
  waiting: RiotWaiting[];
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

export const fmt = (n: number | null | undefined, d = 0) =>
  n == null
    ? "–"
    : Number(n).toLocaleString("id-ID", { minimumFractionDigits: d, maximumFractionDigits: d });

export const dlabel = (s: string) => {
  const [y, m, d] = s.split("-");
  return `${+d} ${MONTHS[+m - 1]} ${y.slice(2)}`;
};

export const jlabel = (s: string) => (!s ? "" : /^\d/.test(s) ? dlabel(s) : s);

export const sum = <T,>(a: T[], f: (x: T) => number) => a.reduce((s, x) => s + f(x), 0);

export const pct = (v: number | null) => (v == null ? "–" : `${v}%`);

export const joinedSortKey = (p: RiotPerson) =>
  p.joined_group.startsWith("sebelum") ? "0000" : p.joined_group || "9999";
