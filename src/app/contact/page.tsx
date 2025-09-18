"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, XCircle, Loader2, MessageSquare, Users, Headphones, ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { toast } from 'sonner';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  serviceInterest: string;
  projectDescription: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  phone?: string;
  serviceInterest?: string;
  projectDescription?: string;
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: '',
    projectDescription: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      // Form fields stagger animation
      gsap.fromTo('.form-field',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
          ease: 'power3.out'
        }
      );

      // Company info animation
      gsap.fromTo('.company-info',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      );

      // ScrollTriggered animations
      gsap.fromTo('.locations-grid',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: locationsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.support-card',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: supportRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.faq-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: faqRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service interest';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');

        // Reset form after success
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            company: '',
            phone: '',
            serviceInterest: '',
            projectDescription: ''
          });
          setIsSubmitted(false);
        }, 3000);
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="hero-title mb-4">
                  <h1 className="text-4xl lg:text-5xl font-semibold leading-tight font-sans tracking-tight">
                    Get in <span className="text-primary">Touch</span>
                  </h1>
                </div>
                <div className="hero-subtitle mb-10">
                  <p className="text-lg lg:text-xl text-muted-foreground max-w-lg font-sans">
                    Ready to transform your spatial data capabilities? Let's discuss your GIS and remote sensing needs.
                  </p>
                </div>

                <Card className="backdrop-blur-md bg-surface-dark/80 border-border/50 rounded-xl shadow-lg max-w-xl mx-auto font-sans">
                  <CardContent className="p-6 md:p-8">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                      >
                        <CheckCircle2 className="w-16 h-16 text-success-green mx-auto mb-4" />
                        <h3 className="text-2xl font-medium mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 font-sans">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="form-field">
                            <label className="block text-base font-semibold mb-2 tracking-tight">Full Name *</label>
                            <Input
                              value={formData.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              className={`bg-surface-medium/50 border-border/50 focus:border-primary text-base py-2 ${errors.fullName ? 'border-destructive' : ''}`}
                              placeholder="Enter your full name"
                            />
                            {errors.fullName && (
                              <p className="text-destructive text-xs mt-1 font-medium">{errors.fullName}</p>
                            )}
                          </div>
                          <div className="form-field">
                            <label className="block text-base font-semibold mb-2 tracking-tight">Email Address *</label>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className={`bg-surface-medium/50 border-border/50 focus:border-primary text-base py-2 ${errors.email ? 'border-destructive' : ''}`}
                              placeholder="your.email@company.com"
                            />
                            {errors.email && (
                              <p className="text-destructive text-xs mt-1 font-medium">{errors.email}</p>
                            )}
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="form-field">
                            <label className="block text-base font-semibold mb-2 tracking-tight">Company *</label>
                            <Input
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              className={`bg-surface-medium/50 border-border/50 focus:border-primary text-base py-2 ${errors.company ? 'border-destructive' : ''}`}
                              placeholder="Your company name"
                            />
                            {errors.company && (
                              <p className="text-destructive text-xs mt-1 font-medium">{errors.company}</p>
                            )}
                          </div>
                          <div className="form-field">
                            <label className="block text-base font-semibold mb-2 tracking-tight">Phone Number *</label>
                            <Input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className={`bg-surface-medium/50 border-border/50 focus:border-primary text-base py-2 ${errors.phone ? 'border-destructive' : ''}`}
                              placeholder="+1 (555) 123-4567"
                            />
                            {errors.phone && (
                              <p className="text-destructive text-xs mt-1 font-medium">{errors.phone}</p>
                            )}
                          </div>
                        </div>
                        <div className="form-field">
                          <label className="block text-base font-semibold mb-2 tracking-tight">Service Interest *</label>
                          <Select
                            value={formData.serviceInterest}
                            onValueChange={(value) => handleInputChange('serviceInterest', value)}
                          >
                            <SelectTrigger className={`bg-surface-medium/50 border-border/50 focus:border-primary text-base py-2 ${errors.serviceInterest ? 'border-destructive' : ''}`}>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gis-consulting">GIS Consulting</SelectItem>
                              <SelectItem value="remote-sensing">Remote Sensing Services</SelectItem>
                              <SelectItem value="spatial-analysis">Spatial Analysis</SelectItem>
                              <SelectItem value="custom-development">Custom Development</SelectItem>
                              <SelectItem value="data-processing">Data Processing</SelectItem>
                              <SelectItem value="training">Training & Support</SelectItem>
                              <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.serviceInterest && (
                            <p className="text-destructive text-xs mt-1 font-medium">{errors.serviceInterest}</p>
                          )}
                        </div>
                        <div className="form-field">
                          <label className="block text-base font-semibold mb-2 tracking-tight">Project Description *</label>
                          <Textarea
                            value={formData.projectDescription}
                            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                            className={`bg-surface-medium/50 border-border/50 focus:border-primary min-h-28 text-base py-2 ${errors.projectDescription ? 'border-destructive' : ''}`}
                            placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                          />
                          {errors.projectDescription && (
                            <p className="text-destructive text-xs mt-1 font-medium">{errors.projectDescription}</p>
                          )}
                        </div>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary hover:bg-primary/90 text-black font-semibold text-base py-2.5 h-auto transition-all duration-300 hover:scale-[1.02] font-sans"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Company Information */}
              <div className="order-1 lg:order-2 company-info">
                <div className="backdrop-blur-md bg-surface-dark/60 rounded-xl shadow-lg p-6 md:p-8 border border-border/50 max-w-md mx-auto font-sans">
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-5 tracking-tight">
                    Contact <span className="text-primary">Information</span>
                  </h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mapitt.services@gmail.com&su=Inquiry about GIS Services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors duration-200"
                        title="Send us an email via Gmail"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                      </a>
                      <div>
                        <h3 className="font-semibold mb-1 text-base">Email Us</h3>
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=mapitt.services@gmail.com&su=Inquiry about GIS Services"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 block"
                        >
                          mapitt.services@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <a
                        href="tel:+923160575593"
                        className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors duration-200"
                        title="Call us"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                      </a>
                      <div>
                        <h3 className="font-semibold mb-1 text-base">Call Us</h3>
                        <a
                          href="tel:+923160575593"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 block"
                        >
                          +923160575593
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-base">Business Hours</h3>
                        <p className="text-muted-foreground text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground text-sm">24/7 Available</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 pt-7 border-t border-border/50">
                    <h3 className="font-semibold mb-3 text-base">Quick Response Promise</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-3 bg-surface-medium/30 rounded-lg">
                        <div className="text-xl font-bold text-primary mb-1">2hrs</div>
                        <div className="text-xs text-muted-foreground">Technical Support</div>
                      </div>
                      <div className="text-center p-3 bg-surface-medium/30 rounded-lg">
                        <div className="text-xl font-bold text-primary mb-1">24hrs</div>
                        <div className="text-xs text-muted-foreground">Sales Inquiries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Glow effect container */}
        <div className="relative">
          {/* Animated glow ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse-slow" />
          
          {/* Sparkle effects */}
          <div className="absolute -inset-2 animate-spin-slow">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-transparent via-green-400/10 to-transparent rotate-180" />
          </div>
          
          <a
            href={`https://wa.me/923160575593?text=${encodeURIComponent(
              "Hello! 👋 I'm interested in learning more about your GIS consulting services. Can you please provide more information about your services and pricing?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with us on WhatsApp"
            aria-label="Open WhatsApp chat"
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 group overflow-hidden"
          >
            {/* Inner sparkle effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
            
            {/* WhatsApp Icon */}
            <div className="relative z-10">
              <WhatsAppIcon className="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-200" />
            </div>
            
            {/* Hover ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}