import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, DollarSign, BookOpen, ArrowLeft, CheckCircle, Star, Sparkles, Target, Zap } from 'lucide-react';

export const AllawaPlusProgram: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: 'Monthly Allowance',
      description: 'Financial support for reps'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: 'Leadership Training',
      description: 'Professional development'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Networking',
      description: 'Connect with professionals'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Recognition',
      description: 'Annual awards program'
    }
  ];

  const responsibilities = [
    'Serve as student-faculty liaison',
    'Organize class meetings and activities',
    'Collect and communicate feedback',
    'Assist with academic issues',
    'Participate in leadership programs',
    'Submit monthly reports'
  ];

  const trainingModules = [
    'Communication & Public Speaking',
    'Conflict Resolution',
    'Event Planning',
    'Digital Leadership',
    'Academic Advocacy',
    'Time Management'
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
                  <Award className="h-12 w-12 text-white" />
                </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES Allawa+</h1>
                  <p className="text-xl text-green-200">Course Reps Empowerment</p>
                </div>
              </div>
              
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                Empowering course representatives with structured support and fair compensation
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-green-500/30 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <div className="p-2 bg-green-600 rounded-lg">
                        {benefit.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-green-100">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Placeholder for course rep illustration */}
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-green-800 font-bold text-lg">Course Representatives</div>
                    <div className="text-green-600 text-sm">Building Bridges</div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-300/50 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400/50 rounded-full"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Empowered Leadership</h3>
                  <p className="text-green-600 text-sm">Supporting those who serve</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-xl">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border-4 border-green-500 rounded-full p-3 shadow-xl">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Overview with Visual */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">Program Overview</h2>
                <p className="text-green-700 mb-6 leading-relaxed">
                  The Allawa+ Program recognizes course representatives as essential pillars of 
                  student governance, providing structured support and fair compensation.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Core Philosophy
                  </h4>
                  <p className="text-green-700 text-sm italic">
                    "Leadership is service, and service deserves support"
                  </p>
                </div>
              </div>
              
              {/* Visual diagram */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Support System</h3>
                  </div>
                  
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                      <DollarSign className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm font-semibold">Financial</div>
                      </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                      <BookOpen className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm font-semibold">Training</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compensation Structure with Visual */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Support & Compensation</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Fair and sustainable compensation structure under development
              </p>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8">
              {/* Visual compensation chart */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-green-800 mb-2">Base Support</h4>
                      <p className="text-green-600 text-sm">Monthly allowance</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-green-800 mb-2">Performance</h4>
                      <p className="text-green-600 text-sm">Bonus incentives</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-green-800 mb-2">Recognition</h4>
                      <p className="text-green-600 text-sm">Annual awards</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="/#feedback" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
                >
                  <Zap className="h-5 w-5" />
                  Contribute to Planning
                </a>
              </div>
            </div>
          </div>

          {/* Responsibilities & Training Visual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-800">Key Responsibilities</h2>
              </div>
              
              <div className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 rounded-xl">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-green-700 text-sm">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-800">Training Modules</h2>
              </div>
              
              <div className="space-y-3">
                {trainingModules.map((module, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-4 hover:bg-green-100 transition-colors">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <span className="text-green-800 font-medium">{module}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selection Process Visual */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Selection Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'Application', desc: 'Submit credentials', icon: <Users className="h-6 w-6" /> },
                { step: 2, title: 'Interview', desc: 'Panel assessment', icon: <Award className="h-6 w-6" /> },
                { step: 3, title: 'Training', desc: 'Skills development', icon: <BookOpen className="h-6 w-6" /> },
                { step: 4, title: 'Service', desc: 'Active representation', icon: <Star className="h-6 w-6" /> }
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
                  <div className="text-green-100">Course Reps</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">90%</div>
                  <div className="text-green-100">Satisfaction</div>
              </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">100%</div>
                  <div className="text-green-100">Training</div>
              </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">24/7</div>
                  <div className="text-green-100">Support</div>
              </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white border-2 border-green-200 rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Empower Student Leadership</h2>
                <p className="text-green-600 mb-8 max-w-2xl mx-auto">
                  Support the Allawa+ Program and help build stronger student representation
            </p>
              </div>
              
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
              >
                  <Sparkles className="h-5 w-5" />
                Support This Initiative
              </a>
              <Link 
                to="/policies/tech-ladies" 
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
              >
                Next: Tech Ladies
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