import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest text-xs";
    
    const variants = {
      primary: "bg-primary text-background hover:bg-primary-dark",
      secondary: "bg-surface text-text-primary hover:bg-surface/80",
      outline: "border border-white/20 bg-transparent hover:bg-white/5",
      ghost: "hover:bg-white/5 hover:text-primary",
    };

    const sizes = {
      sm: "h-9 px-4",
      md: "h-11 px-8",
      lg: "h-14 px-10 text-sm",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export const MotionButton = motion.create(Button);
