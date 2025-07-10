
import React, { useState } from "react";
import { CheckCircle, Star, Filter } from "lucide-react";
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
    { id: "hydraulic", name: "Hydraulic Fittings" },
    { id: "hoses", name: "Hoses" },
    { id: "connectors", name: "Pipe Connectors" },
    { id: "piling", name: "Piling Parts" },
    { id: "attachments", name: "Attachments" }
  ];

  const products = [
    {
      category: "hydraulic",
      name: "Hydraulic Hose Fittings",
      description: "High-pressure hydraulic fittings for industrial applications",
      features: ["Pressure tested up to 6000 PSI", "Corrosion resistant", "Multiple thread types", "ISO certified"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "2 years"
    },
    {
      category: "hoses",
      name: "Teflon Hoses",
      description: "Chemical resistant PTFE lined hoses for extreme conditions",
      features: ["Temperature range: -65°C to +260°C", "Chemical resistant", "Non-stick surface", "FDA approved"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "1 year"
    },
    {
      category: "hoses",
      name: "Stainless Steel Hoses",
      description: "Flexible stainless steel hoses for high-temperature applications",
      features: ["Corrosion resistant", "High temperature rating", "Flexible design", "Long service life"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "3 years"
    },
    {
      category: "hoses",
      name: "Rubber Hoses",
      description: "Heavy-duty rubber hoses for various industrial applications",
      features: ["Oil resistant", "Weather resistant", "Multiple diameter options", "Reinforced construction"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "1 year"
    },
    {
      category: "connectors",
      name: "Pipe Couplings",
      description: "Quick-connect couplings for efficient system assembly",
      features: ["Quick disconnect", "Leak-proof design", "Multiple sizes", "Easy installation"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "2 years"
    },
    {
      category: "connectors",
      name: "Adaptors & Elbows",
      description: "Precision-machined adaptors and elbows for system connections",
      features: ["CNC machined", "Multiple angles", "Threaded connections", "Pressure tested"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "2 years"
    },
    {
      category: "connectors",
      name: "Flanges",
      description: "Heavy-duty flanges for pipe and equipment connections",
      features: ["Forged construction", "Standard dimensions", "Gasket surfaces", "Multiple materials"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "5 years"
    },
    {
      category: "piling",
      name: "Mait Piling Rig Spare Parts",
      description: "Genuine and compatible spare parts for Mait piling rigs",
      features: ["OEM quality", "Direct fit", "Extensive inventory", "Fast delivery"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "1 year"
    },
    {
      category: "attachments",
      name: "Compressor Attachments",
      description: "High-performance attachments for compressor systems",
      features: ["Universal mounting", "Durable construction", "Easy maintenance", "Performance optimized"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "2 years"
    },
    {
      category: "attachments",
      name: "Excavator Attachments",
      description: "Specialized attachments for excavator operations",
      features: ["Heavy-duty design", "Compatible mounting", "Wear resistant", "Field tested"],
      image: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      warranty: "2 years"
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
              Comprehensive range of hydraulic fittings, hoses, and industrial components
            </p>
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
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.warranty} warranty
                  </div>
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

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Quality Assurance & Standards
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">ISO Certified</h3>
                <p className="text-gray-600">
                  All products manufactured under ISO quality management systems
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Pressure Tested</h3>
                <p className="text-gray-600">
                  Every fitting tested to ensure maximum pressure ratings
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Filter className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Material Traced</h3>
                <p className="text-gray-600">
                  Complete material traceability for quality assurance
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
