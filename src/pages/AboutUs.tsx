
import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
  Menu,
  X,
  Target,
  Eye,
  Lightbulb,
  Handshake,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="animate-slide-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gradient">
                SMS ENGINEERING WORKS
              </h1>
              <p className="text-gray-600 text-xs md:text-sm">
                Professional Engineering Services
              </p>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 font-semibold"
              >
                Home
              </Link>
              <Link to="/about" className="text-red-600 font-semibold">
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-red-600 font-semibold"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-600 font-semibold"
              >
                Contact
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center text-gray-700 hover:text-red-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">WhatsApp</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link to="/" className="text-gray-700 hover:text-red-600 font-semibold" onClick={toggleMobileMenu}>Home</Link>
                <Link to="/about" className="text-red-600 font-semibold" onClick={toggleMobileMenu}>About</Link>
                <Link to="/services" className="text-gray-700 hover:text-red-600 font-semibold" onClick={toggleMobileMenu}>Services</Link>
                <Link to="/contact" className="text-gray-700 hover:text-red-600 font-semibold" onClick={toggleMobileMenu}>Contact</Link>
                <button onClick={handleWhatsAppClick} className="flex items-center text-gray-700 hover:text-red-600 justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold">WhatsApp</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* About Hero Section */}
      <section className="gradient-red text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              About SMS Engineering Works
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in">
              Your trusted engineering partner since establishment
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center animate-slide-up">
              Our Story
            </h3>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-slide-left">
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  SMS Engineering Works has been serving Mumbai's industrial
                  sector with dedication and expertise. Located in the heart of
                  Mazgaon, we have built a reputation for delivering exceptional
                  engineering solutions.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Professional engineering services provider in Mumbai, specializing in XCMG 178E piling rig and offering 24/7 solutions for all your industrial needs. Our commitment to quality and customer satisfaction has made us a trusted partner for businesses across Maharashtra.
                </p>
                <button onClick={handleWhatsAppClick} className="btn-primary w-full md:w-auto">
                  Contact Us on WhatsApp
                </button>
              </div>
              <div className="bg-gray-100 p-6 md:p-8 rounded-xl animate-slide-right">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Our Values
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    Excellence in every project
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    Innovative solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    Reliable service delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - New Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Why Choose Us?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 animate-fade-in">
              We deliver excellence in every aspect
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg card-hover text-center animate-scale-in">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Expert Team
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Highly skilled professionals with years of experience
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg card-hover text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Quality Assurance
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Premium quality work with guaranteed results
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg card-hover text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                24/7 Service
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Round the clock availability for emergency services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission - New Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
                Our Vision & Mission
              </h3>
              <p className="text-lg md:text-xl text-gray-600 animate-fade-in">
                Driving excellence through strategic partnerships
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 md:p-8 rounded-xl animate-slide-left">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-red-600 mr-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">Our Vision</h4>
                </div>
                <p className="text-base md:text-lg text-gray-700">
                  To be the preferred strategic partner providing comprehensive support services to the manufacturing industries. As we expand into emerging markets, we bring our expertise in offering high-quality solutions to our customers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-xl animate-slide-right">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-red-600 mr-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h4>
                </div>
                <p className="text-base md:text-lg text-gray-700">
                  Our commitment to our employees makes us deliver likable, tailor-made solutions. Our goal is to go beyond being a business associate and be a value-creating strategic partner.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-red-600 mr-3" />
                  <h4 className="text-lg md:text-xl font-bold text-gray-900">Innovation</h4>
                </div>
                <p className="text-gray-600">
                  We continuously innovate to provide cutting-edge solutions that meet the evolving needs of our clients in the manufacturing sector.
                </p>
              </div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center mb-4">
                  <Handshake className="w-8 h-8 text-red-600 mr-3" />
                  <h4 className="text-lg md:text-xl font-bold text-gray-900">Partnership</h4>
                </div>
                <p className="text-gray-600">
                  Building long-term relationships through trust, reliability, and exceptional service delivery that creates mutual value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-black text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-6 animate-slide-up">Ready to Work With Us?</h3>
          <p className="text-lg md:text-xl mb-8 animate-fade-in">
            Contact us today for professional engineering solutions
          </p>
          <button onClick={handleWhatsAppClick} className="btn-primary animate-scale-in">
            Contact on WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
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
                  <span>WhatsApp Us</span>
                </button>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-red-500" />
                  <span>Open 24 Hours</span>
                </div>
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
                  <Link to="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2024 SMS Engineering Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
