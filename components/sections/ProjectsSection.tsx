'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, Users, Zap, Shield, Coins, Globe, Eye, Code2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'react', label: 'React', icon: Code2 },
    { id: 'defi', label: 'DeFi', icon: Coins },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'dapp', label: 'DApps', icon: Zap },
    { id: 'web3', label: 'Web3 Tools', icon: Users }
  ];

  const projects = [
    {
      id: 1,
      title: 'Lofi Chill',
      description: 'A modern, immersive web app for streaming lofi music and ambient sounds. Enjoy curated moods, customizable background noise, and a built-in focus timer—all in a sleek, distraction-free interface.',
      category: 'react',
      tech: ['React.js', 'Streaming', 'Relaxing', 'Ambient-Sounds', 'Node.js'],
      github: 'https://github.com/HuzaifaKhanDeveloper/lofi-music',
      demo: 'https://lofi-music-bay.vercel.app/',
      stars: 4,
      forks: 3,
      type: 'supernova',
      image: 'https://raw.githubusercontent.com/HuzaifaKhanDeveloper/lofi-music/refs/heads/main/public/assets/imageDemo/demo1.png',
      status: 'Live',
      featured: true
    },
    {
      id: 2,
      title: 'DeFi Yield Optimizer',
      description: 'Smart contract suite for automated yield farming across multiple protocols. Includes risk assessment, auto-compounding, and gas optimization features.',
      category: 'defi',
      tech: ['Solidity', 'Hardhat', 'Chainlink', 'OpenZeppelin', 'TypeScript'],
      github: 'https://github.com/HuzaifaKhanDeveloper',
      demo: '#',
      stars: 38,
      forks: 8,
      type: 'standard',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      featured: false
    },
    {
      id: 3,
      title: 'Smart Contract Auditor',
      description: 'Automated vulnerability detection tool for Solidity smart contracts. Uses machine learning to identify common security issues and gas inefficiencies.',
      category: 'security',
      tech: ['Python', 'Solidity', 'Machine Learning', 'Docker', 'FastAPI'],
      github: 'https://github.com/HuzaifaKhanDeveloper',
      demo: '#',
      stars: 156,
      forks: 34,
      type: 'standard',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      featured: false
    },
    {
      id: 4,
      title: 'Cross-Chain Bridge',
      description: 'Secure asset transfer protocol supporting multiple blockchain networks. Features atomic swaps, liquidity pools, and multi-signature security.',
      category: 'defi',
      tech: ['Solidity', 'Go', 'Cosmos SDK', 'TypeScript', 'Redis'],
      github: 'https://github.com/HuzaifaKhanDeveloper',
      demo: '#',
      stars: 89,
      forks: 23,
      type: 'standard',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Beta',
      featured: false
    },
    {
      id: 5,
      title: 'NFT Marketplace',
      description: 'Full-featured NFT marketplace with lazy minting and royalty distribution. Supports multiple chains and includes advanced search and filtering.',
      category: 'dapp',
      tech: ['Next.js', 'Solidity', 'The Graph', 'IPFS', 'MongoDB'],
      github: 'https://github.com/HuzaifaKhanDeveloper',
      demo: '#',
      stars: 67,
      forks: 19,
      type: 'standard',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      featured: false
    },
    {
      id: 6,
      title: 'Web3 Analytics Dashboard',
      description: 'Real-time blockchain analytics and portfolio tracking platform. Features include DeFi yield tracking, gas optimization, and market insights.',
      category: 'web3',
      tech: ['React', 'Node.js', 'MongoDB', 'Web3.js', 'Chart.js'],
      github: 'https://github.com/HuzaifaKhanDeveloper',
      demo: '#',
      stars: 34,
      forks: 7,
      type: 'standard',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      featured: false
    },
    {
      id: 7,
      title: 'Token Launchpad',
      description: 'Complete ICO/IDO platform with KYC integration, vesting schedules, and multi-tier access. Built for secure and compliant token launches.',
      category: 'defi',
      tech: ['Solidity', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/HuzaifaKhanDeveloper',
      demo: '#',
      stars: 45,
      forks: 11,
      type: 'featured',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      featured: false
    },
    {
      id: 8,
      title: 'Stablecoin Protocol',
      description: 'Algorithmic stablecoin with collateral management and price stability mechanisms. Includes governance token and yield farming features.',
      category: 'defi',
      tech: ['Solidity', 'Hardhat', 'Chainlink', 'React', 'TypeScript'],
      github: 'https://github.com/HuzaifaKhanDeveloper',
      demo: '#',
      stars: 78,
      forks: 21,
      type: 'featured',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const getProjectGlow = (type: string) => {
    switch (type) {
      case 'supernova':
        return 'shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 border-purple-500/30 hover:border-purple-400/60';
      case 'featured':
        return 'shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 border-cyan-500/30 hover:border-cyan-400/60';
      default:
        return 'shadow-lg shadow-gray-900/50 hover:shadow-gray-700/50 border-gray-700 hover:border-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Beta':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'In Development':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
              Project Galaxy
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Navigate through the constellation of my blockchain projects. 
            Each star represents innovation in the Web3 ecosystem, from DeFi protocols to security tools.
          </p>
          
          {/* Project Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{projects.length}+</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{projects.reduce((sum, p) => sum + p.stars, 0)}+</div>
              <div className="text-gray-400 text-sm">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{projects.filter(p => p.status === 'Live').length}</div>
              <div className="text-gray-400 text-sm">Live Projects</div>
            </div>
          </div>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setVisibleProjects(6);
              }}
              className={`group flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-500 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-black/40 text-gray-300 border border-gray-600 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10'
              }`}
            >
              <category.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>{category.label}</span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-black/60 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${getProjectGlow(project.type)}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay with project info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Star size={16} className="text-yellow-400" />
                        <span className="text-white text-sm font-semibold">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Code2 size={16} className="text-gray-300" />
                        <span className="text-white text-sm">{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Status and Type Badges */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  {project.type === 'supernova' && (
                    <div className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/50 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <span>⭐</span>
                      <span>Supernova</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="px-2 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/60 backdrop-blur-sm rounded-lg text-white hover:bg-gray-700 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-md border border-gray-700">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreProjects}
              className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/60 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Load More Projects ({filteredProjects.length - visibleProjects} remaining)
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Have a project in mind?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together. From smart contracts to full-stack DApps, 
            I'm here to bring your Web3 vision to life.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};