
import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Clock, Settings, Wrench, Cog, Star, Users, Award, CheckCircle, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919820209923', '_blank');
  };

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Mechanical Engineering",
      description: "Complete mechanical engineering solutions for industrial and commercial applications."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Equipment Maintenance",
      description: "Professional maintenance and repair services for all types of industrial equipment."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "XCMG 178E Filing Machine",
      description: "Specialized services for XCMG 178E filing machines including maintenance, repairs, and technical support."
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "Tailored engineering solutions designed to meet your specific requirements."
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-red-600" />,
      title: "24/7 Service",
      description: "Available round the clock for emergency services"
    },
    {
      icon: <Users className="w-6 h-6 text-red-600" />,
      title: "Expert Team",
      description: "Highly skilled and experienced engineers"
    },
    {
      icon: <Award className="w-6 h-6 text-red-600" />,
      title: "Quality Assured",
      description: "Premium quality work with guaranteed results"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-red-600" />,
      title: "Trusted Service",
      description: "Reliable and professional service delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              <h1 className="text-3xl font-bold text-gradient">SMS ENGINEERING WORKS</h1>
              <p className="text-gray-600 text-sm">Professional Engineering Services</p>
            </div>
            <div className={`hidden md:flex items-center space-x-6 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              <nav className="flex items-center space-x-6">
                <Link to="/" className="text-red-600 font-semibold">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-red-600 font-semibold">About</Link>
                <Link to="/services" className="text-gray-700 hover:text-red-600 font-semibold">Services</Link>
                <Link to="/contact" className="text-gray-700 hover:text-red-600 font-semibold">Contact</Link>
              </nav>
              <button onClick={handleWhatsAppClick} className="flex items-center text-gray-700 hover:text-red-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">098202 09923</span>
              </button>
              <div className="flex items-center text-gray-700">
                <Clock className="w-4 h-4 mr-2 text-red-600" />
                <span className="font-semibold">Open 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-red text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Excellence in Engineering
            </h2>
            <p className={`text-xl md:text-2xl mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Your trusted partner for XCMG 178E and all engineering solutions in Mumbai
            </p>
            <div className={`flex flex-col md:flex-row gap-4 justify-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <button onClick={handleWhatsAppClick} className="btn-secondary animate-pulse-hover">
                WhatsApp: 098202 09923
              </button>
              <Link to="/services" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-red-500" />
              <span>Modi Compound Shop No. 6, Reay Road West, Mazgaon, Mumbai 400010</span>
            </div>
            <button onClick={handleWhatsAppClick} className="flex items-center hover:text-red-500">
              <Phone className="w-5 h-5 mr-2 text-red-500" />
              <span>098202 09923</span>
            </button>
          </div>
        </div>
      </section>

      {/* XCMG 178E Featured Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">XCMG 178E Filing Machine Specialists</h3>
              <p className="text-xl text-gray-600">Expert maintenance and repair services for XCMG 178E equipment</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="XCMG 178E Filing Machine" 
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className={`${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">XCMG 178E Professional Support</h4>
                <p className="text-lg text-gray-600 mb-6">
                  We specialize in comprehensive support for XCMG 178E filing machines, ensuring optimal performance, minimal downtime, and maximum productivity for your operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Expert technicians trained on XCMG equipment
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Genuine spare parts and components
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    24/7 emergency repair services
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Preventive maintenance programs
                  </li>
                </ul>
                <button onClick={handleWhatsAppClick} className="btn-primary">
                  Book XCMG Service: 098202 09923
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600">Comprehensive engineering solutions for all your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg card-hover ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button onClick={handleWhatsAppClick} className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                  Contact: 098202 09923
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SMS Engineering Works?</h3>
            <p className="text-xl text-gray-600">We deliver excellence in every project</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`text-center p-6 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8">Contact us today for professional engineering solutions and XCMG 178E services</p>
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
                Professional engineering services provider in Mumbai, specializing in XCMG 178E filing machines and offering 24/7 solutions for all your industrial needs.
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
                <li>• Emergency Repairs</li>
                <li>• Consultation Services</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SMS Engineering Works. All rights reserved. | Professional Engineering Services Mumbai</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
