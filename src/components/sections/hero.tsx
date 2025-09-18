"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<any>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  const ctaRef = useRef(null);

  // Scroll to next section
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text for headline
      const splitHeadline = new SplitText(titleRef.current, { type: "chars, words" });
      gsap.from(splitHeadline.chars, {
        opacity: 0,
        y: 60,
        rotateX: -90,
        stagger: 0.05,
        ease: "back.out(1.7)",
        duration: 1.2,
      });

      // Split text for description/subtext with advanced stagger
      const splitSubtitle = new SplitText(subtitleRef.current, { type: "words" });
      gsap.from(splitSubtitle.words, {
        opacity: 0,
        y: 30,
        rotationX: -45,
        stagger: 0.07,
        delay: 0.8,
        duration: 1.2,
        ease: "power3.out",
      });

      // Video fade/scale
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 1.6, ease: "power3.out" }
      );

      // CTA fade
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.8, ease: "power3.out" }
      );

      // Parallax effect for text
      gsap.to(titleRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(subtitleRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Spline scroll effect
  useEffect(() => {
    let obj: any = null;

    function handleScroll() {
      if (!heroRef.current || !obj) return;
      const section = heroRef.current as HTMLDivElement;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, 1 - rect.bottom / windowHeight));
      obj.rotation.y = progress * Math.PI * 2;
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
  className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden"
  style={{ minHeight: '100dvh' }}
      >
        {/* Background Spline */}
        <div className="fixed inset-0 z-0 w-full h-full">
          <Spline
            scene="https://prod.spline.design/miaTRxza1d7T1Ju9/scene.splinecode"
            onLoad={(spline) => {
              let obj = spline.findObjectByName("Earth");
              // Type assertion to access scene property
              const scene = (spline as any).scene;
              if (!obj && scene?.children?.length > 0) {
                obj = scene.children[0];
              }
              if (!obj) return;

              splineRef.current = spline;
              function handleScroll() {
                if (!heroRef.current || !obj) return;
                const section = heroRef.current as HTMLDivElement;
                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const progress = Math.min(
                  1,
                  Math.max(0, 1 - rect.bottom / windowHeight)
                );
                obj.rotation.y = progress * Math.PI * 2;
              }
              window.addEventListener("scroll", handleScroll, { passive: true });
              handleScroll();
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen">
          <div className="w-full max-w-5xl px-2 sm:px-4 flex flex-col items-center text-center pt-6 md:pt-10 pb-20 md:pb-28">
            <h1
              ref={titleRef}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-white-700 mb-6 mt-5 md:mt-15 tracking-tight break-words"
            >
              <span className="text-primary">MAPIT</span> – Precision Mapping, Smarter Decisions
            </h1>

            <p
              ref={subtitleRef}
              className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-200 max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed mb-6"
            >
              Empowering land management, urban planning, and infrastructure development with advanced GIS and cadastral mapping solutions — delivering clarity, accuracy, and insight for smarter choices.
            </p>

            <div ref={ctaRef} className="mb-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-base xs:text-lg px-6 xs:px-8 py-3 xs:py-4 h-auto"
              >
                <Link href="/portfolio/mapping-solutions">Explore Our Platform</Link>
              </Button>
            </div>

          </div>

          {/* Scroll down indicator */}
          <button
            onClick={handleScrollDown}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70 hover:text-primary transition"
            aria-label="Scroll to next section"
          >
            <span className="mb-1">Scroll for more</span>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>
      <section id="next-section"></section>
    </>
  );
}
