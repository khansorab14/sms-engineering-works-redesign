
import React from "react";
import { Shield, Award, Users, Clock, Globe, Target } from "lucide-react";

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            Why Choose SMS Engineering Works?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in">
            We are the preferred strategic partner providing comprehensive support services to the manufacturing industries across Mumbai and Maharashtra.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-scale-in border-t-4 border-red-500"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-current to-transparent opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                <feature.icon className={`relative w-14 h-14 ${feature.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
