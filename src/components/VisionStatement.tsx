import React from 'react';
import { Target, Zap, Globe, Users, Star, Sparkles, ArrowRight } from 'lucide-react';

export const VisionStatement: React.FC = () => {
  const visionPoints = [
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Strategic Focus',
      description: 'Targeted initiatives with measurable outcomes'
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: 'Innovation Drive',
      description: 'Cutting-edge programs and solutions'
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: 'Global Perspective',
      description: 'International opportunities and connections'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Inclusive Community',
      description: 'Every student can thrive and succeed'
    }
  ];

  return (
    <section id="vision" className="py-16 md:py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
            <Star className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
            <span className="text-green-700 font-medium text-sm md:text-base">Our Vision</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 md:mb-6 px-4">
            World-Class ACSES
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-green-600 px-4">
            Creating excellence in student experience
          </p>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left: Visual Content */}
          <div className="relative">
            {/* Main visual container */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute inset-0">
                <div className="absolute top-4 right-6 w-16 h-16 bg-green-300/30 rounded-full"></div>
                <div className="absolute bottom-6 left-4 w-20 h-20 bg-green-400/20 rounded-full"></div>
                <Star className="absolute top-6 left-6 h-6 w-6 text-green-300/50" />
                <Sparkles className="absolute bottom-4 right-4 h-8 w-8 text-green-300/50" />
              </div>
              
              <div className="relative z-10 text-center text-white">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <Globe className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Transform ACSES</h3>
                <p className="text-green-100 mb-6">
                  Building a model student association for the future
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-xl font-bold text-green-200">Excellence</div>
                    <div className="text-green-100 text-xs">In everything we do</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-xl font-bold text-green-200">Innovation</div>
                    <div className="text-green-100 text-xs">Leading the way</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white border-4 border-green-500 rounded-full p-3 shadow-xl">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-300 rounded-full p-3 shadow-lg">
              <Users className="h-6 w-6 text-green-800" />
            </div>
          </div>
          
          {/* Right: Vision Points */}
          <div>
            <h3 className="text-3xl font-bold text-green-800 mb-6">
              Our Commitment
            </h3>
            <p className="text-lg text-green-700 mb-8">
              Creating an ecosystem where every student has access to exceptional opportunities
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                  className="bg-white border-2 border-green-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-400 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                    <div className="p-3 bg-green-100 rounded-full w-fit">
                  {point.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-green-800 mb-2">{point.title}</h4>
                  <p className="text-green-600 text-sm">{point.description}</p>
                </div>
              ))}
            </div>
            
            {/* Partnership showcase */}
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                    SK
                  </div>
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                    FA
                  </div>
                </div>
                <span className="ml-3 text-green-800 font-semibold">Samuel & Frederick</span>
              </div>
              <p className="text-green-700 text-sm italic">
                "Transparent leadership with measurable results for every student"
              </p>
            </div>
          </div>
        </div>
        
        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-8 w-16 h-16 bg-green-400/20 rounded-full"></div>
            <div className="absolute bottom-8 right-12 w-20 h-20 bg-green-400/20 rounded-full"></div>
            <Sparkles className="absolute top-8 right-8 h-8 w-8 text-green-300/50" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Promise</h3>
              <p className="text-green-100 text-lg max-w-2xl mx-auto">
                Measurable transformation for ACSES
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-green-200 mb-2">2025</div>
                <div className="text-green-100">Year of Change</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-green-200 mb-2">100%</div>
                <div className="text-green-100">Student-Centered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-green-200 mb-2">∞</div>
                <div className="text-green-100">Possibilities</div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="#feedback" 
                className="inline-flex items-center gap-2 bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-all hover:scale-105"
              >
                Join Our Vision
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};