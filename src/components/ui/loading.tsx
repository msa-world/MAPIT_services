import React from 'react';
import { Loader2 } from 'lucide-react';

// TypeScript interfaces for component props
interface LoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface SectionLoaderProps extends LoaderProps {
  rows?: number;
  showAvatar?: boolean;
}

interface CardLoaderProps extends LoaderProps {
  showImage?: boolean;
  lines?: number;
}

interface ContentLoaderProps extends LoaderProps {
  lines?: number;
  width?: 'full' | 'partial';
}

interface ImageLoaderProps extends LoaderProps {
  aspect?: 'square' | 'video' | 'portrait';
}

interface ButtonLoaderProps extends LoaderProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
}

// Shimmer keyframes and animation classes
const shimmerAnimation = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  
  @keyframes fade {
    0% { opacity: 0.3; }
    50% { opacity: 0.7; }
    100% { opacity: 0.3; }
  }
`;

// Full page loading spinner with Uplinq branding
export const PageLoader: React.FC<LoaderProps> = ({ 
  className = '',
  size = 'lg' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <>
      <style>{shimmerAnimation}</style>
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm ${className}`}
        role="status" 
        aria-label="Loading page content"
      >
        <div className="flex flex-col items-center space-y-6">
          {/* Uplinq Logo Loader */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#00E5FF] opacity-20 animate-ping"></div>
            <div className="relative bg-[#1A1A1A] rounded-full p-6 border border-[#333333]">
              <Loader2 
                className={`${sizeClasses[size]} text-[#00D4AA] animate-spin`}
                aria-hidden="true"
              />
            </div>
          </div>
          
          {/* Brand Text */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-light text-white">UPLINQ</h2>
            <p className="text-sm text-[#B0B0B0] animate-pulse">Loading your financial future...</p>
          </div>
          
          {/* Progress Bar */}
          <div className="w-48 h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#00D4AA] to-[#00E5FF] rounded-full animate-pulse"
              style={{
                animation: 'pulse 2s ease-in-out infinite'
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

// Section loader with shimmer effects
export const SectionLoader: React.FC<SectionLoaderProps> = ({ 
  className = '',
  rows = 3,
  showAvatar = false,
  size = 'md'
}) => {
  return (
    <>
      <style>{shimmerAnimation}</style>
      <div 
        className={`animate-pulse ${className}`}
        role="status"
        aria-label="Loading section content"
      >
        <div className="bg-[#1A1A1A] border border-[#333333] rounded-lg p-6 space-y-4">
          {/* Header with optional avatar */}
          <div className="flex items-start space-x-4">
            {showAvatar && (
              <div className="relative overflow-hidden bg-[#2A2A2A] rounded-full w-12 h-12">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
                  style={{
                    animation: 'shimmer 2s infinite'
                  }}
                ></div>
              </div>
            )}
            <div className="flex-1 space-y-3">
              <div className="relative overflow-hidden bg-[#2A2A2A] rounded h-4 w-3/4">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
                  style={{
                    animation: 'shimmer 2s infinite'
                  }}
                ></div>
              </div>
              <div className="relative overflow-hidden bg-[#2A2A2A] rounded h-3 w-1/2">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
                  style={{
                    animation: 'shimmer 2s infinite 0.5s'
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Content rows */}
          <div className="space-y-3">
            {Array.from({ length: rows }).map((_, i) => (
              <div 
                key={i}
                className="relative overflow-hidden bg-[#2A2A2A] rounded h-3"
                style={{ width: `${100 - (i * 10)}%` }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
                  style={{
                    animation: `shimmer 2s infinite ${i * 0.3}s`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// Card loader with animated placeholders
export const CardLoader: React.FC<CardLoaderProps> = ({ 
  className = '',
  showImage = true,
  lines = 3,
  size = 'md'
}) => {
  return (
    <>
      <style>{shimmerAnimation}</style>
      <div 
        className={`bg-[#1A1A1A] border border-[#333333] rounded-lg overflow-hidden ${className}`}
        role="status"
        aria-label="Loading card content"
      >
        {/* Image placeholder */}
        {showImage && (
          <div className="relative overflow-hidden bg-[#2A2A2A] h-48">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
              style={{
                animation: 'shimmer 2s infinite'
              }}
            ></div>
          </div>
        )}
        
        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="relative overflow-hidden bg-[#2A2A2A] rounded h-6 w-3/4">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
              style={{
                animation: 'shimmer 2s infinite 0.2s'
              }}
            ></div>
          </div>
          
          {/* Content lines */}
          <div className="space-y-3">
            {Array.from({ length: lines }).map((_, i) => (
              <div 
                key={i}
                className="relative overflow-hidden bg-[#2A2A2A] rounded h-4"
                style={{ width: `${90 - (i * 15)}%` }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
                  style={{
                    animation: `shimmer 2s infinite ${0.4 + (i * 0.2)}s`
                  }}
                ></div>
              </div>
            ))}
          </div>
          
          {/* Action area */}
          <div className="pt-2">
            <div className="relative overflow-hidden bg-[#2A2A2A] rounded h-8 w-24">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
                style={{
                  animation: 'shimmer 2s infinite 1s'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Text content loader with animated lines
export const ContentLoader: React.FC<ContentLoaderProps> = ({ 
  className = '',
  lines = 4,
  width = 'full'
}) => {
  const widths = width === 'full' 
    ? ['100%', '95%', '87%', '92%', '78%'] 
    : ['75%', '65%', '70%', '60%', '55%'];

  return (
    <>
      <style>{shimmerAnimation}</style>
      <div 
        className={`space-y-3 ${className}`}
        role="status"
        aria-label="Loading text content"
      >
        {Array.from({ length: lines }).map((_, i) => (
          <div 
            key={i}
            className="relative overflow-hidden bg-[#2A2A2A] rounded h-4"
            style={{ width: widths[i % widths.length] }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
              style={{
                animation: `shimmer 2s infinite ${i * 0.2}s`
              }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

// Image placeholder with loading state
export const ImageLoader: React.FC<ImageLoaderProps> = ({ 
  className = '',
  aspect = 'video',
  size = 'md'
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]'
  };

  return (
    <>
      <style>{shimmerAnimation}</style>
      <div 
        className={`relative overflow-hidden bg-[#2A2A2A] rounded-lg ${aspectClasses[aspect]} ${className}`}
        role="status"
        aria-label="Loading image"
      >
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4AA]/20 to-transparent"
          style={{
            animation: 'shimmer 2s infinite'
          }}
        ></div>
        
        {/* Loading icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#1A1A1A]/80 rounded-full p-3">
            <Loader2 className="w-6 h-6 text-[#00D4AA] animate-spin" />
          </div>
        </div>
        
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-[#00D4AA]/10 to-[#00E5FF]/10"></div>
        </div>
      </div>
    </>
  );
};

// Button with loading spinner state
export const ButtonLoader: React.FC<ButtonLoaderProps> = ({ 
  className = '',
  variant = 'primary',
  disabled = false,
  children,
  loading = false,
  size = 'md'
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D4AA] focus:ring-offset-2 focus:ring-offset-black';
  
  const variantClasses = {
    primary: 'bg-[#00D4AA] text-black hover:bg-[#00E5FF] hover:shadow-lg hover:shadow-[#00D4AA]/25',
    secondary: 'bg-transparent border-2 border-[#00D4AA] text-[#00D4AA] hover:bg-[#00D4AA] hover:text-black',
    ghost: 'bg-transparent text-white hover:bg-[#2A2A2A]'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  const spinnerSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };

  const isDisabled = disabled || loading;

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {loading && (
        <Loader2 
          className={`${spinnerSizes[size]} animate-spin ${children ? 'mr-2' : ''}`}
          aria-hidden="true"
        />
      )}
      {children && (
        <span className={loading ? 'opacity-75' : ''}>{children}</span>
      )}
    </button>
  );
};

// Export all components
const loaders = {
  PageLoader,
  SectionLoader,
  CardLoader,
  ContentLoader,
  ImageLoader,
  ButtonLoader
};
export default loaders;