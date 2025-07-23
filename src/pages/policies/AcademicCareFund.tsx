import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, DollarSign, GraduationCap, Users, ArrowLeft, CheckCircle, AlertCircle, Sparkles, Star, Target, Shield } from 'lucide-react';

export const AcademicCareFund: React.FC = () => {
  const supportAreas = [
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: 'Exam Registration',
      description: 'Emergency funding for exams'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: 'Project Costs',
      description: 'Research & project support'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Learning Materials',
      description: 'Books & software assistance'
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Emergency Support',
      description: 'Crisis intervention help'
    }
  ];

  const eligibilityCriteria = [
    'ACSES member in good standing',
    'Demonstrate financial need',
    'Meet academic requirements',
    'Final year priority given',
    'Maximum 2 applications per year'
  ];

  const applicationProcess = [
    { step: 'Apply', desc: 'Submit application form', icon: <Users className="h-6 w-6" /> },
    { step: 'Review', desc: 'Committee assessment', icon: <CheckCircle className="h-6 w-6" /> },
    { step: 'Approve', desc: 'Funding decision', icon: <Shield className="h-6 w-6" /> },
    { step: 'Disburse', desc: 'Receive support', icon: <Heart className="h-6 w-6" /> }
  ];

  const fundTypes = [
    {
      title: 'Emergency Aid',
      description: 'Immediate financial assistance',
      icon: <AlertCircle className="h-8 w-8 text-green-600" />,
      features: ['24-48 hour processing', 'Up to ₵500', 'Crisis situations', 'No interest']
    },
    {
      title: 'Academic Support',
      description: 'Project & exam funding',
      icon: <GraduationCap className="h-8 w-8 text-green-600" />,
      features: ['Project materials', 'Exam fees', 'Research costs', 'Equipment']
    },
    {
      title: 'Learning Resources',
      description: 'Educational materials fund',
      icon: <Users className="h-8 w-8 text-green-600" />,
      features: ['Textbooks', 'Software licenses', 'Online courses', 'Study materials']
    }
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 md:p-4 bg-green-500 rounded-2xl mr-4">
                  <Heart className="h-10 w-10 md:h-12 md:w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Boame Fund</h1>
                  <p className="text-lg md:text-xl text-green-200">Academic Care & Support</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-green-100 leading-relaxed mb-8">
                Supporting students through financial challenges to ensure no one is left behind academically
              </p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {supportAreas.map((area, index) => (
                  <div key={index} className="bg-green-500/30 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <div className="p-2 bg-green-600 rounded-lg">
                        {area.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-xs md:text-sm mb-1">{area.title}</h4>
                    <p className="text-xs text-green-100">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
                {/* Care fund illustration */}
                <div className="w-full h-48 md:h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <div className="text-green-800 font-bold text-lg mb-2">Boame Care Fund</div>
                    <div className="text-green-600 text-sm mb-4">Support • Care • Success</div>
                    
                    {/* Support visualization */}
                    <div className="flex justify-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="text-green-700 text-xs font-medium">Caring Community</div>
                  </div>
                  {/* Floating care symbols */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-300/50 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-green-700" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400/50 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-green-700" />
                  </div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-green-500/50 rounded-full"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">Student Care Network</h3>
                  <p className="text-green-600 text-sm">Supporting • Caring • Empowering</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border-4 border-green-500 rounded-full p-3 shadow-xl">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Fund Types */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Support Categories</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Multiple funding options to address diverse academic needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {fundTypes.map((fund, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="p-3 bg-green-100 rounded-xl inline-flex mb-4">
                      {fund.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">{fund.title}</h3>
                    <p className="text-green-600 text-sm">{fund.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {fund.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-green-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 text-center">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {applicationProcess.map((item, index) => (
                <div key={index} className="text-center relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-300 z-0"></div>
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-green-800 mb-2">{item.step}</h3>
                    <p className="text-sm text-green-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-6 md:p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Eligibility Requirements</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Clear criteria to ensure fair and effective support distribution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-green-700 text-sm font-medium">{criteria}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics Visual */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-6 md:p-8 text-white mb-12 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-8 w-20 h-20 bg-green-400/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-green-500/20 rounded-full"></div>
              <Sparkles className="absolute top-6 left-8 h-8 w-8 text-green-300/50" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Fund Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-green-200 mb-2">200+</div>
                  <div className="text-green-100 text-sm md:text-base">Students Helped</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-green-200 mb-2">₵50K+</div>
                  <div className="text-green-100 text-sm md:text-base">Total Disbursed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-green-200 mb-2">95%</div>
                  <div className="text-green-100 text-sm md:text-base">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-green-200 mb-2">48Hr</div>
                  <div className="text-green-100 text-sm md:text-base">Avg Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white border-2 border-green-200 rounded-3xl p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Support Student Success</h2>
                <p className="text-green-600 mb-8 max-w-2xl mx-auto">
                  Help us build a stronger support network for students facing financial challenges
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://chat.whatsapp.com/HFGrjDWYzNqEmgj79o4xTh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 md:px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Support Boame Fund
                </a>
                <Link 
                  to="/policies/creative-studio" 
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-6 md:px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  Next: Creative Studio
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