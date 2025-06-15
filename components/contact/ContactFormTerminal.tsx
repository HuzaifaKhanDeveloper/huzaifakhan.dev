'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface TerminalLine {
  text: string;
  type: 'normal' | 'success' | 'error' | 'warning';
  timestamp?: string;
}

export const ContactFormTerminal: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([
    { text: '> Initializing secure communication channel...', type: 'normal' },
    { text: '> Status: READY', type: 'success' },
    { text: '> Awaiting transmission...', type: 'normal' }
  ]);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Blinking cursor animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addTerminalLine = (text: string, type: TerminalLine['type'] = 'normal', delay = 0) => {
    setTimeout(() => {
      setTerminalLines(prev => [...prev, { 
        text, 
        type, 
        timestamp: new Date().toLocaleTimeString() 
      }]);
    }, delay);
  };

  const simulateTransmission = async () => {
    const steps = [
      { text: '> Initiating secure data transfer...', type: 'normal' as const, delay: 500 },
      { text: '> Encrypting payload using AES-256...', type: 'warning' as const, delay: 1000 },
      { text: '> Establishing connection to recipient server...', type: 'normal' as const, delay: 1500 },
      { text: '> Transmitting data packets...', type: 'normal' as const, delay: 2000 },
    ];

    steps.forEach(step => {
      addTerminalLine(step.text, step.type, step.delay);
    });

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Success scenario
      addTerminalLine('> Data integrity verified.', 'success', 2500);
      addTerminalLine('> Message sent successfully!', 'success', 3000);
      addTerminalLine('> Connection terminated securely.', 'normal', 3500);
      addTerminalLine('> System idle. Awaiting next command...', 'normal', 4000);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Error scenario
      addTerminalLine('> ERROR: Transmission failed.', 'error', 2500);
      addTerminalLine('> Check network and server logs for details.', 'error', 3000);
      addTerminalLine('> Please retry transmission or contact directly via direct channels.', 'warning', 3500);
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    await simulateTransmission();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const getLineColor = (type: TerminalLine['type']) => {
    switch (type) {
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-cyan-400';
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
      {/* Contact Form */}
      <div className="space-y-8">
        <div className="text-center lg:text-left">
          <h3 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Secure Communication
            </span>
          </h3>
          <p className="text-gray-300 text-lg">
            Establish encrypted connection for project discussions and collaboration opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                <User size={16} className="inline mr-2" />
                Name *
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
                Email *
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

          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              <MessageSquare size={16} className="inline mr-2" />
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-black/60 ${
                errors.subject ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20'
              }`}
              placeholder="Project discussion, collaboration, etc."
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 hover:bg-black/60 resize-none ${
                errors.message ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20'
              }`}
              placeholder="Tell me about your project requirements, timeline, and how I can help..."
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 hover:shadow-lg hover:shadow-cyan-500/25'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Send Secure Message</span>
              </>
            )}
          </button>
          
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <CheckCircle size={20} />
              <span>Message transmitted successfully! I'll respond within 24 hours.</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <AlertCircle size={20} />
              <span>Transmission failed. Please try again or contact me directly.</span>
            </div>
          )}
        </form>
      </div>

      {/* Terminal Display */}
      <div className="space-y-6">
        <div className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-3 border-b border-cyan-500/30">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-cyan-400 font-mono text-sm">
                secure-terminal@huzaifakhan.dev
              </span>
            </div>
          </div>
          
          <div 
            ref={terminalRef}
            className="p-6 font-mono text-sm space-y-2 min-h-[400px] max-h-[500px] overflow-y-auto"
          >
            {terminalLines.map((line, index) => (
              <div key={index} className={`${getLineColor(line.type)} leading-relaxed`}>
                {line.text}
                {line.timestamp && (
                  <span className="text-gray-500 text-xs ml-2">
                    [{line.timestamp}]
                  </span>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-cyan-400">{'> '}</span>
              <span className={`text-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
                █
              </span>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
            System Status
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Encryption:</span>
              <span className="text-green-400 font-semibold">AES-256 Active</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Connection:</span>
              <span className="text-green-400 font-semibold">Secure</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Response Time:</span>
              <span className="text-cyan-400 font-semibold">24-48 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Availability:</span>
              <span className="text-green-400 font-semibold">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};