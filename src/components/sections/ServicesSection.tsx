import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Settings,
  Gauge,
  Layers,
  Truck,
  Shield,
  Clock,
  Phone,
} from "lucide-react";

const ServicesSection = () => {
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

  const services = [
    {
      icon: Gauge,
      title: "Hydraulic Hose Fittings",
      description: "Premium quality hydraulic hose pipe fittings for industrial applications",
      features: ["High-pressure rated", "Corrosion resistant", "Multiple sizes available"],
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Layers,
      title: "Piling Services",
      description: "Professional foundation solutions using advanced XCMG 178E equipment",
      features: ["Cast-in-situ piling", "Micro piling", "Load testing"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Settings,
      title: "Equipment Maintenance",
      description: "Comprehensive maintenance and repair services for hydraulic systems",
      features: ["Preventive maintenance", "Emergency repairs", "Performance optimization"],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Tailored engineering solutions for specific industrial requirements",
      features: ["Design consultation", "Custom fabrication", "Installation support"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Truck,
      title: "Mobile Van Service",
      description: "On-site hydraulic services delivered directly to your location",
      features: ["24/7 availability", "Fully equipped van", "Emergency response"],
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and testing procedures",
      features: ["ISO standards", "Quality certification", "Performance testing"],
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive hydraulic solutions and engineering services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${service.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.button 
              onClick={() => window.open("https://wa.me/919820209923", "_blank")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us for Custom Solutions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
