import React from "react";
import { Link } from "react-router-dom";

const AboutPreviewSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-slide-up">
            About SMS Engineering Works
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in">
            With over 25 years of expertise in hydraulic solutions and piling
            services, SMS Engineering Works has established itself as a trusted
            partner for industries across Mumbai. We specialize in manufacturing
            high-quality hydraulic hose fittings, providing comprehensive piling
            services, and maintaining XCMG 178E piling rigs.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center animate-scale-in">
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
          <Link to="/about" className="btn-primary animate-pulse-hover">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
