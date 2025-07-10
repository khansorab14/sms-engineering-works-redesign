
import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Star,
  Award,
  Shield,
  Users,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroModal from "../components/HeroModal";
import FloatingCTA from "../components/FloatingCTA";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+919820209923", "_blank");
  };

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified manufacturing with international standards"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "25+ years of experience in hydraulic and piling solutions"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "In-house trained technicians and engineers"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock service and emergency support"
    }
  ];

  const services = [
    {
      title: "Hydraulic Hose Fittings",
      description: "Complete range of hydraulic fittings, couplings, and adaptors",
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png"
    },
    {
      title: "Piling Services",
      description: "Bridge, residential, and commercial piling solutions",
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png"
    },
    {
      title: "XCMG 178E Specialists",
      description: "Expert servicing and spare parts for piling rigs",
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-red">
        <div 
          className="absolute inset-0 bg-black/30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              SMS ENGINEERING WORKS
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-4 animate-fade-in">
              XCMG 178E Piling Rig and Specialists
            </p>
            <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-90">
              Professional engineering services provider in Mumbai, specializing in XCMG 178E piling rig and offering 24/7 solutions for all your industrial needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary flex items-center justify-center"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Learn More About Us
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="btn-secondary flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact on WhatsApp
              </button>
            </div>
            
            <div className="flex items-center justify-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Modi Compound, Reay Road West, Mazgaon, Mumbai</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SMS Engineering Works?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are the preferred strategic partner providing comprehensive support services to the manufacturing industries across Mumbai and Maharashtra.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <feature.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your industrial needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to="/services"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              About SMS Engineering Works
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 25 years of expertise in hydraulic solutions and piling services, SMS Engineering Works has established itself as a trusted partner for industries across Mumbai. We specialize in manufacturing high-quality hydraulic hose fittings, providing comprehensive piling services, and maintaining XCMG 178E piling rigs.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert consultation and quality solutions for your industrial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary"
            >
              Get Quote on WhatsApp
            </button>
            <button
              onClick={handleCallClick}
              className="btn-secondary border-2 border-white"
            >
              Call Now
            </button>
          </div>
        </div>
      </section>

      <HeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default Index;
