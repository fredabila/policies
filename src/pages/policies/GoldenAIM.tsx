import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Database, Users, Star, ArrowLeft, CheckCircle, Zap } from 'lucide-react';

export const GoldenAIM: React.FC = () => {
  const systemFeatures = [
    {
      icon: <Database className="h-6 w-6 text-yellow-600" />,
      title: 'Course Registration',
      description: 'Streamlined course selection and enrollment process'
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: 'Results Access',
      description: 'Instant access to exam results and academic records'
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-600" />,
      title: 'Project Tracking',
      description: 'Monitor progress on academic and research projects'
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: 'Talent Showcase',
      description: 'Platform for students to display their skills and achievements'
    }
  ];

  const modules = [
    {
      title: 'Academic Management',
      description: 'Comprehensive academic record and course management system',
      features: ['Course registration and scheduling', 'Grade tracking and GPA calculation', 'Academic calendar integration', 'Transcript generation']
    },
    {
      title: 'Project Hub',
      description: 'Centralized platform for managing academic and research projects',
      features: ['Project proposal submission', 'Progress tracking and milestones', 'Supervisor assignment', 'Resource allocation']
    },
    {
      title: 'Student Portal',
      description: 'Personalized dashboard for student services and information',
      features: ['Personal profile management', 'Notification center', 'Document repository', 'Communication tools']
    },
    {
      title: 'Talent Network',
      description: 'Platform for showcasing student skills and connecting opportunities',
      features: ['Skill portfolio creation', 'Achievement gallery', 'Peer collaboration', 'Industry connections']
    }
  ];

  const technicalSpecs = [
    { aspect: 'Platform', details: 'Cross-platform mobile and web application' },
    { aspect: 'Technology Stack', details: 'React Native, Node.js, MongoDB, Cloud Infrastructure' },
    { aspect: 'Security', details: 'End-to-end encryption, secure authentication, data privacy' },
    { aspect: 'Scalability', details: 'Cloud-based architecture supporting 10,000+ concurrent users' },
    { aspect: 'Integration', details: 'API connections with university systems and external services' },
    { aspect: 'Accessibility', details: 'WCAG 2.1 compliant, multi-language support' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-yellow-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Smartphone className="h-12 w-12 text-yellow-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">The Golden AIM</h1>
              <p className="text-xl text-yellow-200">Smart System for Smart Generation</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            The ACSES AIM App is more than a platform—it's the operational brain of a modern 
            academic department. This student-built system handles course registration, exam 
            results access, project tracking, talent showcases, and mentorship matching.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* System Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Revolutionary Academic Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">The Future of Academic Administration</h3>
                <p className="text-slate-600 mb-6">
                  The Golden AIM represents a paradigm shift in how academic departments operate. 
                  Built by students, for students, this comprehensive platform integrates all 
                  aspects of academic life into a single, intuitive system that enhances efficiency, 
                  transparency, and student engagement.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-bold text-yellow-800 mb-2">System Philosophy</h4>
                  <p className="text-yellow-700 text-sm">
                    "Technology should simplify, not complicate. We're building a system that 
                    puts students first and makes academic administration seamless."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Core Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {systemFeatures.map((feature, index) => (
                    <div key={index} className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-yellow-800 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* System Modules */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">System Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">{module.title}</h3>
                  <p className="text-slate-600 mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="font-bold text-yellow-800 mb-2">{spec.aspect}</h3>
                  <p className="text-sm text-slate-600">{spec.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Status */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Development Status</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-center text-slate-600 mb-6">
                The Golden AIM is an ambitious project that will revolutionize how our academic department 
                operates. We are currently assembling our development team and defining the technical 
                requirements for this comprehensive system.
              </p>
              
              <div className="bg-yellow-50 rounded-lg p-6 text-center">
                <h4 className="font-bold text-yellow-800 mb-2">Join Our Development Team</h4>
                <p className="text-yellow-700 text-sm mb-4">
                  We're looking for talented students passionate about building solutions that will 
                  benefit the entire ACSES community for years to come.
                </p>
                <a 
                  href="/#feedback" 
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  Contribute to Golden AIM
                </a>
              </div>
            </div>
          </div>

          {/* Student Development Team */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Student Development Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">10+</span>
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Student Developers</h3>
                <p className="text-sm text-slate-600">Talented students building real-world solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">5+</span>
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Faculty Advisors</h3>
                <p className="text-sm text-slate-600">Experienced mentors guiding the development</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">3+</span>
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Industry Partners</h3>
                <p className="text-sm text-slate-600">Professional support and infrastructure</p>
              </div>
            </div>
          </div>

          {/* Benefits & Impact */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">System Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">For Students</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">24/7 access to academic information and services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Streamlined course registration and planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Real-time project tracking and collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Enhanced networking and mentorship opportunities</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">For Administration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Automated administrative processes and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Improved data accuracy and accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Enhanced communication with students</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Comprehensive analytics and insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-yellow-800 to-yellow-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">100%</div>
                <div className="text-white/90">Digital Transformation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">80%</div>
                <div className="text-white/90">Time Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">95%</div>
                <div className="text-white/90">User Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">50%</div>
                <div className="text-white/90">Process Efficiency</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Join the Digital Revolution</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Be part of building the future of academic administration with the Golden AIM system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};