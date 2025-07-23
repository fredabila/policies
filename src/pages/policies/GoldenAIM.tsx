import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Database, Users, Star, ArrowLeft, CheckCircle, Zap, Sparkles, Target, Globe } from 'lucide-react';

export const GoldenAIM: React.FC = () => {
  const systemFeatures = [
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: 'Course Registration',
      description: 'Streamlined enrollment'
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: 'Results Access',
      description: 'Instant academic records'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Project Tracking',
      description: 'Monitor progress'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Talent Showcase',
      description: 'Display achievements'
    }
  ];

  const modules = [
    {
      title: 'Academic Management',
      description: 'Complete academic record system',
      icon: <Database className="h-8 w-8 text-green-600" />,
      features: ['Course registration', 'Grade tracking', 'Academic calendar', 'Transcripts']
    },
    {
      title: 'Project Hub',
      description: 'Centralized project platform',
      icon: <Target className="h-8 w-8 text-green-600" />,
      features: ['Project proposals', 'Progress tracking', 'Supervisor assignment', 'Resources']
    },
    {
      title: 'Student Portal',
      description: 'Personalized dashboard',
      icon: <Users className="h-8 w-8 text-green-600" />,
      features: ['Profile management', 'Notifications', 'Documents', 'Communication']
    },
    {
      title: 'Talent Network',
      description: 'Skills showcase platform',
      icon: <Star className="h-8 w-8 text-green-600" />,
      features: ['Skill portfolios', 'Achievement gallery', 'Collaboration', 'Industry links']
    }
  ];

  const technicalSpecs = [
    { aspect: 'Platform', details: 'Cross-platform mobile & web' },
    { aspect: 'Technology', details: 'React Native, Node.js, MongoDB' },
    { aspect: 'Security', details: 'End-to-end encryption' },
    { aspect: 'Scale', details: '10,000+ concurrent users' },
    { aspect: 'Integration', details: 'University systems API' },
    { aspect: 'Access', details: 'WCAG 2.1 compliant' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-8 right-12 w-24 h-24 bg-green-400/20 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-32 h-32 bg-green-500/20 rounded-full"></div>
          <Star className="absolute top-4 left-4 h-8 w-8 text-green-300/50" />
          <Sparkles className="absolute bottom-4 right-4 h-6 w-6 text-green-300/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-4 bg-green-500 rounded-2xl mr-4">
                  <Smartphone className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES AIM APP</h1>
                  <p className="text-xl text-green-200">Academic Intelligence & Management</p>
                </div>
              </div>
              
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                Revolutionary academic management system built by students, for students
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {systemFeatures.map((feature, index) => (
                  <div key={index} className="bg-green-500/30 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <div className="p-2 bg-green-600 rounded-lg">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-green-100">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Mobile app mockup */}
                <div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Smartphone className="h-12 w-12 text-white" />
                    </div>
                    <div className="text-green-800 font-bold text-xl mb-2">Golden AIM App</div>
                    <div className="text-green-600 text-sm mb-4">Academic Management System</div>
                    
                    {/* App interface preview */}
                    <div className="grid grid-cols-2 gap-2 max-w-48 mx-auto">
                      <div className="bg-green-600 rounded-lg p-2 text-white text-xs">Dashboard</div>
                      <div className="bg-green-500 rounded-lg p-2 text-white text-xs">Courses</div>
                      <div className="bg-green-400 rounded-lg p-2 text-white text-xs">Results</div>
                      <div className="bg-green-300 rounded-lg p-2 text-green-800 text-xs">Projects</div>
                    </div>
                  </div>
                  {/* Floating UI elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-300/50 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400/50 rounded-full"></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-green-500/50 rounded-full"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Smart Academic Solution</h3>
                  <p className="text-green-600 text-sm">Built by students, for students</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-xl">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border-4 border-green-500 rounded-full p-3 shadow-xl">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* System Overview with Visual */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Revolutionary Academic Management</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                The future of academic administration - streamlined, efficient, student-centered
              </p>
            </div>
            
            {/* Visual system architecture */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white mb-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Integrated System Architecture</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Smartphone className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Mobile App</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Web Portal</div>
                      </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Database className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Database</div>
                    </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-semibold">API</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Modules Grid */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Core System Modules</h2>
              <p className="text-green-600">Comprehensive solutions for every academic need</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-xl mr-4">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800">{module.title}</h3>
                      <p className="text-green-600 text-sm">{module.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="bg-green-50 rounded-lg p-3 text-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto mb-1" />
                        <span className="text-green-700 text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Visual */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Technical Excellence</h2>
              <p className="text-green-600">Built with modern technology stack for reliability and performance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">{spec.aspect}</h4>
                  <p className="text-green-600 text-sm">{spec.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics Visual */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 text-white mb-12 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-8 w-20 h-20 bg-green-400/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-green-500/20 rounded-full"></div>
              <Sparkles className="absolute top-6 left-8 h-8 w-8 text-green-300/50" />
          </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center">Expected Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">100%</div>
                  <div className="text-green-100">Digital</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">24/7</div>
                  <div className="text-green-100">Access</div>
              </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">10K+</div>
                  <div className="text-green-100">Users</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">∞</div>
                  <div className="text-green-100">Possibilities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Phases Visual */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Development Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { phase: 1, title: 'Planning', desc: 'System design & requirements', icon: <Target className="h-6 w-6" /> },
                { phase: 2, title: 'Development', desc: 'Core features implementation', icon: <Zap className="h-6 w-6" /> },
                { phase: 3, title: 'Testing', desc: 'Quality assurance & debugging', icon: <CheckCircle className="h-6 w-6" /> },
                { phase: 4, title: 'Launch', desc: 'Deployment & user training', icon: <Star className="h-6 w-6" /> }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-300 z-0"></div>
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {item.icon}
              </div>
                    <h3 className="font-bold text-green-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-green-600">{item.desc}</p>
              </div>
            </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white border-2 border-green-200 rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">The Future is Golden</h2>
                <p className="text-green-600 mb-8 max-w-2xl mx-auto">
                  Join us in revolutionizing academic management with the Golden AIM system
            </p>
              </div>
              
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
              >
                  <Sparkles className="h-5 w-5" />
                  Support Golden AIM
              </a>
              <Link 
                  to="/policies/flexi-net" 
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
              >
                  Next: FlexiNet
                  <ArrowLeft className="h-5 w-5 rotate-180" />
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};