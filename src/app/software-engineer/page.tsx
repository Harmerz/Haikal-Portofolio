import TechStackFilter from "@/components/TechStackFilter";
import HeroSection from "@/components/HeroSection";
import SoftwarePortfolioGrid, {
  SoftwareProject,
} from "@/components/SoftwarePortfolioGrid";

export default function Home() {
  const projects: SoftwareProject[] = [
    {
      id: 1,
      title: "Kembangkan",
      year: "2025",
      type: "video",
      src: "/Porto/Kembangkan.mp4",
    },
    {
      id: 2,
      title: "Nesco Web",
      year: "2025",
      type: "video",
      src: "/Porto/Nesco Web.mp4",
    },
    {
      id: 3,
      title: "PPSMB Homepage",
      year: "2025",
      type: "video",
      src: "/Porto/PPSMB Homepage.mp4",
    },
    {
      id: 4,
      title: "PPSMB Quiz",
      year: "2025",
      type: "video",
      src: "/Porto/PPSMB Quiz.mp4",
    },
    {
      id: 5,
      title: "Agrichain",
      year: "2025",
      type: "image",
      src: "/Porto/Agrichain.png",
    },
    {
      id: 6,
      title: "Aksara Indonesia",
      year: "2026",
      type: "image",
      src: "/Porto/Aksara Indonesia.png",
    },
    {
      id: 7,
      title: "Cakara",
      year: "2025",
      type: "image",
      src: "/Porto/Cakara.png",
    },
    {
      id: 8,
      title: "Lensight",
      year: "2025",
      type: "image",
      src: "/Porto/Lensight.png",
    },
    {
      id: 9,
      title: "Nesco Dashboard",
      year: "2025",
      type: "image",
      src: "/Porto/Nesco Dashboard.png",
    },
    {
      id: 10,
      title: "Pemetaan Daerah rawan - Map - Home - default",
      year: "2025",
      type: "image",
      src: "/Porto/Pemetaan Daerah rawan - Map - Home - default.png",
    },
    {
      id: 11,
      title: "Petadata",
      year: "2025",
      type: "image",
      src: "/Porto/Petadata.png",
    },
    {
      id: 12,
      title: "Prometheus",
      year: "2026",
      type: "image",
      src: "/Porto/Prometheus.jpeg",
    },
    {
      id: 13,
      title: "Career Summit",
      year: "2026",
      type: "image",
      src: "/Porto/Ref 2 - Career Summit.png",
    },
    {
      id: 14,
      title: "Glulam",
      year: "2026",
      type: "image",
      src: "/Porto/Ref 3 - Glulam.png",
    },
    {
      id: 15,
      title: "SEATUC",
      year: "2026",
      type: "image",
      src: "/Porto/Ref 4 - SEATUC.jpg",
    },
    {
      id: 16,
      title: "Robota New",
      year: "2025",
      type: "image",
      src: "/Porto/Robota New.png",
    },
    {
      id: 17,
      title: "Robota",
      year: "2025",
      type: "image",
      src: "/Porto/Robota.png",
    },
    {
      id: 18,
      title: "Teknofest",
      year: "2025",
      type: "image",
      src: "/Porto/Teknofest.png",
    },
    {
      id: 19,
      title: "Tilikan",
      year: "2025",
      type: "image",
      src: "/Porto/Tilikan.png",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Decorative Honeycomb Image - Top Right */}

      {/* Hero Section */}
      <HeroSection
        eyebrow="Specialized in Software Engineering"
        title="Production-ready web applications."
        description="Full-stack development that combines seamless user interfaces with high-performance backends. Secure, maintainable, and built for growth."
        supportingLine="React/Next.js • Backend APIs • Database Design • Fullstack"
        ctaText="Discuss Your Product"
      />

      {/* Featured Projects Section */}
      <section className="bg-white px-4 py-8">
        <SoftwarePortfolioGrid items={projects} />
      </section>

      {/* Tech Stack Section */}
      <TechStackFilter />

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
