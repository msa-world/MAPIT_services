"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ArrowRight, Droplets, Wind, TreePine, Eye, Activity, Zap, Globe, Shield, BarChart3, FileText, AlertTriangle, ChevronRight, Satellite, Cpu, Users, MapPin, TrendingUp, Calendar } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

gsap.registerPlugin(ScrollTrigger);

export default function EnvironmentalMonitoring() {
  const heroRef = useRef<HTMLElement>(null);
  const capabilitiesRef = useRef<HTMLElement>(null);
  const sensorsRef = useRef<HTMLElement>(null);
  const applicationsRef = useRef<HTMLElement>(null);
  const analyticsRef = useRef<HTMLElement>(null);
  const caseStudiesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power3.out",
        }
      );

      // Capabilities grid animations
      gsap.fromTo(
        ".capability-card",
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: capabilitiesRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Sensor network animations
      gsap.fromTo(
        ".sensor-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sensorsRef.current,
            start: "top 70%",
          },
        }
      );

      // Applications animations
      gsap.fromTo(
        ".application-card",
        { opacity: 0, y: 30, rotateY: 15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: applicationsRef.current,
            start: "top 75%",
          },
        }
      );

      // Analytics section animations
      gsap.fromTo(
        ".analytics-feature",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: analyticsRef.current,
            start: "top 70%",
          },
        }
      );

      // Case studies animations
      gsap.fromTo(
        ".case-study",
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: caseStudiesRef.current,
            start: "top 80%",
          },
        }
      );

      // CTA section animation
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      );

      // Environmental data indicators animation
      gsap.to(".data-indicator", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Progress bars animation
      gsap.fromTo(
        ".progress-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".progress-container",
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-teal-900/20" />
        
        <div className="container relative z-10 text-center px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-light mb-6">
              Environmental Monitoring &{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-medium">
                Assessment
              </span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Harness the power of real-time environmental data collection, satellite monitoring, and AI-driven analysis to protect our planet and ensure sustainable development for future generations.
            </p>
            <Link href="/contact" className="hero-cta inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105">
              Start Environmental Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Floating Environmental Indicators */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-emerald-500/20 rounded-full backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center data-indicator">
            <TreePine className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-teal-500/20 rounded-full backdrop-blur-sm border border-teal-500/30 flex items-center justify-center data-indicator">
            <Droplets className="w-6 h-6 text-teal-400" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-cyan-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center data-indicator">
            <Wind className="w-7 h-7 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section ref={capabilitiesRef} className="py-24 bg-gradient-to-b from-black to-gray-900/50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-500/20">
              <Eye className="w-4 h-4" />
              Comprehensive Monitoring
            </div>
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Advanced Environmental{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-medium">
                Monitoring Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deploy cutting-edge sensors and satellite technology to monitor environmental conditions with unprecedented accuracy and real-time insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="capability-card group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-emerald-500/20 group-hover:bg-emerald-500/30 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <Wind className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Air Quality Monitoring</h3>
              <p className="text-gray-300 leading-relaxed">Track pollutants, particulate matter, and atmospheric conditions with precision sensors and real-time data analysis.</p>
            </div>

            <div className="capability-card group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/40 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-teal-500/20 group-hover:bg-teal-500/30 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <Droplets className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Water Quality Assessment</h3>
              <p className="text-gray-300 leading-relaxed">Monitor water bodies for chemical composition, pollution levels, and ecosystem health indicators.</p>
            </div>

            <div className="capability-card group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-cyan-500/20 group-hover:bg-cyan-500/30 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <TreePine className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Deforestation Tracking</h3>
              <p className="text-gray-300 leading-relaxed">Satellite-based forest monitoring to detect deforestation, illegal logging, and habitat loss in real-time.</p>
            </div>

            <div className="capability-card group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-emerald-500/20 group-hover:bg-emerald-500/30 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <Activity className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Biodiversity Monitoring</h3>
              <p className="text-gray-300 leading-relaxed">Track species populations, migration patterns, and ecosystem health using advanced sensor networks.</p>
            </div>

            <div className="capability-card group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-teal-500/20 hover:border-teal-500/40 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-teal-500/20 group-hover:bg-teal-500/30 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Climate Change Analysis</h3>
              <p className="text-gray-300 leading-relaxed">Long-term climate data collection and trend analysis to understand environmental changes.</p>
            </div>

            <div className="capability-card group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-cyan-500/20 group-hover:bg-cyan-500/30 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                <AlertTriangle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pollution Detection</h3>
              <p className="text-gray-300 leading-relaxed">Rapid identification and tracking of environmental contamination and pollution sources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Networks & Data Sources */}
      <section ref={sensorsRef} className="py-24 bg-black">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-teal-500/20">
                <Satellite className="w-4 h-4" />
                Data Collection Network
              </div>
              <h2 className="text-3xl md:text-5xl font-light mb-8">
                Comprehensive{" "}
                <span className="text-transparent bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text font-medium">
                  Sensor Networks
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Our multi-layered monitoring approach combines IoT sensors, satellite imagery, and ground-based stations to provide comprehensive environmental data coverage.
              </p>

              <div className="space-y-8">
                <div className="sensor-item flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">IoT Sensor Integration</h3>
                    <p className="text-gray-300 leading-relaxed">Deploy thousands of intelligent sensors for continuous environmental monitoring and data collection.</p>
                  </div>
                </div>

                <div className="sensor-item flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Satellite className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Satellite-Based Monitoring</h3>
                    <p className="text-gray-300 leading-relaxed">Leverage advanced satellite technology for large-scale environmental observation and analysis.</p>
                  </div>
                </div>

                <div className="sensor-item flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ground Measurement Stations</h3>
                    <p className="text-gray-300 leading-relaxed">Establish strategic monitoring stations for precise local environmental data collection.</p>
                  </div>
                </div>

                <div className="sensor-item flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Real-Time Data Streaming</h3>
                    <p className="text-gray-300 leading-relaxed">Instant data transmission and processing with automated alert systems for rapid response.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-8 text-center">Environmental Data Coverage</h3>
                <div className="space-y-6">
                  <div className="progress-container">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Air Quality Sensors</span>
                      <span className="text-sm text-gray-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div className="progress-bar h-full bg-gradient-to-r from-emerald-500 to-emerald-400 origin-left" style={{ transform: 'scaleX(0)' }} />
                    </div>
                  </div>

                  <div className="progress-container">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Water Monitoring Points</span>
                      <span className="text-sm text-gray-400">88%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div className="progress-bar h-full bg-gradient-to-r from-teal-500 to-teal-400 origin-left" style={{ transform: 'scaleX(0)' }} />
                    </div>
                  </div>

                  <div className="progress-container">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Satellite Coverage</span>
                      <span className="text-sm text-gray-400">100%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div className="progress-bar h-full bg-gradient-to-r from-cyan-500 to-cyan-400 origin-left" style={{ transform: 'scaleX(0)' }} />
                    </div>
                  </div>

                  <div className="progress-container">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Ground Stations</span>
                      <span className="text-sm text-gray-400">92%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <div className="progress-bar h-full bg-gradient-to-r from-emerald-500 to-emerald-400 origin-left" style={{ transform: 'scaleX(0)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-br from-emerald-900/20 via-black to-teal-900/20 relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="text-center cta-content">
            <h2 className="text-3xl md:text-6xl font-light mb-8">
              Protect our environment with{" "}
              <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text font-medium">
                data-driven insights
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start your environmental monitoring project today and make a measurable impact on conservation efforts and sustainability initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105">
                Request Environmental Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-3 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-400 hover:text-emerald-300 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300">
                Schedule Consultation
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}