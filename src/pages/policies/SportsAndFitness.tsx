import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Heart, Users, Trophy, ArrowLeft, CheckCircle, Activity, Target } from 'lucide-react';

export const SportsAndFitness: React.FC = () => {
  const clubActivities = [
    {
      icon: <Dumbbell className="h-6 w-6 text-orange-600" />,
      title: 'Fitness Training',
      description: 'Regular gym sessions and fitness programs for all levels'
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: 'Team Sports',
      description: 'Football, basketball, volleyball, and other team activities'
    },
    {
      icon: <Activity className="h-6 w-6 text-orange-600" />,
      title: 'Wellness Programs',
      description: 'Yoga, meditation, and mental wellness activities'
    },
    {
      icon: <Trophy className="h-6 w-6 text-orange-600" />,
      title: 'Competitions',
      description: 'Inter-department tournaments and fitness challenges'
    }
  ];

  const programs = [
    {
      title: 'Daily Fitness Sessions',
      description: 'Morning and evening workout sessions for all fitness levels',
      features: ['Cardio workouts', 'Strength training', 'Group fitness classes', 'Personal training']
    },
    {
      title: 'Sports Leagues',
      description: 'Organized leagues and tournaments for various sports',
      features: ['Football league', 'Basketball tournaments', 'Table tennis competitions', 'Esports events']
    },
    {
      title: 'Wellness Workshops',
      description: 'Educational programs on health, nutrition, and mental wellness',
      features: ['Nutrition seminars', 'Stress management', 'Sleep hygiene', 'Mental health awareness']
    },
    {
      title: 'Outdoor Adventures',
      description: 'Hiking, camping, and outdoor recreational activities',
      features: ['Weekend hikes', 'Camping trips', 'Nature walks', 'Adventure challenges']
    }
  ];

  const benefits = [
    'Improved physical health and fitness',
    'Better mental health and stress management',
    'Enhanced social connections and teamwork',
    'Increased energy and academic performance',
    'Leadership and organizational skills development',
    'Work-life balance and time management'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Dumbbell className="h-12 w-12 text-orange-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES Sports & Fitness Club</h1>
              <p className="text-xl text-orange-200">Wellness, Unity & Expression</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Success thrives on balance. This club promotes physical well-being, unity, and non-academic 
            expression through fitness and sports—reinforcing discipline, confidence, and community among 
            Computer Science and Engineering students.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Club Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Building Healthy Communities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Why Physical Wellness Matters</h3>
                <p className="text-slate-600 mb-6">
                  In the demanding world of Computer Science and Engineering, physical wellness is often 
                  overlooked. Our Sports & Fitness Club addresses this gap by providing structured 
                  opportunities for physical activity, stress relief, and community building.
                </p>
                
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <h4 className="font-bold text-orange-800 mb-2">Core Philosophy</h4>
                  <p className="text-orange-700 text-sm">
                    "A healthy body supports a sharp mind. We believe in nurturing both for complete 
                    student development and academic excellence."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Club Activities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {clubActivities.map((activity, index) => (
                    <div key={index} className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {activity.icon}
                      </div>
                      <h4 className="font-bold text-orange-800 text-sm mb-1">{activity.title}</h4>
                      <p className="text-xs text-slate-600">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Fitness & Sports Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Available Resources */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Current Resources & Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-orange-800 mb-2">Existing Sports Fields</h3>
                <p className="text-sm text-slate-600">Utilizing available campus sports facilities for football, basketball and general activities</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-orange-800 mb-2">Group Activities</h3>
                <p className="text-sm text-slate-600">Organized team sports, fitness sessions and wellness programs using current spaces</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-orange-800 mb-2">Community Partnerships</h3>
                <p className="text-sm text-slate-600">Collaborating with local gyms and fitness centers for member access</p>
              </div>
            </div>
          </div>

          {/* Benefits & Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Member Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Weekly Schedule</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-slate-800">Monday - Friday</span>
                  <span className="text-sm text-orange-600">6:00 AM - 8:00 AM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-slate-800">Evening Sessions</span>
                  <span className="text-sm text-orange-600">5:00 PM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-slate-800">Weekend Sports</span>
                  <span className="text-sm text-orange-600">9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="font-medium text-slate-800">Wellness Sessions</span>
                  <span className="text-sm text-orange-600">Flexible Timing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Membership */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Membership Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Free Membership</h3>
                <p className="text-sm text-slate-600">All ACSES members get free access to club activities</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Open to All</h3>
                <p className="text-sm text-slate-600">Welcoming students of all fitness levels and abilities</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-orange-800 mb-2">Community Focus</h3>
                <p className="text-sm text-slate-600">Building friendships and support networks through sports</p>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-orange-800 to-orange-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-2">300+</div>
                <div className="text-white/90">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-2">85%</div>
                <div className="text-white/90">Improved Wellness</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-2">50+</div>
                <div className="text-white/90">Weekly Activities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-200 mb-2">100%</div>
                <div className="text-white/90">Stress Reduction</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Join the Wellness Movement</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Support physical wellness and community building through sports and fitness activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/buildx-program" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: BuildX Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};