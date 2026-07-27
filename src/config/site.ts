export type PortfolioMode = "general" | "upwork";

export const TALLY_URL = "https://tally.so/r/81VNPz";
export const LINKEDIN_URL = "https://www.linkedin.com/in/haikalhilmi/";
export const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01ff216c8a0f8a68a1";

export const CTA_URL = TALLY_URL;

export function getCtaUrl(mode: PortfolioMode) {
  return mode === "upwork" ? UPWORK_URL : TALLY_URL;
}

export const UPWORK_PORTFOLIO_URLS = {
  general: "https://upwork.haikalhilmi.my.id",
  software: "https://upwork-se.haikalhilmi.my.id",
  data: "https://upwork-de.haikalhilmi.my.id",
} as const;
