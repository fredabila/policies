import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, DollarSign, GraduationCap, Users, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export const AcademicCareFund: React.FC = () => {
  const supportAreas = [
    {
      icon: <GraduationCap className="h-6 w-6 text-red-600" />,
      title: 'Exam Registration',
      description: 'Emergency funding for exam fees and registration costs'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-red-600" />,
      title: 'Project Costs',
      description: 'Support for final year projects and research expenses'
    },
    {
      icon: <Users className="h-6 w-6 text-red-600" />,
      title: 'Learning Materials',
      description: 'Assistance with textbooks, software, and learning resources'
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: 'Emergency Support',
      description: 'Crisis intervention for urgent academic needs'
    }
  ];

  const eligibilityCriteria = [
    'Must be a registered ACSES member in good standing',
    'Demonstrate genuine financial need through documentation',
    'Academic performance must meet minimum requirements',
    'Priority given to final year students and critical situations',
    'Maximum of 2 applications per academic year per student'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Heart className="h-12 w-12 text-red-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Academic Care Fund (Boame)</h1>
              <p className="text-xl text-red-200">No Student Left Behind</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Every student deserves the chance to thrive without financial fear. Boame is an emergency academic 
            fund, supporting students during crisis moments—exam registration, project costs, urgent learning 
            needs—rooted in dignity, care, and fairness.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Fund Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Fund Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Mission</h3>
                <p className="text-slate-600 mb-6">
                  The Academic Care Fund (Boame) exists to ensure that no ACSES member's academic journey 
                  is derailed by temporary financial challenges. We believe in supporting our community 
                  through difficult times with dignity and respect.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <h4 className="font-bold text-red-800">Emergency Response</h4>
                  </div>
                  <p className="text-red-700 text-sm mt-1">
                    Critical academic needs can be addressed within 24 hours of application approval.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Support Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {supportAreas.map((area, index) => (
                    <div key={index} className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {area.icon}
                      </div>
                      <h4 className="font-bold text-red-800 text-sm mb-1">{area.title}</h4>
                      <p className="text-xs text-slate-600">{area.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Fund Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Fund Support Structure</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-center text-slate-600 mb-6">
                We are currently developing a comprehensive support structure to ensure fair and effective 
                distribution of funds based on individual need and urgency. Details about funding amounts 
                and categories will be finalized through community consultation and pilot programs.
              </p>
              <div className="text-center">
                <a 
                  href="/#feedback" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  Help Shape Our Support Structure
                </a>
              </div>
            </div>
          </div>

          {/* Eligibility & Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Eligibility Criteria</h2>
              <ul className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Application Process</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Submit Application</h4>
                    <p className="text-sm text-slate-600">Complete online form with required documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Review Process</h4>
                    <p className="text-sm text-slate-600">Committee evaluates need and eligibility</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Fund Disbursement</h4>
                    <p className="text-sm text-slate-600">Approved funds transferred directly to student</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Follow-up Support</h4>
                    <p className="text-sm text-slate-600">Continued guidance and academic monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fund Sustainability */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Fund Sustainability</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-red-800 mb-2">Alumni Contributions</h3>
                <p className="text-sm text-slate-600">Graduated members giving back to support current students</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-red-800 mb-2">Corporate Partnerships</h3>
                <p className="text-sm text-slate-600">Tech companies investing in student success</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-bold text-red-800 mb-2">Community Fundraising</h3>
                <p className="text-sm text-slate-600">Regular events and campaigns to grow the fund</p>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">200+</div>
                <div className="text-white/90">Students Supported Annually</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">95%</div>
                <div className="text-white/90">Academic Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">24hrs</div>
                <div className="text-white/90">Emergency Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">0%</div>
                <div className="text-white/90">Interest on Support</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Support Student Success</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Help us ensure that no student's academic dreams are derailed by temporary financial challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/allawa-plus" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Allawa+ Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};