
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Book, GraduationCap, Briefcase, Award, Users } from "lucide-react";
import Testimonials from "../components/Testimonials";

const AboutFeature: React.FC<{
  icon: React.ReactNode;
  title: string;
}> = ({ icon, title }) => {
  return (
    <div className="flex items-center mb-4 gap-3">
      <div className="rounded-full bg-primary/20 p-2 text-primary">
        {icon}
      </div>
      <div className="text-lg">{title}</div>
    </div>
  );
};

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple visibility check for animation
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.3 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    { icon: <Book size={24} />, title: "Industry-standard labs and tools" },
    { icon: <GraduationCap size={24} />, title: "Experienced faculty from top institutions" },
    { icon: <Award size={24} />, title: "Project-based learning" },
    { icon: <Briefcase size={24} />, title: "Internship and placement support" },
    { icon: <Users size={24} />, title: "Live IEEE project guidance" },
    { icon: <Award size={24} />, title: "Affordable and flexible batches" }
  ];

  // Key statistics
  const stats = [
    { value: "1000+", label: "Students Trained" },
    { value: "15+", label: "Certification Programs" },
    { value: "95%", label: "Placement Rate" },
    { value: "50+", label: "Industry Partners" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About CSES</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The <strong>Center for Skill Enhancement and Specialization (CSES)</strong> is dedicated to 
                empowering youth with cutting-edge technical education and hands-on skill development.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-primary/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-gray-800/80 rounded-lg p-8 backdrop-blur-sm border border-primary/20"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-6">
                  <span className="text-2xl text-primary">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To bridge the gap between academic knowledge and real-world applications by delivering 
                  hands-on, project-based education. Our commitment is to foster innovation, nurture creativity, 
                  and shape the next generation of tech leaders.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gray-800/80 rounded-lg p-8 backdrop-blur-sm border border-primary/20"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-6">
                  <span className="text-2xl text-primary">👁️</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To become the most trusted center for engineering education and innovation, empowering 
                  students to build a smarter, sustainable future. Whether you're a student, a job seeker, 
                  or a professional, CSES has the right pathway to elevate your career.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-12 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-700/50 rounded-lg p-6 border border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us & Lab Image */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <span className="text-accent mr-3">🌟</span>
                  Why Choose CSES?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <AboutFeature icon={feature.icon} title={feature.title} />
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8"
                  variants={itemVariants}
                >
                  <Link to="/apply">
                    <Button 
                      size="lg" 
                      className="bg-accent text-primary hover:bg-accent/90 font-bold py-3 px-8 rounded-lg text-lg transition-colors glow-button"
                    >
                      Join us and power up your future!
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="relative rounded-xl overflow-hidden h-96">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Students in Engineering Lab" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Students Say</h2>
            <div className="max-w-3xl mx-auto">
              <Testimonials />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Cornerstone Engineering Solutions. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent">Privacy Policy</a>
              <a href="#" className="hover:text-accent">Terms of Service</a>
              <a href="#" className="hover:text-accent">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
