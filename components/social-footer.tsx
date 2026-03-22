// Change 'const' to 'export const' and remove the 'export default' at the bottom
export const SocialFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-transparent py-8 px-4">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center space-y-4">
        
        {/* Connection Section */}
        <div className="flex items-center justify-center space-x-4">
          <span className="text-lg font-medium tracking-wide uppercase">
            Let's Connect
          </span>
          <a 
            href="https://www.linkedin.com/in/faris-khalifeh/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 transition-transform hover:scale-110"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        {/* Copyright Section */}
        <div className="w-full border-t border-gray-200/20 mt-4 pt-4 text-center">
          <p className="text-sm whitespace-nowrap">
            © {currentYear} Coach Faris. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};
