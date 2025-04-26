import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-600 mb-6">
              Transforming healthcare through technology. Our mission is to make quality healthcare accessible to everyone, anywhere.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary-600 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#doctors" className="text-gray-600 hover:text-primary-600 transition-colors">Our Doctors</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-primary-600 transition-colors">Health Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Telemedicine</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Preventive Care</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Chronic Disease Management</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Mental Health</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Pediatrics</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Women's Health</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-600 mr-3 shrink-0" />
                <span className="text-gray-600">
                  123 Health Street, Medical District, San Francisco, CA 94103
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-600 mr-3 shrink-0" />
                <a href="tel:1800GOWELL" className="text-gray-600 hover:text-primary-600 transition-colors">
                  1-800-GO-WELL (469-355)
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-600 mr-3 shrink-0" />
                <a href="mailto:care@gogetwell.ai" className="text-gray-600 hover:text-primary-600 transition-colors">
                  care@gogetwell.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} GoGetWell.ai. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="flex items-center text-primary-600 hover:text-primary-700 transition-colors">
                <Heart className="h-4 w-4 mr-1" /> Made with care
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;