import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';

// Create a context for layout configuration
const LayoutContext = createContext({
  showFooter: true
});

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'React 19 Template',
  showFooter = true 
}) => {
  return (
    // Using new React 19 context as provider syntax
    <LayoutContext value={{ showFooter }}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-primary-800 transition-colors duration-200">
        <Header title={title} />
        <main className="container mx-auto py-8 px-4 md:px-8 flex-grow">
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
    </LayoutContext>
  );
};

export { LayoutContext }; 