'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle, Loader2, DollarSign, Clock, User, Mail, MessageSquare } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

export const CustomQuoteForm: React.FC<QuoteFormProps> = ({ isOpen, onClose, initialService = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: initialService,
    budgetRange: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const projectTypes = [
    'Smart Contract Development',
    'DeFi Protocol Development',
    'NFT Marketplace',
    'Cross-Chain Bridge',
    'Token Launchpad',
    'DAO Governance',
    'Smart Contract Audit',
    'Custom Blockchain Solution',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.message.trim()) newErrors.message = 'Project description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          projectType: '',
          budgetRange: '',
          timeline: '',
          message: ''
        });
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">Request Custom Quote</h2>
            <p className="text-gray-300 text-sm mt-1">Get a personalized quote for your Web3 project</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <User size={16} className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-black/60 ${
                  errors.name ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <Mail size={16} className="inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-black/60 ${
                  errors.email ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Project Type *
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white focus:outline-none transition-all duration-300 hover:bg-black/60 ${
                errors.projectType ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20'
              }`}
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type} className="bg-black text-white">{type}</option>
              ))}
            </select>
            {errors.projectType && <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>}
          </div>

          {/* Budget and Timeline */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <DollarSign size={16} className="inline mr-2" />
                Budget Range
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all duration-300 hover:bg-black/60 focus:shadow-lg focus:shadow-cyan-500/20"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="bg-black text-white">{range}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <Clock size={16} className="inline mr-2" />
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-all duration-300 hover:bg-black/60 focus:shadow-lg focus:shadow-cyan-500/20"
              >
                <option value="">Select timeline</option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option} className="bg-black text-white">{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              <MessageSquare size={16} className="inline mr-2" />
              Project Description *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-black/60 resize-none ${
                errors.message ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20'
              }`}
              placeholder="Describe your project requirements, goals, features needed, and any specific technical requirements..."
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-gray-300 hover:text-white transition-colors duration-300"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className={`flex items-center space-x-3 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : submitStatus === 'success'
                  ? 'bg-green-600'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-500/25'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle size={18} />
                  <span>Sent!</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Quote Request</span>
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <CheckCircle size={18} />
              <span>Quote request sent successfully! I'll get back to you within 24 hours with a detailed proposal.</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <AlertCircle size={18} />
              <span>Failed to send quote request. Please try again or contact me directly.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};