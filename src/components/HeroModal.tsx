
import React from "react";
import { X, CheckCircle, Award, Shield, Users } from "lucide-react";

interface HeroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeroModal = ({ isOpen, onClose }: HeroModalProps) => {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Welcome to SMS Engineering Works
              </h2>
              <p className="text-xl text-gray-600">
                Your trusted partner for industrial solutions since 1999
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be the leading provider of hydraulic solutions and piling services in Mumbai, 
                  setting industry standards for quality, reliability, and customer satisfaction.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  We are the preferred strategic partner providing comprehensive support services 
                  to manufacturing industries, ensuring operational excellence through innovative 
                  solutions and superior service quality.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">25+ Years Experience</h4>
                      <p className="text-gray-600">Proven track record in hydraulic and piling solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">ISO Certified</h4>
                      <p className="text-gray-600">Quality management systems meeting international standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                      <p className="text-gray-600">Rigorous testing and quality control processes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600">In-house trained technicians and engineers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary mr-4"
              >
                Contact Us on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="btn-secondary"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroModal;
