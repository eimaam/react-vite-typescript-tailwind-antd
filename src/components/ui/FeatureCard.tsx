import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  delay = 0
}) => {
  return (
    <motion.div
      className={cn(
        "group bg-white rounded-2xl p-8 shadow-sm border border-light-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
        className
      )}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: delay * 0.1
      }}
    >
      <div className={cn(
        "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
        iconClassName
      )}>
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-primary-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}