
import React from "react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+919820209923", "_blank");
  };

  return (
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
  );
};

export default CTASection;
