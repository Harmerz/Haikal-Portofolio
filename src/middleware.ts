import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type SubdomainConfig = {
  route: string;
  mode: "general" | "upwork";
};

const SUBDOMAIN_ROUTES: Record<string, SubdomainConfig> = {
  "www.haikalhilmi.my.id": { route: "/", mode: "general" },
  "se.haikalhilmi.my.id": { route: "/software-engineer", mode: "general" },
  "de.haikalhilmi.my.id": { route: "/data-engineer", mode: "general" },
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

  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const hostname = req.headers.get("host")?.split(":")[0] ?? "";
  const config = SUBDOMAIN_ROUTES[hostname];
  const mode =
    config?.mode === "upwork"
      ? "upwork"
      : "general";
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-portfolio-mode", mode);

  if (config && config.route !== "/" && url.pathname === "/") {
    return NextResponse.rewrite(new URL(config.route, req.url), {
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}
