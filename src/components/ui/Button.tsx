import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'navy' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'gold',
  size = 'md',
  asLink = false,
  href,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:cursor-not-allowed select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold gap-2",
    lg: "px-7 py-3.5 text-base font-semibold gap-2.5",
  }[size];

  const variantStyles = {
    gold: "bg-gold-gradient text-navy-950 font-bold hover:brightness-105 hover:shadow-gold-glow shadow-md border border-gold-light/40",
    navy: "bg-navy-900 text-white hover:bg-navy-800 shadow-md border border-navy-700/60 hover:border-gold/40 hover:shadow-navy-glow",
    outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent",
    ghost: "text-navy-900 hover:bg-navy-50 hover:text-royal bg-transparent",
  }[variant];

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
    </>
  );

  if (asLink && href) {
    return (
      <a 
        href={href} 
        className={cn(baseStyles, sizeStyles, variantStyles, "group", className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles, variantStyles, "group", className)}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
