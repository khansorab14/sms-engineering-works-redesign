
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
  Wrench,
  Zap,
  Target,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroModal from "../components/HeroModal";
import FloatingCTA from "../components/FloatingCTA";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroImages = [
    "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png",
    "/lovable-uploads/88862d2a-a13e-4c74-923c-741ae70c868d.png",
    "/lovable-uploads/28042f01-6d76-44ab-bfb8-19495e02d4d4.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
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
      description: "ISO certified manufacturing with international standards",
      color: "text-green-600"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "25+ years of experience in hydraulic and piling solutions",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "In-house trained technicians and engineers",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock service and emergency support",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Marine Services",
      description: "Offshore and marine hydraulic system expertise",
      color: "text-cyan-600"
    },
    {
      icon: Target,
      title: "Precision Manufacturing",
      description: "CNC machined components with exact specifications",
      color: "text-orange-600"
    }
  ];

  const services = [
    {
      title: "Hydraulic Hose Fittings & Manufacturing",
      description: "BSP, JIC, METRIC, ORFS fittings and custom hose assemblies",
      image: "/lovable-uploads/739b83df-5c32-4ccc-b67e-9ee8c0ea3d8b.png"
    },
    {
      title: "Battery-Operated Mobile Van Service",
      description: "First in Maharashtra - On-site hydraulic hose crimping service",
      image: "/lovable-uploads/88862d2a-a13e-4c74-923c-741ae70c868d.png"
    },
    {
      title: "XCMG 178E Piling Services",
      description: "Expert servicing and spare parts for piling rigs",
      image: "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png"
    }
  ];

  const equipmentSpecs = [
    {
      name: "XCMG XR178E",
      type: "Heavy Duty Piling Rig",
      capacity: "Max 35m depth",
      features: ["Hydraulic rotary drive", "Advanced control system", "High torque capacity"],
      image: "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png"
    },
    {
      name: "Hydraulic Crimping Machine",
      type: "Mobile Van Equipment",
      capacity: "Multi-die system",
      features: ["Battery operated", "On-site service", "Emergency response"],
      image: "/lovable-uploads/88862d2a-a13e-4c74-923c-741ae70c868d.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-20" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 gradient-red" />
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Company Logo */}
            <div className="mb-8 animate-fade-in">
              <img 
                src="/lovable-uploads/93c710bd-3602-49f0-bc2b-127c016f8a94.png" 
                alt="SMS Engineering Works Logo"
                className="mx-auto mb-6 w-32 h-32 object-contain bg-white/10 rounded-xl p-4"
              />
            </div>
            
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                S.M.S ENGINEERING WORKS
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl mb-4 animate-slide-left">
                <span className="text-yellow-300">Manufacturers & Service Providers</span> in Hydraulic Hoses & Fittings
              </div>
              <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block font-semibold mb-6 animate-pulse">
                📍 First in Maharashtra with battery-operated mobile van service
              </div>
              <p className="text-lg md:text-xl mb-8 animate-slide-right opacity-90">
                Professional engineering services provider in Mumbai, specializing in hydraulic solutions with 24/7 emergency mobile service and on-site repair capabilities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-scale-in">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary flex items-center justify-center transform hover:scale-105 animate-pulse-hover"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Learn More About Us
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="btn-secondary flex items-center justify-center border-2 border-white transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request Mobile Van Service
              </button>
            </div>
            
            <div className="flex items-center justify-center text-gray-300 animate-fade-in">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Modi Compound, Reay Road West, Mazgaon, Mumbai</span>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Mobile Van Service Highlight */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
                🚐 Revolutionary Mobile Van Service
              </h2>
              <p className="text-xl animate-fade-in">
                Battery-operated mobile van for on-site hydraulic hose crimping - First in Maharashtra!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-scale-in">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Battery Operated</h3>
                <p>Fully self-sufficient mobile unit with battery-powered crimping equipment</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏃‍♂️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">1-Hour Dispatch</h3>
                <p>Emergency response team ready to dispatch within 1 hour</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Tracking</h3>
                <p>Real-time service tracking and reporting via tablets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Why Choose SMS Engineering Works?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              We are the preferred strategic partner providing comprehensive support services to the manufacturing industries across Mumbai and Maharashtra.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover text-center animate-scale-in"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
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

      {/* Enhanced Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in">
              Comprehensive solutions for your industrial needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
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

      {/* Equipment Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Our Advanced Equipment
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in">
              State-of-the-art machinery for precision and efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {equipmentSpecs.map((equipment, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {equipment.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-2">
                    {equipment.type}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {equipment.capacity}
                  </p>
                  <ul className="space-y-2">
                    {equipment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-slide-up">
              About SMS Engineering Works
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in">
              With over 25 years of expertise in hydraulic solutions and piling services, SMS Engineering Works has established itself as a trusted partner for industries across Mumbai. We specialize in manufacturing high-quality hydraulic hose fittings, providing comprehensive piling services, and maintaining XCMG 178E piling rigs.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center animate-scale-in">
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
            <Link to="/about" className="btn-primary animate-pulse-hover">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="gradient-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in">
            Get expert consultation and quality solutions for your industrial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary transform hover:scale-105"
            >
              Get Quote on WhatsApp
            </button>
            <button
              onClick={handleCallClick}
              className="btn-secondary border-2 border-white transform hover:scale-105"
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
