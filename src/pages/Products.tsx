
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
      name: "Hydraulic Hose Fittings JIC",
      description: "High-pressure JIC hydraulic fittings for industrial applications with 37° flare design",
      features: ["Pressure tested up to 6000 PSI", "Corrosion resistant zinc plating", "37° JIC thread design", "ISO 8434-2 certified"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    },
    {
      category: "hydraulic",
      name: "BSP Hydraulic Adapters",
      description: "British Standard Pipe adapters for secure hydraulic connections",
      features: ["BSP threaded connections", "High tensile strength", "Leak-proof design", "Multiple angle configurations"],
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop"
    },
    {
      category: "hoses",
      name: "High Pressure Hydraulic Hoses",
      description: "SAE 100R1AT and SAE 100R2AT hydraulic hoses for heavy-duty applications",
      features: ["Working pressure up to 350 bar", "Temperature range -40°C to +100°C", "Steel wire braided reinforcement", "Synthetic rubber tube"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      category: "hoses",
      name: "Teflon PTFE Hoses",
      description: "Chemical resistant PTFE lined hoses for extreme conditions and corrosive fluids",
      features: ["Temperature range -65°C to +260°C", "Chemical and corrosion resistant", "Non-stick PTFE lining", "FDA approved for food grade"],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop"
    },
    {
      category: "hoses",
      name: "Stainless Steel Flexible Hoses",
      description: "Corrugated stainless steel hoses with braided outer covering for high-temperature applications",
      features: ["316L stainless steel construction", "Temperature rating up to 650°C", "Vibration and thermal shock resistant", "Long service life"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop"
    },
    {
      category: "hoses",
      name: "Industrial Rubber Hoses",
      description: "Heavy-duty rubber hoses for oil, fuel, water and pneumatic applications",
      features: ["Oil and fuel resistant", "Weather and UV resistant", "Multiple diameter options", "Textile reinforced construction"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      category: "connectors",
      name: "Quick Release Couplings",
      description: "Hydraulic quick-connect couplings for efficient system assembly and maintenance",
      features: ["Quick disconnect mechanism", "Flat face seal design", "Multiple flow rates", "Easy one-hand operation"],
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop"
    },
    {
      category: "connectors",
      name: "Pipe Elbows & Adapters",
      description: "Precision-machined 45° and 90° elbows and straight adapters for hydraulic systems",
      features: ["CNC machined from steel", "45°, 90° and straight configurations", "JIC, BSP, NPT thread options", "Zinc plated finish"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    },
    {
      category: "connectors",
      name: "Hydraulic Flanges",
      description: "SAE and DIN standard hydraulic flanges for heavy-duty pipe and equipment connections",
      features: ["Forged carbon steel construction", "SAE J518 and DIN 24342 standards", "O-ring groove machined", "Multiple pressure ratings"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop"
    },
    {
      category: "piling",
      name: "XCMG 178E Piling Rig Parts",
      description: "Original and compatible spare parts for XCMG 178E piling rigs and drilling equipment",
      features: ["OEM equivalent quality", "Direct replacement parts", "Hydraulic cylinder seals", "Drive motor components"],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop"
    },
    {
      category: "piling",
      name: "Mait HR180 Spare Parts",
      description: "Genuine and aftermarket spare parts for Mait HR180 and HR100 piling rigs",
      features: ["Hydraulic pump parts", "Rotary drive components", "Crowd cylinder seals", "Electrical components"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      category: "attachments",
      name: "Hydraulic Breaker Attachments",
      description: "High-performance hydraulic breakers for excavators and piling rigs",
      features: ["Universal mounting brackets", "Auto-greasing system", "Noise and vibration dampening", "Multiple chisel options"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop"
    },
    {
      category: "attachments",
      name: "Rotary Drilling Attachments",
      description: "Specialized rotary drilling attachments for foundation and piling operations",
      features: ["Heavy-duty gear reduction", "Torque ratings up to 50,000 Nm", "Interchangeable drill tools", "Hydraulic crowd system"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop"
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
