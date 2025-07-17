import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Code, Heart, ArrowLeft, CheckCircle, Star, Zap } from 'lucide-react';

export const TechLadies: React.FC = () => {
  const programPillars = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Mentorship Network',
      description: 'Connect with successful women in tech for guidance and career advice'
    },
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: 'Skills Development',
      description: 'Technical workshops and training programs tailored for women'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'Leadership Training',
      description: 'Build confidence and leadership skills for tech industry success'
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: 'Community Support',
      description: 'Safe space for networking, collaboration, and mutual support'
    }
  ];

  const initiatives = [
    {
      title: 'Women in Tech Workshops',
      description: 'Monthly technical workshops led by industry professionals',
      features: ['Hands-on coding sessions', 'Career guidance talks', 'Industry insights', 'Networking opportunities']
    },
    {
      title: 'Mentorship Program',
      description: 'One-on-one mentoring with successful women in technology',
      features: ['Personal career guidance', 'Industry connections', 'Project collaboration', 'Professional development']
    },
    {
      title: 'Leadership Development',
      description: 'Building confidence and leadership skills for tech careers',
      features: ['Public speaking training', 'Team leadership workshops', 'Confidence building sessions', 'Executive presence']
    },
    {
      title: 'Tech Innovation Challenges',
      description: 'Women-only hackathons and innovation competitions',
      features: ['Problem-solving challenges', 'Team collaboration', 'Prize competitions', 'Industry recognition']
    }
  ];

  const mentorshipTracks = [
    { track: 'Software Development', focus: 'Full-stack development, mobile apps, web technologies' },
    { track: 'Data Science & AI', focus: 'Machine learning, data analysis, artificial intelligence' },
    { track: 'Cybersecurity', focus: 'Information security, ethical hacking, digital forensics' },
    { track: 'Product Management', focus: 'Product strategy, user experience, project management' },
    { track: 'Entrepreneurship', focus: 'Startup development, business strategy, innovation' }
  ];

  const successMetrics = [
    { metric: 'Participation Rate', target: '80%', description: 'Female students actively engaged' },
    { metric: 'Skill Advancement', target: '90%', description: 'Participants showing measurable improvement' },
    { metric: 'Industry Connections', target: '100+', description: 'Professional network contacts made' },
    { metric: 'Leadership Roles', target: '50%', description: 'Participants taking leadership positions' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Users className="h-12 w-12 text-purple-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES Tech Ladies</h1>
              <p className="text-xl text-purple-200">Women Thriving in Tech</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Inclusion isn't symbolic—it's systemic. Tech Ladies delivers mentorship, leadership, and 
            skills training to support women in tech, championing diversity and equal innovation space 
            for all female students in Computer Science and Engineering.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Empowering Women in Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Breaking Barriers</h3>
                <p className="text-slate-600 mb-6">
                  The tech industry needs diverse perspectives and talents. ACSES Tech Ladies is designed 
                  to address the unique challenges faced by women in technology fields, providing targeted 
                  support, mentorship, and opportunities for growth and leadership.
                </p>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Our Mission</h4>
                  <p className="text-purple-700 text-sm">
                    "To create an inclusive environment where women in tech can thrive, lead, and 
                    inspire the next generation of female technologists."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Program Pillars</h3>
                <div className="grid grid-cols-2 gap-4">
                  {programPillars.map((pillar, index) => (
                    <div key={index} className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {pillar.icon}
                      </div>
                      <h4 className="font-bold text-purple-800 text-sm mb-1">{pillar.title}</h4>
                      <p className="text-xs text-slate-600">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Key Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">{initiative.title}</h3>
                  <p className="text-slate-600 mb-4">{initiative.description}</p>
                  <ul className="space-y-2">
                    {initiative.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mentorship Tracks */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Mentorship Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentorshipTracks.map((track, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6 hover:bg-purple-100 transition-colors">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-purple-600 mr-2" />
                    <h3 className="font-bold text-purple-800">{track.track}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{track.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Program Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-purple-800 mb-2">Recruitment</h3>
                <p className="text-sm text-slate-600">Open applications and mentor matching</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-purple-800 mb-2">Orientation</h3>
                <p className="text-sm text-slate-600">Program introduction and goal setting</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-purple-800 mb-2">Active Phase</h3>
                <p className="text-sm text-slate-600">Workshops, mentoring, and skill building</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-purple-800 mb-2">Showcase</h3>
                <p className="text-sm text-slate-600">Project presentations and recognition</p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {successMetrics.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-purple-600 mb-2">{item.target}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.metric}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Creating Lasting Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Zap className="h-12 w-12 text-purple-200 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Skill Enhancement</h3>
                <p className="text-purple-200 text-sm">Advanced technical and leadership skills development</p>
              </div>
              <div>
                <Users className="h-12 w-12 text-purple-200 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Network Building</h3>
                <p className="text-purple-200 text-sm">Strong professional networks and mentorship relationships</p>
              </div>
              <div>
                <Award className="h-12 w-12 text-purple-200 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Career Advancement</h3>
                <p className="text-purple-200 text-sm">Better job opportunities and leadership positions</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Join the Tech Ladies Movement</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Support gender diversity in technology and help create equal opportunities for all students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/sports-fitness" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Sports & Fitness
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};