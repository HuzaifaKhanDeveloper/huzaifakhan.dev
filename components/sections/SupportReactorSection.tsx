'use client';

import React, { useState } from 'react';
import { Copy, Check, Wallet, Zap, Heart, ExternalLink } from 'lucide-react';

export const SupportReactorSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const walletAddresses = [
    {
      network: 'Binance Smart Chain (BSC)',
      address: '0xa340f783AA730B41d59Ba7e1E3A92a1D4f08D2BA',
      icon: '🟡',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      network: 'Solana',
      address: '5YZ4EH9DndqQ394e49iyCW9ReFwvp7xmezc6WHe8Dkrb',
      icon: '🟣',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const copyToClipboard = async (address: string, network: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(network);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  return (
    <section id="support-reactor" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Support Reactor
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Power the future of open-source blockchain development. Your support helps me create 
            better tools, tutorials, and educational content for the Web3 community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Message */}
          <div className="space-y-8">
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Fuel Innovation</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Every contribution, big or small, powers innovation and education in Web3. 
                Your support enables me to:
              </p>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <Zap size={16} className="text-green-400 flex-shrink-0" />
                  <span>Develop open-source blockchain tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap size={16} className="text-green-400 flex-shrink-0" />
                  <span>Create comprehensive Web3 tutorials</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap size={16} className="text-green-400 flex-shrink-0" />
                  <span>Maintain security-focused documentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap size={16} className="text-green-400 flex-shrink-0" />
                  <span>Support the developer community</span>
                </li>
              </ul>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-400/60 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Open Source Projects</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center hover:border-green-400/60 transition-all duration-300">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Developers Helped</div>
              </div>
            </div>
          </div>

          {/* Right Side - Crypto Addresses */}
          <div className="space-y-6">
            <div className="bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
                <Wallet className="mr-3" />
                Support with Crypto
              </h3>
              
              <div className="space-y-6">
                {walletAddresses.map((wallet, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{wallet.icon}</span>
                      <h4 className="text-lg font-semibold text-white">{wallet.network}</h4>
                    </div>
                    
                    <div className="bg-black/80 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <code className="text-cyan-400 font-mono text-sm break-all pr-4">
                          {wallet.address}
                        </code>
                        <button
                          onClick={() => copyToClipboard(wallet.address, wallet.network)}
                          className="flex-shrink-0 p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-all duration-300 hover:scale-110"
                          title="Copy address"
                        >
                          {copiedAddress === wallet.network ? (
                            <Check size={16} className="text-green-400" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                      
                      {copiedAddress === wallet.network && (
                        <div className="mt-2 text-green-400 text-xs font-semibold">
                          ✓ Address copied to clipboard!
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alternative Support */}
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-purple-400 mb-4">Other Ways to Support</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Star my repositories on GitHub
                </div>
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Share my tutorials and projects
                </div>
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Contribute to open-source projects
                </div>
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  Recommend me for blockchain projects
                </div>
              </div>
            </div>

            {/* Ko-fi Link */}
            <a
              href="https://ko-fi.com/huzaifakhandev"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-pink-500 to-orange-600 hover:from-pink-600 hover:to-orange-700 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 text-center"
            >
              <div className="flex items-center justify-center space-x-3">
                <span>☕</span>
                <span>Support on Ko-fi</span>
                <ExternalLink size={16} />
              </div>
            </a>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-green-400 font-semibold">
                "Every contribution, big or small, powers innovation and education in Web3. Thank you!"
              </span>
            </p>
            <div className="mt-4 text-gray-400 text-sm">
              - Building the future, one block at a time 🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};