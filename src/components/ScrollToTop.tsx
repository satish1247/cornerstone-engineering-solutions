
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  // Set the scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  return (
    <>
      {isVisible && (
        <div className="fixed right-5 bottom-5 z-50">
          <Button
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            size="icon"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
