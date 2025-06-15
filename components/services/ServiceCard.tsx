'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ServiceData } from '@/data/servicesData';

interface ServiceCardProps {
  service: ServiceData;
  featured?: boolean;
  onRequestQuote?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false, onRequestQuote }) => {
  return (
    <div className={`group bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 ${
      featured ? 'ring-2 ring-cyan-500/30' : ''
    }`}>
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.thumbnail}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-500/50">
                {service.category}
              </span>
              <ExternalLink size={16} className="text-white" />
            </div>
          </div>
        </div>

        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      {/* Service Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
            {service.title}
          </h3>
        </div>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
          {service.tagline}
        </p>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-gray-400 text-xs">Starting at</span>
            <div className="text-cyan-400 font-bold text-lg">{service.startingPrice}</div>
          </div>
          <div className="text-gray-400 text-xs">
            {service.timeline}
          </div>
        </div>

        {/* Key Features Preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.keyFeatures.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700"
            >
              {feature.icon} {feature.title}
            </span>
          ))}
          {service.keyFeatures.length > 3 && (
            <span className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-md border border-gray-700">
              +{service.keyFeatures.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col gap-2">
          <Link href={`/services/${service.slug}`}>
            <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 group">
              <span className="font-medium">Learn More</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
          {onRequestQuote && (
            <button
              onClick={onRequestQuote}
              className="w-full flex items-center justify-center space-x-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 py-3 px-4 rounded-lg transition-all duration-300"
            >
              <span className="font-medium">Get Quote</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};