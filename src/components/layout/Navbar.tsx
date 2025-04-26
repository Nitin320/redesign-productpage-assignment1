import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-[#0891B2] transition-colors font-medium">
              Services
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#0891B2] transition-colors font-medium">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Health Blog
                </a>
                <a href="#guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Patient Guides
                </a>
                <a href="#faqs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  FAQs
                </a>
              </div>
            </div>
            <a href="#about" className="text-gray-700 hover:text-[#0891B2] transition-colors font-medium">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#0891B2] transition-colors font-medium">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="px-4 py-2">
              Log in
            </Button>
            <Button variant="primary" className="px-4 py-2 bg-[#0891B2]">
              Book Appointment
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          <a 
            href="#services" 
            className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#resources" 
            className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </a>
          <a 
            href="#about" 
            className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="pt-2 flex flex-col space-y-3">
            <Button variant="outline" className="w-full py-2">
              Log in
            </Button>
            <Button variant="primary" className="w-full py-2">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;