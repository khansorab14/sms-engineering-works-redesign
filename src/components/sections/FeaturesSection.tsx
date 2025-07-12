
import React from "react";
import { Shield, Award, Users, Clock, Globe, Target } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified manufacturing with international standards",
      color: "text-green-600"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "25+ years of experience in hydraulic and piling solutions",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "In-house trained technicians and engineers",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock service and emergency support",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Marine Services",
      description: "Offshore and marine hydraulic system expertise",
      color: "text-cyan-600"
    },
    {
      icon: Target,
      title: "Precision Manufacturing",
      description: "CNC machined components with exact specifications",
      color: "text-orange-600"
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose SMS Engineering Works?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are the preferred strategic partner providing comprehensive support services to the manufacturing industries across Mumbai and Maharashtra.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border-t-4 border-red-500 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="relative mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto`} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
