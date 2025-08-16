import React from 'react';
import { Download, Mail, Phone, Linkedin, Github, Twitter, MapPin, Calendar, Award, Briefcase, User, Code, Database, Settings, Users, MessageSquare } from 'lucide-react';

function App() {
  const skills = [
    { name: 'RPA Development', level: 85, icon: <Settings className="w-5 h-5" /> },
    { name: 'ServiceNow Admin', level: 90, icon: <Database className="w-5 h-5" /> },
    { name: 'ServiceNow Implementation', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'Customer Support', level: 95, icon: <Users className="w-5 h-5" /> },
    { name: 'Technical Support', level: 90, icon: <Settings className="w-5 h-5" /> },
    { name: 'Process Improvement', level: 80, icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Email & Chat Support', level: 95, icon: <MessageSquare className="w-5 h-5" /> },
    
  ];

  const experiences = [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "RPA Support L1 Specialist",
      duration: "2021 - Present (4 years)",
      description: "Leading RPA support operations, troubleshooting automation workflows, and ensuring seamless bot performance. Collaborated with cross-functional teams to optimize automated processes and reduce manual intervention.",
      achievements: [
        "Maintained 99.5% uptime for critical RPA bots",
        "Reduced incident resolution time by 40%",
        "Led training sessions for new team members"
      ]
    },
    {
      company: "CNET Global Solutions",
      role: "Technical Associate & ServiceNow Specialist",
      duration: "2017 - 2021 (4 years)",
      description: "Gained extensive knowledge in ServiceNow platform administration and implementation. Completed comprehensive training programs and earned professional certifications while contributing to various client projects.",
      achievements: [
        "Earned ServiceNow Admin Certification",
        "Completed ServiceNow Implementation Specialist Certification",
        "Contributed to multiple client implementations"
      ]
    },
    {
      company: "Karvy Stock Broking",
      role: "Customer Support Specialist",
      duration: "2015 - 2017 (1.5 years)",
      description: "Managed email and chat support channels for stock trading clients. Provided technical assistance and resolved complex queries related to trading platforms and financial instruments.",
      achievements: [
        "Maintained 95% customer satisfaction rating",
        "Handled 100+ customer interactions daily",
        "Specialized in trading platform technical support"
      ]
    },
    {
      company: "HDFC Bank",
      role: "CASA Procurement Executive",
      duration: "2014 - 2015 (1 year)",
      description: "Focused on direct sales and procurement of Current Account Savings Account (CASA) products. Achieved consistent sales targets while maintaining high customer service standards.",
      achievements: [
        "Exceeded quarterly sales targets by 15%",
        "Built strong client relationships",
        "Contributed to branch revenue growth"
      ]
    },
    {
      company: "Emergency Response Services",
      role: "Emergency Response Officer",
      duration: "2012 - 2014 (2 years)",
      description: "Served as first point of contact for emergency dial 100 calls. Demonstrated exceptional communication skills and ability to work under pressure while coordinating with law enforcement agencies.",
      achievements: [
        "Handled critical emergency situations with composure",
        "Maintained accurate incident documentation",
        "Contributed to public safety operations"
      ]
    }
  ];

  const certifications = [
    {
      name: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      year: "2020",
      icon: <Award className="w-6 h-6 text-blue-600" />
    },
    {
      name: "ServiceNow Implementation Specialist",
      issuer: "ServiceNow", 
      year: "2020",
      icon: <Award className="w-6 h-6 text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Portfolio</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#skills" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Skills</a>
                <a href="#experience" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Experience</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm mx-auto mb-8 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Technical Professional
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              RPA Specialist | ServiceNow Expert | 13+ Years Experience
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experienced Technical Professional</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With over 13 years of diverse experience across technology, finance, and customer service sectors, 
                I specialize in RPA support and ServiceNow platform administration. My journey has equipped me with 
                a unique blend of technical expertise and customer-focused problem-solving skills.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Currently serving as an RPA Support L1 Specialist at TCS, I'm passionate about automation, 
                process optimization, and leveraging technology to drive business efficiency. My ServiceNow 
                certifications and hands-on experience make me well-positioned for challenging roles in IT service management.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Available for Remote/Hybrid roles</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-gray-900">13+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-gray-900">2</h4>
                <p className="text-gray-600">Certifications</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-gray-900">5</h4>
                <p className="text-gray-600">Companies</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h4 className="text-2xl font-bold text-gray-900">100%</h4>
                <p className="text-gray-600">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {skill.icon}
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  {cert.icon}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-gray-600 mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{exp.description}</p>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-blue-100">Ready to take on new challenges and contribute to your team's success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">your.email@example.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+91 XXXXX XXXXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <Linkedin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-blue-100">Connect with me</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-white hover:text-blue-200 transition-colors p-3 bg-white/10 rounded-full">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors p-3 bg-white/10 rounded-full">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors p-3 bg-white/10 rounded-full">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors p-3 bg-white/10 rounded-full">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Professional Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;