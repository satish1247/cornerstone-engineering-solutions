
import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    duration: string;
    description: string;
    certification: string;
    icon: LucideIcon;
    level: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const levelColors = {
    beginner: "bg-green-500",
    intermediate: "bg-blue-500", 
    advanced: "bg-purple-500",
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden border-t-4 border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(30,174,219,0.5)] hover:scale-[1.02]">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-full bg-primary/10">
              <course.icon className="h-7 w-7 text-primary" />
            </div>
            <Badge className={`${levelColors[course.level as keyof typeof levelColors]} text-white capitalize`}>
              {course.level}
            </Badge>
          </div>
          <h3 className="text-2xl font-bold mt-4">{course.title}</h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.duration}</span>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground">{course.description}</p>
          
          <div className="flex items-center mt-4 text-sm">
            <Award className="w-4 h-4 text-accent mr-2" />
            <span className="font-medium">{course.certification}</span>
          </div>
        </CardContent>
        
        <CardFooter>
          <Link to="/apply" className="w-full">
            <Button className="w-full bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
