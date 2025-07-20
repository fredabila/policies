import React from 'react';
import { Users, Award, Code, Heart, Star, Sparkles } from 'lucide-react';

export const CandidateIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-2 mb-6">
            <Star className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">Meet Your Leaders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Ready to Serve ACSES
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-green-600">
            A dynamic partnership dedicated to transforming student experience
          </p>
        </div>
        
        {/* Candidates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Samuel Oppong Kyekyeku */}
          <div className="group">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Visual placeholder for photo */}
              <div className="h-64 bg-gradient-to-br from-green-300 to-green-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-4xl shadow-xl">
                    SK
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-green-200/50 rounded-full p-2">
                  <Code className="h-6 w-6 text-green-700" />
                </div>
                <div className="absolute bottom-4 left-4 bg-green-200/50 rounded-full p-2">
                  <Award className="h-6 w-6 text-green-700" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-1">Samuel Oppong Kyekyeku</h3>
                  <p className="text-green-600 font-semibold mb-2">Presidential Candidate</p>
                  <span className="inline-block bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    "Top Koder"
                  </span>
                </div>
                
                <p className="text-green-700 text-center mb-6">
                  Visionary leader with exceptional technical skills and proven student advocacy
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
                    <Code className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Tech Innovation</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Leadership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Frederick Abila */}
          <div className="group">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Visual placeholder for photo */}
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-700/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-4xl shadow-xl">
                    FA
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-green-200/50 rounded-full p-2">
                  <Users className="h-6 w-6 text-green-700" />
                </div>
                <div className="absolute bottom-4 left-4 bg-green-200/50 rounded-full p-2">
                  <Heart className="h-6 w-6 text-green-700" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-1">Frederick Abila</h3>
                  <p className="text-green-600 font-semibold mb-2">Vice Presidential Candidate</p>
                  <span className="inline-block bg-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Community Champion
                  </span>
                </div>
                
                <p className="text-green-700 text-center mb-6">
                  Dedicated advocate for student rights and community building
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
                    <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Community Focus</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
                    <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-green-800">Student Advocacy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partnership Vision */}
        <div className="relative">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-4 left-8 w-16 h-16 bg-green-400/20 rounded-full"></div>
              <div className="absolute bottom-8 right-12 w-20 h-20 bg-green-400/20 rounded-full"></div>
              <div className="absolute top-1/2 right-4 w-8 h-8 bg-green-300/30 rounded-full"></div>
              <Sparkles className="absolute top-8 right-8 h-8 w-8 text-green-300/50" />
              <Star className="absolute bottom-4 left-4 h-6 w-6 text-green-300/50" />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                    SK
                  </div>
                  <div className="text-4xl text-green-200">+</div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                    FA
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Perfect Partnership</h3>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-6">
                Technical innovation meets community leadership
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-2xl font-bold text-green-200 mb-1">Innovation</div>
                  <div className="text-green-100 text-sm">Forward-thinking solutions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-2xl font-bold text-green-200 mb-1">Unity</div>
                  <div className="text-green-100 text-sm">Bringing students together</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-2xl font-bold text-green-200 mb-1">Impact</div>
                  <div className="text-green-100 text-sm">Real change for ACSES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};