import React from "react";
import { motion } from "framer-motion";
import {
  Gauge,
  Settings,
  Wrench,
  Shield,
  CheckCircle,
  Star,
} from "lucide-react";

const EquipmentSection = () => {
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
    hidden: { y: 20, opacity: 0, scale: 0.9 },
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
      name: "Piling Service ",
      image: "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png",
      specs: [
        "Maximum drilling depth: 40m",
        "Rotary torque: 178 kN·m",
        "Pull-down force: 180 kN",
        "Advanced control system",
      ],
      description: "State-of-the-art piling equipment for foundation work",
    },
    {
      name: "Hydraulic Crimping Machine",
      image: "/lovable-uploads/88862d2a-a13e-4c74-923c-741ae70c868d.png",
      specs: [
        "Multi-die crimping system",
        "Precise pressure control",
        "Various hose sizes",
        "Professional grade quality",
      ],
      description:
        "Professional hydraulic hose crimping for perfect connections",
    },
    {
      name: "Mobile van hose service",
      image: "/lovable-uploads/536ec15e-e52c-453d-90b1-6f7d6b49f9f4.png",
      specs: [
        "Fully equipped workshop",
        "24/7 availability",
        "On-site repairs",
        "Emergency response",
      ],
      description: "Complete mobile hydraulic service solution",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
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
              Our <span className="text-red-600">Equipment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced machinery and tools to deliver superior hydraulic
              solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.specs.map((spec, specIndex) => (
                      <motion.li
                        key={specIndex}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: specIndex * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {spec}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <div className="bg-gradient-to-r from-red-50 to-blue-50 p-8 rounded-xl border border-gray-100">
              <div className="flex justify-center items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
                <span className="ml-2 text-gray-600 font-semibold">
                  Trusted Quality
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Professional Equipment, Professional Results
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our state-of-the-art equipment ensures precision, reliability,
                and efficiency in every project we undertake.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentSection;
