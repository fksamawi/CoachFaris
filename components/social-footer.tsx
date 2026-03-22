import React from 'react';
import { Linkedin } from 'lucide-react'; // Assuming you use lucide-react for icons

const SocialFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent py-8 px-4">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center space-y-4">
        
        {/* Connection Section: Resized and Centered */}
        <div className="flex items-center justify-center space-x-4">
          <span className="text-lg font-medium tracking-wide uppercase">
            Let's Connect
          </span>
          <a 
            href="https://www.linkedin.com/in/faris-khalifeh/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" /> {/* Adjust size here */}
          </a>
        </div>

        {/* Copyright: Forced to one line */}
        <div className="w-full border-t border-gray-200 mt-4 pt-4 text-center">
          <p className="text-sm whitespace-nowrap">
            © {currentYear} Coach Faris. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default SocialFooter;
