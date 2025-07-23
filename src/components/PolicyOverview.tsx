import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Heart, 
  Award, 
  Users, 
  Dumbbell, 
  Wrench,
  DollarSign,
  Palette,
  Network,
  Shield,
  Cpu,
  Rocket,
  Smartphone,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

export const PolicyOverview: React.FC = () => {
  const pillarsOfACSES = [
    {
      id: 'flexi-net',
      icon: <Wifi className="h-8 w-8" />,
      title: 'ACSES FlexiNet',
      subtitle: 'Affordable Internet',
      description: 'Non-expiry data bundles',
      color: 'green',
      path: '/policies/flexi-net'
    },
    {
      id: 'academic-care-fund',
      icon: <Heart className="h-8 w-8" />,
      title: 'ACSES Care Fund',
      subtitle: 'Emergency Support',
      description: 'Financial aid for students',
      color: 'green',
      path: '/policies/academic-care-fund'
    },
    {
      id: 'allawa-plus',
      icon: <Award className="h-8 w-8" />,
      title: 'ACSES Allawa+',
      subtitle: 'Course Rep Support',
      description: 'Empowering representatives',
      color: 'green',
      path: '/policies/allawa-plus'
    },
    {
      id: 'tech-ladies',
      icon: <Users className="h-8 w-8" />,
      title: 'ACSES Tech Ladies',
      subtitle: 'Women in Tech',
      description: 'Mentorship program',
      color: 'green',
      path: '/policies/tech-ladies'
    },
    {
      id: 'sports-fitness',
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'ACSES Sports Club',
      subtitle: 'Wellness & Unity',
      description: 'Physical wellness',
      color: 'green',
      path: '/policies/sports-fitness'
    },
    {
      id: 'buildx-program',
      icon: <Wrench className="h-8 w-8" />,
      title: 'ACSES BuildX',
      subtitle: 'Life Skills',
      description: 'Technical training',
      color: 'green',
      path: '/policies/buildx-program'
    },
    {
      id: 'learn-and-earn',
      icon: <DollarSign className="h-8 w-8" />,
      title: 'ACSES Learn & Earn',
      subtitle: 'Skills Marketplace',
      description: 'Monetize talents',
      color: 'green',
      path: '/policies/learn-and-earn'
    },
    {
      id: 'creative-studio',
      icon: <Palette className="h-8 w-8" />,
      title: 'ACSES Creative Studio',
      subtitle: 'Digital Media',
      description: 'Content creation',
      color: 'green',
      path: '/policies/creative-studio'
    },
    {
      id: 'power-circle',
      icon: <Network className="h-8 w-8" />,
      title: 'ACSES PowerCircle',
      subtitle: 'Alumni Network',
      description: 'Career opportunities',
      color: 'green',
      path: '/policies/power-circle'
    },
    {
      id: 'defensive-security',
      icon: <Shield className="h-8 w-8" />,
      title: 'ACSES DefSec Team',
      subtitle: 'Cybersecurity',
      description: 'Digital defense',
      color: 'green',
      path: '/policies/defensive-security'
    },
    {
      id: 'fab-lab',
      icon: <Cpu className="h-8 w-8" />,
      title: 'ACSES Fab Lab',
      subtitle: 'Innovation Hub',
      description: '3D printing & VR',
      color: 'green',
      path: '/policies/fab-lab'
    },
    {
      id: 'launchpad',
      icon: <Rocket className="h-8 w-8" />,
      title: 'ACSES LaunchPad',
      subtitle: 'Startup Support',
      description: 'Business incubation',
      color: 'green',
      path: '/policies/launchpad'
    }
  ];

  const goldenAIM = {
    id: 'golden-aim',
    icon: <Smartphone className="h-12 w-12" />,
    title: 'ACSES AIM APP',
    subtitle: 'Academic Intelligence & Management',
    description: 'Revolutionary academic management built by students',
    color: 'green',
    path: '/policies/golden-aim'
  };

  return (
    <section id="policies" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-200/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-green-300/40 rounded-full"></div>
        <div className="absolute bottom-40 left-16 w-24 h-24 bg-green-100/50 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-200/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
            <span className="text-green-700 font-medium text-sm md:text-base">Our Vision in Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 md:mb-6 px-4">
            Transform ACSES
          </h2>
          <div className="text-lg md:text-2xl lg:text-3xl font-semibold text-green-600 mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 px-4">
            <Star className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
            <span className="text-center">12 Pillars + ACSES AIM</span>
            <Star className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
          </div>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-green-700 px-4">
            Comprehensive solutions for every student
          </p>
        </div>
        
        {/* 12 Pillars Container */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-3xl p-6 md:p-8 lg:p-12 mb-12 md:mb-16 shadow-xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
              <Star className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
              <span>The 12 Pillars</span>
              <Star className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
            </h3>
            <p className="text-green-600 max-w-xl mx-auto text-sm md:text-base px-4">
              Building blocks of student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {pillarsOfACSES.map((policy, index) => (
              <Link
                key={policy.id}
                to={policy.path}
                className="group"
              >
                <div className="bg-white border-2 border-green-200 hover:border-green-400 rounded-2xl p-4 md:p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="text-center">
                    <div className="mb-3 md:mb-4 flex justify-center">
                      <div className="p-3 md:p-4 rounded-full bg-green-100 group-hover:bg-green-500 text-green-600 group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110">
                        {policy.icon}
                      </div>
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-green-800 mb-1">{policy.title}</h4>
                    <p className="text-xs md:text-sm text-green-600 mb-2 font-medium">{policy.subtitle}</p>
                    <p className="text-xs text-green-500">{policy.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ACSES AIM - Special Spotlight */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 px-4">
            <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
            <span>The Crown Jewel</span>
            <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
          </h3>
        </div>

        <Link
          to={goldenAIM.path}
          className="block group"
        >
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-6 md:p-8 lg:p-12 hover:scale-105 transition-all duration-500 hover:shadow-2xl mb-12 md:mb-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-6 right-8 w-16 h-16 bg-green-300/30 rounded-full"></div>
              <div className="absolute bottom-8 left-6 w-20 h-20 bg-green-400/20 rounded-full"></div>
              <Star className="absolute top-4 left-4 h-8 w-8 text-green-300/50" />
              <Sparkles className="absolute bottom-4 right-4 h-6 w-6 text-green-300/50" />
            </div>
            
            <div className="text-center relative z-10">
              <div className="mb-4 md:mb-6 flex justify-center">
                <div className="p-4 md:p-6 rounded-2xl bg-white text-green-600 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {goldenAIM.icon}
                </div>
              </div>
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 px-4">{goldenAIM.title}</h4>
              <p className="text-lg md:text-xl text-green-100 mb-4 px-4">{goldenAIM.subtitle}</p>
              <p className="text-green-100 max-w-2xl mx-auto leading-relaxed mb-6 text-sm md:text-base px-4">{goldenAIM.description}</p>
              
              <div className="inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 md:px-8 rounded-full group-hover:shadow-xl transition-all group-hover:scale-105 text-sm md:text-base">
                Discover the Future
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-8 w-12 h-12 bg-green-500/30 rounded-full"></div>
            <div className="absolute bottom-6 right-8 w-16 h-16 bg-green-400/20 rounded-full"></div>
            <Sparkles className="absolute top-8 right-12 h-6 w-6 text-green-300/50" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform ACSES?
          </h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join us in building the future of student experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#feedback" 
                className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:scale-105"
            >
              Share Your Ideas
            </a>
            <a 
              href="#vision" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
            >
              Our Vision
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};