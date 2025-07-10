
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star, Mail } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-gradient mb-4">
              SMS ENGINEERING WORKS
            </h4>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Professional engineering services provider in Mumbai, specializing in XCMG 178E piling rig and offering 24/7 solutions for all your industrial needs.
            </p>
            <div className="flex items-center text-gray-400">
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <Star className="w-5 h-5 text-yellow-500 mr-1" />
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm md:text-base">Trusted Service</span>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4 text-red-500">
              Quick Links
            </h5>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4 text-red-500">
              Our Services
            </h5>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li>Hydraulic Hose Fittings</li>
              <li>Piling Services</li>
              <li>XCMG 178E Specialists</li>
              <li>Teflon & SS Hoses</li>
              <li>Pipe Connectors</li>
              <li>Compressor Attachments</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4 text-red-500">
              Contact Info
            </h5>
            <div className="space-y-3 text-gray-400 text-sm md:text-base">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-red-500 mt-1 flex-shrink-0" />
                <span>
                  Modi Compound Shop No. 6<br />
                  Reay Road West, Mazgaon<br />
                  Mumbai, Maharashtra 400010
                </span>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center text-gray-400 hover:text-white"
              >
                <Phone className="w-5 h-5 mr-2 text-red-500" />
                <span>WhatsApp Us</span>
              </button>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-red-500" />
                <span>Open 24 Hours</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-red-500" />
                <span>info@smsengineering.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2024 SMS Engineering Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
