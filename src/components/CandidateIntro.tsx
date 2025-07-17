import React from 'react';
import { Users, Award, Code, Heart } from 'lucide-react';

export const CandidateIntro: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Meet Your Future Leaders</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            A dynamic duo committed to transforming ACSES through innovative policies and student-centered leadership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Samuel Oppong Kyekyeku */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  SK
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Samuel Oppong Kyekyeku</h3>
                  <p className="text-orange-500 font-medium">Presidential Candidate</p>
                  <p className="text-slate-600 text-sm">"Top Koder"</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6">
                A visionary leader with exceptional technical skills and a proven track record of organizing successful 
                student initiatives. Known for his innovative approach to problem-solving and commitment to student welfare.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Code className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-blue-900">Technical Excellence</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <Award className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-orange-900">Leadership</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Frederick Abila */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  FA
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Frederick Abila</h3>
                  <p className="text-orange-500 font-medium">Vice Presidential Candidate</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6">
                A dedicated advocate for student rights and community building. Frederick brings strong organizational 
                skills and a deep understanding of student needs to complement Samuel's technical expertise.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-blue-900">Community Focus</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <Heart className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-orange-900">Student Advocacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Shared Vision</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Together, Samuel and Frederick represent a perfect balance of technical innovation and community leadership. 
            Their combined experience in student affairs, technology, and advocacy positions them uniquely to address 
            the diverse needs of ACSES members and drive meaningful change in our association.
          </p>
        </div>
      </div>
    </section>
  );
};