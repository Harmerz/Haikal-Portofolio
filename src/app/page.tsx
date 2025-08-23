import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-600 dark:text-gray-300">HH</span>
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Haikal Hilmi
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Data & Software Engineer Enthusiast
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">
              Passionate about building scalable data pipelines and robust software solutions. 
              Bridging the gap between data insights and practical applications.
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Background
              </h3>
              <p className="text-gray-600">
                Computer Science graduate with a passion for both data engineering and software development. 
                I enjoy solving complex problems through innovative technical solutions and have experience 
                in building end-to-end systems from data collection to user-facing applications.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interests
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                My dual focus on Data Engineering and Software Engineering allows me to create 
                comprehensive solutions that not only process and analyze data effectively but also 
                deliver that value through well-designed applications and systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Worked With */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Worked With
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {/* Company/Client logos or names */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center mb-2">
                  <span className="text-gray-600 font-semibold text-sm">TechCorp</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center mb-2">
                  <span className="text-gray-600 font-semibold text-sm">DataFlow Inc</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center mb-2">
                  <span className="text-gray-600 font-semibold text-sm">CloudSys</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center mb-2">
                  <span className="text-gray-600 font-semibold text-sm">StartupXYZ</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center mb-2">
                  <span className="text-gray-600 font-semibold text-sm">Analytics Pro</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-20 flex items-center justify-center mb-2">
                  <span className="text-gray-600 font-semibold text-sm">DevStudio</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6">
              Trusted by companies ranging from startups to enterprise organizations
            </p>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Skills Snapshot
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Engineering Skills */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Data Engineering
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Python</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">SQL</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Apache Spark</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Airflow</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">BigQuery</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">AWS/GCP</span>
                </div>
              </div>
            </div>

            {/* Software Engineering Skills */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Software Engineering
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">React</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Node.js</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">TypeScript</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Next.js</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">Docker</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">REST APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Navigation */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Engineer Portfolio Button */}
            <Link href="/data-engineer" className="group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-8 rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">Data Engineer Portfolio</h3>
                <p className="text-green-100 mb-6">
                  Explore my data pipeline projects, ETL solutions, and big data implementations
                </p>
                <div className="inline-flex items-center text-lg font-semibold">
                  View Portfolio
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Software Engineer Portfolio Button */}
            <Link href="/software-engineer" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-8 rounded-xl shadow-lg transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4">Software Engineer Portfolio</h3>
                <p className="text-blue-100 mb-6">
                  Discover my web applications, APIs, and full-stack development projects
                </p>
                <div className="inline-flex items-center text-lg font-semibold">
                  View Portfolio
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Haikal Hilmi. Building the future with data and code.
          </p>
        </div>
      </footer>
    </div>
  );
}
