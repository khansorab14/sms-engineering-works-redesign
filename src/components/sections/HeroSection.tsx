import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  PlayCircle,
  Phone,
  MapPin,
  Timer,
  Settings,
} from "lucide-react";
import HeroModal from "../HeroModal";

const HeroSection = () => {
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
    "/lovable-uploads/28042f01-6d76-44ab-bfb8-19495e02d4d4.png",
    "/lovable-uploads/dadd887c-2e8e-407f-a547-005213dab467.png",
    "/lovable-uploads/739b83df-5c32-4ccc-b67e-9ee8c0ea3d8b.png",
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

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-blue-600/10 to-gray-900/30"></div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-16 h-16 bg-yellow-500/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-40 w-24 h-24 bg-green-500/10 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Background Image Slider */}
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-70" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
            />
          ))}

          {/* 👇 This is the dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                S.M.S ENGINEERING WORKS
              </h1>

              <div className="text-2xl md:text-3xl lg:text-4xl mb-6 animate-slide-left">
                <span className="text-yellow-300 font-semibold">
                  Manufacturers & Service Providers
                </span>
                <br />
                <span className="text-gray-200">
                  in Hydraulic Hoses & Fittings
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-xl md:text-2xl font-bold ">
                  + XCMG 178E Piling Services
                </span>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-2xl inline-block font-bold mb-8 animate-pulse shadow-lg">
                <div className="flex items-center space-x-2">
                  <span>
                    🚐 Revolutionary Battery-Operated Mobile Van for Complete
                    On-Site Hydraulic Solutions
                  </span>
                </div>
              </div>

              <p className="text-xl md:text-2xl mb-8 animate-slide-right opacity-90 max-w-4xl mx-auto leading-relaxed">
                Professional engineering services with 24/7 emergency mobile
                service, on-site repair capabilities, and specialized piling
                solutions for industrial needs across Mumbai and Maharashtra.
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      <HeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
