
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Gauge, Layers, Zap } from "lucide-react";

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      icon: Wrench,
      title: "Hydraulic Hose Fittings",
      description: "High-quality hydraulic hose pipe fittings manufacturing and supply",
      features: ["Premium Materials", "Custom Solutions", "Quality Tested"]
    },
    {
      icon: Gauge,
      title: "Load Testing Services",
      description: "Comprehensive static and dynamic load testing solutions",
      features: ["Static Testing", "Dynamic Analysis", "Detailed Reports"]
    },
    {
      icon: Layers,
      title: "Piling Services",
      description: "Complete piling solutions including cast-in-situ and micro piling",
      features: ["Cast-in-situ Piles", "Micro Piling", "Soil Investigation"]
    },
    {
      icon: Zap,
      title: "Rigging Services",
      description: "Advanced rotary rig services with XCMG 178E equipment",
      features: ["XCMG 178E Rig", "Professional Team", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to your industrial needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                <motion.div 
                  className="bg-gradient-to-r from-red-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-red-500 rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
