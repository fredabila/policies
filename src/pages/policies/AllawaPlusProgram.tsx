import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, DollarSign, BookOpen, ArrowLeft, CheckCircle, Star } from 'lucide-react';

export const AllawaPlusProgram: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: 'Monthly Allowance',
      description: 'Structured financial support for course representatives'
    },
    {
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      title: 'Leadership Training',
      description: 'Professional development and leadership skills workshops'
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: 'Networking Opportunities',
      description: 'Connect with other leaders and industry professionals'
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: 'Recognition Program',
      description: 'Annual awards for outstanding course representative performance'
    }
  ];

  const responsibilities = [
    'Serve as primary liaison between students and faculty',
    'Organize and coordinate class meetings and activities',
    'Collect and communicate student feedback to administration',
    'Assist with academic and administrative issues',
    'Participate in ACSES leadership development programs',
    'Maintain regular communication with assigned mentor',
    'Submit monthly activity reports and feedback'
  ];

  const trainingModules = [
    'Effective Communication and Public Speaking',
    'Conflict Resolution and Mediation',
    'Event Planning and Organization',
    'Digital Leadership and Social Media',
    'Academic Advocacy and Student Rights',
    'Time Management and Productivity'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Award className="h-12 w-12 text-green-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES Allawa+</h1>
              <p className="text-xl text-green-200">Course Reps Allowance & Empowerment</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Course representatives are frontline leaders. Allawa+ guarantees structured support and 
            incentives for Course Reps to function effectively and with integrity—because true 
            leadership must be empowered, not exploited.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Program Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Empowering Student Leaders</h3>
                <p className="text-slate-600 mb-6">
                  The Allawa+ Program recognizes that course representatives are essential pillars of 
                  student governance. By providing structured support, training, and fair compensation, 
                  we ensure they can serve their classmates effectively while maintaining their own 
                  academic excellence.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-bold text-green-800 mb-2">Core Philosophy</h4>
                  <p className="text-green-700 text-sm">
                    "Leadership is service, and service deserves support. We invest in our course 
                    representatives because they invest in our community."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Program Benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-green-800 text-sm mb-1">{benefit.title}</h4>
                      <p className="text-xs text-slate-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Allowance Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Support & Compensation</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-center text-slate-600 mb-6">
                We are developing a fair and sustainable compensation structure for course representatives 
                that recognizes their valuable contributions while ensuring program sustainability. 
                Details will be finalized through consultation with student representatives and administration.
              </p>
              
              <div className="bg-green-50 rounded-lg p-6 text-center mb-6">
                <h4 className="font-bold text-green-800 mb-2">Performance Recognition</h4>
                <p className="text-green-700 text-sm">
                  Additional incentives will be available for exceptional service, innovative initiatives, 
                  and outstanding student feedback
                </p>
              </div>

              <div className="text-center">
                <a 
                  href="/#feedback" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  Contribute to Compensation Planning
                </a>
              </div>
            </div>
          </div>

          {/* Responsibilities & Training */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Key Responsibilities</h2>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Training Modules</h2>
              <div className="space-y-3">
                {trainingModules.map((module, index) => (
                  <div key={index} className="flex items-center p-3 bg-slate-50 rounded-lg">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      <span className="text-green-800 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-slate-700 font-medium">{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selection Process */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Selection & Evaluation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-green-800 mb-2">Application</h3>
                <p className="text-sm text-slate-600">Students apply with academic records and leadership experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-green-800 mb-2">Interview</h3>
                <p className="text-sm text-slate-600">Panel interview assessing communication and leadership skills</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-green-800 mb-2">Training</h3>
                <p className="text-sm text-slate-600">Comprehensive orientation and skills development program</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-green-800 mb-2">Service</h3>
                <p className="text-sm text-slate-600">Active service with ongoing support and evaluation</p>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-green-800 to-green-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-200 mb-2">50+</div>
                <div className="text-white/90">Course Representatives</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-200 mb-2">90%</div>
                <div className="text-white/90">Student Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-200 mb-2">100%</div>
                <div className="text-white/90">Training Completion</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-200 mb-2">24/7</div>
                <div className="text-white/90">Student Support</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Empower Student Leadership</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Support the Allawa+ Program and help us build a stronger, more effective student representation system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/tech-ladies" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Tech Ladies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};