import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Globe, DollarSign, Users, ArrowLeft, CheckCircle, Clock, Shield, Sparkles, Star, Target, Zap, Heart } from 'lucide-react';

export const FlexiNet: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: 'Affordable Pricing',
      description: 'Student-friendly rates'
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: 'Non-Expiry Data',
      description: 'Use at your own pace'
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: 'Reliable Connection',
      description: 'High-speed & stable'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Member Exclusive',
      description: 'ACSES members only'
    }
  ];

  const dataPlans = [
    {
      size: '5GB',
      price: '₵15',
      validity: 'No Expiry',
      features: ['All networks', 'High speed', '24/7 support']
    },
    {
      size: '10GB',
      price: '₵25',
      validity: 'No Expiry',
      features: ['All networks', 'High speed', '24/7 support', 'Bonus 1GB']
    },
    {
      size: '20GB',
      price: '₵45',
      validity: 'No Expiry',
      features: ['All networks', 'High speed', '24/7 support', 'Bonus 3GB']
    }
  ];

  const benefits = [
    'Bridge the digital divide',
    'Affordable academic resources',
    'Seamless online learning',
    'Research accessibility',
    'Enhanced collaboration',
    'Digital skills development'
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
                  <Wifi className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES FlexiNet</h1>
                  <p className="text-xl text-green-200">Affordable Internet for All</p>
                </div>
              </div>
              
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                Closing the digital divide with affordable, non-expiring data bundles for ACSES members
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-green-500/30 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <div className="p-2 bg-green-600 rounded-lg">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-green-100">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Internet connectivity illustration */}
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-green-800 font-bold text-lg">FlexiNet Connection</div>
                    <div className="text-green-600 text-sm mb-4">Always Connected</div>
                    
                    {/* Signal strength bars */}
                    <div className="flex justify-center space-x-1 mb-4">
                      <div className="w-2 h-4 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-6 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-8 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-10 bg-green-600 rounded-full"></div>
                    </div>
                    <div className="text-green-700 text-xs font-medium">Full Signal Strength</div>
                  </div>
                  {/* Floating connection dots */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-300/50 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-green-500/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Stay Connected</h3>
                  <p className="text-green-600 text-sm">Affordable data that never expires</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-xl">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border-4 border-green-500 rounded-full p-3 shadow-xl">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Data Plans Visual */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">FlexiNet Data Plans</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Choose the perfect plan for your academic needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataPlans.map((plan, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-green-800 mb-2">{plan.size}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-1">{plan.price}</div>
                    <div className="text-sm text-green-500 font-medium bg-green-50 px-3 py-1 rounded-full">
                      {plan.validity}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-green-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Visual */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">How FlexiNet Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'Register', desc: 'Verify ACSES membership', icon: <Users className="h-6 w-6" /> },
                { step: 2, title: 'Choose Plan', desc: 'Select data bundle', icon: <Target className="h-6 w-6" /> },
                { step: 3, title: 'Pay', desc: 'Secure payment', icon: <DollarSign className="h-6 w-6" /> },
                { step: 4, title: 'Connect', desc: 'Instant activation', icon: <Zap className="h-6 w-6" /> }
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

          {/* Benefits Grid */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Why FlexiNet Matters</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Bridging the digital divide for all ACSES members
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">{benefit}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Statistics */}
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
                  <div className="text-4xl font-bold text-green-200 mb-2">500+</div>
                  <div className="text-green-100">Students Connected</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">50%</div>
                  <div className="text-green-100">Cost Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">∞</div>
                  <div className="text-green-100">Data Validity</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">24/7</div>
                  <div className="text-green-100">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Information */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Trusted Partners</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Working with leading telecom providers to ensure quality service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-green-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-green-800 mb-2">Network Coverage</h4>
                <p className="text-green-600 text-sm">Nationwide coverage with all major networks</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-green-800 mb-2">Secure Transactions</h4>
                <p className="text-green-600 text-sm">Safe and encrypted payment processing</p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-green-800 mb-2">24/7 Support</h4>
                <p className="text-green-600 text-sm">Round-the-clock customer service</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white border-2 border-green-200 rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Get Connected with FlexiNet</h2>
                <p className="text-green-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of ACSES members enjoying affordable, reliable internet access
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/#feedback" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Support FlexiNet
                </a>
                <Link 
                  to="/policies/academic-care-fund" 
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  Next: Boame Fund
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