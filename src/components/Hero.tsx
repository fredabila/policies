import React from 'react';
import { ArrowRight, Users, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-blue-900 opacity-20" 
             style={{ 
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E")'
             }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                ACSES Presidential Campaign 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              <span className="text-orange-400">Transform.</span> <span className="text-white">Innovate.</span> <span className="text-orange-400">Lead.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-6">
              Samuel Oppong Kyekyeku & Frederick Abila
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A comprehensive policy platform designed to revolutionize ACSES and create unprecedented opportunities for every Computer Science and Engineering student.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a 
                href="#policies" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center"
              >
                Explore Our Policies
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#feedback" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center"
              >
                Share Your Voice
                <Users className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-400 mb-1">13</div>
                <div className="text-white/80 text-sm">Policy Initiatives</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-400 mb-1">2</div>
                <div className="text-white/80 text-sm">Core Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-orange-400 mb-1">100%</div>
                <div className="text-white/80 text-sm">Student Focused</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://i.ibb.co/svzgpXSw/Whats-App-Image-2025-07-11-at-20-22-01-dafb65d7.jpg" 
                  alt="Samuel Oppong Kyekyeku & Frederick Abila - ACSES Presidential Campaign"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <div className="font-bold text-lg mb-1">Samuel & Frederick</div>
                    <div className="text-orange-300 text-sm">Your Voice, Our Vision</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-orange-500 rounded-full p-3 shadow-lg animate-bounce-slow">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 rounded-full p-3 shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8fafc" fillOpacity="1" d="M0,288L60,272C120,256,240,224,360,218.7C480,213,600,235,720,245.3C840,256,960,256,1080,234.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};