
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../assets/logo";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and brand name */}
        <NavLink to="/" className="text-xl font-bold text-primary flex items-center gap-2">
          <Logo className="h-10" />
        </NavLink>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={({isActive}) => isActive ? "active-nav-link" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "active-nav-link" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="/certifications" className={({isActive}) => isActive ? "active-nav-link" : "nav-link"}>
            Certifications
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "active-nav-link" : "nav-link"}>
            Contact
          </NavLink>
        </div>
        
        {/* Apply button (desktop) */}
        <div className="hidden md:block">
          <NavLink to="/apply">
            <Button size="sm" className="bg-primary text-white hover:bg-secondary">
              Apply Now
            </Button>
          </NavLink>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 p-4 bg-white shadow-lg rounded-lg absolute right-4 left-4 z-50">
          <div className="flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `block px-4 py-2 rounded ${isActive ? "bg-primary/10 text-primary" : "text-gray-800 hover:bg-gray-100"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `block px-4 py-2 rounded ${isActive ? "bg-primary/10 text-primary" : "text-gray-800 hover:bg-gray-100"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/certifications" 
              className={({isActive}) => 
                `block px-4 py-2 rounded ${isActive ? "bg-primary/10 text-primary" : "text-gray-800 hover:bg-gray-100"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                `block px-4 py-2 rounded ${isActive ? "bg-primary/10 text-primary" : "text-gray-800 hover:bg-gray-100"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/apply" 
              className="block px-4 py-2 bg-primary text-white rounded font-medium text-center hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
