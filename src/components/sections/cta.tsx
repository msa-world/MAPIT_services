"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

// Utility function to animate counting numbers
const NumberAnimation = ({ value }: { value: number }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: value },
    delay: 500,
    config: { duration: 1500 },
  });

  return <animated.span>{number.to(n => Math.floor(n))}</animated.span>;
};

export default function CtaSection() {
  const sectionRef = useRef(null);
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6a3aa022-36e0-487b-8b3a-6b6d8524b7cd-uplinq-com/assets/images/66e9a462b4cc0d430868853c_cta-bg-23.webp"
          alt="Background"
          className="object-cover opacity-30 w-full h-full"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 z-10" />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Text Section */}
          <div
            ref={contentRef}
            className={`mb-8 transition-all duration-1000 ease-out ${
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-tight text-white mb-6">
              Transform your GIS <span className="text-primary font-medium">workflows</span>
            </h3>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of accurate cadastral data and efficient digitization. Join organizations worldwide who trust our platform for modern land administration and web GIS access.
            </p>
          </div>

          {/* Animated Buttons */}
          <div
            ref={buttonRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out delay-300 ${
              buttonInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a href="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-lg px-8 py-4 h-auto min-w-[200px] font-medium">
              Get Started Today
            </a>
            
            <a href="/portfolio/mapping-solutions" className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 rounded-lg text-lg px-8 py-4 h-auto min-w-[200px] font-medium">
              Explore Solutions
            </a>
          </div>

          {/* Animated Stats Section */}
          <div
            ref={statsRef}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {statsInView && <NumberAnimation value={50} />}
                +
              </div>
              <div className="text-gray-300">All Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {statsInView && <NumberAnimation value={99.8} />}
                %
              </div>
              <div className="text-gray-300">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {statsInView && "24/7"}
              </div>
              <div className="text-gray-300">Web GIS Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}