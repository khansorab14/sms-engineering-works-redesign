import React from "react";
import { Zap, Clock, Wrench } from "lucide-react";

const MobileVanSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              🚐 Revolutionary On-Site Solutions
            </h2>
            <p className="text-xl md:text-2xl animate-fade-in max-w-3xl mx-auto">
              Battery-operated mobile van for on-site hydraulic hose crimping,
              emergency repairs, and professional maintenance services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Battery Operated</h3>
              <p className="text-lg">
                Fully self-sufficient mobile unit with advanced battery-powered
                crimping equipment
              </p>
            </div>
            <div
              className="text-center animate-scale-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rapid Response</h3>
              <p className="text-lg">
                Emergency response team ready to dispatch within 1 hour for
                critical repairs
              </p>
            </div>
            <div
              className="text-center animate-scale-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Service</h3>
              <p className="text-lg">
                Expert technicians with specialized tools and comprehensive
                repair capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileVanSection;
