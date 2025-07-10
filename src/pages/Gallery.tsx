
import React, { useState } from "react";
import { X } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Images" },
    { id: "hydraulic", name: "Hydraulic Fittings" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "piling", name: "Piling Projects" },
    { id: "equipment", name: "Equipment" },
    { id: "marine", name: "Marine Services" }
  ];

  const galleryImages = [
    {
      category: "hydraulic",
      src: "/lovable-uploads/afd3c24a-563f-4e21-8544-d07809c74408.png",
      title: "Hydraulic Pipe Connector",
      description: "High-pressure hydraulic pipe connector with threaded connections"
    },
    {
      category: "hydraulic",
      src: "/lovable-uploads/739b83df-5c32-4ccc-b67e-9ee8c0ea3d8b.png",
      title: "Complete Hydraulic Fittings Range",
      description: "Comprehensive collection of hydraulic fittings and adapters"
    },
    {
      category: "equipment",
      src: "/lovable-uploads/d42f626d-7172-48df-bfef-24b6642a2b0e.png",
      title: "Hydraulic Clamp Assembly",
      description: "Heavy-duty hydraulic clamp for industrial applications"
    },
    {
      category: "manufacturing",
      src: "/lovable-uploads/ca774818-5338-423b-8b98-7856b1f63247.png",
      title: "Precision Flanges Manufacturing",
      description: "CNC machined flanges for hydraulic systems"
    },
    {
      category: "piling",
      src: "/lovable-uploads/28042f01-6d76-44ab-bfb8-19495e02d4d4.png",
      title: "XCMG 178E Piling Rig Operation",
      description: "Advanced piling equipment in action"
    },
    {
      category: "equipment",
      src: "/lovable-uploads/c2485a9f-e355-4262-913f-ef5cf90fcea9.png",
      title: "Heavy Duty Rotary Equipment",
      description: "Industrial rotary drilling equipment"
    },
    {
      category: "marine",
      src: "/lovable-uploads/59a6d687-aa42-4e6c-b3b1-fa05f538357c.png",
      title: "Marine Hydraulic Systems",
      description: "Offshore hydraulic system installation"
    },
    {
      category: "marine",
      src: "/lovable-uploads/0021c5d7-147b-4c37-ba62-1303ba576d80.png",
      title: "Ship Hydraulic Equipment",
      description: "Marine vessel hydraulic equipment servicing"
    },
    {
      category: "marine",
      src: "/lovable-uploads/dadd887c-2e8e-407f-a547-005213dab467.png",
      title: "Offshore Platform Services",
      description: "Hydraulic system maintenance on offshore platforms"
    },
    {
      category: "manufacturing",
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      title: "CNC Machining Operations",
      description: "Precision manufacturing of hydraulic components"
    },
    {
      category: "hydraulic",
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: "High Pressure Hoses",
      description: "Industrial grade hydraulic hoses"
    },
    {
      category: "equipment",
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
      title: "Crimping Machine",
      description: "Hydraulic hose crimping equipment"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />
      
      {/* Hero Section */}
      <section className="gradient-red text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Showcasing our manufacturing capabilities and project excellence
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

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
