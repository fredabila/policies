import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, Briefcase, Star, ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';

export const LearnAndEarn: React.FC = () => {
  const skillCategories = [
    {
      icon: <DollarSign className="h-6 w-6 text-yellow-600" />,
      title: 'Design Services',
      description: 'Graphic design, UI/UX, branding, and visual content creation'
    },
    {
      icon: <Briefcase className="h-6 w-6 text-yellow-600" />,
      title: 'Development',
      description: 'Web development, mobile apps, and software solutions'
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-600" />,
      title: 'Tutoring',
      description: 'Academic tutoring, coding lessons, and skill training'
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: 'Creative Services',
      description: 'Photography, videography, content creation, and digital marketing'
    }
  ];

  const marketplaceFeatures = [
    {
      title: 'Skill Showcase',
      description: 'Create professional profiles highlighting your talents and previous work',
      features: ['Portfolio display', 'Skill verification', 'Client reviews', 'Rating system']
    },
    {
      title: 'Project Matching',
      description: 'Smart algorithm connects students with relevant opportunities',
      features: ['Skill-based matching', 'Budget compatibility', 'Timeline alignment', 'Location preferences']
    },
    {
      title: 'Secure Payments',
      description: 'Safe and reliable payment processing for all transactions',
      features: ['Escrow protection', 'Multiple payment methods', 'Automatic invoicing', 'Payment tracking']
    },
    {
      title: 'Community Support',
      description: 'Comprehensive support system for both clients and service providers',
      features: ['Dispute resolution', '24/7 support', 'Training resources', 'Success coaching']
    }
  ];

  const earningPotential = [
    { service: 'Graphic Design', rate: 'GHS 50-200/project', demand: 'High' },
    { service: 'Web Development', rate: 'GHS 500-2000/project', demand: 'Very High' },
    { service: 'Tutoring', rate: 'GHS 20-50/hour', demand: 'High' },
    { service: 'Photography', rate: 'GHS 100-500/event', demand: 'Medium' },
    { service: 'Content Writing', rate: 'GHS 10-30/article', demand: 'High' },
    { service: 'Video Editing', rate: 'GHS 100-400/project', demand: 'Medium' }
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
            <DollarSign className="h-12 w-12 text-yellow-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Learn & Earn Marketplace</h1>
              <p className="text-xl text-yellow-200">Skills That Pay</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Every student has a talent. This marketplace connects skills (design, coding, tutoring, 
            photography) to clients across campus—helping students build brands and earn income 
            while studying.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Marketplace Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Monetize Your Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Turn Talent into Income</h3>
                <p className="text-slate-600 mb-6">
                  The Learn & Earn Marketplace is a student-focused platform that connects talented 
                  individuals with clients who need their services. Whether you're a designer, 
                  developer, tutor, or creative professional, this platform helps you build your 
                  brand and generate income while pursuing your studies.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h4 className="font-bold text-yellow-800 mb-2">Platform Mission</h4>
                  <p className="text-yellow-700 text-sm">
                    "Empowering students to transform their skills into sustainable income streams 
                    while building professional experience and networks."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Service Categories</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {category.icon}
                      </div>
                      <h4 className="font-bold text-yellow-800 text-sm mb-1">{category.title}</h4>
                      <p className="text-xs text-slate-600">{category.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Platform Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketplaceFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Earning Potential */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Earning Potential</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {earningPotential.map((item, index) => (
                <div key={index} className="bg-yellow-50 rounded-lg p-6 text-center">
                  <h3 className="font-bold text-yellow-800 mb-2">{item.service}</h3>
                  <div className="text-lg font-bold text-slate-800 mb-2">{item.rate}</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    item.demand === 'Very High' ? 'bg-green-100 text-green-800' :
                    item.demand === 'High' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.demand} Demand
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Create Profile</h3>
                <p className="text-sm text-slate-600">Set up your professional profile and showcase your skills</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Find Projects</h3>
                <p className="text-sm text-slate-600">Browse available projects or receive matched opportunities</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Deliver Work</h3>
                <p className="text-sm text-slate-600">Complete projects and deliver high-quality results</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-yellow-800 mb-2">Get Paid</h3>
                <p className="text-sm text-slate-600">Receive secure payments and build your reputation</p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-yellow-800 to-yellow-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">500+</div>
                <div className="text-white/90">Active Service Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">GHS 50K+</div>
                <div className="text-white/90">Monthly Transactions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">95%</div>
                <div className="text-white/90">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-200 mb-2">1000+</div>
                <div className="text-white/90">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Start Earning Today</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join the Learn & Earn Marketplace and transform your skills into a sustainable income stream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/creative-studio" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Creative Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};