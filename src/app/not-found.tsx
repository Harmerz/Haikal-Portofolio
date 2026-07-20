import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-57px)] items-center bg-white px-6 py-16 text-gray-900">
      <section className="mx-auto w-full max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-normal text-gray-950 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
          The page you are looking for may have moved, or the link is pointing
          to a route that does not exist.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Back to home
          </Link>
          <Link
            href="/software-engineer"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900 hover:text-gray-950"
          >
            View portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
