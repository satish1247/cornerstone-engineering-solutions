
import React from "react";
import ContactForm from "./ContactForm";

interface ContactUsSectionProps {
  className?: string;
}

const ContactUsSection: React.FC<ContactUsSectionProps> = ({ className = "" }) => {
  return (
    <section id="contact" className={`py-16 px-6 md:px-20 bg-[#F9FAFB] ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary font-display">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
