"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Satellite, 
  Globe, 
  TreePine, 
  Building2, 
  ShieldAlert, 
  Camera, 
  BarChart3, 
  MapPin, 
  Calendar, 
  Filter, 
  Star, 
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Eye,
  Layers,
  Zap
} from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SatellitePortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showBefore, setShowBefore] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Environmental monitoring", "Agriculture", "Urban planning", "Disaster response"];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-title", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setShowBefore(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="inline-block mb-8">
            <div className="relative">
              <Satellite className="w-16 h-16 text-primary mx-auto mb-4" />
              <div className="absolute -inset-4 border border-primary/30 rounded-full animate-ping" />
            </div>
          </div>
          
          <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-light mb-6">
            Satellite <span className="text-primary">Projects</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Transforming Earth observation data into actionable insights for environmental monitoring, 
            precision agriculture, and disaster response across the globe.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">87+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50M</div>
              <div className="text-gray-400">Hectares Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98.5%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-24 bg-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Project <span className="text-primary">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions across diverse applications of satellite technology and remote sensing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <TreePine className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4">Environmental Monitoring</h3>
                <p className="text-gray-400 mb-6">Forest change detection, biodiversity assessment, and ecosystem health monitoring</p>
                <div className="text-sm text-primary font-medium">32 Projects</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4">Agriculture</h3>
                <p className="text-gray-400 mb-6">Precision farming, crop health analysis, and yield optimization solutions</p>
                <div className="text-sm text-primary font-medium">28 Projects</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4">Urban Planning</h3>
                <p className="text-gray-400 mb-6">Smart city development, infrastructure monitoring, and land use analysis</p>
                <div className="text-sm text-primary font-medium">45 Projects</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <ShieldAlert className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-medium mb-4">Disaster Response</h3>
                <p className="text-gray-400 mb-6">Emergency management, risk assessment, and rapid damage evaluation</p>
                <div className="text-sm text-primary font-medium">21 Projects</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section ref={projectsRef} className="py-24 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Project <span className="text-primary">Gallery</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/workfull images for web/Area of High Employment.jpeg"
                  alt="Environmental Monitoring - Area of High Employment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30">
                  Environmental monitoring
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-medium mb-2">Amazon Rainforest Monitoring</h3>
                  <p className="text-sm text-gray-300">WWF Brazil • 2024</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Satellite</div>
                    <div className="font-medium">Sentinel-2</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Area</div>
                    <div className="font-medium">2.1M hectares</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  <span className="text-primary font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/workfull images for web/arizona-backpacking.jpg"
                  alt="Precision Agriculture - Arizona Backpacking"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30">
                  Agriculture
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-medium mb-2">Precision Agriculture</h3>
                  <p className="text-sm text-gray-300">AgriTech Solutions • 2023</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Satellite</div>
                    <div className="font-medium">Planet Labs</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Area</div>
                    <div className="font-medium">50,000 hectares</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  <span className="text-primary font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/workfull images for web/Mapping Brand Distribution and Population Density.jpg"
                  alt="Urban Heat Island Analysis - Population Density Map"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30">
                  Urban planning
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-medium mb-2">Urban Heat Island Analysis</h3>
                  <p className="text-sm text-gray-300">City of Barcelona • 2024</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Satellite</div>
                    <div className="font-medium">Landsat-8</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Area</div>
                    <div className="font-medium">101 km²</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                  <span className="text-primary font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              Project <span className="text-primary">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-gray-300">Hectares Monitored</div>
            </div>
            
            <div className="text-center p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">98.5%</div>
              <div className="text-gray-300">Detection Accuracy</div>
            </div>
            
            <div className="text-center p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            
            <div className="text-center p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary mb-2">65</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.1)_0%,transparent_70%)]" />
        
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Start Your <span className="text-primary">Satellite Project</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ready to transform satellite data into actionable insights? Let's discuss your Earth observation needs 
            and create a custom solution for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/contact">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg px-8 py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </a>
             <a href="/portfolio/all-projects">  
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black text-lg px-8 py-6">
              <Eye className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}