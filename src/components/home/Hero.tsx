import React from 'react';
import { ArrowRight, Calendar, Check } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-teal-50 z-0"></div>
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-bl-[100px] z-0 hidden lg:block"
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 mb-6 animate-fadeIn">
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2"></span>
              Virtual healthcare for you
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health, <br className="hidden md:block" />
              <span className="text-primary-600">Our Priority</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Experience healthcare reimagined. Connect with top specialists from the comfort of your home and get the care you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button variant="primary" className="px-6 py-3 text-base bg-[#0891B2] hover:bg-[black]">
                <Calendar className="mr-2 h-5 w-5" />
                Book an Appointment
              </Button>
              <Button variant="outline" className="px-6 py-3 text-base group">
                Learn more 
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} 
                    alt={`Patient ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-2">
                <div className="font-medium">Trusted by 10,000+ patients</div>
                <div className="flex items-center text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                  <span className="ml-1 text-gray-700">4.9</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" 
                alt="Doctor and patient" 
                className="w-full h-96 object-cover rounded-xl mb-6"
              />
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600">Cardiologist</p>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                  <p className="text-gray-700">10+ years of experience in cardiology</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                  <p className="text-gray-700">Specialized in preventive cardiac care</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                  <p className="text-gray-700">Board certified with top ratings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;