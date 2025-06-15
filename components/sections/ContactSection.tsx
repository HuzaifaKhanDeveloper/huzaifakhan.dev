'use client';

import React, { useState } from 'react';
import { Send, Mail, MessageSquare, User, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '> Initializing secure communication channel...',
    '> Status: READY',
    '> Awaiting transmission...'
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add terminal animation
    setTerminalLines(prev => [...prev, '> Processing transmission...']);
    
    try {
      // Simulate API call - replace with actual EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setTerminalLines(prev => [...prev, '> Message transmitted successfully!', '> Connection established.']);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setTerminalLines(prev => [...prev, '> ERROR: Transmission failed.', '> Please retry.']);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'huzaifakhandeveloper@gmail.com',
      href: 'mailto:huzaifakhandeveloper@gmail.com',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: MessageSquare,
      label: 'LinkedIn',
      value: '@huzaifakhandev', 
      href: 'https://linkedin.com/in/huzaifakhandev',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
              Mission Control
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Ready to launch your next blockchain project? Establish secure communication 
            and let's build the future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center">
                <Send className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                Send Transmission
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/40 border border-gray-700 rounded-lg pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/40 border border-gray-700 rounded-lg pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Project discussion, audit request, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-2.5 sm:py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base sm:rows-6"
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 py-3 sm:py-3.5 px-6 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-green-600 hover:from-cyan-600 hover:to-green-700 transform hover:scale-105 active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="flex items-start sm:items-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <CheckCircle size={16} className="sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-sm sm:text-base">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-start sm:items-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    <AlertCircle size={16} className="sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className="text-sm sm:text-base">Failed to send message. Please try again or contact me directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Terminal & Contact Info */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Terminal */}
            <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-xl overflow-hidden">
              <div className="bg-green-500/10 px-3 sm:px-4 py-2 border-b border-green-500/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 font-mono text-xs sm:text-sm ml-2 sm:ml-4 truncate">
                    terminal@huzaifakhan.dev
                  </span>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm space-y-1 min-h-[150px] sm:min-h-[200px] overflow-hidden">
                {terminalLines.map((line, index) => (
                  <div key={index} className="text-green-400 break-words">
                    {line}
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="text-green-400">{'> '}</span>
                  <span className="animate-pulse text-green-400">█</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Direct Channels</h3>
              
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black/60 backdrop-blur-sm border border-gray-700 rounded-xl p-3 sm:p-4 hover:border-cyan-500/50 transition-all duration-300 group active:scale-95"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <method.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                        {method.label}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm truncate">{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="bg-black/60 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 sm:p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-green-400 font-semibold text-sm sm:text-base">Status: Available</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Currently accepting new projects and collaboration opportunities. 
                Response time: 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};