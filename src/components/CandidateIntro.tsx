import React from 'react';
import { Users, Award, Code, Heart, Star, Sparkles, Mail, Phone } from 'lucide-react';

export const CandidateIntro: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
            <Star className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
            <span className="text-green-700 font-medium text-sm md:text-base">Meet Your Leaders</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4 md:mb-6">
            Ready to Serve ACSES
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-green-600 px-4">
            A dynamic partnership dedicated to transforming student experience
          </p>
        </div>
        
        {/* Candidates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Samuel Oppong Kyekyeku */}
          <div className="group">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Actual photo */}
              <div className="h-64 md:h-72 lg:h-80 relative overflow-hidden">
                <img
                  src="https://i.ibb.co/pCr2VBf/topkoderr.jpg"
                  alt="Samuel Oppong Kyekyeku"
                  className="w-full h-full object-cover object-center "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-green-200/80 backdrop-blur-sm rounded-full p-2">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-green-700" />
                </div>
                <div className="absolute bottom-4 left-4 bg-green-200/80 backdrop-blur-sm rounded-full p-2">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-green-700" />
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-1">Samuel Oppong Kyekyeku</h3>
                  <p className="text-green-600 font-semibold mb-2 text-sm md:text-base">Presidential Candidate</p>
                  <span className="inline-block bg-green-200 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    "Top Koder"
                  </span>
                </div>

                <div className="space-y-3 md:space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Code className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-green-700 text-sm md:text-base">Tech Innovation Leader</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-green-700 text-sm md:text-base">Student Advocate</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-green-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center text-green-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href="mailto:thekoderfraternity@gmail.com" className="text-xs md:text-sm hover:underline">
                      thekoderfraternity@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href="tel:+233599539127" className="text-xs md:text-sm hover:underline">
                      +233 599 539 127
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Frederick Sarpong */}
          <div className="group">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Actual photo */}
              <div className="h-64 md:h-72 lg:h-80 relative overflow-hidden">
                <img
                  src="https://i.ibb.co/BKQ5Pjsr/VPFRED.jpg"
                  alt="Frederick Abila"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-green-200/80 backdrop-blur-sm rounded-full p-2">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-green-700" />
                </div>
                <div className="absolute bottom-4 left-4 bg-green-200/80 backdrop-blur-sm rounded-full p-2">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-green-700" />
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-1">Frederick Abila</h3>
                  <p className="text-green-600 font-semibold mb-2 text-sm md:text-base">Vice Presidential Candidate</p>
                  <span className="inline-block bg-green-200 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    "Community Builder"
                  </span>
                </div>

                <div className="space-y-3 md:space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-green-700 text-sm md:text-base">Student Welfare Champion</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-green-700 text-sm md:text-base">Academic Excellence</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-green-50 rounded-xl p-4 space-y-2">
                  <div className="flex items-center text-green-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href="mailto:thekoderfraternity@gmail.com" className="text-xs md:text-sm hover:underline">
                      thekoderfraternity@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <a href="tel:+233551580558" className="text-xs md:text-sm hover:underline">
                      +233 551 580 558
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Shared Vision */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-8 w-16 h-16 md:w-20 md:h-20 bg-green-400/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full"></div>
              <Sparkles className="absolute top-6 left-8 h-6 w-6 md:h-8 md:w-8 text-green-300/50" />
            </div>

            <div className="relative z-10 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Shared Vision</h3>
              <p className="text-lg md:text-xl text-green-100 mb-6 max-w-3xl mx-auto">
                Together, we bring complementary strengths: technical innovation and community care,
                united in our commitment to student success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                  <Code className="h-6 w-6 md:h-8 md:w-8 text-green-200 mx-auto mb-3" />
                  <h4 className="font-bold text-green-200 mb-2 text-sm md:text-base">Innovation</h4>
                  <p className="text-green-100 text-xs md:text-sm">Technology-driven solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-green-200 mx-auto mb-3" />
                  <h4 className="font-bold text-green-200 mb-2 text-sm md:text-base">Care</h4>
                  <p className="text-green-100 text-xs md:text-sm">Student welfare focus</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                  <Star className="h-6 w-6 md:h-8 md:w-8 text-green-200 mx-auto mb-3" />
                  <h4 className="font-bold text-green-200 mb-2 text-sm md:text-base">Excellence</h4>
                  <p className="text-green-100 text-xs md:text-sm">Academic achievement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};