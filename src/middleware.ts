import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  // 1. SKIP middleware for internal Next.js files and static assets
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".") // matches files like .png, .jpg, .svg
  ) {
    return NextResponse.next();
  }

  // 2. Handle the subdomain rewrite
  if (hostname === "se.haikalhilmi.my.id") {
    if (url.pathname === "/") {
      return NextResponse.rewrite(new URL("/software-engineer", req.url));
    }
  }

  return NextResponse.next();
}
