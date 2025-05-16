
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Saravana Pandiyan .S",
    role: "Embedded Systems Certificate Graduate",
    quote: "Thanks to CSES, I landed a job at a leading IoT company. The hands-on projects made all the difference!",
    image: "",
  },
  {
    id: 2,
    name: "Ganisetti Veera Venkata Satyanarayana",
    role: "PLC Programming Student",
    quote: "The instructors are industry experts who provide real-world insights that textbooks simply can't offer.",
    image: "public/uploads/WhatsApp Image 2025-05-17 at 00.15.52_0405f932.jpg",
  },
  {
    id: 3,
    name: "Jayaram .K",
    role: "AI/ML Certificate Graduate",
    quote: "CSES transformed my theoretical knowledge into practical skills that employers actually value.",
    image: "",
  },
  {
    id: 4,
    name: "Arun Kumar .M",
    role: "IEEE Project Participant",
    quote: "My IEEE project at CSES led to my first publication and opened doors to research opportunities!",
    image: "",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl p-8 shadow-md relative overflow-hidden border border-gray-100">
      <div className="absolute top-4 left-8 text-5xl text-primary opacity-20">❝</div>
      <div className="absolute bottom-4 right-8 text-5xl text-primary opacity-20">❞</div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[current].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <p className="text-gray-700 text-lg italic mb-4">{testimonials[current].quote}</p>
              <div>
                <h4 className="text-primary font-medium">{testimonials[current].name}</h4>
                <p className="text-secondary text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? 'bg-primary' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
