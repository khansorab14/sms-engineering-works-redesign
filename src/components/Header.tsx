import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919820209923", "_blank");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="animate-slide-left">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              SMS ENGINEERING WORKS
            </h1>

            <p className="text-gray-600 text-xs md:text-sm">
              Professional Engineering Services
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-semibold ${
                isActive("/")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-semibold ${
                isActive("/about")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`font-semibold ${
                isActive("/products")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Products
            </Link>
            <Link
              to="/services"
              className={`font-semibold ${
                isActive("/services")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className={`font-semibold ${
                isActive("/gallery")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`font-semibold ${
                isActive("/contact")
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Contact
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center text-gray-700 hover:text-red-600"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">WhatsApp</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                className={`font-semibold ${
                  isActive("/")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-semibold ${
                  isActive("/about")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`font-semibold ${
                  isActive("/products")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
                onClick={toggleMobileMenu}
              >
                Products
              </Link>
              <Link
                to="/services"
                className={`font-semibold ${
                  isActive("/services")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className={`font-semibold ${
                  isActive("/gallery")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
                onClick={toggleMobileMenu}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`font-semibold ${
                  isActive("/contact")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center text-gray-700 hover:text-red-600 justify-start"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">WhatsApp</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
