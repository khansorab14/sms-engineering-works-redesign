
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
    { id: "equipment", name: "Equipment" }
  ];

  const galleryImages = [
    {
      category: "hydraulic",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Hydraulic Hose Fittings",
      description: "High-quality hydraulic fittings manufacturing"
    },
    {
      category: "manufacturing",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Manufacturing Process",
      description: "State-of-the-art manufacturing facility"
    },
    {
      category: "piling",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Bridge Piling Project",
      description: "Commercial bridge foundation work"
    },
    {
      category: "equipment",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "XCMG 178E Piling Rig",
      description: "Advanced piling equipment in operation"
    },
    {
      category: "hydraulic",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Teflon Hoses",
      description: "Chemical resistant PTFE lined hoses"
    },
    {
      category: "manufacturing",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Quality Testing",
      description: "Rigorous quality control processes"
    },
    {
      category: "piling",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Residential Piling",
      description: "Foundation work for residential complex"
    },
    {
      category: "equipment",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Mait HR180",
      description: "Heavy-duty piling equipment"
    },
    {
      category: "hydraulic",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Stainless Steel Fittings",
      description: "Corrosion resistant SS fittings"
    },
    {
      category: "manufacturing",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "CNC Machining",
      description: "Precision machining operations"
    },
    {
      category: "piling",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "DMC Piling",
      description: "Deep foundation construction"
    },
    {
      category: "equipment",
      src: "/lovable-uploads/b7673d71-4942-41ba-a0f5-cbfdabefab21.png",
      title: "Sunward 175",
      description: "Multi-purpose drilling equipment"
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
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
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
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
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
