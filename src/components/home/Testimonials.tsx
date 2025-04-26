import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    content: "GoGetWell transformed my healthcare experience. The virtual consultations are so convenient, and the doctors are incredibly attentive. I've never felt healthier!",
    name: "Emily Johnson",
    role: "Patient",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5
  },
  {
    content: "As someone with a chronic condition, having easy access to specialists has been life-changing. The platform is intuitive, and the care team is always responsive.",
    name: "Michael Rodriguez",
    role: "Patient",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5
  },
  {
    content: "I was skeptical about telehealth, but GoGetWell changed my mind. The quality of care is exceptional, and I love being able to message my doctor with quick questions.",
    name: "Sophia Chen",
    role: "Patient",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4
  },
  {
    content: "The preventive care program has made a huge difference for my family. We're more proactive about our health, and the regular check-ins give us peace of mind.",
    name: "David Wilson",
    role: "Patient",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-teal-50 bg-[#0890b231]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from people who have transformed their healthcare experience with GoGetWell
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative w-20 h-20 mb-4">
                <div className="absolute inset-0 bg-primary-100 rounded-full transform translate-x-1.5 translate-y-1.5"></div>
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="relative z-10 w-20 h-20 rounded-full object-cover border-2 border-white"
                />
              </div>
              <div className="mb-1">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 italic mb-6">
              "{testimonials[activeIndex].content}"
            </p>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-black' : 'bg-[#0891B2] hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;