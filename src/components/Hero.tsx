import React from 'react';
import { ArrowRight, Users, Target, Star, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-green-500 opacity-5" 
             style={{ 
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%2322c55e" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")'
             }}
        ></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-green-200/50 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-40 right-32 w-8 h-8 bg-green-300/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-16 w-12 h-12 bg-green-100/80 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/2 w-6 h-6 bg-green-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <Star className="h-4 w-4 mr-2" />
                ACSES Presidential Campaign 2025
                <Sparkles className="h-4 w-4 ml-2" />
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-800 leading-tight mb-8">
              <span className="text-green-600">Transform</span><br />
              <span className="text-green-800">ACSES</span><br />
              <span className="text-green-500">Together</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-green-700 font-medium mb-8 flex flex-col lg:flex-row items-center gap-2">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                SK
              </div>
              <span className="text-green-800">Samuel & Frederick</span>
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                FA
              </div>
            </div>
            
            <p className="text-xl text-green-700 mb-12 max-w-xl mx-auto lg:mx-0">
              Building a stronger, more innovative ACSES for every student
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <a 
                href="#policies" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Explore Our Vision
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#feedback" 
                className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center"
              >
                Join the Movement
                <Users className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            {/* Simple stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-1">13</div>
                <div className="text-green-700 text-sm">Policies</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                <div className="text-green-700 text-sm">For Students</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-1">2025</div>
                <div className="text-green-700 text-sm">New Era</div>
              </div>
            </div>
          </div>
          
          {/* Right Visual Content */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              {/* Main image container */}
              <div className="w-96 md:w-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://i.ibb.co/svzgpXSw/Whats-App-Image-2025-07-11-at-20-22-01-dafb65d7.jpg" 
                  alt="Samuel Oppong Kyekyeku & Frederick Abila - ACSES Presidential Campaign"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <div className="text-center">
                    <div className="font-bold text-2xl mb-2">Samuel & Frederick</div>
                    <div className="text-green-100 text-lg">Your Voice, Our Vision</div>
                  </div>
                </div>
              </div>
              
              {/* Floating visual elements */}
              <div className="absolute -top-6 -left-6 bg-green-500 rounded-full p-4 shadow-xl animate-bounce-slow">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white border-4 border-green-500 rounded-full p-4 shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <div className="absolute top-1/4 -right-8 bg-green-300 rounded-full p-3 shadow-lg animate-pulse">
                <Sparkles className="h-6 w-6 text-green-800" />
              </div>
              <div className="absolute bottom-1/4 -left-8 bg-green-100 border-2 border-green-400 rounded-full p-3 shadow-lg animate-pulse" style={{ animationDelay: '2s' }}>
                <Star className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Green wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-20">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L60,272C120,256,240,224,360,218.7C480,213,600,235,720,245.3C840,256,960,256,1080,234.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};