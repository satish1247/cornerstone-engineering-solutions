
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ImageSlider from "../components/ImageSlider";
import FeatureCard from "../components/FeatureCard";
import { Cpu, Layers, Brain, Pencil, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Testimonials from "../components/Testimonials";

const Index: React.FC = () => {
  const features = [
    {
      title: "Industrial Automation",
      description: "Learn PLC programming, SCADA systems, and industrial robotics for smart manufacturing applications.",
      icon: Cpu,
    },
    {
      title: "Embedded Systems",
      description: "Build expertise in microcontrollers, real-time operating systems, and IoT device development.",
      icon: Layers,
    },
    {
      title: "AI/ML Integration",
      description: "Apply machine learning algorithms to robotics and develop intelligent control systems.",
      icon: Brain,
    },
    {
      title: "Product Design",
      description: "Master SolidWorks CAD software for professional mechanical and product design.",
      icon: Pencil,
    },
    {
      title: "IEEE Mini Projects",
      description: "Develop industry-relevant projects following IEEE standards and specifications.",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <ImageSlider />
        
        <section className="py-16 px-6 md:px-20 bg-[#E5E7EB]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-display">Our Programs</h2>
              <p className="text-lg text-[#111827] max-w-2xl mx-auto">
                Cornerstone Engineering Solutions provides world-class training in cutting-edge technologies to prepare you for the future of engineering.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:px-20 bg-[#F9FAFB]">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary font-display">What Our Students Say</h2>
              <Testimonials />
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-20 bg-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to Advance Your Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join Cornerstone Engineering Solutions and gain industry-relevant skills that employers are looking for.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/apply">
                <Button 
                  className="bg-white text-primary hover:bg-secondary hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                  size="lg"
                >
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  className="bg-primary border border-white hover:bg-secondary font-bold py-3 px-8 rounded-lg text-lg transition-colors"
                  size="lg"
                  variant="outline"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
