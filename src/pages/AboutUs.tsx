
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Wrench,
  Settings,
  Target,
  CheckCircle,
  Star,
  Building,
  Cog,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              About SMS Engineering Works
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Leading the industry in hydraulic solutions and engineering excellence for over 25 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                Company Overview
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                With over 25 years of expertise in hydraulic solutions and piling services, SMS Engineering Works has established itself as a trusted partner for industries across Mumbai. We specialize in manufacturing high-quality hydraulic hose fittings, providing comprehensive piling services, and maintaining XCMG 178E equipment for superior performance.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">25+ Years</h3>
                <p className="text-gray-600">Industry Experience</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hydraulic Fittings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-6"
                variants={itemVariants}
              >
                Hydraulic Hose Pipe Fittings
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-4xl mx-auto"
                variants={itemVariants}
              >
                SMS Engineering Works is the leading hydraulic hose pipe fittings manufacturer, supplier & dealer in Pune, Maharashtra. We work hard to provide you with the highest quality, most reliable hydraulic hose pipe fittings in Pune.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Wrench, title: "Premium Materials", desc: "High-quality materials for durability" },
                { icon: Settings, title: "Custom Solutions", desc: "Tailored to your specific needs" },
                { icon: CheckCircle, title: "Quality Tested", desc: "Rigorous testing for reliability" },
                { icon: Target, title: "Wide Selection", desc: "Adapters, elbows, supports & seals" },
                { icon: Shield, title: "Reliable Service", desc: "Customer service is our priority" },
                { icon: Star, title: "Best Options", desc: "Perfect solution for each application" },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
                    <CardHeader className="pb-3">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                End-to-End Engineering Support
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                We offer comprehensive engineering solutions for complex industrial challenges
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Building,
                  title: "Soil Investigation & Geotechnical Testing",
                  desc: "Comprehensive soil analysis and testing services for foundation planning",
                  features: ["Site Assessment", "Soil Sampling", "Laboratory Testing", "Detailed Reports"]
                },
                {
                  icon: Cog,
                  title: "Load Testing Services",
                  desc: "Both static and dynamic load testing for structural integrity",
                  features: ["Static Load Testing", "Dynamic Analysis", "Safety Verification", "Compliance Reports"]
                },
                {
                  icon: Settings,
                  title: "Piling Services",
                  desc: "Complete piling solutions including cast-in-situ and micro piling",
                  features: ["Cast-in-situ Piles", "Micro Piling", "Foundation Design", "Quality Assurance"]
                },
                {
                  icon: Zap,
                  title: "Advanced Rigging Services",
                  desc: "Professional rigging services using advanced rotary rigs",
                  features: ["XCMG 178E Equipment", "Rotary Drilling", "Professional Operation", "24/7 Support"]
                }
              ].map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="bg-gradient-to-r from-blue-500 to-red-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.desc}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-8"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Modi Compound, Reay Road West, Mumbai</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 98202 09923</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Availability</h3>
                <p className="text-gray-600">24/7 Emergency Service</p>
              </motion.div>
            </div>

            <motion.div 
              className="mt-12"
              variants={itemVariants}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <button className="btn-primary text-lg px-8 py-4">
                Contact Us Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
