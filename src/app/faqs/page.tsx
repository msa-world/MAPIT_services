"use client";


import React, { useState, useEffect, useRef } from 'react';
import { Search, Plus, Minus, Mail, MessageCircle, Calendar, BookOpen, Video, FileText, ArrowUp, Copy, Check, Globe, Map, Satellite, Layers, Database } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}


const faqData: FAQ[] = [
  // General GIS
  {
    id: "what-is-gis",
    question: "What is GIS?",
    answer: "GIS (Geographic Information System) is a framework for gathering, managing, and analyzing spatial and geographic data. It combines cartography, statistical analysis, and database technology to visualize and interpret data to understand spatial patterns and relationships.",
    category: "general"
  },
  {
    id: "what-is-remote-sensing",
    question: "What is Remote Sensing?",
    answer: "Remote sensing is the process of acquiring information about the Earth's surface without direct contact, typically using satellites or aircraft to collect imagery and data for analysis.",
    category: "general"
  },
  {
    id: "what-is-web-gis",
    question: "What is Web GIS?",
    answer: "Web GIS refers to the use of web technologies to deliver GIS capabilities and data through browsers and web applications, enabling users to access, analyze, and share spatial information online.",
    category: "general"
  },
  {
    id: "difference-gis-remote-sensing",
    question: "What is the difference between GIS and Remote Sensing?",
    answer: "GIS is used for managing, analyzing, and visualizing spatial data, while remote sensing is a method of collecting spatial data using sensors. Remote sensing data is often used as an input for GIS analysis.",
    category: "general"
  },

  // What We Offer
  {
    id: "gis-services",
    question: "What GIS services do you offer?",
    answer: "We offer end-to-end GIS solutions including spatial data collection, mapping, spatial analysis, geodatabase design, and web GIS application development for a variety of industries.",
    category: "services"
  },
  {
    id: "remote-sensing-services",
    question: "What remote sensing solutions are available?",
    answer: "Our remote sensing services include satellite and drone imagery acquisition, image classification, change detection, land use/land cover mapping, and environmental monitoring.",
    category: "services"
  },
  {
    id: "web-gis-development",
    question: "Do you develop custom Web GIS applications?",
    answer: "Yes, we build interactive and scalable Web GIS applications tailored to your business needs, enabling real-time data visualization, analysis, and sharing over the web.",
    category: "services"
  },
  {
    id: "industry-solutions",
    question: "Which industries do you provide GIS solutions for?",
    answer: "We serve urban planning, agriculture, utilities, transportation, environmental management, disaster response, and more with specialized GIS and remote sensing solutions.",
    category: "services"
  },

  // Solutions
  {
    id: "data-processing",
    question: "Do you offer geospatial data processing and analysis?",
    answer: "Yes, we process and analyze spatial data, including raster and vector data, to extract actionable insights for decision-making and reporting.",
    category: "solutions"
  },
  {
    id: "integration",
    question: "Can you integrate GIS with other business systems?",
    answer: "We integrate GIS with ERP, CRM, asset management, and IoT platforms to enhance business intelligence and operational workflows.",
    category: "solutions"
  },
  {
    id: "cloud-gis",
    question: "Do you provide cloud-based GIS solutions?",
    answer: "Yes, we deploy and manage cloud GIS platforms for scalable, secure, and collaborative geospatial data management and analysis.",
    category: "solutions"
  },

  // Support
  {
    id: "training-support",
    question: "What training and support are available?",
    answer: "We provide training, documentation, webinars, and technical support to help you maximize the value of your GIS and remote sensing investments.",
    category: "support"
  },
  {
    id: "custom-solutions",
    question: "Can you build custom GIS solutions?",
    answer: "Absolutely. We develop tailored GIS, remote sensing, and Web GIS solutions to meet your unique requirements, including custom web apps, data processing, and integration services.",
    category: "support"
  },
  {
    id: "demo-contact",
    question: "How can I request a demo or contact your team?",
    answer: "You can request a personalized demo or contact our GIS experts through our website's contact form, email, or live chat. We're here to help you find the right solution.",
    category: "support"
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'general', label: 'General GIS' },
  { id: 'services', label: 'Our Services' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'support', label: 'Support' }
];

export default function FAQPage() {
  // Header (Navigation) and Footer are already imported above and used in the layout.
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqData);
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const heroRef = useRef<HTMLElement>(null);
  const categoriesRef = useRef<HTMLElement>(null);
  const faqsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const resourcesRef = useRef<HTMLElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [heroRef.current, categoriesRef.current, faqsRef.current, contactRef.current, resourcesRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter FAQs
  useEffect(() => {
    setSearchLoading(true);
    const timer = setTimeout(() => {
      let filtered = faqData;

      if (selectedCategory !== 'all') {
        filtered = filtered.filter(faq => faq.category === selectedCategory);
      }

      if (searchQuery) {
        filtered = filtered.filter(faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredFAQs(filtered);
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className={`relative py-24 px-4 overflow-hidden transition-all duration-1000 ${
          visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 hover:bg-primary/20 transition-colors"
            aria-label="Contact Us - Help Center"
          >
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium underline">Help Center</span>
          </a>
          
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Find answers to common questions about GIS, Remote Sensing, and Web GIS solutions, our services, technology, and more.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 bg-gray-900/50 border-gray-700 rounded-full text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        ref={categoriesRef}
        id="categories"
        className={`py-12 px-4 transition-all duration-1000 delay-200 ${
          visibleSections.has('categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-black shadow-lg shadow-primary/25'
                    : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section
        ref={faqsRef}
        id="faqs"
        className={`py-12 px-4 transition-all duration-1000 delay-400 ${
          visibleSections.has('faqs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {isLoading || searchLoading ? (
            <div className="space-y-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <Skeleton className="h-6 w-3/4 mb-4 bg-gray-700" />
                  <Skeleton className="h-4 w-full mb-2 bg-gray-700" />
                  <Skeleton className="h-4 w-2/3 bg-gray-700" />
                </div>
              ))}
            </div>
          ) : filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter, or contact our GIS experts for assistance.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(faq.question, faq.id);
                        }}
                        className="p-2 text-gray-400 hover:text-primary"
                      >
                        {copiedId === faq.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                      {expandedItems.has(faq.id) ? (
                        <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                  
                  {expandedItems.has(faq.id) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-800 pt-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className={`py-24 px-4 transition-all duration-1000 delay-600 ${
          visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Still have{' '}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              questions?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Our GIS and Remote Sensing experts are here to help you get the most out of your geospatial projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-400 mb-4">Get detailed answers about GIS, Remote Sensing, and Web GIS via email</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                Contact GIS Support
              </Button>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-400 mb-4">Chat with our geospatial team in real-time</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                Start GIS Chat
              </Button>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Schedule Demo</h3>
              <p className="text-gray-400 mb-4">Book a personalized demo of our GIS and Web GIS solutions</p>
              <Button className="bg-primary text-black hover:bg-primary/90">
                Book GIS Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        ref={resourcesRef}
        id="resources"
        className={`py-24 px-4 transition-all duration-1000 delay-800 ${
          visibleSections.has('resources') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Additional{' '}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Explore more ways to get help and learn about GIS, Remote Sensing, and Web GIS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer">
              <Video className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">GIS Video Tutorials</h3>
              <p className="text-gray-400 text-sm">Step-by-step video guides for GIS and Remote Sensing</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer">
              <FileText className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-400 text-sm">Comprehensive guides and docs for GIS and Web GIS</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer">
              <MessageCircle className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">Connect with other GIS and Remote Sensing professionals</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer">
              <BookOpen className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold text-white mb-2">Knowledge Base</h3>
              <p className="text-gray-400 text-sm">Searchable help articles on GIS, Remote Sensing, and Web GIS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-black hover:bg-primary/90 rounded-full p-3 shadow-lg z-50"
          size="sm"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      <style jsx global>{`
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
      `}</style>
      </div>
      <Footer />
    </>
  );
}