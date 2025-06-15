'use client';

import React, { useState } from 'react';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CustomQuoteForm } from '@/components/services/CustomQuoteForm';
import { servicesData, getAllCategories } from '@/data/servicesData';
import { Search, Filter, Grid, List, ArrowLeft, Users, Award, Clock, TrendingUp, Star, GitBranch } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  // Add state for quote form
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const categories = ['all', ...getAllCategories()];

  const filteredServices = servicesData
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseInt(a.startingPrice.replace(/[^0-9]/g, '')) - parseInt(b.startingPrice.replace(/[^0-9]/g, ''));
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  // Function to open quote form
  const openQuoteForm = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsQuoteFormOpen(true);
  };

  // Function to close quote form
  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen bg-[#06001B] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Adjusted colors and opacity to match the theme */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-purple-700/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border-2 border-cyan-600/30 rotate-12 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-purple-600/20 rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-8 h-8 border-2 border-cyan-500/40 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-purple-700/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-600/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-purple-600/40 rounded-full"></div>

        {/* Hexagon shapes - matched colors to the theme */}
        <div className="absolute top-32 left-1/3 w-24 h-24 transform rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-32 right-1/4 w-16 h-16 transform rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Professional Header */}
      <header className="relative z-10 bg-[#06001B]/90 backdrop-blur-sm border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="hidden md:block">
              <button
                onClick={() => openQuoteForm()}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Professional{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Blockchain
              </span>
              <br />
              <span className="text-4xl md:text-6xl">Development Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto">
              Building the future with <span className="text-cyan-400 font-semibold">Web3</span> and{' '}
              <span className="text-purple-400 font-semibold">Smart Contracts</span>.
              Enterprise-grade solutions that drive innovation and deliver results.
            </p>

            {/* GitHub-style Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400 text-sm font-medium">Projects Delivered</div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all group">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400 text-sm font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">24h</div>
                <div className="text-gray-400 text-sm font-medium">Response Time</div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all group">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">3+</div>
                <div className="text-gray-400 text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive blockchain development services tailored to accelerate your Web3 transformation
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 mb-16">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all backdrop-blur-sm"
                />
              </div>

              <div className="flex flex-wrap items-center gap-6">
                {/* Category Filter */}
                <div className="flex items-center space-x-3">
                  <Filter size={18} className="text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3.5 text-white focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all backdrop-blur-sm"
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 text-sm font-medium">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3.5 text-white focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all backdrop-blur-sm"
                  >
                    <option value="name" className="bg-gray-800">Name</option>
                    <option value="price" className="bg-gray-800">Price</option>
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex items-center space-x-1 bg-gray-800/50 border border-gray-700/50 rounded-xl p-1 backdrop-blur-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-all ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg transition-all ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-24 h-24 mx-auto mb-8 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 text-lg">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedCategory === 'all' ? 'All Services' : `${selectedCategory} Services`}
                  </h3>
                  <p className="text-gray-400">
                    {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} available
                  </p>
                </div>
              </div>

              <div className={`grid gap-8 ${
                viewMode === 'grid'
                  ? 'md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1 max-w-4xl mx-auto'
              }`}>
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    featured={index === 0 && selectedCategory === 'all'}
                    onRequestQuote={() => openQuoteForm(service.title)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Something{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Custom?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Every project is unique. We specialize in creating tailored blockchain solutions
              that align perfectly with your vision and technical requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => openQuoteForm()}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Request Custom Quote
              </button>
              <button
                onClick={() => window.open('https://calendly.com/huzaifakhandev', '_blank')}
                className="border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      <CustomQuoteForm
        isOpen={isQuoteFormOpen}
        onClose={closeQuoteForm}
        initialService={selectedService}
      />
    </div>
  );
}