import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in">
            Comprehensive solutions for your industrial needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-slide-up border-l-4 border-blue-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-80 bg-gray-100 relative overflow-hidden">
                {Array.isArray(service.image) ? (
                  <div className="flex h-full w-full">
                    {service.image.map((imgSrc, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={imgSrc}
                        alt={`${service.title} ${imgIdx + 1}`}
                        className="w-1/2 h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
