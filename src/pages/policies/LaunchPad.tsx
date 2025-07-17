import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Star, TrendingUp, Award, ArrowLeft, CheckCircle, Lightbulb } from 'lucide-react';

export const LaunchPad: React.FC = () => {
  const programComponents = [
    {
      icon: <Rocket className="h-6 w-6 text-orange-600" />,
      title: 'Startup Incubation',
      description: 'Comprehensive support for turning ideas into viable businesses'
    },
    {
      icon: <Star className="h-6 w-6 text-orange-600" />,
      title: 'Student Spotlight',
      description: 'Recognition and celebration of outstanding student achievements'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
      title: 'Mentorship Network',
      description: 'Connect with successful entrepreneurs and industry leaders'
    },
    {
      icon: <Award className="h-6 w-6 text-orange-600" />,
      title: 'Legacy Building',
      description: 'Creating lasting impact and inspiring future generations'
    }
  ];

  const incubationServices = [
    {
      title: 'Idea Validation',
      description: 'Market research and feasibility analysis for startup concepts',
      features: ['Market analysis', 'Competitor research', 'Customer validation', 'Business model design']
    },
    {
      title: 'Business Development',
      description: 'Comprehensive support for building sustainable businesses',
      features: ['Business plan development', 'Financial modeling', 'Legal guidance', 'Regulatory compliance']
    },
    {
      title: 'Technical Support',
      description: 'Technology development and product building assistance',
      features: ['MVP development', 'Technical architecture', 'Quality assurance', 'Scalability planning']
    },
    {
      title: 'Funding & Investment',
      description: 'Access to funding opportunities and investor networks',
      features: ['Pitch deck preparation', 'Investor introductions', 'Grant applications', 'Crowdfunding support']
    }
  ];

  const spotlightCategories = [
    { category: 'Academic Excellence', description: 'Outstanding GPA and research achievements' },
    { category: 'Innovation Projects', description: 'Creative solutions and breakthrough innovations' },
    { category: 'Community Impact', description: 'Positive contributions to society and community' },
    { category: 'Leadership Excellence', description: 'Exceptional leadership in student organizations' },
    { category: 'Entrepreneurial Success', description: 'Successful startup launches and business ventures' },
    { category: 'Technical Mastery', description: 'Advanced technical skills and certifications' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Rocket className="h-12 w-12 text-orange-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">LaunchPad & Spotlight</h1>
              <p className="text-xl text-orange-200">Startups & Student Legacy</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Students are future founders. LaunchPad supports turning ideas into startups with 
            mentorship and visibility, while Spotlight honors top-performing students—creating 
            a culture of celebration and legacy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Launching Tomorrow's Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Dual-Purpose Platform</h3>
                <p className="text-slate-600 mb-6">
                  LaunchPad & Spotlight combines startup incubation with student recognition, 
                  creating a comprehensive ecosystem that nurtures entrepreneurship while celebrating 
                  academic and personal achievements. This dual approach fosters innovation and 
                  builds a culture of excellence within ACSES.
                </p>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Program Vision</h4>
                  <p className="text-orange-700 text-sm">
                    "Every student has the potential to create something extraordinary. We provide 
                    the platform, support, and recognition to make it happen."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Program Components</h3>
                <div className="grid grid-cols-2 gap-4">
                  {programComponents.map((component, index) => (
                    <div key={index} className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {component.icon}
                      </div>
                      <h4 className="font-bold text-orange-800 text-sm mb-1">{component.title}</h4>
                      <p className="text-xs text-slate-600">{component.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LaunchPad Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">LaunchPad Incubation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {incubationServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Student Spotlight */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Student Spotlight Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spotlightCategories.map((category, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-6 text-center hover:bg-orange-100 transition-colors">
                  <Star className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-orange-800 mb-2">{category.category}</h3>
                  <p className="text-sm text-slate-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Development */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Program Development</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-center text-slate-600 mb-6">
                LaunchPad & Spotlight is an ambitious program currently in development. We are building 
                partnerships with industry mentors, investors, and successful entrepreneurs to create 
                a comprehensive support system for student innovation and recognition.
              </p>
              
              <div className="bg-orange-50 rounded-lg p-6 text-center">
                <h4 className="font-bold text-orange-800 mb-2">Building Our Network</h4>
                <p className="text-orange-700 text-sm mb-4">
                  We're actively connecting with mentors, investors, and industry partners to create 
                  the foundation for successful student startups and meaningful recognition programs.
                </p>
                <a 
                  href="/#feedback" 
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  Join Our Development Team
                </a>
              </div>
            </div>
          </div>

          {/* Program Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Program Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Application</h3>
                <p className="text-sm text-slate-600">Submit startup idea or achievement portfolio</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Selection</h3>
                <p className="text-sm text-slate-600">Review by expert panel and mentor matching</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Development</h3>
                <p className="text-sm text-slate-600">6-month intensive development program</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Launch/Recognition</h3>
                <p className="text-sm text-slate-600">Public launch event and spotlight ceremony</p>
              </div>
            </div>
          </div>

          {/* Support Network */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Support Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">25+</span>
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Mentor Network</h3>
                <p className="text-sm text-slate-600">Experienced entrepreneurs and industry experts</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">15+</span>
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Partner Organizations</h3>
                <p className="text-sm text-slate-600">Incubators, accelerators, and funding partners</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">50+</span>
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Alumni Network</h3>
                <p className="text-sm text-slate-600">Successful graduates providing ongoing support</p>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-orange-800 to-orange-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-2">20+</div>
                <div className="text-white/90">Startups Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-2">100+</div>
                <div className="text-white/90">Students Recognized</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-2">GHS 2M+</div>
                <div className="text-white/90">Funding Facilitated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-2">500+</div>
                <div className="text-white/90">Jobs Created</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Launch Your Future Today</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join LaunchPad & Spotlight to turn your ideas into reality and build a lasting legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/golden-aim" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Golden AIM
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};