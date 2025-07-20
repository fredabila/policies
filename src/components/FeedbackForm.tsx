import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle, Star, Sparkles, Users, Mail, Phone } from 'lucide-react';

export const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    department: '',
    year: '',
    message: '',
    supportLevel: '3'
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, this would send the data to a server
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        studentId: '',
        department: '',
        year: '',
        message: '',
        supportLevel: '3'
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-2 mb-6">
            <MessageSquare className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Share Your Voice
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-green-600">
            Your ideas shape our vision for ACSES
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Info Panel */}
              <div className="lg:col-span-2 bg-gradient-to-br from-green-600 to-green-700 text-white p-8 md:p-12 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0">
                  <div className="absolute top-6 right-6 w-16 h-16 bg-green-400/20 rounded-full"></div>
                  <div className="absolute bottom-8 left-4 w-20 h-20 bg-green-500/20 rounded-full"></div>
                  <Star className="absolute top-4 left-4 h-6 w-6 text-green-300/50" />
                  <Sparkles className="absolute bottom-4 right-4 h-8 w-8 text-green-300/50" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Your Voice Matters
                    </h3>
                    <p className="text-green-100 mb-6">
                      Every feedback directly influences our campaign and future policies for ACSES.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-green-200 mr-3" />
                        <h4 className="font-semibold text-green-200">Join the Campaign</h4>
                      </div>
                      <p className="text-green-100 text-sm">
                        Want to get involved? Let us know and we'll reach out!
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <Mail className="h-5 w-5 text-green-200 mr-3" />
                        <h4 className="font-semibold text-green-200">Direct Contact</h4>
                      </div>
                      <p className="text-green-100 text-sm">
                        <a href="mailto:topkoder@example.com" className="underline hover:text-white">
                          topkoder@example.com
                        </a>
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center mb-2">
                        <Phone className="h-5 w-5 text-green-200 mr-3" />
                        <h4 className="font-semibold text-green-200">Quick Response</h4>
                      </div>
                      <p className="text-green-100 text-sm">
                        We review and respond to all submissions within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  {/* Social links */}
                  <div className="mt-8 flex space-x-4">
                    <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Form Panel */}
              <div className="lg:col-span-3 p-8 md:p-12">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-green-800 mb-4">Thank You!</h3>
                    <p className="text-green-600 max-w-md text-lg">
                      Your feedback has been submitted successfully. We appreciate your input and will consider it carefully.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-green-500">
                      <Star className="h-5 w-5" />
                      <span className="text-sm font-medium">Your voice shapes our vision</span>
                      <Star className="h-5 w-5" />
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Share Your Ideas</h3>
                      <p className="text-green-600 mb-6">Help us build a better ACSES together</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-green-800 mb-2">Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                            errors.name ? 'border-red-400' : 'border-green-200'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-green-800 mb-2">Email *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                            errors.email ? 'border-red-400' : 'border-green-200'
                          }`}
                          placeholder="Your email address"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="studentId" className="block text-sm font-semibold text-green-800 mb-2">Student ID</label>
                        <input 
                          type="text" 
                          id="studentId" 
                          name="studentId" 
                          value={formData.studentId} 
                          onChange={handleChange} 
                          className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                          placeholder="Optional"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="department" className="block text-sm font-semibold text-green-800 mb-2">Department</label>
                        <input 
                          type="text" 
                          id="department" 
                          name="department" 
                          value={formData.department} 
                          onChange={handleChange} 
                          className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                          placeholder="CS&E"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="year" className="block text-sm font-semibold text-green-800 mb-2">Year of Study</label>
                        <select 
                          id="year" 
                          name="year" 
                          value={formData.year} 
                          onChange={handleChange} 
                          className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        >
                          <option value="">Select year</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-green-800 mb-2">Your Message/Ideas *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows={5} 
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                          errors.message ? 'border-red-400' : 'border-green-200'
                        }`}
                        placeholder="Share your ideas, concerns, or questions about ACSES..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>
                    
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                      <label className="block text-sm font-semibold text-green-800 mb-3">How likely are you to support our candidacy?</label>
                      <div className="flex items-center space-x-3">
                        <input 
                          type="range" 
                          id="supportLevel" 
                          name="supportLevel" 
                          min="1" 
                          max="5" 
                          value={formData.supportLevel} 
                          onChange={handleChange} 
                          className="w-full h-3 bg-green-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="text-sm font-medium text-green-700 min-w-[80px] text-center bg-green-100 px-3 py-1 rounded-full">
                          {formData.supportLevel === '1' && 'Not likely'}
                          {formData.supportLevel === '2' && 'Somewhat'}
                          {formData.supportLevel === '3' && 'Neutral'}
                          {formData.supportLevel === '4' && 'Likely'}
                          {formData.supportLevel === '5' && 'Very likely'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        type="submit" 
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <Send className="h-5 w-5" />
                        Submit Feedback
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};