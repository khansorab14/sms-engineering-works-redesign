
import React from "react";
import { CheckCircle } from "lucide-react";

const EquipmentSection = () => {
  const equipmentSpecs = [
    {
      name: "XCMG XR178E",
      type: "Heavy Duty Piling Rig",
      capacity: "Max 35m depth",
      features: ["Hydraulic rotary drive", "Advanced control system", "High torque capacity"],
      image: "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png"
    },
    {
      name: "Mobile Van Service",
      type: "On-Site Emergency Response",
      capacity: "Battery-operated system",
      features: ["On-site crimping", "Emergency response", "Professional service"],
      image: "/lovable-uploads/536ec15e-e52c-453d-90b1-6f7d6b49f9f4.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            Our Advanced Equipment
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in">
            State-of-the-art machinery for precision and efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {equipmentSpecs.map((equipment, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <img 
                  src={equipment.image} 
                  alt={equipment.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {equipment.type}
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {equipment.name}
                </h3>
                <p className="text-red-600 font-semibold mb-3 text-lg">
                  {equipment.capacity}
                </p>
                <ul className="space-y-3">
                  {equipment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
