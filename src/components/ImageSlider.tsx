
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Factory, MicrochipIcon, Brain, Code, GraduationCap, FileText } from "lucide-react";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  imageBg: string;
}

const ImageSlider: React.FC = () => {
  const slides: Slide[] = [
    {
      title: "Industrial Automation",
      subtitle: "Master PLC, SCADA, HMI & VFD",
      description: "Get hands-on experience with real-time practice on industrial equipment",
      icon: Factory,
      imageBg: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      title: "Embedded Systems",
      subtitle: "Build Smart Devices",
      description: "Create IoT solutions with microcontrollers and embedded programming",
      icon: MicrochipIcon,
      imageBg: "bg-gradient-to-r from-primary to-secondary/80",
    },
    {
      title: "AI & Machine Learning",
      subtitle: "Integrate Intelligence into Industry",
      description: "Apply AI & ML algorithms to solve real-world industrial challenges",
      icon: Brain,
      imageBg: "bg-gradient-to-r from-primary/90 to-secondary/80",
    },
    {
      title: "Mechanical Design & Simulation",
      subtitle: "Design. Simulate. Build.",
      description: "Master SolidWorks & Ansys for professional product development",
      icon: Code,
      imageBg: "bg-gradient-to-r from-primary to-secondary/90",
    },
    {
      title: "IEEE Projects & Innovation",
      subtitle: "From College Projects to Patents",
      description: "Transform innovative ideas into industry-standard solutions",
      icon: FileText,
      imageBg: "bg-gradient-to-r from-primary/80 to-secondary",
    },
    {
      title: "Career-Focused Internships",
      subtitle: "Get Certified. Get Hired.",
      description: "Join our hands-on internship programs with industry partners",
      icon: GraduationCap,
      imageBg: "bg-gradient-to-r from-primary/90 to-secondary/90",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    if (!animating) {
      setAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setAnimating(false), 600);
    }
  };

  const goToPrevSlide = () => {
    if (!animating) {
      setAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setAnimating(false), 600);
    }
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <div
            key={index}
            className={`absolute inset-0 flex items-center ${slide.imageBg} ${
              index === currentSlide ? "z-10 slide-in" : "z-0 opacity-0"
            } transition-opacity duration-500`}
          >
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-md text-white">
                <div className="flex items-center mb-2">
                  <Icon className="h-8 w-8 mr-3 text-white" />
                  <h2 className="text-4xl md:text-5xl font-bold font-display">{slide.title}</h2>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white font-display">{slide.subtitle}</h3>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                <Link to="/apply">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-secondary hover:text-white transition-colors"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 text-white hover:bg-white/50"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon" 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 text-white hover:bg-white/50"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default ImageSlider;
