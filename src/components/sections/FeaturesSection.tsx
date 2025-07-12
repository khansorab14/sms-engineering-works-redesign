import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Clock, Shield, Zap } from "lucide-react";

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
      icon: CheckCircle,
      title: "Premium Quality",
      description: "High-grade materials and precision manufacturing",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Industry-certified products meeting international standards",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with decades of experience",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service and emergency support",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "Consistent quality and dependable delivery timelines",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Quick Solutions",
      description: "Fast turnaround times for urgent requirements",
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
              Why Choose <span className="text-red-600">SMS Engineering Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience excellence in hydraulic solutions with our premium quality products and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`bg-gradient-to-r ${feature.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
