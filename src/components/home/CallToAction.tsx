import React from 'react';
import { ArrowRight, Calendar, MessageCircle, PhoneCall } from 'lucide-react';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden bg-[#0891B2]">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L40 20" stroke="white" strokeWidth="1" />
              <path d="M20 0 L20 40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Prioritize Your Health?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-lg">
              Take the first step toward better health today. Our team of specialists is ready to provide you with personalized care.
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto px-6 py-3 border-white text-white hover:bg-black hover:border-black"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto px-6 py-3 border-white text-white hover:bg-black hover:border-black"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with Us
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button variant="primary" className="w-full py-3 group">
                Submit Request
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition" />
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center text-gray-700">
                <PhoneCall className="h-5 w-5 text-primary-600 mr-2" />
                <span>Need urgent help? Call us at <a href="tel:1800GOWELL" className="font-medium text-primary-600 hover:underline">1-800-GO-WELL</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;