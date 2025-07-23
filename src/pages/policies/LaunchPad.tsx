import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Star, TrendingUp, Award, ArrowLeft, CheckCircle, Lightbulb, Sparkles, Target, Globe, Zap } from 'lucide-react';

export const LaunchPad: React.FC = () => {
  const programComponents = [
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: 'Startup Incubation',
      description: 'Ideas to businesses'
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: 'Student Spotlight',
      description: 'Celebrate achievements'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: 'Mentorship Network',
      description: 'Industry connections'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Legacy Building',
      description: 'Lasting impact'
    }
  ];

  const incubationServices = [
    {
      title: 'Idea Validation',
      description: 'Market research & analysis',
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      features: ['Market analysis', 'Competitor research', 'Customer validation', 'Business models']
    },
    {
      title: 'Business Development',
      description: 'Building sustainable businesses',
      icon: <Target className="h-8 w-8 text-green-600" />,
      features: ['Business plans', 'Financial modeling', 'Legal guidance', 'Compliance']
    },
    {
      title: 'Technical Support',
      description: 'Product development assistance',
      icon: <Zap className="h-8 w-8 text-green-600" />,
      features: ['MVP development', 'Architecture', 'Quality assurance', 'Scalability']
    },
    {
      title: 'Funding & Investment',
      description: 'Access to funding opportunities',
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      features: ['Pitch decks', 'Investor introductions', 'Grant applications', 'Crowdfunding']
    }
  ];

  const spotlightCategories = [
    'Academic Excellence',
    'Innovation Projects',
    'Leadership Impact',
    'Community Service',
    'Entrepreneurship'
  ];

  const supportStages = [
    { stage: 'Ideation', focus: 'Concept development', icon: <Lightbulb className="h-6 w-6" /> },
    { stage: 'Validation', focus: 'Market testing', icon: <Target className="h-6 w-6" /> },
    { stage: 'Development', focus: 'MVP building', icon: <Zap className="h-6 w-6" /> },
    { stage: 'Launch', focus: 'Market entry', icon: <Rocket className="h-6 w-6" /> }
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
                  <Rocket className="h-12 w-12 text-white" />
        </div>
              <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES LaunchPad</h1>
                  <p className="text-xl text-green-200">Where Ideas Take Flight</p>
                </div>
              </div>
              
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                Transforming student ideas into successful ventures and celebrating outstanding achievements
              </p>
              
                <div className="grid grid-cols-2 gap-4">
                  {programComponents.map((component, index) => (
                  <div key={index} className="bg-green-500/30 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="mb-2 flex justify-center">
                      <div className="p-2 bg-green-600 rounded-lg">
                        {component.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{component.title}</h4>
                    <p className="text-xs text-green-100">{component.description}</p>
                    </div>
                  ))}
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Startup launch illustration */}
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-green-800 font-bold text-lg mb-2">LaunchPad Incubator</div>
                    <div className="text-green-600 text-sm mb-4">Ideas → Startups → Success</div>
                    
                    {/* Launch trajectory visualization */}
                    <div className="flex justify-center items-end space-x-2 mb-4">
                      <div className="w-3 h-6 bg-green-600 rounded-t-lg"></div>
                      <div className="w-3 h-8 bg-green-500 rounded-t-lg"></div>
                      <div className="w-3 h-10 bg-green-400 rounded-t-lg"></div>
                      <div className="w-3 h-12 bg-green-300 rounded-t-lg"></div>
                    </div>
                    <div className="text-green-700 text-xs font-medium">Growth Trajectory</div>
                  </div>
                  {/* Floating innovation symbols */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-300/50 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-green-700" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400/50 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-green-700" />
                  </div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-green-500/50 rounded-full"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Innovation Ecosystem</h3>
                  <p className="text-green-600 text-sm">Launch • Grow • Succeed</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-xl">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border-4 border-green-500 rounded-full p-3 shadow-xl">
                <Star className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Incubation Services */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Incubation Services</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Comprehensive support from idea to market launch
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {incubationServices.map((service, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-xl mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800">{service.title}</h3>
                      <p className="text-green-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
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

          {/* Support Stages */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Startup Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {supportStages.map((stage, index) => (
                <div key={index} className="text-center relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-300 z-0"></div>
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {stage.icon}
                    </div>
                    <h3 className="font-bold text-green-800 mb-2">{stage.stage}</h3>
                    <p className="text-sm text-green-600">{stage.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Spotlight Categories */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Student Spotlight</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Celebrating outstanding achievements across multiple categories
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {spotlightCategories.map((category, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2 text-sm">{category}</h4>
              </div>
              ))}
            </div>
          </div>

          {/* Program Benefits */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Program Benefits</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Comprehensive support for aspiring entrepreneurs
              </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">Fast-Track Support</h4>
                  <p className="text-green-600 text-sm">Accelerated development programs</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">Industry Network</h4>
                  <p className="text-green-600 text-sm">Connect with mentors and investors</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">Success Mentoring</h4>
                  <p className="text-green-600 text-sm">Learn from successful entrepreneurs</p>
                </div>
              </div>
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
                  <div className="text-4xl font-bold text-green-200 mb-2">50+</div>
                  <div className="text-green-100">Startups Launched</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">100+</div>
                  <div className="text-green-100">Students Spotlighted</div>
              </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">₵1M+</div>
                  <div className="text-green-100">Funding Raised</div>
              </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">80%</div>
                  <div className="text-green-100">Success Rate</div>
              </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white border-2 border-green-200 rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to Launch?</h2>
                <p className="text-green-600 mb-8 max-w-2xl mx-auto">
                  Join ACSES LaunchPad and transform your innovative ideas into successful ventures
            </p>
              </div>
              
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
              >
                  <Sparkles className="h-5 w-5" />
                  Support LaunchPad
              </a>
              <Link 
                  to="/policies/buildx-program" 
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
              >
                  Next: BuildX Program
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