import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CounterBadgeProps {
  count: number;
  className?: string;
  label?: string;
}

export const CounterBadge: React.FC<CounterBadgeProps> = ({ 
  count, 
  className,
  label
}) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className={cn(
          "relative bg-gradient-to-r from-secondary to-accent p-1 rounded-lg",
          className
        )}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.1
        }}
      >
        <div className="bg-white dark:bg-primary-800 rounded-md px-4 py-2 flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
            {count.toLocaleString()}
          </span>
        </div>
      </motion.div>
      {label && (
        <span className="mt-2 text-sm text-primary-500">{label}</span>
      )}
    </div>
  );
};