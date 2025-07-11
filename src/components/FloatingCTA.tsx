import React from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

const FloatingCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+919820209923", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:smsengi111@gmail.com", "_blank");
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-3">
      {/* WhatsApp */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Call */}
      <button
        onClick={handleCallClick}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* Email */}
      <button
        onClick={handleEmailClick}
        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Send Email"
      >
        <Mail className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingCTA;
