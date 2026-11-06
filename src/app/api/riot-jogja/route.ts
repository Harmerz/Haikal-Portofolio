import { createHmac, timingSafeEqual } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DATA_FILE = path.join(process.cwd(), "private", "riot-jogja", "data.json");

// Token stored in the browser instead of the raw password. Changing
// RIOT_JOGJA_PASSWORD invalidates every saved token.
function tokenFor(password: string): string {
  return createHmac("sha256", password).update("riot-jogja-v1").digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

const noStore = { "Cache-Control": "no-store" };

export async function POST(req: Request) {
  const secret = process.env.RIOT_JOGJA_PASSWORD;
  if (!secret) {
    return NextResponse.json(
      { error: "RIOT_JOGJA_PASSWORD belum diatur di server." },
      { status: 500, headers: noStore }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body tidak valid." }, { status: 400, headers: noStore });
  }
  const { password, token } = (body ?? {}) as { password?: unknown; token?: unknown };
  const expected = tokenFor(secret);

  const ok =
    (typeof password === "string" && safeEqual(password, secret)) ||
    (typeof token === "string" && safeEqual(token, expected));
  if (!ok) {
    return NextResponse.json({ error: "Password salah." }, { status: 401, headers: noStore });
  }

  const data = JSON.parse(await readFile(DATA_FILE, "utf-8"));
  return NextResponse.json({ token: expected, data }, { headers: noStore });
}
