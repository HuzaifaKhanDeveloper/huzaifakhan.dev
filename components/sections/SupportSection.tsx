'use client';

import React, { useState } from 'react';
import { Coffee, Heart, Zap, Users, ExternalLink, Gift } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [recentSupport] = useState([
    { name: 'Anonymous', amount: '$5', message: 'Great work on the DeFi tutorial!', time: '2 hours ago' },
    { name: 'Sarah Chen', amount: '$10', message: 'Thanks for the security audit insights', time: '1 day ago' },
    { name: 'DevCommunity', amount: '$25', message: 'Keep building awesome tools!', time: '3 days ago' }
  ]);

  const supportTiers = [
    {
      name: 'Coffee Fuel',
      amount: '$3',
      icon: Coffee,
      description: 'Help me stay caffeinated during late-night coding sessions',
      color: 'from-amber-400 to-orange-500',
      perks: ['Early access to tutorials', 'Discord community access']
    },
    {
      name: 'Code Catalyst',
      amount: '$10',
      icon: Zap,
      description: 'Support ongoing open-source development',
      color: 'from-blue-400 to-purple-500',
      perks: ['All Coffee benefits', 'Code review sessions', 'Project feedback']
    },
    {
      name: 'Innovation Sponsor',
      amount: '$25',
      icon: Heart,
      description: 'Become a patron of blockchain innovation',
      color: 'from-pink-400 to-red-500',
      perks: ['All previous benefits', '1-on-1 mentoring calls', 'Custom code samples']
    }
  ];

  return (
    <section id="support" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
              Support Reactor
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Fuel the future of open-source blockchain development. 
            Your support helps me create better tools and tutorials for the community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 3D Coffee Cup Animation */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              <div
                className={`w-64 h-64 transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flipped ? 'rotate-y-180' : ''
                }`}
                onClick={() => setFlipped(!flipped)}
              >
                {/* Front Side - Coffee Cup */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-amber-400 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300">
                    <Coffee size={80} className="text-white" />
                  </div>
                </div>

                {/* Back Side - ETH Symbol */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="w-full h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300">
                    <span className="text-white text-6xl font-bold">Ξ</span>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-gray-400 text-sm mt-4">
                Click to flip • Coffee ↔ Crypto
              </p>
            </div>

            {/* Support CTA */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Help me build more awesome tools 🚀
              </h3>
              <p className="text-gray-300 max-w-md">
                Every contribution, no matter the size, helps me dedicate more time to creating 
                open-source blockchain tools and educational content.
              </p>
              
              <a
                href="https://ko-fi.com/huzaifakhandev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-orange-600 hover:from-pink-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Gift size={20} />
                <span>Support on Ko-fi</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Support Tiers & Activity */}
          <div className="space-y-8">
            {/* Support Tiers */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="mr-3 text-pink-400" />
                Support Tiers
              </h3>
              
              <div className="space-y-4">
                {supportTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <tier.icon size={24} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                            {tier.name}
                          </h4>
                          <span className="text-pink-400 font-bold text-lg">
                            {tier.amount}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-3">
                          {tier.description}
                        </p>
                        
                        <div className="space-y-1">
                          {tier.perks.map((perk, perkIndex) => (
                            <div key={perkIndex} className="flex items-center text-xs text-gray-400">
                              <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></span>
                              {perk}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Support Activity */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Heart className="mr-3 text-red-400" />
                Recent Support
              </h3>
              
              <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="space-y-4">
                  {recentSupport.map((support, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 bg-black/40 rounded-lg border border-gray-700/50">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                        <Heart size={16} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white font-semibold text-sm">
                            {support.name}
                          </span>
                          <span className="text-pink-400 font-bold text-sm">
                            {support.amount}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-xs mb-1">
                          "{support.message}"
                        </p>
                        
                        <span className="text-gray-500 text-xs">
                          {support.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    Join <span className="text-pink-400 font-semibold">12+</span> supporters 
                    helping fuel innovation 🚀
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Support Methods */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-4">Other Ways to Support</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Star my repositories on GitHub
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Share my tutorials and projects
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Contribute to open-source projects
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Recommend me for blockchain projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};