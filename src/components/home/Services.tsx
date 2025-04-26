import React from 'react';
import { Heart, Brain, Stethoscope, Baby, Eye, Pill, UserSquare2, Shield } from 'lucide-react';
import Button from '../ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group">
        Learn more 
        <svg 
          className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Heart className="h-10 w-10 text-primary-600 bg-[#0890b2bb] rounded-lg p-2" />,
      title: "Cardiology",
      description: "Expert care for heart health, prevention, and treatment of cardiovascular conditions."
    },
    {
      icon: <Brain className="h-10 w-10 text-primary-600 bg-[#0890b2bb] rounded-lg p-2" />,
      title: "Neurology",
      description: "Specialized care for conditions affecting the brain, spine, and nervous system."
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-primary-600 bg-[#0890b2bb] rounded-lg p-2" />,
      title: "Primary Care",
      description: "Comprehensive healthcare services for individuals and families of all ages."
    },
    {
      icon: <Baby className="h-10 w-10 text-primary-600 bg-[#0890b2bb] rounded-lg p-2" />,
      title: "Pediatrics",
      description: "Dedicated care for infants, children, and adolescents to ensure healthy development."
    },
    {
      icon: <Eye className="h-10 w-10 text-primary-600 bg-[#0890b2bb] rounded-lg p-2" />,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to advanced surgical procedures."
    },
    {
      icon: <Pill className="h-10 w-10 text-primary-600 bg-[#0890b2bb] rounded-lg p-2" />,
      title: "Pharmacy",
      description: "Convenient access to prescriptions, medications, and expert pharmaceutical advice."
    },
    {
      icon: <UserSquare2 className="h-10 w-10 text-primary-600 bg-[#0890b2bb] rounded-lg p-2" />,
      title: "Mental Health",
      description: "Supportive care for emotional wellbeing, stress management, and psychiatric conditions."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-600 bg-[#0890b2bb] rounded-lg p-2" />,
      title: "Preventive Care",
      description: "Proactive health screenings and wellness programs to maintain optimal health."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Healthcare Services</h2>
          <p className="text-xl text-gray-600">Comprehensive care for you and your family with specialists in multiple fields</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="primary" className="px-6 py-3 bg-[#0891B2] hover:bg-[black]">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;