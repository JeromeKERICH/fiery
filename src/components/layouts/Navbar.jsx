import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  const closeMenu = () => setIsOpen(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4" // Light warm background
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with goldenrod accent */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/assets/icon2.png" 
            alt="Fiery Network" 
            className="h-10 md:h-12"
          />
        
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-gray-800 hover:text-[#DAA520] font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="text-gray-800 hover:text-[#DAA520] font-medium transition-colors duration-200"
          >
            Services
          </Link>
          <Link 
            to="/about-us" 
            className="text-gray-800 hover:text-[#DAA520] font-medium transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="bg-[#FF4040] text-white px-6 py-2 rounded-md font-medium hover:bg-[#E63939] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Menu Button (coral red) */}
        <button 
          className="md:hidden text-[#FF4040] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF8F0] absolute top-full left-0 right-0 shadow-xl py-4 px-6 border-t border-[#FFE4C4]">
          <Link 
            to="/" 
            className="block py-3 text-gray-800 hover:text-[#DAA520] font-medium border-b border-[#FFE4C4]"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="block py-3 text-gray-800 hover:text-[#DAA520] font-medium border-b border-[#FFE4C4]"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            to="/about-us" 
            className="block py-3 text-gray-800 hover:text-[#DAA520] font-medium border-b border-[#FFE4C4]"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="mt-4 inline-block bg-[#FF4040] text-white px-6 py-3 rounded-md font-medium hover:bg-[#E63939] w-full text-center shadow-md"
            onClick={closeMenu}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;