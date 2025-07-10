
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
    "/lovable-uploads/86523bc1-dabc-4474-9698-a90dea7611a6.png",
    "/lovable-uploads/28042f01-6d76-44ab-bfb8-19495e02d4d4.png",
    "/lovable-uploads/59a6d687-aa42-4e6c-b3b1-fa05f538357c.png"
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
      title: "Hydraulic Hose Fittings",
      description: "Complete range of hydraulic fittings, couplings, and adaptors",
      image: "/lovable-uploads/739b83df-5c32-4ccc-b67e-9ee8c0ea3d8b.png"
    },
    {
      title: "XCMG 178E Piling Services",
      description: "Expert servicing and spare parts for piling rigs",
      image: "/lovable-uploads/28042f01-6d76-44ab-bfb8-19495e02d4d4.png"
    },
    {
      title: "Marine Hydraulic Systems",
      description: "Offshore platform and vessel hydraulic solutions",
      image: "/lovable-uploads/59a6d687-aa42-4e6c-b3b1-fa05f538357c.png"
    }
  ];

  const equipmentSpecs = [
    {
      name: "XCMG 178E",
      type: "Heavy Duty Piling Rig",
      capacity: "Max 35m depth",
      features: ["Hydraulic rotary drive", "Advanced control system", "High torque capacity"],
      image: "/lovable-uploads/28042f01-6d76-44ab-bfb8-19495e02d4d4.png"
    },
    {
      name: "Hydraulic Crimping Machine",
      type: "Hose Assembly Equipment",
      capacity: "Multi-die system",
      features: ["Precision crimping", "Safety features", "Multiple die sizes"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop"
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
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                SMS ENGINEERING WORKS
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl mb-4 animate-slide-left">
                <span className="text-yellow-300">XCMG 178E</span> Piling Rig Specialists
              </div>
              <p className="text-lg md:text-xl mb-8 animate-slide-right opacity-90">
                Professional engineering services provider in Mumbai, specializing in XCMG 178E piling rig and offering 24/7 solutions for all your industrial needs.
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
                Contact on WhatsApp
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
