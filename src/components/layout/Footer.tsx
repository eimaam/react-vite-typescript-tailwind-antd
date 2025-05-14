import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`py-6 px-4 md:px-8 border-t border-light-600 dark:border-primary-700 ${className || ''}`}>
      <div className="container mx-auto">
        <p className="text-sm text-primary-500 dark:text-light-400 text-center">
          Built with React 19, TypeScript, TailwindCSS, and Framer Motion
        </p>
        
        <div className="mt-4 flex justify-center space-x-4">
          <a 
            href="https://react.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary-500 hover:text-primary-700 dark:text-light-400 dark:hover:text-light-200 transition-colors"
          >
            React
          </a>
          <a 
            href="https://www.typescriptlang.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary-500 hover:text-primary-700 dark:text-light-400 dark:hover:text-light-200 transition-colors"
          >
            TypeScript
          </a>
          <a 
            href="https://tailwindcss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary-500 hover:text-primary-700 dark:text-light-400 dark:hover:text-light-200 transition-colors"
          >
            TailwindCSS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;