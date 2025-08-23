import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haikal Hilmi - Data Engineer",
  description: "Data Engineer portfolio showcasing expertise in data pipelines, ETL, and analytics",
};

export default function DataEngineerPortfolio() {
  const projects = [
    {
      title: "Real-time Data Pipeline",
      description: "Built a scalable real-time data pipeline processing 1M+ events per day using Apache Kafka, Spark Streaming, and BigQuery.",
      techStack: ["Apache Kafka", "Spark Streaming", "Python", "BigQuery", "Docker"],
      impact: "Reduced data processing latency by 80% and improved data accuracy to 99.9%",
      github: "https://github.com/haikalhilmi/real-time-data-pipeline",
      demo: "https://demo.haikalhilmi.my.id/data-pipeline"
    },
    {
      title: "ETL Automation Framework",
      description: "Developed a comprehensive ETL framework using Apache Airflow to automate data extraction from multiple sources.",
      techStack: ["Apache Airflow", "Python", "PostgreSQL", "AWS S3", "Pandas"],
      impact: "Automated 15+ manual data processes, saving 40 hours per week",
      github: "https://github.com/haikalhilmi/etl-automation-framework",
      demo: "https://demo.haikalhilmi.my.id/etl-framework"
    },
    {
      title: "Data Warehouse Optimization",
      description: "Optimized data warehouse performance by implementing partitioning strategies and query optimization techniques.",
      techStack: ["Snowflake", "SQL", "dbt", "Python", "Tableau"],
      impact: "Improved query performance by 60% and reduced storage costs by 30%",
      github: "https://github.com/haikalhilmi/data-warehouse-optimization",
      demo: "https://demo.haikalhilmi.my.id/warehouse-optimization"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "SQL", "Scala", "Java"],
    "Big Data Technologies": ["Apache Spark", "Hadoop", "Kafka", "Flink"],
    "Cloud Platforms": ["AWS", "Google Cloud", "Azure"],
    "Data Warehousing": ["Snowflake", "BigQuery", "Redshift", "Databricks"],
    "Orchestration Tools": ["Apache Airflow", "Luigi", "Prefect"],
    "Databases": ["PostgreSQL", "MongoDB", "Cassandra", "Redis"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
              Haikal Hilmi
            </Link>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-600">
                Home
              </Link>
              <Link href="/software-engineer" className="text-gray-600 hover:text-green-600">
                Software Engineer
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-xl border border-gray-200">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Data Engineer Portfolio
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Specialized in building robust data pipelines, ETL processes, and scalable data infrastructure 
              that transforms raw data into actionable insights.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Transforming complex data challenges into scalable solutions.
            </p>
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
              {/* Data Engineering focused companies */}
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-green-200">
                  <span className="text-green-800 font-semibold text-sm">BigData Corp</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-green-200">
                  <span className="text-green-800 font-semibold text-sm">CloudAnalytics</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-green-200">
                  <span className="text-green-800 font-semibold text-sm">DataPipeline Inc</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-green-200">
                  <span className="text-green-800 font-semibold text-sm">ETL Solutions</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-green-200">
                  <span className="text-green-800 font-semibold text-sm">ML Insights</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-green-200">
                  <span className="text-green-800 font-semibold text-sm">DataWarehouse Pro</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6">
              Collaborated with leading data-driven organizations to build scalable data infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Featured Projects Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Project Image */}
                <div className="w-full h-64 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-white text-5xl">📊</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4 opacity-90">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-green-600 text-white text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Impact */}
                    <p className="text-green-300 font-medium text-sm mb-4">
                      {project.impact}
                    </p>
                    
                    {/* Project Links */}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="flex-1 text-center px-3 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors text-sm"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 text-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Project Title (Always Visible) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Articles & Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Building Scalable Data Pipelines
              </h3>
              <p className="text-gray-600 mb-4">
                Best practices for designing and implementing data pipelines that can handle growing data volumes and complexity.
              </p>
              <a href="https://blog.haikalhilmi.my.id/data-engineering-best-practices" className="text-green-600 hover:underline">
              Read More →
            </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Data Quality in Modern ETL
              </h3>
              <p className="text-gray-600 mb-4">
                Strategies for ensuring data quality and reliability in complex ETL processes and data transformations.
              </p>
              <a href="https://blog.haikalhilmi.my.id/building-scalable-data-pipelines" className="text-green-600 hover:underline">
              Read More →
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m passionate about solving complex data challenges and building scalable data infrastructure.
            Let&apos;s discuss how I can help your organization unlock the power of data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:haikal.hilmi@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hire Me as Data Engineer
            </a>
            <a
              href="https://linkedin.com/in/haikalhilmi"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Haikal Hilmi. Transforming data into insights.
          </p>
        </div>
      </footer>
    </div>
  );
}