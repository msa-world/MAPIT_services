"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SatelliteDataAccess() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current, 
        { 
          opacity: 0, 
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
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
          scale: 0.9,
          y: 50 
        },
        { 
          opacity: 1, 
          scale: 1,
          y: 0, 
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

      // Floating elements animation
      if (dashboardRef.current) {
        gsap.to(dashboardRef.current.querySelectorAll('.floating-element'), {
          y: -10,
          duration: 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.5
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-primary text-sm font-medium">Satellite Technology</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-light leading-tight text-white mb-6">
              Global <span className="text-primary font-medium">satellite data</span> access
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Access comprehensive satellite imagery and geospatial data from 50+ satellite missions, 
              covering every corner of Earth with unprecedented resolution and temporal frequency.
            </p>
          </div>

          {/* Dashboard visualization */}
          <div ref={dashboardRef} className="relative max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10">
              {/* Background glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-xl -z-10"></div>

              {/* Main dashboard content */}
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* Left panel - Satellite sources */}
                  <div className="space-y-4">
                    <h3 className="text-white font-medium mb-4">Active Satellite Feeds</h3>
                    
                    {/* Satellite feed items */}
                    <div className="space-y-3">
                      {[
                        { name: "Landsat 9", status: "Active", coverage: "100%" },
                        { name: "Sentinel-2", status: "Active", coverage: "98%" },
                        { name: "MODIS Terra", status: "Active", coverage: "95%" },
                        { name: "WorldView-3", status: "Active", coverage: "87%" },
                      ].map((satellite, index) => (
                        <div key={satellite.name} className="floating-element bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white text-sm font-medium">{satellite.name}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-green-400 text-xs">{satellite.status}</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-xs">Coverage</span>
                            <span className="text-primary text-sm font-medium">{satellite.coverage}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-primary/70 h-1 rounded-full" 
                              style={{ width: satellite.coverage }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center - Global map visualization */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {/* Globe representation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-sm"></div>
                      <div className="relative bg-black/60 backdrop-blur-md rounded-full border-2 border-primary/30 w-full h-full flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <svg className="w-16 h-16 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="text-white font-medium">Global Coverage</div>
                          <div className="text-primary text-2xl font-bold">24/7</div>
                        </div>
                        
                        {/* Orbiting satellites */}
                        <div className="absolute inset-0">
                          {[0, 72, 144, 216, 288].map((rotation, index) => (
                            <div 
                              key={index}
                              className="absolute w-2 h-2 bg-primary rounded-full animate-pulse"
                              style={{
                                transform: `rotate(${rotation}deg) translateY(-130px)`,
                                transformOrigin: `center 130px`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right panel - Data streams */}
                  <div className="space-y-4">
                    <h3 className="text-white font-medium mb-4">Real-time Data Streams</h3>
                    
                    <div className="space-y-3">
                      {[
                        { type: "Optical Imagery", rate: "2.4 GB/s", color: "bg-blue-500" },
                        { type: "Radar Data", rate: "1.8 GB/s", color: "bg-green-500" },
                        { type: "Hyperspectral", rate: "3.1 GB/s", color: "bg-purple-500" },
                        { type: "LiDAR Points", rate: "1.2 GB/s", color: "bg-orange-500" },
                      ].map((stream, index) => (
                        <div key={stream.type} className="floating-element bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-3 h-3 ${stream.color} rounded-full animate-pulse`}></div>
                            <span className="text-white text-sm font-medium">{stream.type}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-xs">Transfer Rate</span>
                            <span className="text-primary text-sm font-medium">{stream.rate}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Processing stats */}
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-primary/20 mt-6">
                      <h4 className="text-white font-medium mb-3">Processing Status</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Queue Status</span>
                          <span className="text-green-400">Optimal</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Active Jobs</span>
                          <span className="text-primary">1,247</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Avg. Processing</span>
                          <span className="text-primary">&lt; 30s</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">All Systems Operational</span>
                    </div>
                    <span className="text-gray-400 text-sm">|</span>
                    <span className="text-gray-300 text-sm">Last Update: Live</span>
                  </div>
                  <div className="text-primary text-sm font-medium">
                    50+ Satellite Missions Connected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}