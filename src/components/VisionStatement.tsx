import React from 'react';
import { Target, Zap, Globe, Users } from 'lucide-react';

export const VisionStatement: React.FC = () => {
  const visionPoints = [
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: 'Strategic Focus',
      description: 'Targeted initiatives that address the most pressing needs of CS&E students with measurable outcomes.'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Innovation Drive',
      description: 'Fostering a culture of creativity and technological advancement through cutting-edge programs.'
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: 'Global Perspective',
      description: 'Preparing students for international opportunities and connecting with global tech communities.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Inclusive Community',
      description: 'Building a supportive environment where every student can thrive regardless of their background.'
    }
  ];

  return (
    <section id="vision" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Vision for ACSES</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Transforming ACSES into a World-Class Student Association
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We envision an ACSES that serves as a model for student associations globally. Our vision is to create 
              an ecosystem where every Computer Science and Engineering student has access to exceptional resources, 
              opportunities, and support systems that enable them to excel academically, professionally, and personally.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Through strategic partnerships, innovative programs, and student-centered policies, we will build a 
              community that not only meets current needs but anticipates and prepares for future challenges in 
              the rapidly evolving tech landscape.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-bold text-blue-900 mb-3">Our Commitment</h4>
              <p className="text-slate-600">
                "We commit to transparent leadership, regular progress updates, and measurable results. 
                Every policy we implement will be evaluated for its impact on student success and satisfaction."
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  SK
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  FA
                </div>
                <span className="text-sm text-slate-600">Samuel & Frederick</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  {point.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">{point.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">2025</div>
              <div className="text-white/90">Year of Transformation</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-white/90">Student-Centered Approach</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-white/90">Unlimited Potential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};