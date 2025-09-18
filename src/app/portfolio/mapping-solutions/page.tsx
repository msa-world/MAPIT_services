"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Map, 
  Globe, 
  Building2, 
  Zap, 
  Layers, 
  Smartphone, 
  Search, 
  Filter, 
  Play, 
  Award, 
  Users, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Star,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Download,
  Mail,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: string;
  technology: string[];
  description: string;
  outcomes: string[];
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

// Add type for icon props
interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement<IconProps>; // Update icon type
  features: string[];
}

interface Technology {
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

const mappingServices: Service[] = [
  {
    id: 'topographic',
    title: 'Topographic Mapping',
    description: 'Detailed terrain and elevation mapping for engineering and construction projects.',
    icon: <Map className="w-8 h-8" />,
    features: ['Contour mapping', 'Digital elevation models', 'Terrain analysis', 'Survey-grade accuracy']
  },
  {
    id: 'cadastral',
    title: 'Cadastral Surveys',
    description: 'Property boundary mapping and land ownership documentation services.',
    icon: <Target className="w-8 h-8" />,
    features: ['Property boundaries', 'Legal descriptions', 'Subdivision planning', 'Title support']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Mapping',
    description: 'Comprehensive mapping of utilities, roads, and municipal infrastructure.',
    icon: <Building2 className="w-8 h-8" />,
    features: ['Utility mapping', 'Asset management', 'Network analysis', 'Maintenance planning']
  },
  {
    id: '3d-modeling',
    title: '3D Modeling',
    description: 'Advanced 3D visualization and modeling for complex spatial analysis.',
    icon: <Layers className="w-8 h-8" />,
    features: ['Point cloud processing', 'Mesh generation', 'Volume calculations', 'Virtual reality']
  },
  {
    id: 'web-mapping',
    title: 'Web Mapping',
    description: 'Interactive online mapping solutions and geospatial web applications.',
    icon: <Globe className="w-8 h-8" />,
    features: ['Interactive maps', 'Data visualization', 'Custom applications', 'API integration']
  },
  {
    id: 'mobile-gis',
    title: 'Mobile GIS',
    description: 'Field data collection and mobile mapping solutions for real-time operations.',
    icon: <Smartphone className="w-8 h-8" />,
    features: ['Field collection', 'Offline capabilities', 'Real-time sync', 'GPS integration']
  }
];

const featuredProjects: Project[] = [
  {
    id: 'county-map-england',
    title: 'England County Boundary Mapping',
    client: 'Local Government Agency',
    location: 'England',
    category: 'Administrative',
    technology: ['GIS', 'Vector Mapping', 'Data Visualization'],
    description: 'A comprehensive mapping project to digitize and visualize the county boundaries of England for administrative and planning purposes.',
    outcomes: ['Streamlined administrative processes', 'Improved planning accuracy', 'Enhanced public data access'],
  beforeImage: '/workfull images for web/County Map for England.jpg',
  afterImage: '/workfull images for web/County Map for England.jpg',
    featured: true
  },
  {
    id: 'hpi-uk-heatmap',
    title: 'UK Housing Price Index Heatmap',
    client: 'Financial Analytics Firm',
    location: 'United Kingdom',
    category: 'Real Estate',
    technology: ['GIS', 'Heatmap Analysis', 'Web Mapping'],
    description: 'Developed a dynamic heatmap visualization of the UK\'s Housing Price Index (HPI) to show regional value trends and identify investment opportunities.',
    outcomes: ['Clear regional value insights', 'Enhanced investment strategy', 'User-friendly interactive visualization'],
  beforeImage: '/workfull images for web/Heat map for HPI UK.jpg',
  afterImage: '/workfull images for web/Heat map for HPI UK.jpg',
    featured: true
  },
  {
    id: 'high-employment-area',
    title: 'High Employment Area Analysis',
    client: 'Economic Development Council',
    location: 'Global',
    category: 'Economic Development',
    technology: ['GIS', 'Spatial Statistics', 'Data Integration'],
    description: 'Geospatial analysis to identify and map areas with high employment rates, providing valuable insights for urban development and economic policy planning.',
    outcomes: ['Identified key growth hubs', 'Informed policy decisions', 'Supported targeted resource allocation'],
  beforeImage: '/workfull images for web/Area of High Employment.jpeg',
  afterImage: '/workfull images for web/Area of High Employment.jpeg',
    featured: true
  },
  {
    id: 'rainfall-map-italy',
    title: 'Italy Annual Rainfall Mapping',
    client: 'Agricultural & Environmental Group',
    location: 'Italy',
    category: 'Agriculture & Environment',
    technology: ['GIS', 'Choropleth Mapping', 'Environmental Data'],
    description: 'A detailed choropleth map illustrating the average annual rainfall across Italy, essential for agricultural planning and water resource management.',
    outcomes: ['Optimized irrigation schedules', 'Improved crop yield forecasting', 'Supported water conservation efforts'],
  beforeImage: '/workfull images for web/Average annually rainfall map Italy.jpg',
  afterImage: '/workfull images for web/Average annually rainfall map Italy.jpg',
    featured: true
  },
  {
    id: 'california-glamping-zone',
    title: 'California Glamping Zone Identification',
    client: 'Tourism Development Board',
    location: 'California',
    category: 'Tourism & Recreation',
    technology: ['GIS', 'Site Suitability Analysis', 'Demographic Data'],
    description: 'Mapping and analysis of potential \'glamping\' zones in California based on scenic beauty, accessibility, and local regulations.',
    outcomes: ['Identified prime development locations', 'Reduced scouting time by 50%', 'Provided data-driven business insights'],
  beforeImage: '/workfull images for web/California glamping Zone.jpg',
  afterImage: '/workfull images for web/California glamping Zone.jpg',
    featured: false
  },
  {
    id: 'california-camping-sites',
    title: 'California Camping Sites Directory',
    client: 'California Parks Association',
    location: 'California',
    category: 'Tourism & Recreation',
    technology: ['Web Mapping', 'POI Database', 'Mobile Development'],
    description: 'A comprehensive, interactive map of all registered camping sites in California, including amenities and accessibility information for tourists and residents.',
    outcomes: ['Increased user engagement', 'Simplified trip planning', 'Centralized data for public use'],
  beforeImage: '/workfull images for web/Camping Sites in California.jpg',
  afterImage: '/workfull images for web/Camping Sites in California.jpg',
    featured: false
  }
];

const technologies: Technology[] = [
  {
    name: 'LiDAR Systems',
    category: 'Data Collection',
    description: 'High-precision laser scanning for detailed terrain mapping',
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: 'Drone Technology',
    category: 'Aerial Mapping',
    description: 'Advanced UAV platforms for aerial surveying and monitoring',
    icon: <Globe className="w-6 h-6" />
  },
  {
    name: 'GIS Software',
    category: 'Analysis',
    description: 'Industry-leading GIS platforms for spatial analysis',
    icon: <Layers className="w-6 h-6" />
  },
  {
    name: 'GPS/GNSS',
    category: 'Positioning',
    description: 'Survey-grade positioning systems for accurate mapping',
    icon: <MapPin className="w-6 h-6" />
  }
];

const stats = [
  { label: 'Projects Completed', value: '50+', suffix: '' },
  { label: 'Accuracy Rate', value: '99', suffix: '%' },
  { label: 'Coverage Area', value: '100', suffix: '' },
  { label: 'Client Satisfaction', value: '99', suffix: '%' }
];

const industries = [
  {
    title: 'Urban Planning',
    description: 'Smart city development and municipal planning solutions',
    benefits: ['Efficient land use', 'Infrastructure optimization', 'Growth planning'],
    icon: <Building2 className="w-8 h-8" />
  },
  {
    title: 'Utilities',
    description: 'Infrastructure mapping and asset management for utilities',
    benefits: ['Network visibility', 'Maintenance planning', 'Service reliability'],
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: 'Environmental',
    description: 'Environmental monitoring and conservation mapping',
    benefits: ['Change detection', 'Impact assessment', 'Conservation planning'],
    icon: <Globe className="w-8 h-8" />
  },
  {
    title: 'Transportation',
    description: 'Highway and transportation infrastructure mapping',
    benefits: ['Safety optimization', 'Traffic analysis', 'Route planning'],
    icon: <Map className="w-8 h-8" />
  }
];

const processSteps = [
  {
    title: 'Data Collection',
    description: 'Advanced surveying and remote sensing data acquisition',
    icon: <Target className="w-6 h-6" />
  },
  {
    title: 'Processing',
    description: 'State-of-the-art data processing and analysis workflows',
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: 'Quality Control',
    description: 'Rigorous validation and accuracy verification procedures',
    icon: <CheckCircle className="w-6 h-6" />
  },
  {
    title: 'Delivery',
    description: 'Professional deliverables and ongoing support services',
    icon: <Award className="w-6 h-6" />
  }
];

// Define your animation variants with proper easing
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95] // Using custom cubic bezier easing
    }
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      ease: [0.6, 0.01, -0.05, 0.95]
    }
  }
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95]
    }
  }
};

export default function MappingSolutions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelector('.hero-title'), 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(heroRef.current.querySelector('.hero-subtitle'), 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      gsap.fromTo(heroRef.current.querySelectorAll('.hero-stat'), 
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, delay: 0.5, ease: 'back.out(1.7)' }
      );
    }

    // Services section animations
    if (servicesRef.current) {
      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(servicesRef.current!.querySelectorAll('.service-card'), 
            { opacity: 0, y: 30, rotationX: 15 },
            { opacity: 1, y: 0, rotationX: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
          );
        }
      });
    }

    // Projects section animations
    if (projectsRef.current) {
      ScrollTrigger.create({
        trigger: projectsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(projectsRef.current!.querySelectorAll('.project-card'), 
            { opacity: 0, scale: 0.9, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
          );
        }
      });
    }

    // Stats counter animation
    if (statsRef.current) {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          counterRefs.current.forEach((ref, index) => {
            if (ref) {
              const finalValue = parseInt(stats[index].value.replace(/[^\d]/g, ''));
              gsap.fromTo(
                { value: 0 }, // target
                { value: 0 }, // fromVars
                { 
                  value: finalValue, 
                  duration: 2, 
                  ease: 'power2.out',
                  onUpdate: function() {
                    const currentValue = Math.round(this.targets()[0].value);
                    if (stats[index].value.includes('.')) {
                      ref.textContent = (currentValue / 10).toFixed(1);
                    } else if (stats[index].value.includes('+')) {
                      ref.textContent = currentValue.toLocaleString() + '+';
                    } else {
                      ref.textContent = currentValue.toLocaleString();
                    }
                  }
                }
              );
            }
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category.toLowerCase() === selectedCategory);

  const categories = ['all', ...Array.from(new Set(featuredProjects.map(p => p.category.toLowerCase())))];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section - ensure it appears below header and is fully visible on all devices */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: 'calc(100vh - 72px)', // 72px is typical header height, adjust if needed
          marginTop: '72px', // push hero below header
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.1)_0%,transparent_70%)]" />

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="hero-title text-4xl md:text-7xl font-light mb-6">
            Professional <span className="text-primary">Mapping</span> Solutions
          </h1>
          <p className="hero-subtitle text-lg md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Advanced geospatial mapping services powered by cutting-edge technology and unmatched expertise
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="hero-stat">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                      <span ref={el => { counterRefs.current[index] = el; }}>{stat.value}</span>
                      {stat.suffix}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-4 rounded-lg">
            <a href="/solutions/data-visualization">
              Explore Our Work <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Mapping Services Showcase */}
      <section ref={servicesRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              Comprehensive Solutions
            </Badge>
            <h2 className="text-5xl font-light mb-6">
              Mapping <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From topographic surveys to advanced 3D modeling, we deliver precision mapping solutions for every project need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-2 sm:gap-y-4 sm:gap-x-4 md:gap-y-6 md:gap-x-6">
            {mappingServices.map((service, index) => (
              <Card key={service.id} className="service-card bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group p-2 md:p-3 lg:p-4 flex flex-col h-full min-h-[140px] max-w-xs mx-auto">
                <CardHeader className="p-1 pb-0">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="p-1 bg-primary/20 rounded-lg text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                      {React.isValidElement(service.icon) 
                        ? React.cloneElement(service.icon as React.ReactElement<IconProps>, {
                            className: `${service.icon.props.className || ''} w-5 h-5`.trim()
                          })
                        : service.icon}
                    </div>
                    <CardTitle className="text-xs md:text-sm font-semibold">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-1 pt-0 flex-1 flex flex-col justify-between">
                  <p className="text-gray-300 mb-2 text-[11px] md:text-xs leading-tight">{service.description}</p>
                  <ul className="space-y-0.5">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-1 text-[10px] md:text-xs">
                        <CheckCircle className="w-3 h-3 text-primary" />
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

      {/* Featured Projects Gallery */}
      <section ref={projectsRef} className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">
              Project Portfolio
            </Badge>
            <h2 className="text-5xl font-light mb-6">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our successful mapping projects across diverse industries and applications
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-accent text-black" 
                    : "border-gray-600 text-gray-300 hover:border-accent hover:text-accent"
                  }
                >
                  {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="project-card bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.afterImage} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <Badge className="absolute top-4 right-4 bg-primary/90 text-black">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{project.client}</p>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-gray-900 border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl">{selectedProject.title}</CardTitle>
              <Button 
                variant="ghost" 
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img 
                  src={selectedProject.beforeImage} 
                  alt="Before"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img 
                  src={selectedProject.afterImage} 
                  alt="After"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                  <div className="space-y-2 text-sm">
                    <div><strong>Client:</strong> {selectedProject.client}</div>
                    <div><strong>Location:</strong> {selectedProject.location}</div>
                    <div><strong>Category:</strong> {selectedProject.category}</div>
                    <div><strong>Technology:</strong> {selectedProject.technology.join(', ')}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Outcomes</h3>
                  <ul className="space-y-1">
                    {selectedProject.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}
