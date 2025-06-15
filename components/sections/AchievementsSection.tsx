'use client';

import React, { useState } from 'react';
import { Trophy, Award, Star, Book, ExternalLink, Calendar } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trophies');

  const tabs = [
    { id: 'trophies', label: 'Trophies', icon: Trophy },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'achievements', label: 'Achievements', icon: Star },
    { id: 'blog', label: 'Blog Posts', icon: Book }
  ];

  const trophies = [
    {
      title: 'DeFi Protocol Winner',
      event: 'ETHGlobal Hackathon 2023',
      description: 'First place for innovative yield farming protocol with cross-chain capabilities.',
      date: '2023',
      prize: '$10,000',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Best Security Implementation',
      event: 'Blockchain Security Summit',
      description: 'Recognized for exceptional smart contract security practices.',
      date: '2023',
      prize: 'Recognition',
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Open Source Contributor',
      event: 'GitHub Arctic Code Vault',
      description: 'Code preserved in Arctic Code Vault for future generations.',
      date: '2022',
      prize: 'Badge',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'NFT Innovation Award',
      event: 'Web3 Developer Conference',
      description: 'Outstanding contribution to NFT marketplace development.',
      date: '2022',
      prize: '$5,000',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const certifications = [
    {
      title: 'Certified Ethereum Developer',
      issuer: 'Ethereum Foundation',
      level: 'Expert',
      date: '2023',
      skills: ['Solidity', 'Smart Contracts', 'DApp Development']
    },
    {
      title: 'Blockchain Security Specialist',
      issuer: 'ConsenSys Academy',
      level: 'Professional',
      date: '2023',
      skills: ['Security Auditing', 'Vulnerability Assessment', 'Best Practices']
    },
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      level: 'Associate',
      date: '2022',
      skills: ['Cloud Computing', 'Serverless', 'DevOps']
    }
  ];

  const achievements = [
    {
      metric: '15+',
      label: 'Smart Contracts Audited',
      description: 'Security vulnerabilities identified and resolved'
    },
    {
      metric: '50+',
      label: 'Projects Delivered',
      description: 'Full-stack and blockchain applications'
    },
    {
      metric: '100K+',
      label: 'Lines of Code',
      description: 'Written across various technologies'
    },
    {
      metric: '25+',
      label: 'Open Source Contributions',
      description: 'Contributing to blockchain ecosystem'
    }
  ];

  const blogPosts = [
    {
      title: 'Smart Contract Security: Common Vulnerabilities and How to Avoid Them',
      excerpt: 'A comprehensive guide to identifying and preventing common smart contract vulnerabilities.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Security', 'Solidity', 'Best Practices']
    },
    {
      title: 'Building Cross-Chain DeFi Protocols: Challenges and Solutions',
      excerpt: 'Exploring the technical challenges of building DeFi protocols that work across multiple blockchains.',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['DeFi', 'Cross-chain', 'Architecture']
    },
    {
      title: 'Gas Optimization Techniques for Smart Contracts',
      excerpt: 'Practical tips and techniques to reduce gas costs in your smart contracts.',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['Optimization', 'Gas', 'Ethereum']
    },
    {
      title: 'The Future of Web3: Trends and Predictions for 2024',
      excerpt: 'Analysis of emerging trends in the Web3 space and predictions for the coming year.',
      date: '2024-01-01',
      readTime: '10 min read',
      tags: ['Web3', 'Trends', 'Future']
    }
  ];

  const renderTrophies = () => (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {trophies.map((trophy, index) => (
        <div
          key={index}
          className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 group"
        >
          <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${trophy.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 self-center sm:self-start`}>
              <Trophy size={20} className="sm:w-6 sm:h-6 text-white" />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                {trophy.title}
              </h3>
              <p className="text-yellow-400 font-semibold text-sm mb-2">{trophy.event}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {trophy.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <span className="text-gray-400 text-xs flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {trophy.date}
                </span>
                <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-semibold">
                  {trophy.prize}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
        >
          <div className="text-center mb-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
              <Award size={28} className="sm:w-8 sm:h-8 text-white" />
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
              {cert.title}
            </h3>
            <p className="text-blue-400 font-semibold text-sm">{cert.issuer}</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Level:</span>
              <span className="text-white font-semibold text-sm">{cert.level}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Date:</span>
              <span className="text-white font-semibold text-sm">{cert.date}</span>
            </div>
            
            <div>
              <p className="text-gray-400 text-sm mb-2">Skills:</p>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs leading-tight"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAchievements = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 text-center group"
        >
          <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
            {achievement.metric}
          </div>
          <h3 className="text-white font-semibold text-base sm:text-lg mb-2 group-hover:text-green-400 transition-colors duration-300 leading-tight">
            {achievement.label}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  );

  const renderBlog = () => (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {blogPosts.map((post, index) => (
        <article
          key={index}
          className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group cursor-pointer"
        >
          <div className="flex items-start justify-between mb-3 gap-2">
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight flex-1">
              {post.title}
            </h3>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0" />
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-gray-400 mb-3 gap-1">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs leading-tight"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'trophies':
        return renderTrophies();
      case 'certifications':
        return renderCertifications();
      case 'achievements':
        return renderAchievements();
      case 'blog':
        return renderBlog();
      default:
        return renderTrophies();
    }
  };

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Trophy Chamber
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            A collection of milestones, achievements, and contributions to the blockchain ecosystem. 
            Each trophy represents dedication to excellence.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-500 to-red-600 text-white shadow-lg'
                  : 'bg-black/40 text-gray-300 border border-gray-600 hover:border-yellow-500/50 hover:text-yellow-400'
              }`}
            >
              <tab.icon size={16} className="sm:w-5 sm:h-5" />
              <span className="hidden xs:inline sm:inline">{tab.label}</span>
              <span className="xs:hidden sm:hidden">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="transition-all duration-500">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};