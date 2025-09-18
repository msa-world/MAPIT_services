"use client";

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-context';

interface ThemeToggleProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`
        group relative inline-flex items-center justify-center
        ${variant === 'compact' ? 'w-9 h-9' : 'w-10 h-10'}
        rounded-lg
        bg-secondary/30 hover:bg-secondary/60
        border border-border/30 hover:border-primary/30
        backdrop-blur-sm
        transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        hover:shadow-lg hover:shadow-primary/10
        focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background
        ${className}
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Icon container with rotation animation */}
      <div className="relative z-10 transition-transform duration-500 ease-in-out group-hover:rotate-12">
        {isDark ? (
          <Sun 
            className={`
              ${variant === 'compact' ? 'w-4 h-4' : 'w-5 h-5'}
              text-muted-foreground group-hover:text-primary
              transition-all duration-300 ease-in-out
              group-hover:drop-shadow-[0_0_8px_rgba(0,212,170,0.5)]
            `}
          />
        ) : (
          <Moon 
            className={`
              ${variant === 'compact' ? 'w-4 h-4' : 'w-5 h-5'}
              text-muted-foreground group-hover:text-primary
              transition-all duration-300 ease-in-out
              group-hover:drop-shadow-[0_0_8px_rgba(0,212,170,0.5)]
            `}
          />
        )}
      </div>
      {/* Subtle pulse animation on hover */}
      <div className="absolute inset-0 rounded-lg border border-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
    </button>
  );
};
