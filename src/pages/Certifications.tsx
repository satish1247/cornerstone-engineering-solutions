
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CourseCard from "../components/CourseCard";
import { Cpu, Layers, FileCode, Brain, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const coursesData = [
  {
    id: 1,
    title: "Certified Robotics Technician (CRT)",
    duration: "2 Months",
    description: "Learn the fundamentals of robotics, control systems, and microcontrollers through hands-on training.",
    certification: "CSES Certified Robotics Technician",
    icon: Cpu,
    level: "intermediate",
  },
  {
    id: 2,
    title: "AI Fundamentals & Application",
    duration: "2 Months",
    description: "Dive into the basics of Artificial Intelligence, machine learning, and its real-world applications.",
    certification: "CSES AI Fundamentals Expert",
    icon: Brain,
    level: "advanced",
  },
  {
    id: 3,
    title: "Embedded Systems Certification",
    duration: "1.5 Months",
    description: "Master embedded C programming, ARM architecture, and IOT systems for smart solutions.",
    certification: "CSES Embedded Systems Expert",
    icon: Layers,
    level: "intermediate",
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    duration: "3 Months",
    description: "Build complete web applications using HTML, CSS, JS, React, and backend tools.",
    certification: "CSES Full Stack Web Developer",
    icon: Code,
    level: "beginner",
  },
  {
    id: 5,
    title: "Industrial Automation & PLC",
    duration: "1 Month",
    description: "Understand and implement industrial automation systems using PLCs and SCADA.",
    certification: "CSES Certified PLC Engineer",
    icon: FileCode,
    level: "beginner",
  },
];

const Certifications: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Certifications We Offer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elevate your skills with our industry-focused technical courses and earn recognized certifications
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full mb-10">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all" className="text-md px-8">All Courses</TabsTrigger>
                <TabsTrigger value="beginner" className="text-md px-6">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate" className="text-md px-6">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced" className="text-md px-6">Advanced</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="beginner" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData
                  .filter((course) => course.level === "beginner")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="intermediate" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData
                  .filter((course) => course.level === "intermediate")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coursesData
                  .filter((course) => course.level === "advanced")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Power Up Your Career?</h2>
            <Link to="/apply">
              <Button 
                className="bg-accent text-primary hover:bg-accent/90 font-bold py-3 px-8 rounded-lg text-lg transition-colors glow-button"
                size="lg"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
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

export default Certifications;
