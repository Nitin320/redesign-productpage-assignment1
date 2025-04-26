import React from 'react';
import { CheckCircle, Calendar, VideoIcon, FileCheck } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex gap-6">
      <div className="relative">
          <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg z-10 relative bg-[#0891B2]">
          {number}
        </div>
        {number < 4 && (
            <div className="absolute top-12 left-1/2 w-0.5 h-full -translate-x-1/2 bg-[#0890b289]"></div>
        )}
      </div>
      <div className="flex-1 pb-12">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-primary-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Book an Appointment",
      description: "Schedule a virtual or in-person appointment with your preferred specialist at a time that works for you.",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      number: 2,
      title: "Consultation",
      description: "Meet with your healthcare provider through our secure video platform or in our state-of-the-art facilities.",
      icon: <VideoIcon className="h-5 w-5" />
    },
    {
      number: 3,
      title: "Treatment Plan",
      description: "Receive a personalized treatment plan tailored to your specific health needs and goals.",
      icon: <FileCheck className="h-5 w-5" />
    },
    {
      number: 4,
      title: "Follow-Up Care",
      description: "Stay connected with your provider for ongoing care, medication management, and health monitoring.",
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How GoGetWell Works
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We've simplified the healthcare experience to make getting the care you need easier than ever.
            </p>
            
            <div className="space-y-2">
              {steps.map((step) => (
                <Step 
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-primary-50 rounded-3xl transform rotate-3"></div>
            <div className="absolute -inset-4 bg-teal-50 rounded-3xl transform -rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" 
                alt="Virtual medical consultation" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;