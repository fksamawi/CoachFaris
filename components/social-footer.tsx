import React from 'react';

export const SocialFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Profile Image */}
        <div className="flex-shrink-0">
          <img 
            src="/faris-footer.png" // Replace with your actual image path
            alt="Coach Faris"
            className="w-48 h-auto object-contain"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-center md:items-end space-y-6 flex-grow">
          
          {/* Connection Row */}
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold tracking-tight uppercase">
              Let's Connect
            </span>
            <a 
              href="https://www.linkedin.com/in/faris-khalifeh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              {/* Official LinkedIn Blue Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="#0077B5" 
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Copyright Row */}
          <div className="pt-4 border-t border-gray-200 w-full text-center md:text-right">
            <p className="text-sm text-gray-600 whitespace-nowrap">
              © {currentYear} Coach Faris. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
