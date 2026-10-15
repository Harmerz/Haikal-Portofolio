import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type SubdomainConfig = {
  route: string;
  mode: "general" | "upwork";
  site?: "general" | "hustler";
};

const SUBDOMAIN_ROUTES: Record<string, SubdomainConfig> = {
  "haikalhilmi.my.id": { route: "/", mode: "general" },
  "se.haikalhilmi.my.id": { route: "/software-engineer", mode: "general" },
  "de.haikalhilmi.my.id": { route: "/data-engineer", mode: "general" },
  "hustler.haikalhilmi.my.id": {
    route: "/hustler",
    mode: "general",
    site: "hustler",
  },
  "upwork.haikalhilmi.my.id": { route: "/", mode: "upwork" },
  "upwork-se.haikalhilmi.my.id": {
    route: "/software-engineer",
    mode: "upwork",
  },
  "upwork-de.haikalhilmi.my.id": {
    route: "/data-engineer",
    mode: "upwork",
  },
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host")?.split(":")[0] ?? "";

  if (hostname === "www.haikalhilmi.my.id") {
    const canonicalUrl = req.nextUrl.clone();
    canonicalUrl.hostname = "haikalhilmi.my.id";
    canonicalUrl.port = "";
    canonicalUrl.protocol = "https";
    return NextResponse.redirect(canonicalUrl, 308);
  }

  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const config = SUBDOMAIN_ROUTES[hostname];
  const mode = config?.mode === "upwork" ? "upwork" : "general";
  const isLocalHustlerPreview =
    (hostname === "localhost" || hostname === "127.0.0.1") &&
    url.pathname.startsWith("/hustler");
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-portfolio-mode", mode);
  requestHeaders.set(
    "x-portfolio-site",
    url.pathname === "/rsih" || url.pathname.startsWith("/rsih/")
      ? "rsih"
      : url.pathname === "/untuk-nadia-rajendra"
        ? "wedding-letter"
        : config?.site === "hustler" || isLocalHustlerPreview
          ? "hustler"
          : "general"
  );

  if (config && config.route !== "/" && url.pathname === "/") {
    return NextResponse.rewrite(new URL(config.route, req.url), {
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}
