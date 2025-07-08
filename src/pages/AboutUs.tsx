
import React from 'react';
import { Phone, MapPin, Clock, Users, Award, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919820209923', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="animate-slide-left">
              <h1 className="text-3xl font-bold text-gradient">SMS ENGINEERING WORKS</h1>
              <p className="text-gray-600 text-sm">Professional Engineering Services</p>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-semibold">Home</Link>
              <Link to="/about" className="text-red-600 font-semibold">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 font-semibold">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-semibold">Contact</Link>
              <button onClick={handleWhatsAppClick} className="flex items-center text-gray-700 hover:text-red-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">098202 09923</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* About Hero Section */}
      <section className="gradient-red text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              About SMS Engineering Works
            </h2>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Your trusted engineering partner since establishment
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  SMS Engineering Works has been serving Mumbai's industrial sector with dedication and expertise. Located in the heart of Mazgaon, we have built a reputation for delivering exceptional engineering solutions.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our commitment to quality and customer satisfaction has made us a trusted partner for businesses across Maharashtra. We operate 24/7 to ensure our clients receive support whenever they need it.
                </p>
                <button onClick={handleWhatsAppClick} className="btn-primary">
                  Contact Us: 098202 09923
                </button>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Excellence in every project
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    24/7 customer support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Innovative solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Reliable service delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
            <p className="text-xl text-gray-600">We deliver excellence in every aspect</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h4>
              <p className="text-gray-600">Highly skilled professionals with years of experience</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h4>
              <p className="text-gray-600">Premium quality work with guaranteed results</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg card-hover text-center">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 Service</h4>
              <p className="text-gray-600">Round the clock availability for emergency services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Work With Us?</h3>
          <p className="text-xl mb-8">Contact us today for professional engineering solutions</p>
          <button onClick={handleWhatsAppClick} className="btn-primary">
            WhatsApp: 098202 09923
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-gradient mb-4">SMS ENGINEERING WORKS</h4>
              <p className="text-gray-400 mb-4">
                Professional engineering services provider in Mumbai, offering 24/7 solutions for all your industrial needs.
              </p>
              <div className="flex items-center text-gray-400">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span>Trusted Service</span>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-red-500">Contact Info</h5>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-red-500 mt-1" />
                  <span>Modi Compound Shop No. 6<br />Reay Road West, Mazgaon<br />Mumbai, Maharashtra 400010</span>
                </div>
                <button onClick={handleWhatsAppClick} className="flex items-center text-gray-400 hover:text-white">
                  <Phone className="w-5 h-5 mr-2 text-red-500" />
                  <span>098202 09923</span>
                </button>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-red-500" />
                  <span>Open 24 Hours</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SMS Engineering Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
