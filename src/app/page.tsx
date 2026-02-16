import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection
        eyebrow="Haikal Hilmi — Data & Software Architect"
        title="Scale without the chaos."
        description="I build resilient data & cloud systems that handle the heavy lifting—so you can focus on growing your business. Secure, compliant, and production-ready."
        ctaText="Discuss Your Project"
      />

      {/* Data Engineering Portfolio Section */}
      <section className="bg-white py-8">
        <div className="mx-auto px-6">
          <div className="mx-auto">
            <div className="flex w-full flex-row justify-between">
              <div className="text-start">
                <h2 className="text-3xl font-bold text-gray-900">
                  Data Engineer Portfolio
                </h2>
                <p className="max-w-2xl text-lg text-gray-600">
                  Enterprise data platforms and real-time analytics solutions
                </p>
              </div>
              <a
                href="/data-engineer"
                className="inline-flex items-center gap-3 font-medium text-gray-700 transition-all hover:text-gray-900"
              >
                Explore More Projects
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div className="flex flex-row flex-wrap gap-3">
              {/* Portfolio Item 1 */}
              <div className="group min-w-[400px] flex-1 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  GDPR Analytics Platform
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Real-time data processing pipeline for European financial
                  services with full GDPR compliance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    €500K+ Cost Savings
                  </span>
                  <div className="inline-flex items-center gap-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    Live
                  </div>
                </div>
              </div>

              <div className="group min-w-[400px] flex-1 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  GDPR Analytics Platform
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Real-time data processing pipeline for European financial
                  services with full GDPR compliance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    €500K+ Cost Savings
                  </span>
                  <div className="inline-flex items-center gap-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    Live
                  </div>
                </div>
              </div>

              <div className="group min-w-[400px] flex-1 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  GDPR Analytics Platform
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Real-time data processing pipeline for European financial
                  services with full GDPR compliance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    €500K+ Cost Savings
                  </span>
                  <div className="inline-flex items-center gap-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Engineering Portfolio Section */}
      <section className="bg-white py-8">
        <div className="mx-auto px-6">
          <div className="mx-auto">
            <div className="flex w-full flex-row justify-between">
              <div className="text-start">
                <h2 className="text-3xl font-bold text-gray-900">
                  Software Engineer Portfolio
                </h2>
                <p className="max-w-2xl text-lg text-gray-600">
                  Enterprise data platforms and real-time analytics solutions
                </p>
              </div>
              <a
                href="/software-engineer"
                className="inline-flex items-center gap-3 font-medium text-gray-700 transition-all hover:text-gray-900"
              >
                Explore More Projects
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <div className="flex flex-row flex-wrap gap-3">
              {/* Portfolio Item 1 */}
              <div className="group min-w-[400px] flex-1 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  GDPR Analytics Platform
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Real-time data processing pipeline for European financial
                  services with full GDPR compliance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    €500K+ Cost Savings
                  </span>
                  <div className="inline-flex items-center gap-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    Live
                  </div>
                </div>
              </div>

              <div className="group min-w-[400px] flex-1 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  GDPR Analytics Platform
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Real-time data processing pipeline for European financial
                  services with full GDPR compliance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    €500K+ Cost Savings
                  </span>
                  <div className="inline-flex items-center gap-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    Live
                  </div>
                </div>
              </div>

              <div className="group min-w-[400px] flex-1 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  GDPR Analytics Platform
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Real-time data processing pipeline for European financial
                  services with full GDPR compliance.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    €500K+ Cost Savings
                  </span>
                  <div className="inline-flex items-center gap-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-black">
            © 2025 Haikal Hilmi. Building the future with data and code.
          </p>
        </div>
      </footer>
    </div>
  );
}
