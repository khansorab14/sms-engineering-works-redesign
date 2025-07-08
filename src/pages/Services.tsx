
import React from 'react';
import { Phone, MapPin, Clock, Settings, Wrench, Cog, Star, Hammer, Tool, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919820209923', '_blank');
  };

  const services = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Mechanical Engineering",
      description: "Complete mechanical engineering solutions for industrial and commercial applications including design, installation, and maintenance.",
      features: ["Design & Analysis", "Installation Services", "Maintenance Support", "Quality Assurance"]
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Equipment Maintenance",
      description: "Professional maintenance and repair services for all types of industrial equipment to ensure optimal performance.",
      features: ["Preventive Maintenance", "Emergency Repairs", "Equipment Upgrades", "Performance Optimization"]
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Custom Solutions",
      description: "Tailored engineering solutions designed to meet your specific requirements and industry standards.",
      features: ["Custom Design", "Fabrication", "Installation", "After-sales Support"]
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "XCMG 178E Filing Machine",
      description: "Specialized services for XCMG 178E filing machines including maintenance, repairs, and operational support.",
      features: ["Machine Maintenance", "Technical Support", "Spare Parts", "Training Services"]
    },
    {
      icon: <Tool className="w-12 h-12" />,
      title: "Industrial Consulting",
      description: "Expert consulting services to optimize your industrial processes and improve operational efficiency.",
      features: ["Process Analysis", "Efficiency Improvement", "Cost Optimization", "Technical Guidance"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Emergency Services",
      description: "24/7 emergency repair and maintenance services to minimize downtime and ensure business continuity.",
      features: ["24/7 Availability", "Rapid Response", "On-site Service", "Emergency Repairs"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="animate-slide-left">
              <h1 className="text-3xl font-bold text-gradient">SMS ENGINEERING WORKS</h1>
              <p className="text-gray-600 text-sm">Professional Engineering Services</p>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-semibold">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-semibold">About</Link>
              <Link to="/services" className="text-red-600 font-semibold">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-semibold">Contact</Link>
              <button onClick={handleWhatsAppClick} className="flex items-center text-gray-700 hover:text-red-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">098202 09923</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Services Hero Section */}
      <section className="gradient-red text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Comprehensive engineering solutions for all your industrial needs
            </p>
            <button onClick={handleWhatsAppClick} className="btn-secondary animate-pulse-hover">
              Get Quote: 098202 09923
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100"
              >
                <div className="text-red-600 mb-6">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button onClick={handleWhatsAppClick} className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Contact: 098202 09923
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service - XCMG 178E */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">XCMG 178E Filing Machine Services</h3>
              <p className="text-xl text-gray-600">Specialized maintenance and support for XCMG 178E equipment</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="XCMG 178E Filing Machine" 
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Expert XCMG 178E Support</h4>
                <p className="text-gray-600 mb-6">
                  Our specialized team provides comprehensive support for XCMG 178E filing machines, ensuring optimal performance and minimal downtime for your operations.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <h5 className="font-bold text-gray-900">24/7</h5>
                    <p className="text-sm text-gray-600">Emergency Support</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <h5 className="font-bold text-gray-900">Expert</h5>
                    <p className="text-sm text-gray-600">Technicians</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <h5 className="font-bold text-gray-900">Genuine</h5>
                    <p className="text-sm text-gray-600">Spare Parts</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow">
                    <h5 className="font-bold text-gray-900">Quick</h5>
                    <p className="text-sm text-gray-600">Response</p>
                  </div>
                </div>
                <button onClick={handleWhatsAppClick} className="btn-primary">
                  Book Service: 098202 09923
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Need Professional Engineering Services?</h3>
          <p className="text-xl mb-8">Contact us today for customized solutions</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button onClick={handleWhatsAppClick} className="btn-primary">
              WhatsApp: 098202 09923
            </button>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-gradient mb-4">SMS ENGINEERING WORKS</h4>
              <p className="text-gray-400 mb-4">
                Professional engineering services provider in Mumbai, specializing in XCMG 178E and industrial solutions.
              </p>
              <div className="flex items-center text-gray-400">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Trusted Service</span>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-red-500">Contact Info</h5>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-red-500 mt-1" />
                  <span>Modi Compound Shop No. 6<br />Reay Road West, Mazgaon<br />Mumbai, Maharashtra 400010</span>
                </div>
                <button onClick={handleWhatsAppClick} className="flex items-center text-gray-400 hover:text-white">
                  <Phone className="w-5 h-5 mr-2 text-red-500" />
                  <span>098202 09923</span>
                </button>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-red-500" />
                  <span>Open 24 Hours</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-red-500">Our Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>• XCMG 178E Filing Machine</li>
                <li>• Mechanical Engineering</li>
                <li>• Equipment Maintenance</li>
                <li>• Custom Solutions</li>
                <li>• Emergency Services</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SMS Engineering Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
