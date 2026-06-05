import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Map each subdomain to the page it should serve at its root.
const SUBDOMAIN_ROUTES: Record<string, string> = {
  "se.haikalhilmi.my.id": "/software-engineer",
  "de.haikalhilmi.my.id": "/data-engineer",
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // 1. SKIP middleware for internal Next.js files and static assets
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".") // matches files like .png, .jpg, .svg
  ) {
    return NextResponse.next();
  }

  // 2. Handle subdomain rewrites (strip any port, e.g. during local testing)
  const hostname = req.headers.get("host")?.split(":")[0] ?? "";
  const target = SUBDOMAIN_ROUTES[hostname];

  if (target && url.pathname === "/") {
    return NextResponse.rewrite(new URL(target, req.url));
  }

  return NextResponse.next();
}
