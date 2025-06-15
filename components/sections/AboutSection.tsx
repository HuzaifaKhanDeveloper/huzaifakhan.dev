'use client';

import React, { useState } from 'react';
import { Code, Shield, Zap, Globe, Award, Calendar } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const timeline = [
    {
      year: '2019',
      title: 'Started Web Development Journey',
      description: 'Began learning HTML, CSS, and JavaScript',
      icon: Code
    },
    {
      year: '2021',
      title: 'Full Stack Mastery',
      description: 'Mastered MERN stack and modern frameworks',
      icon: Zap
    },
    {
      year: '2022',
      title: 'Entered Web3 Space',
      description: 'Started building DApps and smart contracts',
      icon: Globe
    },
    {
      year: '2023',
      title: 'Smart Contract Auditor',
      description: 'Specialized in security auditing and tokenomics',
      icon: Shield
    },
    {
      year: '2024',
      title: 'Leading Projects',
      description: 'Leading major blockchain projects and hackathons',
      icon: Award
    }
  ];

  const skills = [
    { name: 'Solidity', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript/TypeScript', level: 98, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React/Next.js', level: 95, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', level: 92, color: 'from-green-400 to-green-600' },
    { name: 'Smart Contract Auditing', level: 90, color: 'from-red-400 to-red-600' },
    { name: 'Web3.js/Ethers.js', level: 88, color: 'from-purple-400 to-purple-600' }
  ];

  const quotes = [
    "Build responsibly. Audit thoroughly.",
    "Code is poetry written in logic.",
    "Security isn't a feature, it's a foundation.",
    "Innovation happens at the intersection of ideas."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              The Architect's Log
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            5+ years of full-stack development, 3+ years in blockchain. 
            Crafting secure, scalable solutions for the decentralized future.
          </p>
        </div>

        {/* Rotating Quote */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="text-cyan-400 text-base sm:text-xl font-mono italic transition-all duration-1000 leading-relaxed">
              "{quotes[currentQuote]}"
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Timeline */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-6 sm:mb-8 flex items-center">
              <Calendar className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Evolution Timeline
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={16} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  
                  <div className="flex-1 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-3 sm:p-4 group-hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                      <h4 className="text-base sm:text-lg font-semibold text-white leading-tight">{item.title}</h4>
                      <span className="text-cyan-400 font-mono text-xs sm:text-sm bg-cyan-400/10 px-2 py-1 rounded self-start sm:self-auto">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-6 sm:mb-8 flex items-center">
              <Zap className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Core Competencies
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm sm:text-base">{skill.name}</span>
                    <span className="text-gray-400 font-mono text-xs sm:text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${
                        hoveredSkill === skill.name ? 'animate-pulse' : ''
                      }`}
                      style={{
                        width: `${skill.level}%`,
                        transition: 'width 1s ease-out'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4 text-center group hover:border-green-400/60 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold text-green-400">20+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Projects Completed</div>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 sm:p-4 text-center group hover:border-blue-400/60 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-bold text-blue-400">10+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Smart Contracts Audited</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Only Additional Stats */}
        <div className="mt-8 sm:mt-12 lg:hidden">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4 text-center hover:border-purple-400/60 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-purple-400">5+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-3 sm:p-4 text-center hover:border-yellow-400/60 transition-all duration-300">
              <div className="text-xl sm:text-2xl font-bold text-yellow-400">3+</div>
              <div className="text-gray-400 text-xs sm:text-sm">Blockchain Years</div>
            </div>
          </div>
        </div>

        {/* Achievement Highlights - Mobile */}
        <div className="mt-8 sm:mt-12 lg:hidden">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-4 sm:p-6">
            <h4 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4 text-center">
              Key Achievements
            </h4>
            <div className="space-y-2 sm:space-y-3 text-center">
              <div className="text-gray-300 text-sm sm:text-base">
                <span className="text-green-400 font-semibold">✓</span> Full-Stack Development Mastery
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                <span className="text-blue-400 font-semibold">✓</span> Smart Contract Security Expert
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                <span className="text-purple-400 font-semibold">✓</span> Blockchain Project Leadership
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                <span className="text-yellow-400 font-semibold">✓</span> Open Source Contributor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};