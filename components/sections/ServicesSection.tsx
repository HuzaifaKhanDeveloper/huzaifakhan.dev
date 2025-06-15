'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Coins, Code, Globe, Zap, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

export const ServicesSection: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  // Get featured services (first 6)
  const featuredServices = servicesData.slice(0, 6);

  const handleCardFlip = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-transparent">
              Blockchain Arsenal
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive Web3 development services powered by years of blockchain expertise. 
            From security audits to full-scale DeFi protocols.
          </p>
          
          {/* View All Services Button */}
          <Link href="/services">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <span>View All Services</span>
              <ExternalLink size={18} />
            </button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group perspective-1000 h-80"
              onClick={() => handleCardFlip(parseInt(service.id))}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flippedCard === parseInt(service.id) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full flex flex-col justify-between group-hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                    <div>
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">{service.keyFeatures[0]?.icon || '🔧'}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-cyan-400 font-semibold font-mono text-sm">
                        {service.startingPrice}
                      </span>
                      <ArrowRight className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" size={20} />
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-black/80 backdrop-blur-sm border border-cyan-500/50 rounded-xl p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400 mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {service.overview}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.keyFeatures.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-gray-300 text-xs flex items-center">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                              {feature.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link href={`/services/${service.slug}`}>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Categories */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Security', count: 2, icon: '🛡️', color: 'from-red-500 to-orange-500' },
            { name: 'Development', count: 2, icon: '⚡', color: 'from-blue-500 to-cyan-500' },
            { name: 'Infrastructure', count: 1, icon: '🌐', color: 'from-green-500 to-emerald-500' },
            { name: 'Platform', count: 1, icon: '🚀', color: 'from-purple-500 to-pink-500' }
          ].map((category, index) => (
            <Link key={index} href={`/services?category=${category.name.toLowerCase()}`}>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {category.count} service{category.count !== 1 ? 's' : ''}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Audit Reports Section */}
        <div className="mt-16 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-3">
              Audit Reports & Documentation
            </h3>
            <p className="text-gray-300">
              Download sample audit reports and security documentation hosted on IPFS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'DeFi Protocol Audit', type: 'PDF', size: '2.4 MB' },
              { title: 'NFT Contract Review', type: 'PDF', size: '1.8 MB' },
              { title: 'Token Security Analysis', type: 'PDF', size: '3.1 MB' }
            ].map((doc, index) => (
              <div key={index} className="bg-black/60 border border-gray-700 rounded-lg p-4 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold text-sm group-hover:text-purple-400 transition-colors duration-300">
                      {doc.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                  <button className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 p-2 rounded-lg transition-colors duration-300">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};