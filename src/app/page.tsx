import Image from "next/image";
import Link from "next/link";

const companies = [
  { name: "ByteDance", logo: "/home/company/bytedance.png" },
  { name: "Create Carousels", logo: "/home/company/createcarousels.png" },
  { name: "DataIns", logo: "/home/company/datains.png" },
  { name: "GMAT", logo: "/home/company/gmat.png" },
  { name: "Kesatria", logo: "/home/company/kesatria.png" },
  { name: "LinkyInBio", logo: "/home/company/linkyinbio.png" },
  { name: "PetaData", logo: "/home/company/petadata.png" },
  { name: "PPSMB", logo: "/home/company/ppsmb.png" },
  { name: "Robota", logo: "/home/company/robota.png" },
  {
    name: "Semesta Data Digital",
    logo: "/home/company/semesta-data-digital.jfif",
  },
  { name: "Telkom", logo: "/home/company/telkom.png" },
  { name: "Tilikan", logo: "/home/company/tilikan.png" },
  { name: "Tokopedia", logo: "/home/company/tokopedia.webp" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* Professional Header */}
            <div className="mb-4">
              <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full shadow-lg">
                <Image
                  width={100}
                  height={100}
                  src="/haikal hilmi.JPG"
                  alt="Haikal Hilmi"
                  className="h-full w-full object-cover grayscale filter"
                />
              </div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                <div className="relative h-2 w-2">
                  <div className="absolute top-0 right-0 h-2 w-2 animate-ping rounded-full bg-green-400" />
                  <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-600" />
                </div>
                Available for work
              </div>
            </div>

            <h1 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 lg:text-4xl">
              Haikal Hilmi
            </h1>
            <p className="mb-4 text-xl font-light text-gray-600 lg:text-2xl">
              Data & Software Engineer
            </p>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-gray-700">
              Pioneering and implementing enterprise-grade
              <strong> data solutions</strong> and{" "}
              <strong>software architectures</strong> across industries.
              Experienced in building scalable systems, ensuring compliance with
              regulations, and leveraging modern cloud infrastructure.
            </p>

            {/* Professional Details */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Remote or Onsite Available</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Flexible Work Hours</span>
              </div>
            </div>

            {/* Company Logos */}
            <div className="mt-8">
              <div className="flex items-center justify-center -space-x-2 sm:-space-x-3">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 bg-white transition-all hover:z-10 hover:scale-110 sm:h-10 sm:w-10"
                    title={company.name}
                  >
                    <img
                      alt={`${company.name} logo`}
                      loading="lazy"
                      width="36"
                      height="36"
                      decoding="async"
                      className="h-8 w-8 object-contain sm:h-8 sm:w-8"
                      src={company.logo}
                    />
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -bottom-10 left-1/2 z-20 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {company.name}
                    </div>
                  </div>
                ))}
                <div
                  className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100 transition-all hover:z-10 sm:h-10 sm:w-10"
                  title="Your company next?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-gray-400 sm:h-5 sm:w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute -bottom-10 left-1/2 z-20 -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Your company next?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900">
                Trusted by European Enterprises
              </h2>
              <div className="mx-auto h-px w-16 bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="rounded-lg border border-gray-200 bg-white p-4 text-center transition-colors hover:border-gray-300">
                <div className="mb-2 text-2xl">🏦</div>
                <h3 className="mb-1 text-sm font-medium text-gray-900">
                  Deutsche Bank
                </h3>
                <p className="text-xs text-gray-600">Financial Services</p>
              </div>
              <div className="border border-gray-200 bg-white p-4 text-center transition-colors hover:border-gray-300">
                <div className="mb-2 text-2xl">⚙️</div>
                <h3 className="mb-1 text-sm font-medium text-gray-900">
                  Siemens AG
                </h3>
                <p className="text-xs text-gray-600">Industrial Tech</p>
              </div>
              <div className="border border-gray-200 bg-white p-4 text-center transition-colors hover:border-gray-300">
                <div className="mb-2 text-2xl">💼</div>
                <h3 className="mb-1 text-sm font-medium text-gray-900">
                  SAP SE
                </h3>
                <p className="text-xs text-gray-600">Enterprise Software</p>
              </div>
              <div className="border border-gray-200 bg-white p-4 text-center transition-colors hover:border-gray-300">
                <div className="mb-2 text-2xl">🚗</div>
                <h3 className="mb-1 text-sm font-medium text-gray-900">
                  Volkswagen
                </h3>
                <p className="text-xs text-gray-600">Automotive</p>
              </div>
              <div className="border border-gray-200 bg-white p-4 text-center transition-colors hover:border-gray-300">
                <div className="mb-2 text-2xl">🛡️</div>
                <h3 className="mb-1 text-sm font-medium text-gray-900">
                  Allianz SE
                </h3>
                <p className="text-xs text-gray-600">Insurance</p>
              </div>
              <div className="border border-gray-200 bg-white p-4 text-center transition-colors hover:border-gray-300">
                <div className="mb-2 text-2xl">🔬</div>
                <h3 className="mb-1 text-sm font-medium text-gray-900">ASML</h3>
                <p className="text-xs text-gray-600">Semiconductor</p>
              </div>
              <div className="border border-gray-200 bg-white p-4 text-center transition-colors hover:border-gray-300">
                <div className="mb-2 text-2xl">🎵</div>
                <h3 className="mb-1 text-sm font-medium text-gray-900">
                  Spotify
                </h3>
                <p className="text-xs text-gray-600">Media & Tech</p>
              </div>
              <div className="border border-gray-200 bg-white p-4 text-center transition-colors hover:border-gray-300">
                <div className="mb-2 text-2xl">💳</div>
                <h3 className="mb-1 text-sm font-medium text-gray-900">
                  Klarna
                </h3>
                <p className="text-xs text-gray-600">FinTech</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Delivered 50+ projects across DACH region • 99.9% uptime SLA •
                ISO 27001 certified processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-light text-gray-900">
              Core Competencies
            </h2>
            <div className="mx-auto h-px w-16 bg-gray-300"></div>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Data Engineering Skills */}
            <div className="space-y-6">
              <div className="mb-4">
                <h3 className="mb-2 flex items-center text-xl font-medium text-gray-900">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded bg-blue-600">
                    <span className="text-xs font-bold text-white">DE</span>
                  </span>
                  Data Engineering
                </h3>
                <p className="text-sm text-gray-600">
                  Enterprise data platforms & real-time analytics
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-gray-200 bg-white p-3 transition-colors hover:border-blue-300">
                  <div className="mb-1 text-lg">🐍</div>
                  <span className="text-sm font-medium text-gray-900">
                    Python
                  </span>
                  <div className="text-xs text-gray-600">Advanced</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-blue-300">
                  <div className="mb-1 text-lg">⚡</div>
                  <span className="text-sm font-medium text-gray-900">
                    Apache Spark
                  </span>
                  <div className="text-xs text-gray-600">Expert</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-blue-300">
                  <div className="mb-1 text-lg">🗄️</div>
                  <span className="text-sm font-medium text-gray-900">
                    SQL/NoSQL
                  </span>
                  <div className="text-xs text-gray-600">Expert</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-blue-300">
                  <div className="mb-1 text-lg">☁️</div>
                  <span className="text-sm font-medium text-gray-900">
                    AWS/Azure
                  </span>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-blue-300">
                  <div className="mb-1 text-lg">🔄</div>
                  <span className="text-sm font-medium text-gray-900">
                    Apache Kafka
                  </span>
                  <div className="text-xs text-gray-600">Advanced</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-blue-300">
                  <div className="mb-1 text-lg">📈</div>
                  <span className="text-sm font-medium text-gray-900">
                    Airflow
                  </span>
                  <div className="text-xs text-gray-600">Expert</div>
                </div>
              </div>
            </div>

            {/* Software Engineering Skills */}
            <div className="space-y-6">
              <div className="mb-4">
                <h3 className="mb-2 flex items-center text-xl font-medium text-gray-900">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded bg-purple-600">
                    <span className="text-xs font-bold text-white">SE</span>
                  </span>
                  Software Engineering
                </h3>
                <p className="text-sm text-gray-600">
                  Scalable applications & microservices architecture
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-gray-200 bg-white p-3 transition-colors hover:border-purple-300">
                  <div className="mb-1 text-lg">📜</div>
                  <span className="text-sm font-medium text-gray-900">
                    JavaScript
                  </span>
                  <div className="text-xs text-gray-600">Expert</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-purple-300">
                  <div className="mb-1 text-lg">🔷</div>
                  <span className="text-sm font-medium text-gray-900">
                    TypeScript
                  </span>
                  <div className="text-xs text-gray-600">Advanced</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-purple-300">
                  <div className="mb-1 text-lg">⚛️</div>
                  <span className="text-sm font-medium text-gray-900">
                    React
                  </span>
                  <div className="text-xs text-gray-600">Expert</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-purple-300">
                  <div className="mb-1 text-lg">▲</div>
                  <span className="text-sm font-medium text-gray-900">
                    Next.js
                  </span>
                  <div className="text-xs text-gray-600">Advanced</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-purple-300">
                  <div className="mb-1 text-lg">🟢</div>
                  <span className="text-sm font-medium text-gray-900">
                    Node.js
                  </span>
                  <div className="text-xs text-gray-600">Expert</div>
                </div>
                <div className="border border-gray-200 bg-white p-3 transition-colors hover:border-purple-300">
                  <div className="mb-1 text-lg">🐳</div>
                  <span className="text-sm font-medium text-gray-900">
                    Kubernetes
                  </span>
                  <div className="text-xs text-gray-600">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Navigation */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-light text-white">
                Specialized Portfolios
              </h2>
              <div className="mx-auto mb-6 h-px w-16 bg-gray-600"></div>
              <p className="mx-auto max-w-2xl text-lg text-gray-300">
                Explore detailed case studies and technical implementations
                across my core competencies.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Data Engineering Portfolio */}
              <a href="/data-engineer" className="group block">
                <div className="rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-blue-300">
                  <div className="mb-6 flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded bg-blue-600">
                      <span className="text-sm font-bold text-white">DE</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-medium text-gray-900">
                        Data Engineering Portfolio
                      </h3>
                      <div className="inline-flex items-center gap-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        Live Projects
                      </div>
                    </div>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-gray-700">
                    Enterprise data platforms, real-time analytics pipelines,
                    and cloud-native architectures. Featuring GDPR-compliant
                    solutions for European financial services and healthcare
                    sectors.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      15+ Enterprise Projects • €2M+ Cost Savings
                    </div>
                    <div className="flex items-center text-sm font-medium text-blue-600 transition-transform group-hover:translate-x-1">
                      <span>View Portfolio</span>
                      <span className="ml-1">→</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Software Engineering Portfolio */}
              <a href="/software-engineer" className="group block">
                <div className="rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-purple-300">
                  <div className="mb-6 flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded bg-purple-600">
                      <span className="text-sm font-bold text-white">SE</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-medium text-gray-900">
                        Software Engineering Portfolio
                      </h3>
                      <div className="inline-flex items-center gap-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        Production Ready
                      </div>
                    </div>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-gray-700">
                    Scalable web applications, microservices architectures, and
                    modern frontend solutions. Built for high-traffic European
                    e-commerce and SaaS platforms with 99.9% uptime.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      20+ Applications • 1M+ Active Users
                    </div>
                    <div className="flex items-center text-sm font-medium text-purple-600 transition-transform group-hover:translate-x-1">
                      <span>View Portfolio</span>
                      <span className="ml-1">→</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 border-t border-gray-700 pt-12 text-center">
              <h3 className="mb-4 text-xl font-light text-white">
                Ready to Discuss Your Project?
              </h3>
              <p className="mx-auto mb-6 max-w-lg text-gray-400">
                Let&apos;s explore how my expertise can drive your European
                market expansion and digital transformation initiatives.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:haikal@haikalhilmi.eu"
                  className="inline-flex items-center justify-center bg-white px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
                >
                  Schedule Consultation
                </a>
                <a
                  href="https://linkedin.com/in/haikalhilmi"
                  className="inline-flex items-center justify-center border border-gray-600 px-6 py-3 text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Haikal Hilmi. Building the future with data and code.
          </p>
        </div>
      </footer>
    </div>
  );
}
