
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import NavBar from "../components/NavBar";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Contact & Customer Care</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? Reach out to our team for prompt and helpful support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 mb-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Contact Us</h2>
                
                <div className="space-y-6">
                  <p className="text-gray-600">
                    Have any issues or questions? Our support team is available to assist you.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Email:</p>
                        <div>
                          <a href="mailto:csespondy@gmail.com" className="text-primary hover:text-primary/80 font-medium block">
                            csespondy@gmail.com
                          </a>
                          <a href="mailto:admin@cornerstoneengineeringsolutions.in" className="text-primary hover:text-primary/80 font-medium block">
                            admin@cornerstoneengineeringsolutions.in
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Phone:</p>
                        <div>
                          <a href="tel:+918072740776" className="text-primary hover:text-primary/80 font-medium block">
                            +91 8072740776
                          </a>
                          <a href="tel:+918754603801" className="text-primary hover:text-primary/80 font-medium block">
                            +91 8754603801
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Address:</p>
                        <p className="font-medium">Plot no 65, 7th Cross Street, Tagore Nagar, Lawspet, Puducherry-605 008.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Website:</p>
                        <a href="https://cornerstoneengineeringsolutions.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">
                          cornerstoneengineeringsolutions.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-6">Quick Links</h2>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link to="/apply">
                    <Button className="w-full bg-accent text-primary hover:bg-accent/90 glow-button">
                      Apply Now
                    </Button>
                  </Link>
                  <Link to="/certifications">
                    <Button className="w-full" variant="outline">
                      View Certifications
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
