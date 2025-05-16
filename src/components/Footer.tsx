
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Mail, Globe, Phone, MapPin } from "lucide-react";
import Logo from "../assets/logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center mb-4">
            <Logo className="mr-3 h-12" />
            <h3 className="text-2xl font-bold font-display">CSES</h3>
          </div>
          <p className="text-white/80 text-sm">Centre for Skill Enhancement and Solutions – Empowering future engineers and creators.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4 font-display">Quick Links</h4>
          <ul className="space-y-2 text-white/80">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About CSES</Link></li>
            <li><Link to="/certifications" className="hover:text-white transition-colors">Certifications</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4 font-display">Connect With Us</h4>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm">Plot no 65, 7th Cross Street, Tagore Nagar, Lawspet, Puducherry-605 008</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="text-sm">+91 8072740776 / +91 8754603801</span>
            </div>
            <a href="mailto:csespondy@gmail.com" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Mail size={18} />
              <span>csespondy@gmail.com</span>
            </a>
            <a href="https://cornerstoneengineeringsolutions.in" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Globe size={18} />
              <span>cornerstoneengineeringsolutions.in</span>
            </a>
            <a href="https://www.linkedin.com/company/cornerstone-engineering-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href="https://m.facebook.com/CSES14/about/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Facebook size={18} />
              <span>Facebook</span>
            </a>
            <a href="https://youtube.com/@cornerstoneengineeringsolu3920?si=FZHW1qlEKp3awsPg" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center gap-2">
              <Youtube size={18} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg mb-2 font-display">Business Listings</h4>
            <div className="text-sm text-white/70 space-y-1">
              <p><a href="https://jsdl.in/RSL-YMU1747416083" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">JustDial</a></p>
              <p><a href="https://www.indiamart.com/cornerstoneengineeringsolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">IndiaMart - HMI & Automatic Sanitizer Manufacturer</a></p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg mb-2 font-display">Academic Partners</h4>
            <div className="text-sm text-white/70">
              <p><a href="https://mvit.edu.in/wp-content/Files/Robotics/staffprofile/Baskaran_A.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">MANAKULA VINAYAGAR INSTITUTE OF TECHNOLOGY</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/50">
        © 2025 CSES. All rights reserved. | Designed by satish
      </div>
    </footer>
  );
};

export default Footer;
