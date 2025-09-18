"use client"

import Navigation from "@/components/sections/navigation"
import Footer from "@/components/sections/footer"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Satellite, 
  Layers, 
  Camera, 
  Drone, 
  MapPin, 
  BarChart3, 
  Box, 
  Shield,
  Zap,
  Database,
  Cpu,
  Network,
  FileImage,
  FileType,
  Download,
  Upload,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  Activity,
  Target,
  Workflow
} from "lucide-react"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const ProcessingCounter = ({ endValue, suffix = "", duration = 2 }: { endValue: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isInView])

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOutCubic * endValue)
      
      setCount(currentCount)
      
      if (progress >= 1) {
        clearInterval(timer)
        setCount(endValue)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, endValue, duration])

  return (
    <span ref={ref} className="font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const AnimatedProgress = ({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) => {
  const [progress, setProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isInView])

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= value) {
            clearInterval(interval)
            return value
          }
          return prev + 2
        })
      }, 50)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [isInView, value, delay])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white">{label}</span>
        <span className="text-primary">{progress}%</span>
      </div>
      <Progress value={progress} className="h-2 bg-gray-800" />
    </div>
  )
}

const ProcessingVisualization = () => {
  const [currentStep, setCurrentStep] = useState(0)
  
  const steps = [
    { name: "Data Ingestion", color: "#00D4AA" },
    { name: "Preprocessing", color: "#00E5FF" },
    { name: "Analysis", color: "#00FF88" },
    { name: "Quality Check", color: "#FFD700" },
    { name: "Output Generation", color: "#FF6B6B" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-50" />
      
      <div className="relative z-10 flex items-center justify-between h-full">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <motion.div
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                currentStep === index 
                  ? 'bg-current border-current shadow-lg shadow-current/50' 
                  : 'border-gray-600'
              }`}
              style={{ color: currentStep === index ? step.color : '#666' }}
              animate={{
                scale: currentStep === index ? 1.2 : 1,
                boxShadow: currentStep === index ? `0 0 20px ${step.color}50` : 'none'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-3 h-3 rounded-full bg-current" />
            </motion.div>
            <span className={`text-xs text-center ${currentStep === index ? 'text-white' : 'text-gray-500'}`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
      
      <svg className="absolute inset-0 w-full h-full">
        {steps.slice(0, -1).map((_, index) => (
          <motion.line
            key={index}
            x1={`${(index + 1) * 20}%`}
            y1="50%"
            x2={`${(index + 2) * 20}%`}
            y2="50%"
            stroke={currentStep > index ? steps[index + 1].color : '#333'}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: currentStep > index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </svg>
    </div>
  )
}

const DataFlowAnimation = () => {
  const [particles, setParticles] = useState(Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 4 + 2
  })))

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.vx + 100) % 100,
        y: (particle.y + particle.vy + 100) % 100
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default function DataProcessingPage() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const [activeProject, setActiveProject] = useState(0)
  const [workflowStep, setWorkflowStep] = useState(0)

  const services = [
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Satellite Imagery Processing",
      description: "Advanced processing of multi-spectral and hyperspectral satellite data with atmospheric correction and geometric rectification."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "LiDAR Data Processing",
      description: "Point cloud processing, classification, and digital elevation model generation from airborne and terrestrial LiDAR systems."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Aerial Photography",
      description: "Photogrammetric processing of aerial imagery for orthophoto creation and 3D reconstruction workflows."
    },
    {
      icon: <Drone className="w-8 h-8" />,
      title: "Drone Data Processing",
      description: "UAV imagery and sensor data processing including structure from motion and real-time mapping solutions."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Vector Data Creation",
      description: "Feature extraction and vector digitization from raster sources with topology validation and quality control."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Raster Analysis",
      description: "Advanced spatial analysis including change detection, classification, and environmental monitoring workflows."
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "3D Modeling",
      description: "Digital surface model creation, 3D city modeling, and volumetric analysis from various data sources."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Comprehensive QA/QC protocols with automated validation and accuracy assessment methodologies."
    }
  ]

  const technologies = [
    { name: "ERDAS IMAGINE", category: "Image Processing" },
    { name: "ArcGIS Pro", category: "GIS Analysis" },
    { name: "ENVI", category: "Remote Sensing" },
    { name: "Global Mapper", category: "Data Processing" },
    { name: "TerraSolid", category: "LiDAR Processing" },
    { name: "Pix4D", category: "Photogrammetry" },
    { name: "QGIS", category: "Open Source GIS" },
    { name: "FME", category: "Data Integration" }
  ]

  const workflowSteps = [
    {
      title: "Data Acquisition",
      description: "Secure data ingestion from multiple sources including satellites, sensors, and field collection systems.",
      icon: <Download className="w-6 h-6" />
    },
    {
      title: "Preprocessing",
      description: "Radiometric correction, geometric rectification, and atmospheric compensation for optimal data quality.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Analysis & Processing",
      description: "Advanced algorithms for feature extraction, classification, and spatial analysis operations.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Quality Control",
      description: "Automated validation processes and accuracy assessment using statistical quality metrics.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Visualization",
      description: "Interactive mapping interfaces and 3D visualization for comprehensive data exploration.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Delivery",
      description: "Secure data delivery in multiple formats with comprehensive metadata and documentation.",
      icon: <Upload className="w-6 h-6" />
    }
  ]

  const dataFormats = {
    input: [
      { name: "GeoTIFF", icon: <FileImage className="w-5 h-5" /> },
      { name: "LAS/LAZ", icon: <FileType className="w-5 h-5" /> },
      { name: "Shapefile", icon: <MapPin className="w-5 h-5" /> },
      { name: "KML/KMZ", icon: <Globe className="w-5 h-5" /> },
      { name: "NetCDF", icon: <Database className="w-5 h-5" /> },
      { name: "HDF5", icon: <Layers className="w-5 h-5" /> }
    ],
    output: [
      { name: "Orthophoto", icon: <Camera className="w-5 h-5" /> },
      { name: "DSM/DTM", icon: <BarChart3 className="w-5 h-5" /> },
      { name: "Point Cloud", icon: <Box className="w-5 h-5" /> },
      { name: "Vector Data", icon: <Network className="w-5 h-5" /> },
      { name: "3D Models", icon: <Box className="w-5 h-5" /> },
      { name: "Analytics", icon: <Activity className="w-5 h-5" /> }
    ]
  }

  const projects = [
    {
      title: "Urban Change Detection",
      description: "Multi-temporal satellite imagery analysis for urban growth monitoring and land use classification.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/urban-planning-web-gis-portal-displaying-d7630898-20250830043526.jpg",
      metrics: { accuracy: 94, area: "2,500 km²", timespan: "10 years" }
    },
    {
      title: "Forest Carbon Assessment",
      description: "LiDAR-based biomass estimation and carbon stock analysis for environmental monitoring programs.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/environmental-monitoring-web-gis-platfor-9f39bc8a-20250830043517.jpg",
      metrics: { accuracy: 97, area: "15,000 ha", resolution: "1m" }
    },
    {
      title: "Infrastructure Mapping",
      description: "High-resolution aerial survey for transportation corridor mapping and asset management systems.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/advanced-spatial-analysis-visualization--b5017810-20250830043612.jpg",
      metrics: { accuracy: 99, length: "500 km", precision: "5cm" }
    },
    {
      title: "Flood Risk Modeling",
      description: "Digital elevation model creation and hydrological analysis for flood risk assessment and management.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd/generated_images/advanced-satellite-data-processing-facil-9bee3c50-20250830043458.jpg",
      metrics: { accuracy: 96, area: "8,000 km²", resolution: "0.5m" }
    }
  ]

  const statistics = [
    { label: "Data Processed", value: 50, suffix: "TB+" },
    { label: "Projects Completed", value: 1200, suffix: "+" },
    { label: "Accuracy Rate", value: 99.2, suffix: "%" },
    { label: "Processing Speed", value: 85, suffix: "% Faster" }
  ]

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % projects.length)
    }, 4000)

    const workflowInterval = setInterval(() => {
      setWorkflowStep(prev => (prev + 1) % workflowSteps.length)
    }, 2000)

    return () => {
      clearInterval(projectInterval)
      clearInterval(workflowInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          <DataFlowAnimation />
        </motion.div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <Badge variant="outline" className="border-primary/50 text-primary px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Advanced Processing Solutions
            </Badge>
            
            <h1 className="text-7xl md:text-8xl font-light leading-tight">
              Advanced Data{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Processing
              </span>{" "}
              Solutions
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform raw spatial data into actionable insights with our cutting-edge processing capabilities. 
              From satellite imagery to LiDAR point clouds, we deliver precision and speed at scale.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg">
                <a href="/contact">
                  Start Processing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-600 hover:border-primary px-8 py-6 text-lg">
                <a href="/portfolio/all-projects">View Capabilities</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Processing Success Stories (moved up) */}
      <section className="py-24 bg-gray-950/50">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-4">
              <Target className="w-4 h-4 mr-2" />
              Featured Work
            </Badge>
            <h2 className="text-5xl font-light mb-6">
              Processing <span className="text-primary">Success Stories</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl font-semibold mb-4 text-primary">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    {projects[activeProject].description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(projects[activeProject].metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-gray-900/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeProject === index ? 'bg-primary' : 'bg-gray-600'
                    }`}
                    onClick={() => setActiveProject(index)}
                    title={`Show project: ${projects[index].title}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-xl overflow-hidden"
                >
                  <Image
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>






      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <DataFlowAnimation />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Ready to Process
            </Badge>
            <h2 className="text-6xl font-light mb-6">
              Transform Your Data Into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Intelligence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Partner with our expert team to unlock the full potential of your spatial data. 
              From acquisition to delivery, we ensure precision at every step.
            </p>
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg">
                <a href="/contact">
                  Contact Our Experts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}