'use client';

import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, CheckCircle, Users, Award, MessageSquare } from 'lucide-react';
import { ServiceData } from '@/data/servicesData';
import { QuoteForm } from './QuoteForm';

interface ServiceDetailProps {
  service: ServiceData;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [selectedPricingTier, setSelectedPricingTier] = useState(1);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold border border-cyan-500/50">
                  {service.category}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-400 text-sm ml-2">(4.9/5)</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {service.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {service.tagline}
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">{service.startingPrice}</div>
                  <div className="text-gray-400 text-sm">Starting price</div>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock size={18} />
                  <span>{service.timeline}</span>
                </div>
              </div>

              <button
                onClick={() => setIsQuoteFormOpen(true)}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Custom Quote
              </button>
            </div>

            <div className="relative">
              <div className="bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Projects Completed</span>
                    <span className="text-white font-semibold">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-white font-semibold">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Average Timeline</span>
                    <span className="text-white font-semibold">{service.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Support Included</span>
                    <span className="text-green-400 font-semibold">✓ Yes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.detailedDescription}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What You'll Receive</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Testimonial */}
              {service.testimonial && (
                <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={service.testimonial.avatar}
                      alt={service.testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white font-semibold">{service.testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{service.testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{service.testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm italic">
                    "{service.testimonial.content}"
                  </p>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Ready to Start?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get a custom quote tailored to your specific requirements.
                </p>
                <button
                  onClick={() => setIsQuoteFormOpen(true)}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Key Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Pricing Options</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-black/60 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
                  tier.popular
                    ? 'border-cyan-500 ring-2 ring-cyan-500/30'
                    : 'border-gray-700 hover:border-cyan-500/50'
                }`}
              >
                {tier.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg mb-4 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">{tier.price}</div>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setIsQuoteFormOpen(true)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                {step.duration && (
                  <span className="text-cyan-400 text-xs font-semibold">{step.duration}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {service.caseStudy && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Success Story</h2>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">{service.caseStudy.title}</h3>
              <p className="text-gray-300 text-lg mb-6">{service.caseStudy.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">{result}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss your project requirements and create a custom solution for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteFormOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        serviceName={service.title}
      />
    </div>
  );
};