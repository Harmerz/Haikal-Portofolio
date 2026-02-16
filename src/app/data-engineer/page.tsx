import HeroSection from "@/components/HeroSection";
import PortfolioMasonryGrid, {
  PortfolioItem,
} from "@/components/PortfolioMasonryGrid";

export default function Home() {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      type: "video",
      src: "/post-to-platforms.webm",
    },
    {
      id: 2,
      type: "image",
      src: "/item-upvoty.webp",
      alt: "upvoty",
    },
    {
      id: 3,
      type: "image",
      src: "/item-coolify-ui.webp",
      alt: "coolify ui",
    },
    {
      id: 4,
      type: "image",
      src: "/item-coolify-website.webp",
      alt: "coolify website",
    },
    {
      id: 5,
      type: "image",
      src: "/item-omnisocials-logo.webp",
      alt: "omnisocials logo",
    },
    {
      id: 6,
      type: "image",
      src: "/item-omnisocials-inbox-illustration.webp",
      alt: "omnisocials inbox illustration",
    },
    {
      id: 7,
      type: "image",
      src: "/item-omnisocials-link-in-bio.webp",
      alt: "omnisocials link in bio",
    },
    {
      id: 8,
      type: "image",
      src: "/item-testimonial-hero.webp",
      alt: "testimonial hero",
    },
    {
      id: 9,
      type: "image",
      src: "/item-testimonial-section.webp",
      alt: "testimonial section",
    },
    {
      id: 10,
      type: "image",
      src: "/item-rewardful.webp",
      alt: "rewardful",
    },
    {
      id: 11,
      type: "image",
      src: "/item-walletconnect.webp",
      alt: "walletconnect",
    },
    {
      id: 12,
      type: "image",
      src: "/item-numerai.webp",
      alt: "numerai",
    },
    {
      id: 13,
      type: "video",
      src: "/omnisocials-illustrations.webm",
      className: "rounded-xl border border-black/10",
    },
    {
      id: 14,
      type: "image",
      src: "/item-theraphy.webp",
      alt: "therapy website",
    },
    {
      id: 15,
      type: "image",
      src: "/item-skinswap-affiliate-page.webp",
      alt: "skinswap affiliate page",
    },
    {
      id: 16,
      type: "image",
      src: "/item-skinswap-padlock.webp",
      alt: "skinswap padlock",
    },
    {
      id: 17,
      type: "image",
      src: "/item-skinswap-pickems.webp",
      alt: "skinswap pickems",
    },
    {
      id: 18,
      type: "image",
      src: "/item-skinswap-shield.webp",
      alt: "skinswap shield",
    },
    {
      id: 19,
      type: "video",
      src: "/keno-diamond-animation.webm",
    },
    {
      id: 20,
      type: "image",
      src: "/item-linkyinbio.webp",
      alt: "linky",
    },
    {
      id: 21,
      type: "video",
      src: "/wallet-animation.webm",
    },
    {
      id: 22,
      type: "image",
      src: "/item-chips.webp",
      alt: "chips",
    },
    {
      id: 23,
      type: "image",
      src: "/item-bg-remover.webp",
      alt: "bg-remover",
    },
    {
      id: 24,
      type: "image",
      src: "/item-robertligthart-logo.webp",
      alt: "logo",
      className: "rounded-xl border border-black/10",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection
        eyebrow="Specialized in Data Engineering"
        title="Reliable data pipelines & automated extraction."
        description="I design and operate robust data systems—from complex web scraping to clean warehousing—so your data stays accurate and ready to use."
        supportingLine="Web Scraping • Automation • ETL Pipelines • Data Quality"
        ctaText="Discuss Your Data Needs"
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

            <PortfolioMasonryGrid items={portfolioItems} />
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
