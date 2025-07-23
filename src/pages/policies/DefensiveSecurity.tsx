import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Zap, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export const DefensiveSecurity: React.FC = () => {
  const securityTracks = [
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: 'Ethical Hacking',
      description: 'Learn penetration testing and vulnerability assessment techniques'
    },
    {
      icon: <Lock className="h-6 w-6 text-red-600" />,
      title: 'Digital Forensics',
      description: 'Investigate cyber crimes and analyze digital evidence'
    },
    {
      icon: <Eye className="h-6 w-6 text-red-600" />,
      title: 'Threat Intelligence',
      description: 'Monitor and analyze cybersecurity threats and trends'
    },
    {
      icon: <Zap className="h-6 w-6 text-red-600" />,
      title: 'Incident Response',
      description: 'Respond to and mitigate cybersecurity incidents effectively'
    }
  ];

  const trainingModules = [
    {
      title: 'Fundamentals of Cybersecurity',
      description: 'Basic concepts, terminology, and security principles',
      features: ['Security frameworks', 'Risk assessment', 'Compliance standards', 'Security policies']
    },
    {
      title: 'Ethical Hacking & Penetration Testing',
      description: 'Hands-on training in authorized security testing',
      features: ['Network scanning', 'Vulnerability assessment', 'Exploitation techniques', 'Report writing']
    },
    {
      title: 'Digital Forensics Investigation',
      description: 'Techniques for investigating cyber crimes and incidents',
      features: ['Evidence collection', 'Data recovery', 'Timeline analysis', 'Court testimony']
    },
    {
      title: 'Security Operations Center (SOC)',
      description: 'Monitor and respond to security events in real-time',
      features: ['SIEM tools', 'Log analysis', 'Incident handling', 'Threat hunting']
    }
  ];

  const labEquipment = [
    'Isolated network environment for safe testing',
    'Virtual machines with various operating systems',
    'Network security appliances and firewalls',
    'Digital forensics workstations and tools',
    'Penetration testing software and frameworks',
    'Incident response simulation platforms'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Shield className="h-12 w-12 text-red-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Defensive Security Team</h1>
              <p className="text-xl text-red-200">Tech Defenders in Action</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Cybersecurity is essential. This team provides hands-on training in ethical hacking, 
            digital security, and cyber defense—transforming students into defenders in an 
            increasingly digital world.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Program Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Cybersecurity Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Defending the Digital Frontier</h3>
                <p className="text-slate-600 mb-6">
                  The Defensive Security Team prepares students to become cybersecurity professionals 
                  through comprehensive training in ethical hacking, digital forensics, and incident 
                  response. Our program combines theoretical knowledge with practical, hands-on experience 
                  in a controlled environment.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-500 mr-2" />
                    <h4 className="font-bold text-blue-800">Collaboration with Cybersecurity Club</h4>
                  </div>
                  <p className="text-blue-700 text-sm mt-1">
                    This initiative will actively involve the Cybersecurity Club, leveraging their expertise and community to enhance training, mentorship, and real-world project opportunities for all participants.
                  </p>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    <h4 className="font-bold text-red-800">Ethical Foundation</h4>
                  </div>
                  <p className="text-red-700 text-sm mt-1">
                    All training emphasizes ethical practices and responsible disclosure of vulnerabilities.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Security Specializations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {securityTracks.map((track, index) => (
                    <div key={index} className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {track.icon}
                      </div>
                      <h4 className="font-bold text-red-800 text-sm mb-1">{track.title}</h4>
                      <p className="text-xs text-slate-600">{track.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Training Modules */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Training Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingModules.map((module, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-red-800 mb-3">{module.title}</h3>
                  <p className="text-slate-600 mb-4">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Development */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Professional Development</h2>
            <div className="text-center mb-6">
              <p className="text-slate-600 mb-6">
                We are developing partnerships with industry organizations and training providers to offer 
                professional certification pathways for team members. These opportunities will be announced 
                as they become available.
              </p>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="font-bold text-red-800 mb-2">Certification Planning</h4>
                <p className="text-red-700 text-sm mb-4">
                  We're exploring various cybersecurity certification programs to enhance our members' 
                  professional credentials and career prospects in the field.
                </p>
                <a 
                  href="/#feedback" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors inline-block"
                >
                  Stay Updated on Certification Programs
                </a>
              </div>
            </div>
          </div>

          {/* Lab Facilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Lab Equipment & Tools</h2>
              <ul className="space-y-3">
                {labEquipment.map((equipment, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{equipment}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Team Structure</h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-red-50 rounded-lg">
                  <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="text-red-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Team Lead</h4>
                    <p className="text-sm text-slate-600">Experienced cybersecurity professional</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-red-50 rounded-lg">
                  <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="text-red-800 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Senior Members</h4>
                    <p className="text-sm text-slate-600">Advanced students with certifications</p>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-red-50 rounded-lg">
                  <div className="bg-red-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="text-red-800 font-bold text-sm">20</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-800">Active Members</h4>
                    <p className="text-sm text-slate-600">Students in various training stages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">50+</div>
                <div className="text-white/90">Certified Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">90%</div>
                <div className="text-white/90">Job Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">15+</div>
                <div className="text-white/90">Industry Partnerships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-200 mb-2">100+</div>
                <div className="text-white/90">Security Assessments</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Become a Cyber Defender</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join the Defensive Security Team and help protect the digital world from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/fab-lab" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: Fab Lab
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
