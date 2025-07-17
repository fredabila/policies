import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Printer, Glasses, Wrench, ArrowLeft, CheckCircle, Lightbulb } from 'lucide-react';

export const FabLab: React.FC = () => {
  const labCapabilities = [
    {
      icon: <Printer className="h-6 w-6 text-blue-600" />,
      title: '3D Printing',
      description: 'Professional-grade 3D printers for rapid prototyping'
    },
    {
      icon: <Glasses className="h-6 w-6 text-blue-600" />,
      title: 'VR Development',
      description: 'Virtual reality headsets and development environments'
    },
    {
      icon: <Cpu className="h-6 w-6 text-blue-600" />,
      title: 'Electronics Lab',
      description: 'Circuit design, PCB fabrication, and embedded systems'
    },
    {
      icon: <Wrench className="h-6 w-6 text-blue-600" />,
      title: 'Rapid Prototyping',
      description: 'Tools and materials for quick concept validation'
    }
  ];

  const equipment = [
    {
      category: '3D Printing & Fabrication',
      items: ['FDM and SLA 3D printers', 'Laser cutting machine', 'CNC milling machine', 'Post-processing tools']
    },
    {
      category: 'VR/AR Development',
      items: ['Oculus Quest headsets', 'HTC Vive Pro systems', 'AR development kits', 'Motion tracking systems']
    },
    {
      category: 'Electronics & IoT',
      items: ['Arduino and Raspberry Pi kits', 'Soldering stations', 'Oscilloscopes and multimeters', 'Component libraries']
    },
    {
      category: 'Design & Modeling',
      items: ['High-performance workstations', 'CAD software licenses', 'Graphics tablets', 'Large format displays']
    }
  ];

  const projectTypes = [
    {
      title: 'Final Year Projects',
      description: 'Support for capstone projects requiring physical prototypes',
      examples: ['IoT home automation systems', 'Robotics projects', 'Wearable technology', 'Smart device prototypes']
    },
    {
      title: 'VR/AR Applications',
      description: 'Immersive technology projects and experiences',
      examples: ['Educational VR simulations', 'AR mobile applications', 'Virtual training environments', 'Interactive 3D experiences']
    },
    {
      title: 'Innovation Challenges',
      description: 'Rapid prototyping for hackathons and competitions',
      examples: ['Hardware hackathon projects', 'Design thinking workshops', 'Innovation competitions', 'Startup prototypes']
    },
    {
      title: 'Research Projects',
      description: 'Academic research requiring physical implementations',
      examples: ['Computer vision systems', 'Machine learning hardware', 'Sensor networks', 'Human-computer interfaces']
    }
  ];

  const trainingPrograms = [
    'CAD Design and 3D Modeling',
    'Additive Manufacturing Techniques',
    'VR/AR Development Fundamentals',
    'Electronics and Circuit Design',
    'Rapid Prototyping Methodologies',
    'Design Thinking and Innovation'
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center mb-6">
            <Cpu className="h-12 w-12 text-blue-200 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACSES Fab Lab</h1>
              <p className="text-xl text-blue-200">Prototyping & VR Innovation</p>
            </div>
          </div>
          
          <p className="text-lg max-w-3xl leading-relaxed">
            Ideas should live beyond paper. Fab Lab gives students access to 3D printing, prototyping 
            tools, and VR—bringing academic innovation to life through real-world experimentation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Lab Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Innovation Through Making</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">From Concept to Reality</h3>
                <p className="text-slate-600 mb-6">
                  The ACSES Fab Lab is a state-of-the-art fabrication facility that empowers students 
                  to transform their ideas into tangible prototypes. Equipped with cutting-edge 3D 
                  printing technology, VR development tools, and electronics equipment, the lab serves 
                  as a bridge between theoretical knowledge and practical implementation.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Lab Philosophy</h4>
                  <p className="text-blue-700 text-sm">
                    "Innovation happens when ideas meet tools. We provide the space, equipment, 
                    and guidance to turn student visions into reality."
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Lab Capabilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {labCapabilities.map((capability, index) => (
                    <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="mb-2 flex justify-center">
                        {capability.icon}
                      </div>
                      <h4 className="font-bold text-blue-800 text-sm mb-1">{capability.title}</h4>
                      <p className="text-xs text-slate-600">{capability.description}</p>
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
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Project Types */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Supported Project Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-800 text-sm">Examples:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center text-xs text-slate-600">
                          <Lightbulb className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Support */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Training & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">Training Programs</h3>
                <div className="space-y-3">
                  {trainingPrograms.map((program, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        <span className="text-blue-800 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-slate-700 font-medium">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">Support Services</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Technical Mentorship</h4>
                    <p className="text-sm text-slate-600">Expert guidance from lab technicians and faculty</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Project Consultation</h4>
                    <p className="text-sm text-slate-600">Design review and feasibility assessment</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Material Support</h4>
                    <p className="text-sm text-slate-600">Access to materials and components for prototyping</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-800 mb-2">Safety Training</h4>
                    <p className="text-sm text-slate-600">Comprehensive safety protocols and equipment training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Access */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Lab Access & Usage</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">1</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Registration</h3>
                <p className="text-sm text-slate-600">Complete safety training and equipment orientation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">2</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Project Proposal</h3>
                <p className="text-sm text-slate-600">Submit project details and resource requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">3</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Booking</h3>
                <p className="text-sm text-slate-600">Reserve equipment and lab time through online system</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-800 font-bold">4</span>
                </div>
                <h3 className="font-bold text-blue-800 mb-2">Creation</h3>
                <p className="text-sm text-slate-600">Build your prototype with expert support</p>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Expected Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">200+</div>
                <div className="text-white/90">Projects Annually</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">80%</div>
                <div className="text-white/90">Successful Prototypes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">15+</div>
                <div className="text-white/90">Equipment Types</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">500+</div>
                <div className="text-white/90">Student Users</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Bring Your Ideas to Life</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Access cutting-edge fabrication tools and turn your innovative concepts into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#feedback" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Support This Initiative
              </a>
              <Link 
                to="/policies/launchpad" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Next: LaunchPad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};