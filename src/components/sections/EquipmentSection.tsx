
import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const EquipmentSection = () => {
  const equipmentSpecs = [
    {
      name: "XCMG XR178E",
      type: "Heavy Duty Piling Rig",
      capacity: "Max 35m depth",
      features: [
        "Hydraulic rotary drive",
        "Advanced control system",
        "High torque capacity",
      ],
      image: "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png",
    },
    {
      name: "Mobile Van Service",
      type: "On-Site Emergency Response",
      capacity: "Battery-operated system",
      features: [
        "On-site crimping",
        "Emergency response",
        "Professional service",
      ],
      image: "/lovable-uploads/536ec15e-e52c-453d-90b1-6f7d6b49f9f4.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Advanced Equipment
          </h2>
          <p className="text-xl text-gray-600">
            State-of-the-art machinery for precision and efficiency
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {equipmentSpecs.map((equipment, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl relative"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Animated border */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-red-500 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ padding: '2px', borderRadius: '12px' }}
              >
                <div className="w-full h-full bg-white rounded-xl" />
              </motion.div>
              
              <div className="relative z-10">
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <motion.img
                    src={equipment.image}
                    alt={equipment.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {equipment.type}
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {equipment.name}
                  </motion.h3>
                  <p className="text-red-600 font-semibold mb-3 text-lg">
                    {equipment.capacity}
                  </p>
                  <ul className="space-y-2">
                    {equipment.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
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
