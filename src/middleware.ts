import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host");

  // Define your target subdomain
  const targetSubdomain = "se.haikalhilmi.my.id";

  if (hostname === targetSubdomain) {
    // If the user is at the root of the subdomain (se.haikalhilmi.my.id/)
    // Rewrite it to show the content from /software-engineer
    if (url.pathname === "/") {
      return NextResponse.rewrite(new URL("/software-engineer", req.url));
    }

    // Optional: If you have sub-pages like se.haikalhilmi.my.id/projects
    // you can rewrite them to /software-engineer/projects
    return NextResponse.rewrite(
      new URL(`/software-engineer${url.pathname}`, req.url)
    );
  }
}
