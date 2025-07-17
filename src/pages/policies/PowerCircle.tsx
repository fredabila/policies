import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Users, Briefcase, Star, ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';

export const PowerCircle: React.FC = () => {
  const programComponents = [
    {
      icon: <Network className="h-6 w-6 text-teal-600" />,
      title: 'Alumni Network',
      description: 'Connect with successful graduates in various tech industries'
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: 'Mentorship Matching',
      description: 'Personalized mentor-mentee relationships based on career goals'
    },
    {
      icon: <Briefcase className="h-6 w-6 text-teal-600" />,
      title: 'Internship Pipeline',
      description: 'Direct access to internship opportunities through alumni connections'
    },
    {
      icon: <Star className="h-6 w-6 text-teal-600" />,
      title: 'Career Guidance',
      description: 'Professional development and career planning support'
    }
  ];

  const mentorshipTracks = [
    {
      title: 'Tech Industry Mentorship',
      description: 'Connect with alumni working at major tech companies',
      features: ['Software engineering guidance', 'Product management insights', 'Tech startup advice', 'Industry networking']
    },
    {
      title: 'Entrepreneurship Track',
      description: 'Learn from alumni who have started their own companies',
      features: ['Startup development', 'Business strategy', 'Funding guidance', 'Market validation']
    },
    {
      title: 'Academic Excellence',
      description: 'Mentorship for students pursuing advanced degrees',
      features: ['Graduate school preparation', 'Research opportunities', 'Academic writing', 'Scholarship guidance']
    },
    {
      title: 'Career Transition',
      description: 'Support for students changing career paths or specializations',
      features: ['Skill gap analysis', 'Career pivoting strategies', 'Industry insights', 'Professional networking']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-teal-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Network className="h-12 w-12 text-teal-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">PowerCircle & Alumni Activation</h1>
              <p className="text-xl text-teal-200">Mentorship That Builds Careers</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Greatness is shared, not solo. PowerCircle connects students to alumni mentors and 
            internship opportunities—unlocking career pathways and building professional networks 
            before graduation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Building Professional Networks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">The Power of Connection</h3>
                <p className="text-slate-600 mb-6">
                  PowerCircle leverages the success of ACSES alumni to create meaningful mentorship 
                  relationships and career opportunities for current students. By connecting students 
                  with industry professionals who share their academic background, we create a 
                  powerful network for career advancement.
                </p>
                
                <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
                  <h4 className="font-bold text-teal-800 mb-2">Program Philosophy</h4>
                  <p className="text-teal-700 text-sm">
                    "Success is amplified when shared. We believe in creating lasting connections 
                    that benefit both mentors and mentees throughout their careers."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Program Components</h3>
                <div className="grid grid-cols-2 gap-4">
                  {programComponents.map((component, index) => (
                    <div key={index} className="text-center p-4 bg-teal-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {component.icon}
                      </div>
                      <h4 className="font-bold text-teal-800 text-sm mb-1">{component.title}</h4>
                      <p className="text-xs text-slate-600">{component.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mentorship Tracks */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Mentorship Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mentorshipTracks.map((track, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-teal-800 mb-3">{track.title}</h3>
                  <p className="text-slate-600 mb-4">{track.description}</p>
                  <ul className="space-y-2">
                    {track.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Alumni Network Development */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Alumni Network Development</h2>
            <div className="text-center mb-6">
              <p className="text-slate-600 mb-6">
                We are actively building our alumni network by reaching out to graduates across various 
                industries and career stages. Our goal is to create a comprehensive database of willing 
                mentors who can provide guidance and opportunities to current students.
              </p>
              
              <div className="bg-teal-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-teal-800 mb-2">Network Building in Progress</h4>
                <p className="text-teal-700 text-sm">
                  We're connecting with ACSES graduates working in tech companies, startups, consulting firms, 
                  academia, and various other industries to build a robust mentorship network.
                </p>
              </div>

              <a 
                href="/#feedback" 
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
              >
                Connect Alumni or Join as Mentor
              </a>
            </div>
          </div>

          {/* Program Process */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-teal-800 mb-2">Application</h3>
                <p className="text-sm text-slate-600">Submit application with career goals and interests</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-teal-800 mb-2">Matching</h3>
                <p className="text-sm text-slate-600">AI-powered matching with compatible alumni mentors</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-teal-800 mb-2">Mentorship</h3>
                <p className="text-sm text-slate-600">Regular meetings and guidance sessions</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-teal-800 mb-2">Opportunities</h3>
                <p className="text-sm text-slate-600">Access to internships and job opportunities</p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-teal-800 to-teal-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-200 mb-2">100+</div>
                <div className="text-white/90">Active Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-200 mb-2">80%</div>
                <div className="text-white/90">Internship Placement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-200 mb-2">95%</div>
                <div className="text-white/90">Career Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-200 mb-2">50+</div>
                <div className="text-white/90">Partner Companies</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Join the PowerCircle</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Connect with successful alumni and accelerate your career through meaningful mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/defensive-security" 
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Defensive Security
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};