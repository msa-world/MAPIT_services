"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RealtimeMonitoring() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(contentRef.current, 
        { 
          opacity: 0, 
          x: 50 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Dashboard animation
      gsap.fromTo(dashboardRef.current, 
        { 
          opacity: 0, 
          x: -50,
          scale: 0.9 
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1, 
          duration: 1.5, 
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate monitoring cards
      if (dashboardRef.current) {
        gsap.fromTo(
          dashboardRef.current.querySelectorAll('.monitoring-card'), 
          { 
            opacity: 0, 
            y: 20 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            delay: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left dashboard */}
            <div ref={dashboardRef} className="relative">
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-medium">Environmental Monitoring</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Live</span>
                  </div>
                </div>

                {/* Monitoring dashboards */}
                <div className="space-y-4 mb-6">
                  <div className="monitoring-card bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-sm font-medium">Deforestation Alerts</span>
                      <span className="text-red-400 text-sm">3 Active</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">Amazon Basin</span>
                        <span className="text-red-400">-2.1% this month</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">Congo Basin</span>
                        <span className="text-yellow-400">-0.8% this month</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-300">Southeast Asia</span>
                        <span className="text-red-400">-1.4% this month</span>
                      </div>
                    </div>
                  </div>

                  <div className="monitoring-card bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-sm font-medium">Water Quality Index</span>
                      <span className="text-green-400 text-sm">Good</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-300">pH Level</span>
                        <span className="text-green-400">7.2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Turbidity</span>
                        <span className="text-green-400">Low</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Chlorophyll</span>
                        <span className="text-yellow-400">Moderate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Temperature</span>
                        <span className="text-green-400">22.1°C</span>
                      </div>
                    </div>
                  </div>

                  <div className="monitoring-card bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white text-sm font-medium">Air Quality Monitoring</span>
                      <span className="text-green-400 text-sm">Healthy</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-300">PM2.5</span>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-1 bg-green-400 rounded-full"></div>
                          <span className="text-green-400">12 μg/m³</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-300">NO2</span>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-1 bg-yellow-400 rounded-full"></div>
                          <span className="text-yellow-400">28 μg/m³</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-300">O3</span>
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-1 bg-green-400 rounded-full"></div>
                          <span className="text-green-400">95 μg/m³</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real-time stats */}
                <div className="border-t border-white/10 pt-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">247</div>
                      <div className="text-xs text-gray-400">Sensors Active</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">15s</div>
                      <div className="text-xs text-gray-400">Update Interval</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">99.8%</div>
                      <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-sm -z-10"></div>
              </div>
            </div>

            {/* Right content */}
            <div ref={contentRef} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-light leading-tight text-white">
                  <span className="text-primary font-medium">Real-time</span>{" "}
                  environmental monitoring
                </h2>
                
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Monitor environmental changes as they happen with continuous satellite 
                  monitoring and AI-powered alert systems that detect threats to 
                  ecosystems in real-time.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Instant Alerts</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Receive immediate notifications about deforestation, pollution events, 
                      natural disasters, and other environmental changes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Continuous Monitoring</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      24/7 surveillance of critical environmental indicators across 
                      global ecosystems using advanced satellite networks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Predictive Analytics</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Forecast environmental trends and potential issues before they 
                      become critical using machine learning models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl p-6">
                  <h4 className="text-white font-medium mb-2">Global Impact</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our monitoring systems track environmental changes across 195 countries, 
                    providing critical data for climate research, conservation efforts, 
                    and environmental policy making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}