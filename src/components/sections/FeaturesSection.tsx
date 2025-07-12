
import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Settings, Users, Award, Clock } from "lucide-react";

const FeaturesSection = () => {
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

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Premium materials and rigorous testing for reliability",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Rapid deployment and emergency service availability",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Settings,
      title: "Expert Solutions",
      description: "Customized engineering solutions for complex challenges",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Highly skilled technicians and engineers",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "25+ years of excellence in hydraulic solutions",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock availability for urgent needs",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Why Choose SMS Engineering?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence in hydraulic solutions with our comprehensive range of services
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full">
                <motion.div 
                  className={`bg-gradient-to-r ${feature.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
