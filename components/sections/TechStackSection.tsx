'use client';

import React, { useState } from 'react';
import { Code, Database, Globe, Shield, Zap, Server } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Globe },
    { id: 'blockchain', label: 'Blockchain', icon: Shield },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools & DevOps', icon: Zap }
  ];

  const technologies = [
    // Blockchain
    { name: 'Solidity', category: 'blockchain', experience: '3+ years', projects: 25, color: 'from-blue-400 to-blue-600', icon: '⚡' },
    { name: 'Web3.js', category: 'blockchain', experience: '3+ years', projects: 30, color: 'from-orange-400 to-orange-600', icon: '🌐' },
    { name: 'Ethers.js', category: 'blockchain', experience: '2+ years', projects: 20, color: 'from-indigo-400 to-indigo-600', icon: '🔗' },
    { name: 'Hardhat', category: 'blockchain', experience: '2+ years', projects: 15, color: 'from-yellow-400 to-yellow-600', icon: '🔨' },
    { name: 'Truffle', category: 'blockchain', experience: '2+ years', projects: 12, color: 'from-purple-400 to-purple-600', icon: '🍫' },
    { name: 'OpenZeppelin', category: 'blockchain', experience: '3+ years', projects: 18, color: 'from-green-400 to-green-600', icon: '🛡️' },

    // Frontend
    { name: 'React', category: 'frontend', experience: '4+ years', projects: 40, color: 'from-cyan-400 to-cyan-600', icon: '⚛️' },
    { name: 'Next.js', category: 'frontend', experience: '3+ years', projects: 35, color: 'from-gray-400 to-gray-600', icon: '▲' },
    { name: 'Vue.js', category: 'frontend', experience: '2+ years', projects: 15, color: 'from-green-400 to-green-600', icon: '💚' },
    { name: 'TypeScript', category: 'frontend', experience: '4+ years', projects: 45, color: 'from-blue-400 to-blue-600', icon: '📘' },
    { name: 'Tailwind CSS', category: 'frontend', experience: '3+ years', projects: 38, color: 'from-teal-400 to-teal-600', icon: '🎨' },

    // Backend
    { name: 'Node.js', category: 'backend', experience: '5+ years', projects: 50, color: 'from-green-400 to-green-600', icon: '🟢' },
    { name: 'Express.js', category: 'backend', experience: '5+ years', projects: 45, color: 'from-gray-400 to-gray-600', icon: '🚂' },
    { name: 'Python', category: 'backend', experience: '3+ years', projects: 20, color: 'from-yellow-400 to-yellow-600', icon: '🐍' },
    { name: 'Go', category: 'backend', experience: '1+ years', projects: 8, color: 'from-cyan-400 to-cyan-600', icon: '🐹' },

    // Database
    { name: 'MongoDB', category: 'database', experience: '4+ years', projects: 35, color: 'from-green-400 to-green-600', icon: '🍃' },
    { name: 'PostgreSQL', category: 'database', experience: '3+ years', projects: 25, color: 'from-blue-400 to-blue-600', icon: '🐘' },
    { name: 'Redis', category: 'database', experience: '2+ years', projects: 15, color: 'from-red-400 to-red-600', icon: '🔴' },
    { name: 'IPFS', category: 'database', experience: '2+ years', projects: 12, color: 'from-purple-400 to-purple-600', icon: '📁' },

    // Tools
    { name: 'Docker', category: 'tools', experience: '3+ years', projects: 30, color: 'from-blue-400 to-blue-600', icon: '🐳' },
    { name: 'Git', category: 'tools', experience: '5+ years', projects: 60, color: 'from-orange-400 to-orange-600', icon: '📝' },
    { name: 'AWS', category: 'tools', experience: '2+ years', projects: 20, color: 'from-yellow-400 to-yellow-600', icon: '☁️' },
    { name: 'Vercel', category: 'tools', experience: '3+ years', projects: 25, color: 'from-gray-400 to-gray-600', icon: '▲' }
  ];

  const filteredTechs = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section id="tech" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Neural Grid
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The technological arsenal powering innovation. 
            Each node represents mastery forged through countless hours of development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg'
                  : 'bg-black/40 text-gray-300 border border-gray-600 hover:border-green-500/50 hover:text-green-400'
              }`}
            >
              <category.icon size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredTechs.map((tech, index) => (
            <div
              key={index}
              className="group bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {tech.name}
                </h3>
                
                {hoveredTech === tech.name && (
                  <div className="space-y-2 animate-fade-in">
                    <div className="text-xs text-gray-400">
                      Experience: <span className="text-green-400">{tech.experience}</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      Projects: <span className="text-cyan-400">{tech.projects}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                      <div
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${Math.min(95, (tech.projects / 60) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}
                
                {hoveredTech !== tech.name && (
                  <div className="flex justify-center">
                    <div className={`w-8 h-1 bg-gradient-to-r ${tech.color} rounded-full`} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center group hover:border-blue-400/60 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-gray-300 text-sm">Years of Development</div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center group hover:border-green-400/60 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
            <div className="text-gray-300 text-sm">Technologies Mastered</div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center group hover:border-purple-400/60 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Projects Completed</div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center group hover:border-cyan-400/60 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-gray-300 text-sm">Years in Blockchain</div>
          </div>
        </div>
      </div>
    </section>
  );
};