"use client";

import { useEffect, useState, type FormEvent } from "react";
import RiotReport from "./RiotReport";
import type { RiotData } from "./riot";
import s from "./riot.module.css";

const TOKEN_KEY = "riot-jogja-token-v1";

type Phase = "checking" | "locked" | "open";

function readToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

function writeToken(token: string | null) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    // Storage blocked: the user just has to log in again next visit.
  }
}

async function unlock(body: { password: string } | { token: string }) {
  const res = await fetch("/api/riot-jogja", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = (await res.json().catch(() => ({}))) as {
    token?: string;
    data?: RiotData;
    error?: string;
  };
  if (!res.ok || !json.token || !json.data) {
    return { ok: false as const, status: res.status, error: json.error ?? "Gagal memuat data." };
  }
  return { ok: true as const, token: json.token, data: json.data };
}

export default function RiotGate() {
  const [phase, setPhase] = useState<Phase>("checking");
  const [data, setData] = useState<RiotData | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const token = readToken();
    if (!token) {
      setPhase("locked");
      return;
    }
    unlock({ token })
      .then((r) => {
        if (r.ok) {
          setData(r.data);
          setPhase("open");
        } else {
          if (r.status === 401) writeToken(null);
          setPhase("locked");
        }
      })
      .catch(() => setPhase("locked"));
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password || busy) return;
    setBusy(true);
    setError("");
    try {
      const r = await unlock({ password });
      if (r.ok) {
        writeToken(r.token);
        setData(r.data);
        setPassword("");
        setPhase("open");
      } else {
        setError(r.error);
      }
    } catch {
      setError("Tidak bisa terhubung ke server. Coba lagi.");
    } finally {
      setBusy(false);
    }
  }

  function logout() {
    writeToken(null);
    setData(null);
    setPhase("locked");
  }

  if (phase === "open" && data) return <RiotReport data={data} onLogout={logout} />;

  return (
    <main className={s.gate}>
      <div className={s.gateCard}>
        <h1 style={{ fontSize: 22 }}>Kehadiran WNR RIOT Jogja</h1>
        {phase === "checking" ? (
          <p className={s.note}>Memuat…</p>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="riot-pw" className={s.lab}>
              Masukkan password untuk membuka laporan
            </label>
            <input
              id="riot-pw"
              className={s.input}
              type="password"
              autoComplete="current-password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className={s.error} role="alert">
                {error}
              </p>
            )}
            <button className={s.primary} type="submit" disabled={busy || !password}>
              {busy ? "Membuka…" : "Buka laporan"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
