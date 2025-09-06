import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haikal Hilmi - Software Engineer",
  description: "Software Engineer portfolio showcasing full-stack development and modern web applications",
};

export default function SoftwareEngineerPortfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication, payment processing, and admin dashboard built with modern web technologies.",
      techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      impact: "Increased conversion rate by 25% and reduced page load time by 40%",
      github: "https://github.com/haikalhilmi/ecommerce-platform",
      demo: "https://demo.haikalhilmi.my.id/ecommerce"
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable real-time messaging platform with WebSocket connections, file sharing, and group chat functionality.",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "AWS S3"],
      impact: "Supports 10,000+ concurrent users with 99.9% uptime",
      github: "https://github.com/haikalhilmi/realtime-chat-app",
      demo: "https://demo.haikalhilmi.my.id/chat-app"
    },
    {
      title: "Task Management API",
      description: "RESTful API with comprehensive project management features, role-based access control, and real-time notifications.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT", "Docker", "AWS"],
      impact: "Improved team productivity by 35% and reduced project delivery time",
      github: "https://github.com/haikalhilmi/task-management-api",
      demo: "https://demo.haikalhilmi.my.id/task-api"
    }
  ];

  const skills = {
    "Frontend Technologies": ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    "Backend Technologies": ["Node.js", "Express", "Django", "Spring Boot", "GraphQL"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "DevOps & Tools": ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"],
    "Testing": ["Jest", "Cypress", "Playwright", "Unit Testing", "Integration Testing"],
    "Architecture": ["Microservices", "REST APIs", "Design Patterns", "Clean Architecture"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Haikal Hilmi
            </Link>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/data-engineer" className="text-gray-600 hover:text-blue-600">
                Data Engineer
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-xl border border-gray-200">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Software Engineer Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Crafting elegant, scalable, and user-centric applications using modern technologies 
            and best practices in software development.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Passionate about building innovative solutions that make a real impact.
          </p>
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
              {/* Software Engineering focused companies */}
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-blue-200">
                  <span className="text-blue-800 font-semibold text-sm">TechStartup</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-blue-200">
                  <span className="text-blue-800 font-semibold text-sm">WebDev Co</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-blue-200">
                  <span className="text-blue-800 font-semibold text-sm">AppBuilder Inc</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-blue-200">
                  <span className="text-blue-800 font-semibold text-sm">FullStack Pro</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-blue-200">
                  <span className="text-blue-800 font-semibold text-sm">ReactSolutions</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-4 h-20 flex items-center justify-center mb-2 border border-blue-200">
                  <span className="text-blue-800 font-semibold text-sm">CloudApps</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6">
              Partnered with innovative companies to deliver cutting-edge software solutions
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
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full border border-blue-200"
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

      {/* Projects Section */}
      <section className="mx-auto px-6 py-16">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer">
                {/* Project Image */}
                <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center relative">
                  <span className="text-white text-4xl">💻</span>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-white">
                    <h3 className="text-xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold mb-2">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-600 text-white text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Impact */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold mb-1">
                        Impact:
                      </h4>
                      <p className="text-green-400 font-medium text-sm">
                        {project.impact}
                      </p>
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="inline-flex items-center px-3 py-1 bg-gray-700 text-white rounded text-xs hover:bg-gray-600 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Project Title - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Articles & Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Building Scalable React Applications
              </h3>
              <p className="text-gray-600 mb-4">
                Best practices for structuring large React applications with proper state management and component architecture.
              </p>
              <a href="https://blog.haikalhilmi.my.id/modern-web-development" className="text-blue-600 hover:underline">
              Read More →
            </a>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                API Design Best Practices
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Guidelines for designing robust, maintainable, and developer-friendly REST APIs that scale with your application.
              </p>
              <a href="https://blog.haikalhilmi.my.id/building-scalable-applications" className="text-blue-600 dark:text-blue-400 hover:underline">
              Read More →
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m passionate about creating innovative software solutions that make a real impact.
            Whether it&apos;s a web application, mobile app, or API, I&apos;m ready to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:haikal.hilmi@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hire Me as Software Engineer
            </a>
            <a
              href="https://linkedin.com/in/haikalhilmi"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
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
            © 2024 Haikal Hilmi. Crafting digital experiences.
          </p>
        </div>
      </footer>
    </div>
  );
}