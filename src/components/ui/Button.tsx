'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/lib/animations';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  { 
    children, 
    className = '', 
    variant = 'primary', 
    size = 'md', 
    asChild = false,
    ...props 
  }, 
  ref
) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-white hover:shadow-lg hover:-translate-y-1',
    outline: 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1'
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };
  
  const buttonStyle = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (asChild) {
    return (
      <motion.div 
        className={buttonStyle}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <button 
      className={buttonStyle}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;