import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star, Mail, Users } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:smsengi111@gmail.com", "_blank");
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/93c710bd-3602-49f0-bc2b-127c016f8a94.jpg"
                alt="SMS Engineering Works Logo"
                className="w-12 h-12 mr-3 bg-white/10 rounded p-1"
              />

              <h4 className="text-xl md:text-2xl font-bold text-gradient">
                S.M.S ENGINEERING WORKS
              </h4>
            </div>
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Manufacturers & Service Providers in Hydraulic Hoses & Fittings.
              First in Maharashtra with battery-operated mobile van service for
              on-site hydraulic hose crimping.
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
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4 text-red-500">
              Our Products & Services
            </h5>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li>BSP, JIC, METRIC, ORFS Fittings</li>
              <li>Mobile Van Crimping Service</li>
              <li>XCMG 178E Piling Services</li>
              <li>SS Bellows & Teflon Hoses</li>
              <li>Custom Hose Assemblies</li>
              <li>Mait Rig Spare Parts</li>
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
                  Reay Road West, Mazgaon
                  <br />
                  Mumbai, Maharashtra 400010
                </span>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center text-gray-400 hover:text-white"
              >
                <Phone className="w-5 h-5 mr-2 text-red-500" />
                <span>+91 98202 09923 / +91 98920 89827</span>
              </button>
              <button
                onClick={handleEmailClick}
                className="flex items-center text-gray-400 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2 text-red-500" />
                <span>smsengi111@gmail.com</span>
              </button>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-red-500" />
                <span>Sirtaj Khan / Meraj Khan / Siraj Khan</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-red-500" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>
            &copy; 2024 S.M.S Engineering Works. All rights reserved. | First in
            Maharashtra with battery-operated mobile van service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
