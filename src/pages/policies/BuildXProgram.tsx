import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Code, Zap, Award, ArrowLeft, CheckCircle, Settings } from 'lucide-react';

export const BuildXProgram: React.FC = () => {
  const skillTracks = [
    {
      icon: <Settings className="h-6 w-6 text-indigo-600" />,
      title: 'Networking Systems',
      description: 'Learn to design, install, and maintain network infrastructure'
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: 'Smart Installations',
      description: 'Master smart home and IoT device installation and configuration'
    },
    {
      icon: <Code className="h-6 w-6 text-indigo-600" />,
      title: 'Multimedia Systems',
      description: 'Develop skills in audio-visual and multimedia system setup'
    },
    {
      icon: <Award className="h-6 w-6 text-indigo-600" />,
      title: 'Certification Programs',
      description: 'Earn industry-recognized certifications in technical skills'
    }
  ];

  const programs = [
    {
      title: 'Network Infrastructure',
      description: 'Comprehensive training in network design, installation, and maintenance',
      features: ['LAN/WAN setup', 'Router configuration', 'Network security', 'Troubleshooting']
    },
    {
      title: 'Smart Home Technology',
      description: 'Hands-on experience with IoT devices and smart home systems',
      features: ['IoT device installation', 'Home automation', 'Smart security systems', 'Energy management']
    },
    {
      title: 'Multimedia Production',
      description: 'Professional training in audio-visual and multimedia systems',
      features: ['Audio system setup', 'Video production', 'Live streaming', 'Event technology']
    },
    {
      title: 'Technical Certification',
      description: 'Industry-standard certifications to boost career prospects',
      features: ['Cisco networking', 'CompTIA certifications', 'Microsoft Azure', 'AWS cloud']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Wrench className="h-12 w-12 text-indigo-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES BuildX</h1>
              <p className="text-xl text-indigo-200">Life Time Skill Program</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Beyond theory lies application. BuildX equips students with practical, income-generating 
            skills in networking, smart installations, and multimedia systems—preparing them for 
            the real world from day one.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Practical Skills for Real-World Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Why BuildX?</h3>
                <p className="text-slate-600 mb-6">
                  The technology industry demands practical skills alongside theoretical knowledge. 
                  BuildX bridges this gap by providing hands-on training in high-demand technical 
                  areas that students can immediately monetize.
                </p>
                
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                  <h4 className="font-bold text-indigo-800 mb-2">Program Philosophy</h4>
                  <p className="text-indigo-700 text-sm">
                    "Learn by doing, earn while learning. We believe in practical education that 
                    pays dividends from day one."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Skill Tracks</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillTracks.map((track, index) => (
                    <div key={index} className="text-center p-4 bg-indigo-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {track.icon}
                      </div>
                      <h4 className="font-bold text-indigo-800 text-sm mb-1">{track.title}</h4>
                      <p className="text-xs text-slate-600">{track.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Training Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-indigo-800 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Program Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-indigo-800 mb-2">Setup Phase</h3>
                <p className="text-sm text-slate-600">Equipment procurement and lab setup</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-indigo-800 mb-2">Training Launch</h3>
                <p className="text-sm text-slate-600">Begin foundational courses and workshops</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-indigo-800 mb-2">Practical Projects</h3>
                <p className="text-sm text-slate-600">Real-world projects and client work</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-indigo-800 mb-2">Certification</h3>
                <p className="text-sm text-slate-600">Industry certification and job placement</p>
              </div>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="bg-gradient-to-r from-indigo-800 to-indigo-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-200 mb-2">150+</div>
                <div className="text-white/90">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-200 mb-2">85%</div>
                <div className="text-white/90">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-200 mb-2">12+</div>
                <div className="text-white/90">Industry Certifications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-200 mb-2">GHS 500+</div>
                <div className="text-white/90">Average Monthly Earnings</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Build Your Future Today</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join BuildX and develop practical skills that will set you apart in the job market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/learn-and-earn" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Learn & Earn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};