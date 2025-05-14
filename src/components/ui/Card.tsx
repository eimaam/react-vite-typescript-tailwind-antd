import React from 'react';
import { Card as AntCard } from 'antd';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

interface CardProps {
  className?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  animate?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  bordered?: boolean;
  hoverable?: boolean;
  extra?: React.ReactNode;
}

const Card = ({ 
  className, 
  children, 
  title,
  animate = false, 
  ref,
  bordered = true,
  hoverable = false,
  extra,
  ...props 
}: CardProps) => {
  // If animate is true, wrap with motion.div
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        ref={ref}
      >
        <AntCard
          className={cn(
            'rounded-lg border border-light-300 bg-white dark:border-primary-700 dark:bg-primary-800',
            className
          )}
          title={title}
          bordered={bordered}
          hoverable={hoverable}
          extra={extra}
          {...props}
        >
          {children}
        </AntCard>
      </motion.div>
    );
  }

  // Standard non-animated card
  return (
    <AntCard
      className={cn(
        'rounded-lg border border-light-300 bg-white dark:border-primary-700 dark:bg-primary-800',
        className
      )}
      title={title}
      bordered={bordered}
      hoverable={hoverable}
      extra={extra}
      {...props}
      ref={ref}
    >
      {children}
    </AntCard>
  );
};

Card.displayName = 'Card';

// Use Ant Design Card components for these parts
const { Meta } = AntCard;

const CardMeta = ({ 
  className, 
  title, 
  description,
  avatar,
  ...props 
}: React.ComponentProps<typeof Meta>) => (
  <Meta
    className={cn('', className)}
    title={title}
    description={description}
    avatar={avatar}
    {...props}
  />
);

CardMeta.displayName = 'CardMeta';

// Custom card sections that may not be in Ant Design
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const CardContent = ({ 
  className, 
  ref,
  ...props 
}: CardContentProps) => (
  <div 
    ref={ref} 
    className={cn('pt-0', className)} 
    {...props} 
  />
);

CardContent.displayName = 'CardContent';

export { Card, CardMeta, CardContent }; 