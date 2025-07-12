import React from "react";
import {
  Wrench,
  Settings,
  Shield,
  Clock,
  CheckCircle,
  Award,
  Users,
  Zap,
  Construction,
  Truck,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

const Services = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const pilingServices = [
    {
      title: "Bridge Piling",
      description:
        "Specialized foundation solutions for bridge construction projects",
      image: "https://www.nan-steel.com/Upload/170970607120.png",
      features: [
        "Deep foundation systems",
        "Load bearing analysis",
        "Seismic resistance",
        "Weather protection",
      ],
    },
    {
      title: "Residential Piling",
      description:
        "Foundation services for residential and commercial buildings",
      image:
        "https://www.pilingexperts.com.au/wp-content/uploads/2024/08/piling-methods-jpg.webp",
      features: [
        "Soil analysis",
        "Foundation design",
        "Quality assurance",
        "Timely completion",
      ],
    },
    {
      title: "DMC Piling",
      description: "Deep Mixing Column techniques for soil stabilization",
      image:
        "https://www.dhinapilefoundation.com/assets/images/innerbanner/driven-pile-inner.jpg",
      features: [
        "Soil stabilization",
        "Environmental friendly",
        "Cost effective",
        "Proven technology",
      ],
    },
    {
      title: "Tripod Piling",
      description: "Specialized tripod drilling for challenging terrains",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop,f=jpeg/AE0PRryq23SV9WPn/piling-rigging-soil-testing-services-mumbai-liftingandlashingsolutionsindia-A1a5lqKQkyIRWbr1.jpg",
      features: [
        "Difficult access areas",
        "Precision drilling",
        "Minimal disruption",
        "Expert execution",
      ],
    },
    {
      title: "Rotary Piling",
      description: "Advanced rotary drilling for various foundation types",
      image:
        "https://image.made-in-china.com/202f0j00cuebTRmnENrV/Track-Hydraulic-Mini-Bored-Pile-Rotary-Piling-Drilling-Rig-Machine.webp",
      features: [
        "Continuous flight auger",
        "Large diameter piles",
        "High capacity",
        "Efficient installation",
      ],
    },
  ];

  const pilingRigsAndCranes = [
    {
      name: "XCMG 178E",
      type: "Heavy Duty Piling Rig",
      capacity: "Max 35m depth",
      image: "/lovable-uploads/a97ec7f1-7c0c-4b7d-bf05-43170abc9a83.png",
      features: [
        "High torque capacity",
        "Advanced hydraulic system",
        "GPS positioning",
        "Automated drilling",
      ],
    },
    {
      name: "Mait HR180",
      type: "Rotary Drilling Rig",
      capacity: "Max 40m depth",
      image:
        "https://crownlifters.com/wp-content/uploads/2019/05/Mait-HR-180-CP-Piling-Rig-1.jpg",
      features: [
        "Telescopic mast",
        "Multi-purpose drilling",
        "High efficiency",
        "Compact design",
      ],
    },
    {
      name: "Sunward 175",
      type: "Multi-Purpose Rig",
      capacity: "Max 30m depth",
      image:
        "https://media.licdn.com/dms/image/v2/D4D22AQEX0elOqVB1Ow/feedshare-shrink_800/feedshare-shrink_800/0/1723817729104?e=2147483647&v=beta&t=Q4Qs-f3YJBvyl7z517aQOIUXTNjkzX_jxWS3ShOpJ-g",
      features: [
        "Versatile applications",
        "Easy transportation",
        "Quick setup",
        "Reliable performance",
      ],
    },
    {
      name: "XCMG 210",
      type: "Advanced Piling Rig",
      capacity: "Max 45m depth",
      image:
        "https://image.made-in-china.com/2f0j00TYqUfFSdbMuk/XCMG-Professional-Xr220d-Used-Piling-Machine-Crawler-Rotary-Drilling-Rig.webp",
      features: [
        "Large diameter piles",
        "High precision",
        "Automated controls",
        "Energy efficient",
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry Expertise",
      description:
        "25+ years of experience in hydraulic and piling solutions with proven track record",
    },
    {
      icon: Shield,
      title: "National Standards",
      description:
        "All work complies with IS codes and international standards for quality assurance",
    },
    {
      icon: Users,
      title: "Trained Team",
      description:
        "In-house trained technicians and engineers with specialized certifications",
    },
    {
      icon: Zap,
      title: "Advanced Equipment",
      description:
        "State-of-the-art machinery and tools for efficient project execution",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock service availability for emergency and scheduled maintenance",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description:
        "Tailored solutions designed to meet specific project requirements and challenges",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="gradient-red text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in">
              Comprehensive piling and hydraulic solutions for all your
              industrial needs
            </p>
          </div>
        </div>
      </section>

      {/* Piling Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Piling Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional foundation solutions with advanced equipment and
              expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piling Rigs & Cranes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Machinery & Equipment
            </h2>
            {/* <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Piling Rigs & Cranes
            </h3> */}
            {/* <p className="text-xl text-gray-600">
              State-of-the-art piling equipment for efficient and precise
              operations
            </p> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pilingRigsAndCranes.map((machine, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-gray-600 mb-2 font-medium">
                    {machine.type}
                  </p>
                  <p className="text-red-600 font-semibold mb-4">
                    {machine.capacity}
                  </p>
                  <ul className="space-y-1">
                    {machine.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SMS Engineering Works?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for industrial excellence and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
              >
                <reason.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hydraulic Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hydraulic Services & Manufacturing
              </h2>
              <p className="text-xl text-gray-600">
                Complete hydraulic solutions from design to manufacturing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Construction className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Manufacturing Services
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Hydraulic hose fittings and couplings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Teflon, SS, and rubber hoses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Pipe connectors and adaptors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Elbows and flanges
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Custom hydraulic solutions
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <Truck className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Service & Maintenance
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Equipment servicing and repair
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Spare parts supply
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Preventive maintenance programs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    24/7 emergency support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Technical consultation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for professional consultation and quality solutions
          </p>
          <button onClick={handleWhatsAppClick} className="btn-primary">
            Contact on WhatsApp
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
