"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Link from 'next/link';
import { 
  Satellite, 
  Map, 
  TrendingUp, 
  Clock, 
  Eye, 
  BarChart3,
  Layers,
  Globe,
  TreePine,
  Building,
  Shield,
  ArrowRight,
  CheckCircle,
  Database,
  Download,
  Zap
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SatelliteDataAnalysisPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (heroRef.current) {
        gsap.fromTo(heroRef.current.querySelector('.hero-title'), 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
        
        gsap.fromTo(heroRef.current.querySelector('.hero-subtitle'), 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
        );

        gsap.fromTo(heroRef.current.querySelector('.hero-cta'), 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: 'power2.out' }
        );
      }

      // Capabilities staggered animation
      if (capabilitiesRef.current) {
        gsap.fromTo(capabilitiesRef.current.querySelectorAll('.capability-card'),
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: capabilitiesRef.current,
              start: 'top 80%',
            }
          }
        );
      }

      // Digitizing Features heading animation
      if (specsRef.current) {
        gsap.fromTo(specsRef.current.querySelector('.digitizing-title'),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: specsRef.current.querySelector('.digitizing-title'),
              start: 'top 85%',
            }
          }
        );
      }

      // Section fade-ins
      const sections = [specsRef, useCasesRef, workflowRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(ref.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
              }
            }
          );
        }
      });

    });

    return () => ctx.revert();
  }, []);

  const capabilities = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-spectral Analysis",
      description: "Advanced processing of multi-spectral and hyperspectral satellite imagery for detailed surface analysis."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Change Detection",
      description: "Temporal analysis to identify and quantify changes in land use, vegetation, and urban development."
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Land Cover Classification",
      description: "Automated classification of land cover types using machine learning algorithms and spectral signatures."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Series Analysis",
      description: "Long-term monitoring and trend analysis using historical satellite data archives."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Object Detection",
      description: "AI-powered identification and mapping of specific objects and infrastructure from high-resolution imagery."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Spectral Indices",
      description: "Calculation of vegetation, water, and urban indices for environmental and agricultural monitoring."
    }
  ];

  const satellites = [
    { name: "Landsat 8/9", resolution: "30m", revisit: "16 days" },
    { name: "Sentinel-2", resolution: "10m", revisit: "5 days" },
    { name: "MODIS", resolution: "250m", revisit: "1-2 days" },
    { name: "WorldView-3", resolution: "0.31m", revisit: "< 1 day" },
    { name: "PlanetScope", resolution: "3m", revisit: "Daily" },
    { name: "SPOT-7", resolution: "1.5m", revisit: "26 days" }
  ];

  const useCases = [
    {
      icon: <TreePine className="w-12 h-12 text-primary" />,
      title: "Agriculture Monitoring",
      description: "Crop health assessment, yield prediction, and precision farming through vegetation indices and growth analysis.",
      benefits: ["95% accuracy in crop classification", "Early disease detection", "Optimized irrigation planning"]
    },
    {
      icon: <Building className="w-12 h-12 text-accent" />,
      title: "Urban Planning",
      description: "City growth tracking, infrastructure monitoring, and sustainable development planning using high-resolution imagery.",
      benefits: ["Real-time urban expansion tracking", "Infrastructure asset management", "Heat island analysis"]
    },
    {
      icon: <Shield className="w-12 h-12 text-success-green" />,
      title: "Environmental Assessment",
      description: "Forest monitoring, water quality analysis, and climate change impact assessment through multi-temporal analysis.",
      benefits: ["Deforestation alerts", "Water body monitoring", "Carbon stock estimation"]
    }
  ];

  // Add workflowSteps to fix ReferenceError
  const workflowSteps = [
    {
      step: '1',
      title: 'Data Acquisition',
      description: 'Collect satellite and sensor data from multiple sources and ingest into secure storage for processing.'
    },
    {
      step: '2',
      title: 'Preprocessing',
      description: 'Radiometric and geometric corrections, atmospheric compensation, and tiling to ensure consistent, analysis-ready data.'
    },
    {
      step: '3',
      title: 'Analysis & Classification',
      description: 'Index calculations, segmentation, and classification workflows to extract meaningful features from imagery.'
    },
    {
      step: '4',
      title: 'Quality Control',
      description: 'Automated validation and manual QA checks to ensure outputs meet accuracy and completeness requirements.'
    },
    {
      step: '5',
      title: 'Visualization & Delivery',
      description: 'Interactive maps, reports, and packaged data outputs delivered in required formats with metadata.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/bg-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30" />
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="hero-title">
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Advanced <span className="text-primary">Spatial Data</span> Analysis
            </h1>
          </div>
          <div className="hero-subtitle">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Unlock the power of spatial data with our advanced analytics platform. 
              From geospatial intelligence to urban planning, transform location-based data into actionable insights for smarter decisions.
            </p>
          </div>
          <div className="hero-cta">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-black font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                Start Spatial Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Capabilities Overview */}
      <section ref={capabilitiesRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Comprehensive <span className="text-primary">Analysis Capabilities</span>
            </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert digitizing, cadastral mapping, and land parcel analysis using advanced satellite imagery and geospatial techniques.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom digitizing/georeferencing capabilities */}
            <div className="capability-card group bg-surface-dark/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-surface-dark/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-8 h-8" />
              </div>
                <h3 className="text-xl font-medium mb-4 text-white">Spatial Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">
                Unlock actionable insights from geospatial data by analyzing spatial relationships, patterns, and trends. Our platform supports advanced spatial modeling, proximity analysis, and custom geostatistical workflows for informed decision-making.
                </p>
            </div>
            <div className="capability-card group bg-surface-dark/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-surface-dark/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">Georeferencing</h3>
              <p className="text-muted-foreground leading-relaxed">Align satellite images to real-world coordinates using ground control points and advanced transformation techniques for accurate mapping and analysis.</p>
            </div>
            <div className="capability-card group bg-surface-dark/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-surface-dark/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">Change Detection</h3>
              <p className="text-muted-foreground leading-relaxed">Monitor and quantify changes in land use, property boundaries, and infrastructure by comparing multi-temporal satellite imagery and digitized maps.</p>
            </div>
            <div className="capability-card group bg-surface-dark/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-surface-dark/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">Time Series Mapping</h3>
              <p className="text-muted-foreground leading-relaxed">Create historical records and trend maps by digitizing and georeferencing satellite imagery from different time periods.</p>
            </div>
            <div className="capability-card group bg-surface-dark/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-surface-dark/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">Feature Extraction</h3>
              <p className="text-muted-foreground leading-relaxed">Identify and digitize roads, buildings, water bodies, and other features from satellite imagery for use in cadastral and infrastructure mapping.</p>
            </div>
            <div className="capability-card group bg-surface-dark/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-surface-dark/80 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">Spatial Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">Perform advanced spatial queries and analytics on digitized and georeferenced data for land management, planning, and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section ref={specsRef} className="py-24 bg-surface-dark/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              <span className="text-primary">Digitizing & Mapping</span> Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform specializes in digitizing satellite imagery for cadastral mapping, land parcel extraction, and boundary delineation. We ensure high accuracy in converting raster data to vector formats, supporting property records, land management, and urban planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="digitizing-title text-2xl font-medium mb-8 text-primary drop-shadow-lg">Digitizing Features</h3>
              <div className="space-y-4">
                <div className="bg-surface-medium/50 backdrop-blur-sm rounded-lg p-4 border border-border hover:bg-surface-medium/80 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-white">Automatic Parcel Extraction</h4>
                    <span className="text-sm text-muted-foreground">Polygon & boundary vectorization</span>
                  </div>
                </div>
                <div className="bg-surface-medium/50 backdrop-blur-sm rounded-lg p-4 border border-border hover:bg-surface-medium/80 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-white">Cadastral Mapping</h4>
                    <span className="text-sm text-muted-foreground">Land records & property boundaries</span>
                  </div>
                </div>
                <div className="bg-surface-medium/50 backdrop-blur-sm rounded-lg p-4 border border-border hover:bg-surface-medium/80 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-white">Spatial Analysis</h4>
                    <span className="text-sm text-muted-foreground">Up to 0.3m spatial accuracy</span>
                  </div>
                </div>
                <div className="bg-surface-medium/50 backdrop-blur-sm rounded-lg p-4 border border-border hover:bg-surface-medium/80 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-white">Custom Feature Extraction</h4>
                    <span className="text-sm text-muted-foreground">Roads, buildings, water bodies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-surface-dark/50 backdrop-blur-sm rounded-xl p-8 border border-border">
                <h3 className="text-xl font-medium mb-6 text-white flex items-center">
                  <Database className="w-6 h-6 text-primary mr-3" />
                  Processing & Accuracy
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success-green mr-3" />Up to 99% boundary delineation accuracy</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success-green mr-3" />Automated raster-to-vector conversion</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success-green mr-3" />Manual editing and quality assurance</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success-green mr-3" />Support for multi-scale mapping projects</li>
                </ul>
              </div>

              <div className="bg-surface-dark/50 backdrop-blur-sm rounded-xl p-8 border border-border">
                <h3 className="text-xl font-medium mb-6 text-white flex items-center">
                  <Download className="w-6 h-6 text-accent mr-3" />
                  Output Formats
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success-green mr-3" />Shapefile, GeoJSON, KML, DXF</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success-green mr-3" />High-resolution PDF maps</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success-green mr-3" />Interactive web mapping applications</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-success-green mr-3" />Custom analytics and reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section ref={useCasesRef} className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Real-world <span className="text-primary">Applications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform satellite data into actionable insights across diverse industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-surface-dark/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-surface-dark/80 transition-all duration-300 hover:scale-105">
                <div className="mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-medium mb-4 text-white">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-success-green mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section ref={ctaRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0,212,170,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Ready to unlock <span className="text-primary">satellite insights</span>?
          </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empower agriculture and urban planning with precise satellite analysis  monitor crops, assess land use, and guide sustainable development decisions.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-black font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                <Zap className="mr-2 w-5 h-5" />
                Start Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}