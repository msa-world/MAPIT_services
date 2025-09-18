"use client";

import React, { useState, useEffect } from 'react';
import ArrowRight from '../ui/ArrowRightIcon';
import Link from 'next/link';
// Removed icons import

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const services: (ServiceCard & { link: string })[] = [
  {
    id: 'mapping',
    title: 'Digital Mapping & Cartography',
    description: 'Professional mapping solutions with real-time data integration for comprehensive spatial visualization and analysis.',
    imageUrl: '/workfull images for web/Zonal Map for Sussex County, USA.jpg',
    link: '/portfolio/mapping-solutions'
  },
  {
    id: 'satellite',
    title: 'Satellite Data Processing',
    description: 'Advanced satellite imagery analysis and earth observation services for environmental and agricultural monitoring.',
    imageUrl: '/workfull images for web/Interactive map For Railway.png',
    link: '/portfolio/satellite-projects'
  },
  {
    id: 'environmental',
    title: 'Environmental Monitoring',
    description: 'Monitor environmental changes using remote sensing technology and predictive analytics for sustainable planning.',
    imageUrl: '/workfull images for web/Average annually rainfall map Italy.jpg',
    link: '/solutions/environmental-monitoring'
  },
  {
    id: 'analytics',
    title: 'Spatial Analytics',
    description: 'Transform complex geospatial data into actionable business insights with advanced analytics and machine learning.',
    imageUrl: '/workfull images for web/Mapping Brand Dealer and population Distribution in Georgia .jpg',
    link: '/solutions/data-visualization'
  }
];

export const ServicesShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Chip/Badge */}
          <div 
            className={`inline-flex items-center px-4 py-2 rounded-full bg-surface-dark/50 border border-border backdrop-blur-sm mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-sm font-medium text-text-secondary">Our Services</span>
          </div>

          {/* Main Headline */}
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-light mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Transforming data into{' '}
            <span className="text-primary font-medium">intelligence</span>
          </h2>

          {/* Subtitle */}
          <p 
            className={`text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Comprehensive geospatial solutions powered by cutting-edge technology and 
            decades of expertise in spatial data analysis and visualization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 max-w-7xl mx-auto items-stretch">
          {services.map((service, index) => {
            const isHovered = hoveredCard === service.id;
            return (
              <div
                key={service.id}
                className={`group relative bg-surface-dark/80 backdrop-blur-sm border border-border rounded-2xl transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${
                  isHovered 
                    ? 'scale-105 border-primary/50 shadow-[0_0_30px_rgba(0,212,170,0.2)]' 
                    : 'hover:scale-102 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,212,170,0.1)]'
                } p-3 sm:p-4 min-h-[300px] h-auto flex flex-col justify-between items-center`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background glow effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} 
                />

                {/* Service Image */}
                <div className="relative z-10 w-full aspect-[16/9] sm:aspect-[5/3] bg-surface-medium rounded-xl overflow-hidden border border-border mb-3">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isHovered ? 'scale-110' : 'group-hover:scale-105'
                    }`}
                  />
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`} 
                  />
                </div>

                {/* Service Content */}
                <div className="relative z-10 text-center w-full">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-2">
                    {service.description}
                  </p>
                </div>

                {/* Explore More Button */}
                <div className="relative z-10 w-full mt-4 flex justify-center">
                  <Link href={service.link} passHref legacyBehavior>
                    <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-medium shadow hover:bg-primary/80 transition-all duration-300">
                      Explore More <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                </div>

                {/* Hover overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-2xl pointer-events-none transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
              </div>
            );
          })}
        </div>

        {/* Loading animation keyframes */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(0, 212, 170, 0.2);
            }
            50% {
              box-shadow: 0 0 30px rgba(0, 212, 170, 0.4);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
};