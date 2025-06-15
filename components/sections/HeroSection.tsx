'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Star, GitFork, Users, ExternalLink, Play } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [githubStats, setGithubStats] = useState({
    followers: 0,
    stars: 0,
    repos: 0
  });

  // Move texts outside component or use useMemo to prevent recreation
  const texts = [
    "Hi 👋, I'm Huzaifa Khan!",
    "Full Stack Developer",
    "Blockchain Engineer", 
    "Smart Contract Auditor",
    "Web3 Architect"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts.length]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Animate stats on load
    const animateStats = () => {
      const targetStats = { followers: 3, stars: 4, repos: 2 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setGithubStats({
          followers: Math.floor(targetStats.followers * easeOut),
          stars: Math.floor(targetStats.stars * easeOut),
          repos: Math.floor(targetStats.repos * easeOut)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setGithubStats(targetStats);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background Elements - Responsive positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 sm:top-40 right-8 sm:right-20 w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 sm:bottom-40 left-8 sm:left-20 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-2 sm:w-3 h-2 sm:h-3 bg-pink-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Floating geometric shapes - Responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border border-cyan-400/20 rotate-45 animate-spin opacity-20" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border border-purple-400/20 rotate-12 animate-spin opacity-15" style={{ animationDuration: '25s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-12 relative z-10 w-full">
        {/* Main Heading with improved responsive typography */}
        <div className="space-y-4 sm:space-y-6">
          <div className="relative">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight min-h-[1.2em] px-2 sm:px-0">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className={`text-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                |
              </span>
            </h1>
            
            {/* Glowing effect behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-2xl sm:blur-3xl -z-10 animate-pulse"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-mono max-w-3xl mx-auto leading-relaxed opacity-0 animate-pulse px-4 sm:px-0" style={{ animationDelay: '0.5s', opacity: 1 }}>
            Building the future with <span className="text-cyan-400 font-semibold">Web3</span> and{' '}
            <span className="text-purple-400 font-semibold">Smart Contracts</span>
          </p>
        </div>

        {/* Enhanced GitHub Stats - Compact responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 opacity-0 max-w-sm sm:max-w-2xl mx-auto" style={{ animation: 'fadeIn 1s ease-out 1s forwards' }}>
          <div className="group bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-3 sm:p-4 hover:border-cyan-400/60 hover:bg-cyan-500/5 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <Users size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-lg sm:text-xl font-bold">{githubStats.followers}</span>
            </div>
            <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300">Followers</p>
          </div>
          
          <div className="group bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4 hover:border-purple-400/60 hover:bg-purple-500/5 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="flex items-center justify-center space-x-2 text-purple-400">
              <Star size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-lg sm:text-xl font-bold">{githubStats.stars}</span>
            </div>
            <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300">Stars</p>
          </div>
          
          <div className="group bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 sm:p-4 hover:border-green-400/60 hover:bg-green-500/5 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <GitFork size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-mono text-lg sm:text-xl font-bold">{githubStats.repos}</span>
            </div>
            <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300">Repositories</p>
          </div>
        </div>

        {/* Enhanced CTA Buttons - Responsive layout */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center opacity-0 px-4 sm:px-0" style={{ animation: 'fadeIn 1s ease-out 1.5s forwards' }}>
          <a
            href="https://github.com/HuzaifaKhanDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto sm:min-w-[200px] justify-center text-sm sm:text-base"
          >
            <Github size={18} className="sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>View GitHub</span>
            <ExternalLink size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <button
            onClick={scrollToProjects}
            className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25 flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto sm:min-w-[200px] justify-center text-sm sm:text-base"
          >
            <Play size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
            <span>View Projects</span>
          </button>
          
          <button
            onClick={scrollToContact}
            className="group bg-black/40 backdrop-blur-sm border border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 hover:bg-purple-500/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto sm:min-w-[200px] justify-center text-sm sm:text-base"
          >
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Enhanced Scroll Indicator - Responsive */}
        <div className="opacity-0 pt-4 sm:pt-0" style={{ animation: 'fadeIn 1s ease-out 2s forwards' }}>
          <div className="flex flex-col items-center space-y-1 sm:space-y-2 cursor-pointer group" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-cyan-400 text-xs sm:text-sm font-mono group-hover:text-cyan-300 transition-colors duration-300">Scroll to explore</span>
            <div className="animate-bounce">
              <ChevronDown className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}