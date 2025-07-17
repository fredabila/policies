import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Camera, Video, Mic, ArrowLeft, CheckCircle, Sparkles } from 'lucide-react';

export const CreativeStudio: React.FC = () => {
  const studioServices = [
    {
      icon: <Palette className="h-6 w-6 text-pink-600" />,
      title: 'Graphic Design',
      description: 'Professional design tools and software for visual content creation'
    },
    {
      icon: <Camera className="h-6 w-6 text-pink-600" />,
      title: 'Photography',
      description: 'High-quality cameras and lighting equipment for photo shoots'
    },
    {
      icon: <Video className="h-6 w-6 text-pink-600" />,
      title: 'Video Production',
      description: 'Complete video production suite with editing capabilities'
    },
    {
      icon: <Mic className="h-6 w-6 text-pink-600" />,
      title: 'Audio Production',
      description: 'Professional audio recording and editing equipment'
    }
  ];

  const equipment = [
    {
      category: 'Design Workstations',
      items: ['High-end computers with design software', 'Graphics tablets and styluses', 'Color-accurate monitors', 'Professional printers']
    },
    {
      category: 'Photography Equipment',
      items: ['DSLR and mirrorless cameras', 'Professional lighting kits', 'Tripods and stabilizers', 'Backdrop and props']
    },
    {
      category: 'Video Production',
      items: ['4K video cameras', 'Professional microphones', 'Video editing workstations', 'Green screen setup']
    },
    {
      category: 'Audio Studio',
      items: ['Recording booth', 'Professional microphones', 'Audio mixing console', 'Monitoring speakers']
    }
  ];

  const services = [
    'Brand identity and logo design',
    'Social media content creation',
    'Event photography and videography',
    'Podcast recording and editing',
    'Marketing materials design',
    'Website graphics and assets',
    'Product photography',
    'Video tutorials and presentations'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-pink-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Palette className="h-12 w-12 text-pink-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES Creative Studio</h1>
              <p className="text-xl text-pink-200">Media & Digital Empowerment</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            In a digital world, creation is power. Creative Studio provides tools, training, and 
            space to turn students into skilled content creators and designers—bridging ideas 
            and innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Studio Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Unleash Your Creative Potential</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Creative Excellence Hub</h3>
                <p className="text-slate-600 mb-6">
                  The ACSES Creative Studio is a state-of-the-art facility designed to empower 
                  students with professional-grade tools and training in digital content creation. 
                  From graphic design to video production, we provide everything needed to bring 
                  creative visions to life.
                </p>
                
                <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
                  <h4 className="font-bold text-pink-800 mb-2">Studio Vision</h4>
                  <p className="text-pink-700 text-sm">
                    "Democratizing access to professional creative tools and fostering a generation 
                    of skilled digital creators and innovators."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Studio Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {studioServices.map((service, index) => (
                    <div key={index} className="text-center p-4 bg-pink-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {service.icon}
                      </div>
                      <h4 className="font-bold text-pink-800 text-sm mb-1">{service.title}</h4>
                      <p className="text-xs text-slate-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Equipment & Facilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Equipment & Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {equipment.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-pink-800 mb-3">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-pink-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Services Offered */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Services We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-pink-50 rounded-lg p-4 text-center hover:bg-pink-100 transition-colors">
                  <Sparkles className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-800">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Training Programs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-pink-800 mb-2">Beginner Workshops</h3>
                <p className="text-sm text-slate-600">Introduction to design principles and software basics</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-pink-800 mb-2">Intermediate Skills</h3>
                <p className="text-sm text-slate-600">Advanced techniques and professional workflows</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-pink-800 mb-2">Portfolio Development</h3>
                <p className="text-sm text-slate-600">Building professional portfolios and personal branding</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-pink-800 mb-2">Client Projects</h3>
                <p className="text-sm text-slate-600">Real-world projects with actual clients</p>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-pink-800 to-pink-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-pink-200 mb-2">200+</div>
                <div className="text-white/90">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-200 mb-2">500+</div>
                <div className="text-white/90">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-200 mb-2">50+</div>
                <div className="text-white/90">Client Partnerships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-200 mb-2">90%</div>
                <div className="text-white/90">Skill Improvement</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Create Your Digital Future</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join the Creative Studio and transform your ideas into professional digital content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/power-circle" 
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: PowerCircle
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};