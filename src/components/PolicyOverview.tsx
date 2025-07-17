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
      icon: <Wifi className="h-10 w-10" />,
      title: 'FlexiNet',
      subtitle: 'Affordable Internet',
      description: 'Non-expiry data bundles for all members',
      color: 'blue',
      path: '/policies/flexi-net'
    },
    {
      id: 'academic-care-fund',
      icon: <Heart className="h-10 w-10" />,
      title: 'Boame Fund',
      subtitle: 'Emergency Support',
      description: 'Financial aid for academic emergencies',
      color: 'red',
      path: '/policies/academic-care-fund'
    },
    {
      id: 'allawa-plus',
      icon: <Award className="h-10 w-10" />,
      title: 'Allawa+',
      subtitle: 'Course Rep Support',
      description: 'Empowering student representatives',
      color: 'green',
      path: '/policies/allawa-plus'
    },
    {
      id: 'tech-ladies',
      icon: <Users className="h-10 w-10" />,
      title: 'Tech Ladies',
      subtitle: 'Women in Tech',
      description: 'Mentorship for female students',
      color: 'purple',
      path: '/policies/tech-ladies'
    },
    {
      id: 'sports-fitness',
      icon: <Dumbbell className="h-10 w-10" />,
      title: 'Sports Club',
      subtitle: 'Wellness & Unity',
      description: 'Physical wellness and community',
      color: 'orange',
      path: '/policies/sports-fitness'
    },
    {
      id: 'buildx-program',
      icon: <Wrench className="h-10 w-10" />,
      title: 'BuildX',
      subtitle: 'Life Skills',
      description: 'Hands-on technical training',
      color: 'indigo',
      path: '/policies/buildx-program'
    },
    {
      id: 'learn-and-earn',
      icon: <DollarSign className="h-10 w-10" />,
      title: 'Learn & Earn',
      subtitle: 'Skills Marketplace',
      description: 'Monetize your talents',
      color: 'yellow',
      path: '/policies/learn-and-earn'
    },
    {
      id: 'creative-studio',
      icon: <Palette className="h-10 w-10" />,
      title: 'Creative Studio',
      subtitle: 'Digital Media',
      description: 'Content creation space',
      color: 'pink',
      path: '/policies/creative-studio'
    },
    {
      id: 'power-circle',
      icon: <Network className="h-10 w-10" />,
      title: 'PowerCircle',
      subtitle: 'Alumni Network',
      description: 'Mentorship & career opportunities',
      color: 'teal',
      path: '/policies/power-circle'
    },
    {
      id: 'defensive-security',
      icon: <Shield className="h-10 w-10" />,
      title: 'DefSec Team',
      subtitle: 'Cybersecurity',
      description: 'Ethical hacking & digital defense',
      color: 'red',
      path: '/policies/defensive-security'
    },
    {
      id: 'fab-lab',
      icon: <Cpu className="h-10 w-10" />,
      title: 'Fab Lab',
      subtitle: 'Innovation Hub',
      description: '3D printing & VR prototyping',
      color: 'blue',
      path: '/policies/fab-lab'
    },
    {
      id: 'launchpad',
      icon: <Rocket className="h-10 w-10" />,
      title: 'LaunchPad',
      subtitle: 'Startup Support',
      description: 'Turn ideas into businesses',
      color: 'orange',
      path: '/policies/launchpad'
    }
  ];

  const goldenAIM = {
    id: 'golden-aim',
    icon: <Smartphone className="h-16 w-16" />,
    title: 'The Golden AIM',
    subtitle: 'Smart System for Smart Generation',
    description: 'Revolutionary academic management system built by students, for students',
    color: 'yellow',
    path: '/policies/golden-aim'
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-400/20 to-blue-600/30 border-blue-300/30',
      red: 'from-red-400/20 to-red-600/30 border-red-300/30',
      green: 'from-green-400/20 to-green-600/30 border-green-300/30',
      purple: 'from-purple-400/20 to-purple-600/30 border-purple-300/30',
      orange: 'from-orange-400/20 to-orange-600/30 border-orange-300/30',
      indigo: 'from-indigo-400/20 to-indigo-600/30 border-indigo-300/30',
      yellow: 'from-yellow-400/20 to-yellow-600/30 border-yellow-300/30',
      pink: 'from-pink-400/20 to-pink-600/30 border-pink-300/30',
      teal: 'from-teal-400/20 to-teal-600/30 border-teal-300/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getButtonColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      yellow: 'from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="policies" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-orange-500" />
            <span className="text-slate-700 font-medium">Our Vision in Action</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 bg-clip-text text-transparent mb-6">
            The 12 Pillars of ACSES
          </h2>
          <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            & The Golden AIM
          </div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Transforming student experience through innovation, support, and opportunity
          </p>
        </div>
        
        {/* Liquid Glass Container for 12 Pillars */}
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-orange-500" />
              The 12 Pillars
              <Star className="h-8 w-8 text-orange-500" />
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto">
              Comprehensive solutions for every aspect of student life
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pillarsOfACSES.map((policy, index) => (
              <Link
                key={policy.id}
                to={policy.path}
                className="group"
              >
                <div className={`backdrop-blur-md bg-gradient-to-br ${getColorClasses(policy.color)} border rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl`}>
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getButtonColorClasses(policy.color)} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {policy.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{policy.title}</h4>
                    <p className="text-sm text-slate-600 mb-2">{policy.subtitle}</p>
                    <p className="text-xs text-slate-500">{policy.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Golden AIM - Special Spotlight */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-yellow-500" />
            The Crown Jewel
            <Sparkles className="h-8 w-8 text-yellow-500" />
          </h3>
        </div>

        <Link
          to={goldenAIM.path}
          className="block group"
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-yellow-400/30 via-orange-400/20 to-yellow-500/30 border border-yellow-300/40 rounded-3xl p-8 md:p-12 hover:scale-105 transition-all duration-500 hover:shadow-2xl mb-16">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  {goldenAIM.icon}
                </div>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">{goldenAIM.title}</h4>
              <p className="text-xl text-slate-700 mb-4">{goldenAIM.subtitle}</p>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">{goldenAIM.description}</p>
              
              <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 px-6 rounded-full group-hover:shadow-lg transition-all">
                Discover the Future
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
        
        {/* Call to Action */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-white/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform ACSES?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Join us in building the future of student experience through innovation and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#feedback" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:scale-105"
            >
              Share Your Ideas
            </a>
            <a 
              href="#vision" 
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
            >
              Our Vision
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};