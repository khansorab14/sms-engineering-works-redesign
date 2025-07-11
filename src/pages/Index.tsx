
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
  Settings,
  Truck,
  Timer,
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
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const heroImages = [
    "/lovable-uploads/739b83df-5c32-4ccc-b67e-9ee8c0ea3d8b.png",
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
      title: "On-Site Mobile Van Service",
      description: "Revolutionary battery-operated mobile unit for on-site hydraulic hose crimping and emergency repairs",
      image: "/lovable-uploads/536ec15e-e52c-453d-90b1-6f7d6b49f9f4.png"
    },
    {
      title: "XCMG 178E Piling Services",
      description: "Expert servicing and spare parts for piling rigs with specialized maintenance",
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
      name: "Mobile Van Service",
      type: "On-Site Emergency Response",
      capacity: "Battery-operated system",
      features: ["On-site crimping", "Emergency response", "Professional service"],
      image: "/lovable-uploads/536ec15e-e52c-453d-90b1-6f7d6b49f9f4.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />
      
      {/* Enhanced Creative Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-blue-600/10 to-gray-900/30"></div>
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-yellow-500/10 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 bg-green-500/10 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }}></div>
        </div>
        
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-10" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Interactive Company Logo with Hover Effects */}
            <div className="mb-8 animate-fade-in group">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img 
                  src="/lovable-uploads/93c710bd-3602-49f0-bc2b-127c016f8a94.png" 
                  alt="SMS Engineering Works Logo"
                  className="relative mx-auto mb-6 w-40 h-40 object-contain bg-white/10 backdrop-blur-sm rounded-xl p-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="animate-fade-in space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                S.M.S ENGINEERING WORKS
              </h1>
              
              <div className="text-2xl md:text-3xl lg:text-4xl mb-6 animate-slide-left">
                <span className="text-yellow-300 font-semibold">Manufacturers & Service Providers</span>
                <br />
                <span className="text-gray-200">in Hydraulic Hoses & Fittings</span>
                <br />
                <span className="text-blue-300 text-xl md:text-2xl">+ XCMG 178E Piling Services</span>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-2xl inline-block font-bold mb-8 animate-pulse shadow-lg">
                <div className="flex items-center space-x-2">
                  <Truck className="w-6 h-6" />
                  <span>Revolutionary On-Site Mobile Van Service in Maharashtra</span>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl mb-8 animate-slide-right opacity-90 max-w-4xl mx-auto leading-relaxed">
                Professional engineering services with 24/7 emergency mobile service, on-site repair capabilities, 
                and specialized piling solutions for industrial needs across Mumbai and Maharashtra.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-scale-in">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary flex items-center justify-center transform hover:scale-105 animate-pulse-hover text-lg px-8 py-4 rounded-xl shadow-2xl"
              >
                <PlayCircle className="w-6 h-6 mr-3" />
                Discover Our Services
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="btn-secondary flex items-center justify-center border-2 border-white transform hover:scale-105 text-lg px-8 py-4 rounded-xl shadow-2xl backdrop-blur-sm"
              >
                <Phone className="w-6 h-6 mr-3" />
                Request Mobile Van
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm animate-fade-in">
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-5 h-5 mr-2 text-red-400" />
                <span>Modi Compound, Reay Road West, Mumbai</span>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Timer className="w-5 h-5 mr-2 text-blue-400" />
                <span>24/7 Emergency Service Available</span>
              </div>
              <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Settings className="w-5 h-5 mr-2 text-green-400" />
                <span>25+ Years Industry Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* Interactive Mobile Van Service Highlight */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
                🚐 Revolutionary On-Site Solutions
              </h2>
              <p className="text-xl md:text-2xl animate-fade-in max-w-3xl mx-auto">
                Battery-operated mobile van for on-site hydraulic hose crimping, emergency repairs, and professional maintenance services
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-scale-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Battery Operated</h3>
                <p className="text-lg">Fully self-sufficient mobile unit with advanced battery-powered crimping equipment</p>
              </div>
              <div className="text-center animate-scale-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300" style={{ animationDelay: "0.1s" }}>
                <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Rapid Response</h3>
                <p className="text-lg">Emergency response team ready to dispatch within 1 hour for critical repairs</p>
              </div>
              <div className="text-center animate-scale-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300" style={{ animationDelay: "0.2s" }}>
                <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional Service</h3>
                <p className="text-lg">Expert technicians with specialized tools and comprehensive repair capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Interactive Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Why Choose SMS Engineering Works?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in">
              We are the preferred strategic partner providing comprehensive support services to the manufacturing industries across Mumbai and Maharashtra.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-scale-in border-t-4 border-red-500"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br from-current to-transparent opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <feature.icon className={`relative w-14 h-14 ${feature.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with Hover Effects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
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
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-slide-up border-l-4 border-blue-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-56 bg-gray-100 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to="/services"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Equipment Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Our Advanced Equipment
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in">
              State-of-the-art machinery for precision and efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {equipmentSpecs.map((equipment, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-72 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {equipment.type}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {equipment.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-3 text-lg">
                    {equipment.capacity}
                  </p>
                  <ul className="space-y-3">
                    {equipment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
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

      {/* Enhanced CTA Section with Interactive Elements */}
      <section className="gradient-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-slide-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in max-w-2xl mx-auto">
            Get expert consultation and quality solutions for your industrial needs with our revolutionary mobile van service
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <button
              onClick={handleWhatsAppClick}
              className="btn-primary transform hover:scale-105 text-lg px-8 py-4 rounded-xl shadow-2xl"
            >
              Get Quote on WhatsApp
            </button>
            <button
              onClick={handleCallClick}
              className="btn-secondary border-2 border-white transform hover:scale-105 text-lg px-8 py-4 rounded-xl shadow-2xl backdrop-blur-sm"
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
