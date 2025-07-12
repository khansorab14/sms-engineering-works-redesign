import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Wrench,
  Gauge,
  Settings,
  Layers,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-lg sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <motion.h1 
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SMS ENGINEERING WORKS
              </motion.h1>
              <p className="text-gray-600 text-xs md:text-sm">
                Professional Engineering Services
              </p>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-300"
              >
                Home
              </Link>
              <Link to="/about" className="text-red-600 font-semibold">
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-600 font-semibold transition-colors duration-300"
              >
                Contact
              </Link>
              <motion.button
                onClick={handleWhatsAppClick}
                className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">WhatsApp</span>
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
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
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* About Hero Section */}
      <section className="relative gradient-red text-white py-16 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-dots opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              About SMS Engineering Works
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Leading Hydraulic Solutions & Engineering Excellence
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <Wrench className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm">Expert Engineering</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <Gauge className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm">Hydraulic Solutions</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <Shield className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm">Quality Assured</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              25+ Years of Excellence in Hydraulic Solutions
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              With over 25 years of expertise in hydraulic solutions and piling services, SMS Engineering Works has established itself as a trusted partner for industries across Mumbai. We specialize in manufacturing high-quality hydraulic hose fittings, providing comprehensive piling services, and maintaining XCMG 178E equipment with precision and reliability.
            </motion.p>
            <motion.div 
              className="grid md:grid-cols-3 gap-6 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">25+ Years</h4>
                <p className="text-gray-600">Industry Experience</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">500+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">24/7</h4>
                <p className="text-gray-600">Customer Support</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hydraulic Hose Fittings Section - Compact Cards */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Leading Hydraulic Hose Pipe Fittings
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Manufacturers, Suppliers & Dealers in Pune, Maharashtra
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <motion.div 
                className="relative"
                variants={itemVariants}
                animate={floatingVariants}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-blue-500 p-2 rounded-lg mr-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Gauge className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900">Premium Quality</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    SMS Engineering Works is the leading Hydraulic hose pipe fittings manufacturer, supplier & dealer in Pune, Maharashtra. We work hard to provide you with the highest quality, most reliable Hydraulic hose pipe fittings in Pune.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500"
                  whileHover={{ x: 10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-red-500 mr-2" />
                    <h5 className="font-semibold text-gray-900 text-sm">Customer-Centric Approach</h5>
                  </div>
                  <p className="text-gray-600 text-xs">
                    Our Hydraulic hose pipe fittings believe that customer service is the key to success, so we are here to help you find the perfect solution for your Hydraulic needs.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
                  whileHover={{ x: 10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-2">
                    <Settings className="w-5 h-5 text-blue-500 mr-2" />
                    <h5 className="font-semibold text-gray-900 text-sm">Complete Solutions</h5>
                  </div>
                  <p className="text-gray-600 text-xs">
                    Our wide selection of Hydraulic pipe fittings includes everything from adapters and elbows to hose supports and seals.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500"
                  whileHover={{ x: 10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    <h5 className="font-semibold text-gray-900 text-sm">Best Options</h5>
                  </div>
                  <p className="text-gray-600 text-xs">
                    Hydraulic hose pipe fittings suppliers strive to provide you with the best options for each unique application.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Engineering Services Grid - Compact */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  End-to-End Engineering Support
                </h4>
                <p className="text-gray-600 text-sm">We offer comprehensive engineering solutions for:</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Layers, title: "Soil Investigation", desc: "Geotechnical testing & analysis" },
                  { icon: Gauge, title: "Load Testing", desc: "Static and dynamic testing" },
                  { icon: Zap, title: "Piling Services", desc: "Cast-in-situ & micro piling" },
                  { icon: Settings, title: "Rigging Services", desc: "Advanced rotary rigs" }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)" 
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-gradient-to-br from-red-50 to-blue-50 p-4 rounded-lg border border-gray-100 h-full">
                      <motion.div 
                        className="bg-gradient-to-r from-red-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h5 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors text-sm">
                        {service.title}
                      </h5>
                      <p className="text-gray-600 text-xs">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story - Compact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-gray-600 mb-4 text-sm">
                  SMS Engineering Works has been serving Mumbai's industrial
                  sector with dedication and expertise. Located in the heart of
                  Mazgaon, we have built a reputation for delivering exceptional
                  engineering solutions.
                </p>
                <p className="text-gray-600 mb-6 text-sm">
                  Professional engineering services provider in Mumbai, specializing in XCMG 178E piling rig and offering 24/7 solutions for all your industrial needs. Our commitment to quality and customer satisfaction has made us a trusted partner for businesses across Maharashtra.
                </p>
                <motion.button 
                  onClick={handleWhatsAppClick} 
                  className="btn-primary w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us on WhatsApp
                </motion.button>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-xl shadow-lg"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Our Values
                </h4>
                <motion.ul className="space-y-3 text-gray-600 text-sm">
                  {[
                    "Excellence in every project",
                    "24/7 customer support",
                    "Innovative solutions",
                    "Reliable service delivery"
                  ].map((value, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <CheckCircle className="w-4 h-4 text-red-600 mr-3 flex-shrink-0" />
                      {value}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Compact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 animate-slide-up">
              Why Choose Us?
            </h3>
            <p className="text-lg text-gray-600 animate-fade-in">
              We deliver excellence in every aspect
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center animate-scale-in">
              <Users className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Expert Team
              </h4>
              <p className="text-gray-600 text-sm">
                Highly skilled professionals with years of experience
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <Award className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Quality Assurance
              </h4>
              <p className="text-gray-600 text-sm">
                Premium quality work with guaranteed results
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg card-hover text-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <Clock className="w-10 h-10 text-red-600 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                24/7 Service
              </h4>
              <p className="text-gray-600 text-sm">
                Round the clock availability for emergency services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission - Compact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 animate-slide-up">
                Our Vision & Mission
              </h3>
              <p className="text-lg text-gray-600 animate-fade-in">
                Driving excellence through strategic partnerships
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl animate-slide-left">
                <div className="flex items-center mb-3">
                  <Eye className="w-6 h-6 text-red-600 mr-3" />
                  <h4 className="text-xl font-bold text-gray-900">Our Vision</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  To be the preferred strategic partner providing comprehensive support services to the manufacturing industries. As we expand into emerging markets, we bring our expertise in offering high-quality solutions to our customers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl animate-slide-right">
                <div className="flex items-center mb-3">
                  <Target className="w-6 h-6 text-red-600 mr-3" />
                  <h4 className="text-xl font-bold text-gray-900">Our Mission</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Our commitment to our employees makes us deliver likable, tailor-made solutions. Our goal is to go beyond being a business associate and be a value-creating strategic partner.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-6 h-6 text-red-600 mr-3" />
                  <h4 className="text-lg font-bold text-gray-900">Innovation</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We continuously innovate to provide cutting-edge solutions that meet the evolving needs of our clients in the manufacturing sector.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center mb-3">
                  <Handshake className="w-6 h-6 text-red-600 mr-3" />
                  <h4 className="text-lg font-bold text-gray-900">Partnership</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Building long-term relationships through trust, reliability, and exceptional service delivery that creates mutual value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-black text-white py-16 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-dots opacity-5"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h3 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Work With Us?
          </motion.h3>
          <motion.p 
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contact us today for professional engineering solutions
          </motion.p>
          <motion.button 
            onClick={handleWhatsAppClick} 
            className="btn-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Contact on WhatsApp
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent mb-4">
                SMS ENGINEERING WORKS
              </h4>
              <p className="text-gray-400 mb-4 text-sm">
                Professional engineering services provider in Mumbai, specializing in XCMG 178E piling rig and offering 24/7 solutions for all your industrial needs.
              </p>
              <div className="flex items-center text-gray-400">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-sm">Trusted Service</span>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-red-500">
                Contact Info
              </h5>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-red-500 mt-1 flex-shrink-0" />
                  <span>
                    Modi Compound Shop No. 6<br />
                    Reay Road West, Mazgaon
                    <br />
                    Mumbai, Maharashtra 400010
                  </span>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-red-500" />
                  <span>WhatsApp Us</span>
                </button>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-red-500" />
                  <span>Open 24 Hours</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-red-500">
                Quick Links
              </h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 SMS Engineering Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
