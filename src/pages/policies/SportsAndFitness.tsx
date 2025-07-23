import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Heart, Users, Trophy, ArrowLeft, CheckCircle, Activity, Target, Sparkles, Star, Zap, Globe } from 'lucide-react';

export const SportsAndFitness: React.FC = () => {
  const clubActivities = [
    {
      icon: <Dumbbell className="h-8 w-8 text-white" />,
      title: 'Fitness Training',
      description: 'Gym sessions & programs'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Team Sports',
      description: 'Football, basketball, more'
    },
    {
      icon: <Activity className="h-8 w-8 text-white" />,
      title: 'Wellness Programs',
      description: 'Yoga, meditation, wellness'
    },
    {
      icon: <Trophy className="h-8 w-8 text-white" />,
      title: 'Competitions',
      description: 'Tournaments & challenges'
    }
  ];

  const programs = [
    {
      title: 'Daily Fitness Sessions',
      description: 'Morning & evening workouts',
      icon: <Dumbbell className="h-8 w-8 text-green-600" />,
      features: ['Cardio workouts', 'Strength training', 'Group classes', 'Personal training']
    },
    {
      title: 'Sports Leagues',
      description: 'Organized tournaments',
      icon: <Trophy className="h-8 w-8 text-green-600" />,
      features: ['Football league', 'Basketball tournaments', 'Table tennis', 'Esports events']
    },
    {
      title: 'Wellness Workshops',
      description: 'Health & nutrition education',
      icon: <Heart className="h-8 w-8 text-green-600" />,
      features: ['Nutrition seminars', 'Stress management', 'Sleep hygiene', 'Mental health']
    },
    {
      title: 'Outdoor Adventures',
      description: 'Hiking & recreational activities',
      icon: <Activity className="h-8 w-8 text-green-600" />,
      features: ['Weekend hikes', 'Camping trips', 'Nature walks', 'Adventure challenges']
    }
  ];

  const facilities = [
    'Modern fitness equipment',
    'Multi-purpose sports courts',
    'Outdoor exercise areas',
    'Yoga & meditation spaces',
    'Changing rooms & lockers',
    'Professional trainers'
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 md:p-4 bg-green-500 rounded-2xl mr-4">
                  <Dumbbell className="h-10 w-10 md:h-12 md:w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">ACSES Sports Club</h1>
                  <p className="text-lg md:text-xl text-green-200">Fitness & Wellness Community</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-green-100 leading-relaxed mb-8">
                Building healthy habits, fostering teamwork, and creating a vibrant fitness community
              </p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {clubActivities.map((activity, index) => (
                  <div key={index} className="bg-green-500/30 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center">
                    <div className="mb-2 flex justify-center">
                      <div className="p-2 bg-green-600 rounded-lg">
                        {activity.icon}
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-xs md:text-sm mb-1">{activity.title}</h4>
                    <p className="text-xs text-green-100">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
                {/* Sports & fitness illustration */}
                <div className="w-full h-48 md:h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 md:h-10 md:w-10 text-white" />
                    </div>
                    <div className="text-green-800 font-bold text-lg mb-2">Sports & Wellness Hub</div>
                    <div className="text-green-600 text-sm mb-4">Mind • Body • Community</div>
                    
                    {/* Activity icons */}
                    <div className="flex justify-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Dumbbell className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                        <Activity className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="text-green-700 text-xs font-medium">Comprehensive Fitness</div>
                  </div>
                  {/* Floating fitness symbols */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-300/50 rounded-full flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-green-700" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400/50 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-green-700" />
                  </div>
                  <div className="absolute top-8 right-8 w-4 h-4 bg-green-500/50 rounded-full"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">Active Lifestyle</h3>
                  <p className="text-green-600 text-sm">Fitness • Sports • Wellness</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-xl">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border-4 border-green-500 rounded-full p-3 shadow-xl">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Programs */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Fitness Programs</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Comprehensive programs for every fitness level and interest
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-xl mr-4">
                      {program.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-green-800">{program.title}</h3>
                      <p className="text-green-600 text-sm">{program.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {program.features.map((feature, idx) => (
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

          {/* Facilities */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-6 md:p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Club Facilities</h2>
              <p className="text-green-600 max-w-2xl mx-auto">
                Modern equipment and spaces designed for optimal fitness experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-green-50 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 mb-2 text-sm md:text-base">{facility}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Benefits */}
          <div className="bg-white border-2 border-green-200 rounded-3xl shadow-lg p-6 md:p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 text-center">Membership Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: 'Join', desc: 'Become a member', icon: <Users className="h-6 w-6" /> },
                { step: 2, title: 'Train', desc: 'Start your fitness journey', icon: <Dumbbell className="h-6 w-6" /> },
                { step: 3, title: 'Compete', desc: 'Join tournaments', icon: <Trophy className="h-6 w-6" /> },
                { step: 4, title: 'Excel', desc: 'Achieve fitness goals', icon: <Star className="h-6 w-6" /> }
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

          {/* Impact Metrics Visual */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-6 md:p-8 text-white mb-12 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-8 w-20 h-20 bg-green-400/20 rounded-full"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-green-500/20 rounded-full"></div>
              <Sparkles className="absolute top-6 left-8 h-8 w-8 text-green-300/50" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Club Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-green-200 mb-2">300+</div>
                  <div className="text-green-100 text-sm md:text-base">Active Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-green-200 mb-2">15+</div>
                  <div className="text-green-100 text-sm md:text-base">Sports Activities</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-green-200 mb-2">25+</div>
                  <div className="text-green-100 text-sm md:text-base">Weekly Sessions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                  <div className="text-2xl md:text-4xl font-bold text-green-200 mb-2">95%</div>
                  <div className="text-green-100 text-sm md:text-base">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white border-2 border-green-200 rounded-3xl p-6 md:p-8 shadow-lg">
              <div className="mb-6">
                <div className="w-16 md:w-20 h-16 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Join the Wellness Movement</h2>
                <p className="text-green-600 mb-8 max-w-2xl mx-auto">
                  Start your fitness journey with ACSES Sports Club and become part of a thriving wellness community
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://chat.whatsapp.com/HFGrjDWYzNqEmgj79o4xTh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 md:px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  Join the Movement
                </a>
                <Link 
                  to="/policies/fab-lab" 
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-3 px-6 md:px-8 rounded-full transition-colors inline-flex items-center justify-center gap-2"
                >
                  Next: Fab Lab
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