import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import HeroSection from "../components/sections/HeroSection";
import MobileVanSection from "../components/sections/MobileVanSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import ServicesSection from "../components/sections/ServicesSection";
import EquipmentSection from "../components/sections/EquipmentSection";
import AboutPreviewSection from "../components/sections/AboutPreviewSection";
import CTASection from "../components/sections/CTASection";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FloatingCTA />

      <HeroSection />
      <MobileVanSection />
      <FeaturesSection />
      <ServicesSection />
      <EquipmentSection />
      {/* <AboutPreviewSection /> */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
