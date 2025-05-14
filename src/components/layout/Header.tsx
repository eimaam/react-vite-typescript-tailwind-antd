import React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../ui/ThemeToggle';

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title = 'React 19 Template',
  className 
}) => {
  return (
    <header className={`py-6 px-4 md:px-8 border-b border-light-600 dark:border-primary-700 ${className || ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-primary-800 dark:text-light-100"
        >
          {title}
        </motion.h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;