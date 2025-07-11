
import React, { useState } from "react";
import { CheckCircle, Star, Filter, Truck, Wrench, Shield } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const categories = [
    { id: "all", name: "All Products" },
    { id: "hose-fittings", name: "Hose Fittings" },
    { id: "hoses", name: "Hydraulic Hoses" },
    { id: "adaptors", name: "Adaptors" },
    { id: "specialty", name: "Specialty Products" },
    { id: "piling-parts", name: "Piling Parts" },
    { id: "equipment", name: "Equipment" }
  ];

  const products = [
    {
      category: "hose-fittings",
      name: "BSP Hose Fittings",
      description: "British Standard Pipe fittings for hydraulic applications with precise threading",
      features: ["BSP threading standard", "High pressure rated", "Corrosion resistant", "Multiple size options"],
      image: "/lovable-uploads/739b83df-5c32-4ccc-b67e-9ee8c0ea3d8b.png"
    },
    {
      category: "hose-fittings",
      name: "JIC Hose Fittings", 
      description: "Joint Industry Council fittings with 37-degree flare connections",
      features: ["37-degree flare seal", "SAE J514 standard", "Leak-proof design", "Easy assembly"],
      image: "/lovable-uploads/afd3c24a-563f-4e21-8544-d07809c74408.png"
    },
    {
      category: "hose-fittings",
      name: "METRIC Hose Fittings",
      description: "Metric standard fittings compatible with European hydraulic systems",
      features: ["DIN standard compliance", "Metric threading", "High tensile strength", "Wide compatibility"],
      image: "/lovable-uploads/8437f940-df26-4706-9409-7f041e6320e2.png"
    },
    {
      category: "hose-fittings",
      name: "ORFS Hose Fittings",
      description: "O-Ring Face Seal fittings for high-pressure hydraulic applications",
      features: ["O-ring face seal", "No thread sealant needed", "Vibration resistant", "Reusable connections"],
      image: "/lovable-uploads/d42f626d-7172-48df-bfef-24b6642a2b0e.png"
    },
    {
      category: "adaptors",
      name: "Custom Hose Assemblies",
      description: "Tailor-made hose assemblies for specific industrial applications",
      features: ["Custom lengths", "Various end configurations", "Application specific", "Quality tested"],
      image: "/lovable-uploads/ca774818-5338-423b-8b98-7856b1f63247.png"
    },
    {
      category: "specialty",
      name: "SS Bellows",
      description: "Stainless steel bellows for high-temperature and corrosive environments",
      features: ["316L stainless steel", "Temperature resistant", "Vibration absorption", "Corrosion proof"],
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop"
    },
    {
      category: "specialty",
      name: "Teflon Hoses",
      description: "PTFE lined hoses for chemical and food-grade applications",
      features: ["PTFE lining", "Chemical resistant", "FDA approved", "High temperature rated"],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop"
    },
    {
      category: "specialty",
      name: "High Pressure Hydraulic Hoses",
      description: "Extra high-pressure hoses for demanding industrial applications",
      features: ["Working pressure up to 700 bar", "Steel wire reinforcement", "Abrasion resistant", "Long service life"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      category: "specialty",
      name: "Carbon-Free & Food-Grade Hoses",
      description: "Specialized hoses for food processing and pharmaceutical industries",
      features: ["FDA compliance", "Carbon-free construction", "Easy cleaning", "Taste and odor free"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop"
    },
    {
      category: "piling-parts",
      name: "Mait Rig Spare Parts",
      description: "Original and compatible spare parts for Mait piling rigs",
      features: ["OEM quality", "Direct replacement", "Extended warranty", "Fast delivery"],
      image: "/lovable-uploads/28042f01-6d76-44ab-bfb8-19495e02d4d4.png"
    },
    {
      category: "equipment",
      name: "XCMG XR178E Piling Rig",
      description: "Advanced piling equipment with hydraulic rotary drive system",
      features: ["Max depth 35m", "High torque capacity", "GPS positioning", "Advanced control system"],
      image: "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png"
    },
    {
      category: "equipment",
      name: "Professional Hydraulic Crimping Machine",
      description: "Industrial-grade crimping machine for on-site hose assembly",
      features: ["Multi-die system", "Precision crimping", "Portable design", "Safety features"],
      image: "/lovable-uploads/88862d2a-a13e-4c74-923c-741ae70c868d.png"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />
      
      {/* Hero Section */}
      <section className="gradient-red text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Manufacturers & Service Providers in Hydraulic Hoses & Fittings
            </p>
            <div className="bg-yellow-500 text-black px-6 py-3 rounded-lg inline-block font-semibold animate-scale-in">
              📍 First in Maharashtra with battery-operated mobile van service
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Van Service Highlight */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                🚐 On-Site Mobile Van Service
              </h2>
              <p className="text-lg">
                Emergency hydraulic hose repair with battery-operated crimping van
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center"
            >
              <Truck className="w-5 h-5 mr-2" />
              Request Mobile Service
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">Quality Assured</span>
                    </div>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Trusted supplier to key sectors across Maharashtra
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { name: "Automobile", icon: "🚗" },
              { name: "Construction", icon: "🏗️" },
              { name: "Machine Tools", icon: "⚙️" },
              { name: "Chemical & Oil", icon: "🛢️" },
              { name: "Earth-Moving Equipment", icon: "🚛" }
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Quality Assurance & Standards
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg animate-scale-in">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">ISO Certified</h3>
                <p className="text-gray-600">
                  All products manufactured under ISO quality management systems
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Pressure Tested</h3>
                <p className="text-gray-600">
                  Every fitting tested to ensure maximum pressure ratings
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <Wrench className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">24/7 Service</h3>
                <p className="text-gray-600">
                  Emergency mobile van service with 1-hour dispatch guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
