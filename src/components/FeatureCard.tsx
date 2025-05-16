
import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 border-l-4 border-primary">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-primary/10 mr-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-bold text-xl text-primary font-display">{title}</h3>
      </div>
      <p className="text-[#111827]">{description}</p>
      <button className="mt-4 text-secondary font-medium inline-flex items-center hover:underline">
        Learn more 
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default FeatureCard;
