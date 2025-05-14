import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Button as AntButton } from 'antd';

// Define our custom variant styles
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-accent hover:bg-accent-700 text-white shadow',
        outline: 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white',
        secondary: 'bg-secondary hover:bg-secondary-700 text-white shadow',
        ghost: 'bg-transparent hover:bg-accent/10 text-accent',
        link: 'bg-transparent underline-offset-4 hover:underline text-accent',
        destructive: 'bg-error-500 text-white hover:bg-error-600 dark:bg-error-600 dark:hover:bg-error-700',
        subtle: 'bg-primary-100 text-primary-900 hover:bg-primary-200 dark:bg-primary-700 dark:text-primary-100 dark:hover:bg-primary-600',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Extract variant types from buttonVariants
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'subtle' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg';

// Our custom props
export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  href?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
}

// Using ref as a prop in React 19
export const Button = ({ 
  className, 
  variant = 'default', 
  size, 
  children, 
  ref,
  ...props 
}: ButtonProps) => {
  // Map our variant to AntD's type if necessary
  const antType = variant === 'default' ? 'primary' : 
                 variant === 'destructive' ? 'primary' :
                 variant === 'outline' ? 'default' :
                 variant === 'link' ? 'link' : 'default';
  
  // Use Ant Button but apply our custom styling
  return (
    <AntButton
      className={cn(buttonVariants({ 
        variant, 
        size,
        className 
      }))}
      ref={ref}
      type={antType as any}
      {...props}
    >
      {children}
    </AntButton>
  );
};

Button.displayName = 'Button';

export { buttonVariants };