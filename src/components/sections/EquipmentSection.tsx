
import React from "react";
import { motion } from "framer-motion";
import { Settings, Shield, Zap, Award } from "lucide-react";

const EquipmentSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const equipment = [
    {
      icon: Settings,
      title: "XCMG 178E Piling Rig",
      description: "State-of-the-art rotary drilling rig for precision piling operations",
      specs: ["Max Drilling Depth: 50m", "Torque: 178kN·m", "Professional Operation"]
    },
    {
      icon: Shield,
      title: "Hydraulic Testing Equipment",
      description: "Advanced hydraulic testing and measurement instruments",
      specs: ["Load Testing", "Pressure Analysis", "Quality Assurance"]
    },
    {
      icon: Zap,
      title: "Mobile Van Services",
      description: "Fully equipped mobile units for on-site hydraulic services",
      specs: ["On-site Service", "Emergency Response", "Complete Toolkit"]
    },
    {
      icon: Award,
      title: "Quality Control Systems",
      description: "Comprehensive quality testing and certification equipment",
      specs: ["ISO Standards", "Rigorous Testing", "Certified Quality"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent mb-6">
            Our Equipment & Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced machinery and cutting-edge technology for superior results
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full">
                <motion.div 
                  className="bg-gradient-to-r from-blue-500 to-red-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="grid grid-cols-1 gap-2">
                  {item.specs.map((spec, specIndex) => (
                    <motion.div
                      key={specIndex}
                      className="flex items-center text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: specIndex * 0.1, duration: 0.5 }}
                      whileHover={{ backgroundColor: "#fee2e2" }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-sm font-medium">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentSection;
