import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Code, Heart, ArrowLeft, CheckCircle, Star, Zap, Sparkles, Target, Globe, Crown } from 'lucide-react';

export const TechLadies: React.FC = () => {
  const programPillars = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Mentorship Network',
      description: 'Connect with tech leaders'
    },
    {
      icon: <Code className="h-8 w-8 text-white" />,
      title: 'Skills Development',
      description: 'Technical workshops'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Leadership Training',
      description: 'Build confidence'
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Community Support',
      description: 'Safe networking space'
    }
  ];

  const initiatives = [
    {
      title: 'Women in Tech Workshops',
      description: 'Monthly technical workshops',
      icon: <Code className="h-8 w-8 text-green-600" />,
      features: ['Coding sessions', 'Career talks', 'Industry insights', 'Networking']
    },
    {
      title: 'Mentorship Program',
      description: 'One-on-one mentoring',
      icon: <Users className="h-8 w-8 text-green-600" />,
      features: ['Career guidance', 'Industry connections', 'Project collaboration', 'Professional development']
    },
    {
      title: 'Leadership Development',
      description: 'Building confidence & skills',
      icon: <Crown className="h-8 w-8 text-green-600" />,
      features: ['Public speaking', 'Team leadership', 'Confidence building', 'Executive presence']
    },
    {
      title: 'Innovation Challenges',
      description: 'Women-only hackathons',
      icon: <Zap className="h-8 w-8 text-green-600" />,
      features: ['Problem-solving', 'Team collaboration', 'Prize competitions', 'Industry recognition']
    }
  ];

  const mentorshipTracks = [
    { track: 'Software Development', focus: 'Full-stack, mobile, web' },
    { track: 'Data Science & AI', focus: 'ML, data analysis, AI' },
    { track: 'Cybersecurity', focus: 'InfoSec, ethical hacking' },
    { track: 'Product Management', focus: 'Strategy, UX, projects' },
    { track: 'Entrepreneurship', focus: 'Startups, business, innovation' }
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
                  <Crown className="h-12 w-12 text-white" />
        </div>
              <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES Tech Ladies</h1>
                  <p className="text-xl text-green-200">Empowering Women in Technology</p>
                </div>
              </div>
              
              <p className="text-lg text-green-100 leading-relaxed mb-8">
                Creating opportunities, building confidence, and fostering excellence for women in tech
              </p>
              
                <div className="grid grid-cols-2 gap-4">
                  {programPillars.map((pillar, index) => (
                  <div key={index} className="bg-green-500/30 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="mb-2 flex justify-center">
                      <div className="p-2 bg-green-600 rounded-lg">
                        {pillar.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1">{pillar.title}</h4>
                    <p className="text-xs text-green-100">{pillar.description}</p>
                    </div>
                  ))}
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Women in tech illustration */}
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-green-800 font-bold text-lg mb-2">Tech Ladies Community</div>
                    <div className="text-green-600 text-sm mb-4">Breaking Barriers Together</div>
                    
                    {/* Community representation */}
                    <div className="flex justify-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">♀</span>
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">♀</span>
                      </div>
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">♀</span>
                      </div>
                    </div>
                    <div className="text-green-700 text-xs font-medium">United in Technology</div>
                  </div>
                  {/* Floating empowerment symbols */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-300/50 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-green-700" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400/50 rounded-full flex items-center justify-center">
                    <Crown className="h-3 w-3 text-green-700" />
                  </div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-green-500/50 rounded-full"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Women Leading Tech</h3>
                  <p className="text-green-600 text-sm">Mentorship • Growth • Excellence</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-xl">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border-4 border-green-500 rounded-full p-3 shadow-xl">
                <Star className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Initiatives */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-green-800 mb-4">Core Programs</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Comprehensive support for women pursuing tech careers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-xl mr-4">
                      {initiative.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-800">{initiative.title}</h3>
                      <p className="text-green-600 text-sm">{initiative.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {initiative.features.map((feature, idx) => (
                      <div key={idx} className="bg-green-50 rounded-lg p-3 text-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto mb-1" />
                        <span className="text-green-700 text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentorship Tracks */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Mentorship Tracks</h2>
              <p className="text-green-600">Specialized guidance paths for different tech careers</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {mentorshipTracks.map((track, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-bold text-green-800 mb-2 text-sm">{track.track}</h4>
                  <p className="text-green-600 text-xs">{track.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories Visual */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Empowerment Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'Join', desc: 'Become part of community', icon: <Heart className="h-6 w-6" /> },
                { step: 2, title: 'Learn', desc: 'Develop technical skills', icon: <Code className="h-6 w-6" /> },
                { step: 3, title: 'Lead', desc: 'Build confidence', icon: <Crown className="h-6 w-6" /> },
                { step: 4, title: 'Excel', desc: 'Achieve tech success', icon: <Star className="h-6 w-6" /> }
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

          {/* Community Support Features */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Community Benefits</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Join a supportive network of ambitious women in technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">Networking</h4>
                  <p className="text-green-600 text-sm">Connect with peers and industry professionals</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">Recognition</h4>
                  <p className="text-green-600 text-sm">Celebrate achievements and milestones</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2">Opportunities</h4>
                  <p className="text-green-600 text-sm">Access to internships and job openings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics Visual */}
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
                  <div className="text-4xl font-bold text-green-200 mb-2">200+</div>
                  <div className="text-green-100">Women Empowered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">50+</div>
                  <div className="text-green-100">Mentors</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">80%</div>
                  <div className="text-green-100">Career Growth</div>
              </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-200 mb-2">100%</div>
                  <div className="text-green-100">Support</div>
              </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white border-2 border-green-200 rounded-3xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">Join Tech Ladies</h2>
                <p className="text-green-600 mb-8 max-w-2xl mx-auto">
                  Be part of a community that celebrates and empowers women in technology
                </p>
              </div>
              
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
              >
                  <Sparkles className="h-5 w-5" />
                  Support Tech Ladies
              </a>
              <Link 
                to="/policies/sports-fitness" 
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
              >
                  Next: Sports Club
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