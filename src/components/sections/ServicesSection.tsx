
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      title: "XCMG 178E Piling Services",
      description:
        "We specialize in delivering end to end piling, and foundation engineering services across Mumbai, Navi Mumbai and Maharashtra. Our solutions are designed for bridges, high rise structures, residential complexes and industrial infrastructure.",
      image: "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png",
    },
    {
      title: "Hydraulic Hose Fittings & Manufacturing",
      description: "BSP, JIC, METRIC, ORFS fittings and custom hose assemblies",
      image: [
        "https://5.imimg.com/data5/GI/YC/MY-32061269/hydraulic-hoses-and-fittings-1000x1000.jpg",
        "https://www.abhydraulics.in/images/products/hose-pipe-fitting.jpg",
      ],
    },
    {
      title: "On-Site Mobile Van Service",
      description:
        "Revolutionary battery-operated mobile unit for on-site hydraulic hose crimping and emergency repairs",
      image: "/lovable-uploads/536ec15e-e52c-453d-90b1-6f7d6b49f9f4.png",
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for your industrial needs
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl border-l-4 border-blue-500 relative"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Glowing effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                {Array.isArray(service.image) ? (
                  <div className="flex h-full w-full">
                    {service.image.map((imgSrc, imgIdx) => (
                      <motion.img
                        key={imgIdx}
                        src={imgSrc}
                        alt={`${service.title} ${imgIdx + 1}`}
                        className="w-1/2 h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                ) : (
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to="/services"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
