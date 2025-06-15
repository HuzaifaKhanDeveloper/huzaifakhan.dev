'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <Home size={18} />
              <span>Go Home</span>
            </button>
          </Link>
          
          <Link href="/services">
            <button className="flex items-center space-x-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
              <Search size={18} />
              <span>Browse Services</span>
            </button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              About
            </Link>
            <Link href="/#projects" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Projects
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Services
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mx-auto mt-8"
        >
          <ArrowLeft size={18} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}