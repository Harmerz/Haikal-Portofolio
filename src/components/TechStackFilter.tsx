'use client';

import { useState } from 'react';

interface TechItem {
  name: string;
  category: string;
}

const techData: TechItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  
  // Database
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Prisma', category: 'Database' },
  { name: 'Supabase', category: 'Database' },
  
  // DevOps & Tools
  { name: 'Docker', category: 'DevOps & Tools' },
  { name: 'AWS', category: 'DevOps & Tools' },
  { name: 'Vercel', category: 'DevOps & Tools' },
  { name: 'GitHub Actions', category: 'DevOps & Tools' },
  { name: 'Git', category: 'DevOps & Tools' },
  { name: 'Linux', category: 'DevOps & Tools' },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools'];

const categoryConfig = {
  Frontend: {
    color: 'blue',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
      </svg>
    ),
  },
  Backend: {
    color: 'green',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
      </svg>
    ),
  },
  Database: {
    color: 'purple',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
      </svg>
    ),
  },
  'DevOps & Tools': {
    color: 'orange',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export default function TechStackFilter() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTech = activeCategory === 'All' 
    ? techData 
    : techData.filter(tech => tech.category === activeCategory);

  const getFilteredCategories = () => {
    if (activeCategory === 'All') {
      return ['Frontend', 'Backend', 'Database', 'DevOps & Tools'];
    }
    return [activeCategory];
  };

  const getTechByCategory = (category: string) => {
    return filteredTech.filter(tech => tech.category === category);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Core technologies I use to build scalable, modern applications
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getFilteredCategories().map((category) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const techs = getTechByCategory(category);
            
            if (techs.length === 0) return null;
            
            return (
              <div key={category} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${config.color}-500 to-${config.color}-600 rounded-xl flex items-center justify-center mr-4`}>
                    {config.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-4 py-2 bg-${config.color}-100 text-${config.color}-800 rounded-full text-sm font-medium`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}