export default function Loading() {
  return (
    <main className="min-h-[calc(100vh-57px)] bg-white px-6 py-10 text-gray-900">
      <section className="mx-auto w-full max-w-6xl">
        <div className="h-4 w-40 animate-pulse rounded bg-gray-200" />
        <div className="mt-5 h-12 max-w-2xl animate-pulse rounded bg-gray-200" />
        <div className="mt-4 h-5 max-w-xl animate-pulse rounded bg-gray-100" />
        <div className="mt-2 h-5 max-w-lg animate-pulse rounded bg-gray-100" />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="min-h-44 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="h-4 w-28 animate-pulse rounded bg-gray-100" />
              <div className="mt-5 h-6 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="mt-4 h-4 animate-pulse rounded bg-gray-100" />
              <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-gray-100" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
