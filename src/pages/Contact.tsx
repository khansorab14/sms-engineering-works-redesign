
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, MessageCircle, Star, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919820209923', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello SMS Engineering Works!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919820209923?text=${whatsappMessage}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-semibold">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 font-semibold">Services</Link>
              <Link to="/contact" className="text-red-600 font-semibold">Contact</Link>
              <button onClick={handleWhatsAppClick} className="flex items-center text-gray-700 hover:text-red-600">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">098202 09923</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section className="gradient-red text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Contact Us
            </h2>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Get in touch for professional engineering solutions
            </p>
            <button onClick={handleWhatsAppClick} className="btn-secondary animate-pulse-hover">
              WhatsApp: 098202 09923
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="XCMG 178E Filing Machine">XCMG 178E Filing Machine</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Equipment Maintenance">Equipment Maintenance</option>
                    <option value="Custom Solutions">Custom Solutions</option>
                    <option value="Emergency Services">Emergency Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Address</h4>
                    <p className="text-gray-600">
                      Modi Compound Shop No. 6<br />
                      Reay Road West, Mazgaon<br />
                      Mumbai, Maharashtra 400010
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <Phone className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone Number</h4>
                    <button onClick={handleWhatsAppClick} className="text-gray-600 hover:text-red-600">
                      098202 09923
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <Clock className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600">Open 24 Hours<br />7 Days a Week</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                    <button onClick={handleWhatsAppClick} className="text-gray-600 hover:text-red-600">
                      Click to chat with us
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 space-y-4">
                <button onClick={handleWhatsAppClick} className="w-full btn-primary">
                  WhatsApp: 098202 09923
                </button>
                <button onClick={() => window.open('tel:+919820209923')} className="w-full btn-secondary">
                  Call Now: 098202 09923
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h3>
            <p className="text-xl text-gray-600">Located in the heart of Mazgaon, Mumbai</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
              <div className="text-center">
                <Navigation className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h4>
                <p className="text-gray-600 mb-4">Modi Compound Shop No. 6, Reay Road West, Mazgaon</p>
                <button onClick={handleWhatsAppClick} className="btn-primary">
                  Get Directions: 098202 09923
                </button>
              </div>
            </div>
          </div>
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

export default Contact;
