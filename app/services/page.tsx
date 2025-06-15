'use client';

import React, { useState } from 'react';
import { ServiceCard } from '@/components/services/ServiceCard';
import { servicesData, getAllCategories } from '@/data/servicesData';
import { Search, Filter, Grid, List, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

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

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Modern Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-r from-cyan-900/60 to-purple-900/60">
        {/* Back to Home Button */}
<div className="absolute top-6 left-126">
  <Link href="/" className="flex items-center gap-2 text-sm text-white hover:text-cyan-400 transition-colors">
    <ArrowLeft size={18} />
    <span>Back to Home</span>
  </Link>
</div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Professional Services
          </h1>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto mb-10">
            Comprehensive blockchain development services to bring your Web3 vision to life. From smart contracts to full-scale DeFi protocols.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="bg-black/40 rounded-xl px-8 py-6 flex flex-col items-center shadow-lg min-w-[140px]">
              <span className="text-3xl font-bold text-cyan-400">50+</span>
              <span className="text-gray-300 text-sm mt-2">Projects Delivered</span>
            </div>
            <div className="bg-black/40 rounded-xl px-8 py-6 flex flex-col items-center shadow-lg min-w-[140px]">
              <span className="text-3xl font-bold text-purple-400">98%</span>
              <span className="text-gray-300 text-sm mt-2">Client Satisfaction</span>
            </div>
            <div className="bg-black/40 rounded-xl px-8 py-6 flex flex-col items-center shadow-lg min-w-[140px]">
              <span className="text-3xl font-bold text-green-400">24h</span>
              <span className="text-gray-300 text-sm mt-2">Response Time</span>
            </div>
            <div className="bg-black/40 rounded-xl px-8 py-6 flex flex-col items-center shadow-lg min-w-[140px]">
              <span className="text-3xl font-bold text-yellow-400">3+</span>
              <span className="text-gray-300 text-sm mt-2">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/40 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={18} className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors duration-300"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
              </select>
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2 bg-black/40 border border-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-400 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  {selectedCategory === 'all' ? 'All Services' : `${selectedCategory} Services`}
                  <span className="text-gray-400 text-lg ml-2">({filteredServices.length})</span>
                </h2>
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
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See What You Need?</h2>
          <p className="text-gray-300 text-lg mb-8">
            I offer custom blockchain development solutions tailored to your specific requirements. 
            Let's discuss your unique project needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Request Custom Quote
            </button>
            <button
              onClick={() => window.open('https://calendly.com/huzaifakhandev', '_blank')}
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}