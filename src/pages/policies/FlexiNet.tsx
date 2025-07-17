import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Globe, DollarSign, Users, ArrowLeft, CheckCircle, Clock, Shield } from 'lucide-react';

export const FlexiNet: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: 'Affordable Pricing',
      description: 'Subsidized data bundles at student-friendly rates'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Non-Expiry Data',
      description: 'Data that never expires, use at your own pace'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Reliable Connection',
      description: 'High-speed, stable internet for academic needs'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Member Exclusive',
      description: 'Available only to verified ACSES members'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Wifi className="h-12 w-12 text-blue-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES FlexiNet</h1>
              <p className="text-xl text-blue-200">Affordable Internet for All</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Internet access is no longer a luxury; it's a necessity. ACSES FlexiNet ensures affordable, 
            non-expiring data bundles exclusively for members—closing the digital divide and leveling 
            the academic playing field.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Problem Statement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">The Digital Divide Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Current Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 mt-0.5 text-xs">✗</span>
                    <span className="text-slate-600">Expensive data costs burden students financially</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 mt-0.5 text-xs">✗</span>
                    <span className="text-slate-600">Data expiry leads to wastage and frustration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 mt-0.5 text-xs">✗</span>
                    <span className="text-slate-600">Unreliable connections affect academic performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600 mr-3 mt-0.5 text-xs">✗</span>
                    <span className="text-slate-600">Digital inequality among students</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Solution</h3>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-blue-800 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-slate-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Packages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">FlexiNet Data Packages</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-center text-slate-600 mb-6">
                We are currently working on developing competitive and affordable data packages 
                exclusively for ACSES members. Package details and pricing will be announced soon.
              </p>
              <div className="text-center">
                <a 
                  href="/#feedback" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  Stay Updated on Package Release
                </a>
              </div>
            </div>
          </div>

          {/* Implementation Plan */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Implementation Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Partnership</h3>
                <p className="text-sm text-slate-600">Negotiate with telecom providers for bulk data rates</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Platform</h3>
                <p className="text-sm text-slate-600">Develop FlexiNet app for easy data purchase and management</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Pilot</h3>
                <p className="text-sm text-slate-600">Launch pilot program with 100 students for testing</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Scale</h3>
                <p className="text-sm text-slate-600">Full rollout to all ACSES members</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">80%</div>
                <div className="text-white/90">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">100%</div>
                <div className="text-white/90">Member Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">0%</div>
                <div className="text-white/90">Data Wastage</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Bridge the Digital Divide?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join us in making internet access affordable and accessible for every ACSES member.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/academic-care-fund" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Academic Care Fund
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};