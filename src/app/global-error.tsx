"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center bg-white px-6 py-16 font-sans text-gray-900 antialiased">
          <section className="mx-auto w-full max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              Application error
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-normal text-gray-950 sm:text-5xl">
              Something went wrong
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
              The app shell failed to render. Try again to rebuild the page from
              the root.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Retry
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
