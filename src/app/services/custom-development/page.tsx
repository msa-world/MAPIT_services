"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Monitor, 
  Cloud, 
  Layers, 
  Settings, 
  BarChart3, 
  MapPin, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Users, 
  Star,
  Terminal,
  GitBranch,
  Server
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import Image from "next/image";

const CustomDevelopmentPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [typedText, setTypedText] = useState('');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const codeSnippet = `// Web GIS Application Setup
import { Map, View } from 'ol';
import { Tile, Vector } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { GeoJSON } from 'ol/format';

const map = new Map({
  target: 'map',
  layers: [
    new Tile({ source: new OSM() }),
    new Vector({
      source: new VectorSource({
        url: '/api/geojson/data',
        format: new GeoJSON()
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});`;

  useEffect(() => {
    const text = "Custom GIS Development & Web GIS Solutions";
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const coreServices = [
    {
      icon: Globe,
      title: "Web GIS Development",
      description: "Custom web-based GIS platforms with interactive mapping, real-time data visualization, and multi-user collaboration capabilities.",
      features: ["Interactive Web Maps", "Real-time Data Streaming", "Multi-user Collaboration", "Responsive Design"]
    },
   
    {
      icon: Database,
      title: "Database Design",
      description: "Spatial database design and optimization for PostGIS, Oracle Spatial, and other spatial database systems.",
      features: ["Spatial Indexing", "Query Optimization", "Data Modeling", "Performance Tuning"]
    },
   
    {
      icon: Layers,
      title: "Dashboard Creation",
      description: "Interactive dashboards and business intelligence tools with spatial data visualization and reporting.",
      features: ["Real-time Dashboards", "Custom Charts", "KPI Monitoring", "Automated Reports"]
    },
   
  ];

  const webGISPlatforms = [
    {
      title: "Interactive Mapping Platforms",
      description: "Build comprehensive web-based mapping platforms with advanced user interaction capabilities.",
      features: ["Pan/Zoom Controls", "Layer Management", "Feature Selection", "Popup Information", "Measurement Tools"]
    },
    {
      title: "Real-time Data Visualization",
      description: "Create dynamic visualizations that update in real-time with streaming spatial data.",
      features: ["Live Data Feeds", "WebSocket Integration", "Animated Markers", "Time-series Animation", "Heat Maps"]
    },
    {
      title: "Multi-user Collaboration",
      description: "Enable collaborative mapping with shared editing, commenting, and real-time synchronization.",
      features: ["Concurrent Editing", "User Permissions", "Comment System", "Version Control", "Conflict Resolution"]
    }
  ];

  

  

  

  const portfolioProjects = [
        {
          title: "Polygon Drawing Portal",
          description: "A web portal for drawing, editing, and analyzing polygons on interactive maps. Built with Next.js, HTML, CSS, and Python for seamless geospatial workflows.",
          image: "/Screenshot 2025-09-01 182104.jpg",
          technologies: ["Next.js", "HTML", "CSS", "Python"],
          features: ["Polygon Drawing", "Shape Editing", "GeoJSON Export", "Python Backend Integration"],
          metrics: { users: "300+", polygons: "5K+", accuracy: "99%" }
        },
      {
    title: "Vector & Raster Layers Portal",
    description: "A portal for managing, visualizing, and analyzing vector and raster layers with advanced data fetching from databases. Built with React, Next.js, Supabase, and custom APIs for high-performance geospatial workflows.",
    image: "/Screenshot 2025-09-01 181828.jpg",
    technologies: ["React", "Next.js", "Supabase", "API"],
    features: ["Vector Layer Management", "Raster Layer Visualization", "Database Integration", "Advanced Data Fetching"],
    metrics: { layers: "10K+", databases: "3+", performance: "High" }
      },
   
  ];

  


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
  {/* Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/cutting-edge-web-gis-development-workspa-3bd42bde-20250830043508.jpg"
            alt="Web GIS Development Workspace"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
        </div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
          style={{ y }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-6 px-4 py-2">
                <Terminal className="w-4 h-4 mr-2" />
                Enterprise GIS Development
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-light mb-6">
                <span className="text-primary">{typedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We build cutting-edge web GIS platforms, mobile applications, and spatial analysis tools 
                that transform how organizations work with geographic data. From interactive web maps to 
                enterprise-scale geospatial solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="/contact">
                    <Play className="w-5 h-5 mr-2" />
                    Get Started
                  </a>
                </Button>
               
              </div>
            </motion.div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground ml-4">WebGIS-Platform.js</span>
              </div>
              <pre className="text-sm text-green-400 font-mono overflow-x-auto">
                <code>{codeSnippet}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Development Services */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
          >
        <Badge variant="outline" className="mb-3">
          <Code2 className="w-4 h-4 mr-2" />
          Development Services
        </Badge>
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Comprehensive <span className="text-primary">GIS Development</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          From web-based mapping platforms to enterprise desktop applications, 
          we deliver complete geospatial solutions tailored to your needs.
        </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coreServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
            className="group"
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 rounded-xl shadow-sm">
          <CardContent className="p-4 md:p-6">
            <div className="bg-primary/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
              <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
            <div className="space-y-1">
              {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs">
              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </div>
              ))}
            </div>
          </CardContent>
            </Card>
          </motion.div>
        ))}
          </div>
        </div>
      </section>

      {/* Extensive Web GIS Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Web GIS Expertise
            </Badge>
            <h2 className="text-5xl font-light mb-6">
              Advanced <span className="text-primary">Web GIS Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Specialized in building sophisticated web-based GIS platforms that deliver 
              real-time spatial data visualization, interactive mapping, and collaborative workflows.
            </p>
          </motion.div>

          {/* Web GIS Platform Development */}
          <div className="mb-20">
            <h3 className="text-3xl font-semibold mb-8 text-center">Web GIS Platform Development</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {webGISPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-card/30 rounded-xl p-6 border border-border"
                >
                  <h4 className="text-xl font-semibold mb-4 text-primary">{platform.title}</h4>
                  <p className="text-muted-foreground mb-4">{platform.description}</p>
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Zap className="w-3 h-3 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Web GIS Projects Portfolio */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              <Layers className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
            <h2 className="text-5xl font-light mb-6">
              Web GIS <span className="text-primary">Project Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our extensive portfolio of web GIS applications, from environmental 
              monitoring systems to smart city dashboards.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setActiveProject(index)}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="text-xs">
                          Web GIS
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        {project.technologies.slice(0, 2).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-background/80">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <div className="flex gap-4 text-sm">
                        {Object.entries(project.metrics).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="font-semibold text-primary">{value}</div>
                            <div className="text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
          style={{ y }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-light mb-6">
              Ready to Build Your <span className="text-primary">Web GIS Solution</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your geospatial development needs and create a custom solution 
              that transforms how your organization works with spatial data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Globe className="w-5 h-5 mr-2" />
                 <a href="/contact">
                Start Your Project
              </a>
              </Button>
             
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomDevelopmentPage;