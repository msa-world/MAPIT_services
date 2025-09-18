"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Map, 
  TrendingUp, 
  Layers, 
  Globe, 
  Zap,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Palette,
  Settings,
  Share2,
  Download,
  Eye,
  Activity,
  PieChart,
  LineChart
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function DataVisualizationPage() {
  const [activeChart, setActiveChart] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const chartsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      // Hero section animations  by MSA
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power4.out" }
      });
      
      const title = element.querySelector(".hero-title");
      const subtitle = element.querySelector(".hero-subtitle");
      const cta = element.querySelector(".hero-cta");
      
      if (title) {
        tl.fromTo(title,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2 }
        );
      }
      
      if (subtitle) {
        tl.fromTo(subtitle,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "-=0.8"
        );
      }
      
      if (cta) {
        tl.fromTo(cta,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          "-=0.8"
        );
      }
    }, heroRef);

    return () => ctx.revert();

    // Animated background elements
    gsap.to(".floating-chart", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    gsap.to(".rotating-element", {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    // yype animations
    const chartElements = gsap.utils.toArray(".chart-card");
    chartElements.forEach((element, index) => {
      gsap.fromTo(element as Element, 
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element as Element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });

    // Section animations
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // No automatic chart switching at all
    // (Removed all setInterval/setTimeout for chart switching)
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, refsArray: React.MutableRefObject<HTMLDivElement[]>) => {
    if (el && !refsArray.current.includes(el)) {
      refsArray.current.push(el);
    }
  };

  const chartTypes = [
    {
      icon: <Map className="w-6 h-6" />,
      title: "Arizona Glamping Sites",
      description: "Arizona Glamping Sites Map"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Arizona Web Map For Glamping Zones",
      description: "Arizona Web Map For Glamping Zones"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aviation Units Web Map",
      description: "Aviation Units Web Map"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Web Map for Races Distribution in New Rochelle",
      description: "Web Map for Races Distribution in New Rochelle"
    }
  ];

  const visualizationTools = [
    { name: "D3.js", description: "Advanced data-driven documents", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "WebGL", description: "High-performance 3D graphics", icon: <Layers className="w-6 h-6" /> },
    { name: "React Charts", description: "Interactive component library", icon: <PieChart className="w-6 h-6" /> },
    { name: "Three.js", description: "3D visualization framework", icon: <Globe className="w-6 h-6" /> }
  ];

  const industryDashboards = [
    {
      title: "Agriculture Monitoring",
      description: "Crop health, weather patterns, and yield predictions",
      features: ["Satellite imagery", "Weather data", "Yield forecasting", "Soil analysis"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Urban Planning",
      description: "City development and infrastructure optimization",
      features: ["Traffic flow", "Population density", "Zoning analysis", "Growth projections"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Environmental Monitoring",
      description: "Climate data and environmental impact tracking",
      features: ["Air quality", "Water monitoring", "Carbon tracking", "Biodiversity"],
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Infrastructure Management",
      description: "Asset monitoring and maintenance optimization",
      features: ["Asset tracking", "Maintenance scheduling", "Performance metrics", "Cost analysis"],
      color: "from-orange-500 to-red-500"
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
            <source src="/bg-3.mp4" type="video/mp4" />
          </video>
        

        <div className="container relative z-10 text-center">
          <h1 className="hero-title text-6xl md:text-7xl font-light mb-6 opacity-0">
            Transform Data into{" "}
            <span className="text-primary font-medium">Insights</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto opacity-0">
            Turn complex geospatial and business data into actionable visualizations 
            that drive informed decision-making across industries
          </p>
          <div className="hero-cta opacity-0">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black font-medium text-lg px-8 py-4">
              <Link href="/contact">Start Visualizing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visualization Types */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
  <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-6">
              Visualization <span className="text-primary">Types</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From interactive maps to real-time dashboards, we create visualizations 
              that make complex data accessible and actionable
            </p>
          </div>

          <div className="mb-4 w-full max-w-xs mx-auto">
            <select
              id="viz-type-select"
              title="Select visualization type"
              className="bg-surface-dark border border-border rounded px-1 py-0.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-primary w-full min-w-0"
              value={activeChart}
              onChange={e => setActiveChart(Number(e.target.value))}
            >
              {chartTypes.map((chart, index) => (
                <option key={index} value={index}>{chart.title}</option>
              ))}
            </select>
          </div>
          <div ref={chartsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {chartTypes.map((chart, index) => (
              <Card 
                key={index} 
                className={`chart-card bg-surface-dark border-border transition-all duration-300 group cursor-pointer p-0 ${activeChart === index ? 'border-primary scale-105' : 'hover:border-primary/50 hover:scale-105'}`}
                onClick={() => setActiveChart(index)}
                style={{ minWidth: '120px', maxWidth: '180px', margin: '0 auto' }}
              >
                <CardContent className="p-3 text-center">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-2 transition-colors duration-300 ${
                    activeChart === index ? 'bg-primary text-black' : 'bg-surface-medium text-primary group-hover:bg-primary group-hover:text-black'
                  }`}>
                    {chart.icon}
                  </div>
                  <h3 className="text-xs font-semibold mb-1 truncate">{chart.title}</h3>
                  <p className="text-xs text-gray-400 truncate">{chart.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="mt-10 flex justify-center">
            <div className="bg-surface-dark rounded-5xl border border-border w-full max-w-8xl aspect-[16/9] flex items-center justify-center overflow-hidden">
              {activeChart === 0 && (
                <iframe
                  src="/Arizona%20Glamping%20%20Sites/index.html"
                  title="Arizona Glamping Sites Map"
                  className="w-full h-full rounded-lg border-none min-h-[300px] max-h-[600px]"
                  allowFullScreen
                />
              )}
              {activeChart === 1 && (
                <iframe
                  src="/Arizona%20Web%20Map%20For%20Glamping%20Zones/index.html"
                  title="Arizona Web Map For Glamping Zones"
                  className="w-full h-full rounded-lg border-none min-h-[300px] max-h-[600px]"
                  allowFullScreen
                />
              )}
              {activeChart === 2 && (
                <iframe
                  src="/Aviation%20Units%20web%20Map/index.html"
                  title="Aviation Units Web Map"
                  className="w-full h-full rounded-lg border-none min-h-[300px] max-h-[600px]"
                  allowFullScreen
                />
              )}
              {activeChart === 3 && (
                <iframe
                  src="/Web%20Map%20for%20Races%20Distribution%20in%20New%20Rochelle/index.html"
                  title="Web Map for Races Distribution in New Rochelle"
                  className="w-full h-full rounded-lg border-none min-h-[300px] max-h-[600px]"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Tools & Technologies */}
      <section className="py-24">
  <div ref={el => addToRefs(el, sectionsRef)} className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-6">
              Tools & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge visualization libraries and technologies 
              to create stunning, performant data experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualizationTools.map((tool, index) => (
              <Card key={index} className="bg-surface-dark border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">{tool.icon}</div>
                    <h3 className="font-medium">{tool.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Integration",
                desc: "Connect multiple data sources seamlessly"
              },
              {
                icon: <Cloud className="w-6 h-6" />,
                title: "Cloud Processing",
                desc: "Handle large datasets with cloud computing"
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile Ready",
                desc: "Responsive visualizations for all devices"
              },
              {
                icon: <Monitor className="w-6 h-6" />,
                title: "Real-time Updates",
                desc: "Live data streaming and updates"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-surface-medium rounded-lg mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Customization Options */}
      <section className="py-24">
  <div ref={el => addToRefs(el, sectionsRef)} className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-6">
              Customization <span className="text-primary">Options</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every visualization is tailored to your brand, data, and user needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette />,
                title: "Brand Customization",
                features: ["Color schemes", "Typography", "Logo integration", "Custom themes"]
              },
              {
                icon: <Settings />,
                title: "Interactive Controls",
                features: ["Filter options", "Zoom controls", "Data drilling", "Custom actions"]
              },
              {
                icon: <Share2 />,
                title: "Sharing & Export",
                features: ["Share links", "Embed codes", "PDF export", "Image downloads"]
              }
            ].map((option, index) => (
              <Card key={index} className="bg-surface-dark border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-primary mb-6">{option.icon}</div>
                  <h3 className="text-xl font-medium mb-4">{option.title}</h3>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-accent/10" />
        <div className="container relative z-10 text-center">
          <h2 className="text-6xl font-light mb-6">
            Visualize your <span className="text-primary">data story</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Transform complex data into compelling visual narratives that drive action and insights
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black font-medium text-lg px-8 py-4">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black font-medium text-lg px-8 py-4">
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}