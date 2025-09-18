"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

const categories = [
  {
    name: "Web GIS Projects",
    projects: [
      { title: "California Glamping Zone", image: "/workfull images for web/California glamping Zone.jpg", description: "Interactive web GIS for glamping sites in California." },
      { title: "Covid Dashboard", image: "/workfull images for web/Dashboard For COVID-19.jpg", description: "COVID-19 data visualization and mapping." },
      { title: "Income Based Web Map USA", image: "/workfull images for web/Income based web map, USA.jpg", description: "Income distribution mapping across the USA." },
      { title: "Heat Map for HPI UK", image: "/workfull images for web/Heat map for HPI UK.jpg", description: "Housing Price Index heat map for the UK." },
      { title: "Covid Map 1", image: "/workfull images for web/Covid Map 1.png", description: "COVID-19 mapping and analysis." },
      { title: "Covid Map 2", image: "/workfull images for web/Covid map 2.png", description: "COVID-19 mapping and analysis." },
      { title: "Web map for Arizona and California", image: "/workfull images for web/Web map for Arizona and California.jpg", description: "Web GIS for Arizona and California." },
      { title: "Web map for Surrey County Motorway Route", image: "/workfull images for web/Web map for Surrey County Motorway Route.jpg", description: "Motorway route mapping for Surrey County." },
      { title: "Interactive Map For European Railway", image: "/workfull images for web/Interactive Map For European Railway.PNG", description: "European railway interactive mapping." },
      { title: "Mapping Brand Dealer and population Distribution in Georgia", image: "/workfull images for web/Mapping Brand Dealer and population Distribution in Georgia .jpg", description: "Brand dealer and population distribution mapping in Georgia." },
      { title: "Mapping Brand Distribution and Population Density", image: "/workfull images for web/Mapping Brand Distribution and Population Density.jpg", description: "Brand distribution and population density mapping." },
      { title: "Mapping Police Department Locations and Officer Names in California State", image: "/workfull images for web/Mapping Police Department Locations and Officer Names in California State.jpg", description: "Police department locations and officer names mapping in California." },
      { title: "Population density map of KPK", image: "/workfull images for web/Population density map of KPK.jpg", description: "Population density mapping for KPK." },
      { title: "Voter Density Map", image: "/workfull images for web/Voter Density Map.jpg", description: "Voter density mapping." },
      { title: "Voter Density Tehsil Jhang", image: "/workfull images for web/Voter Density Tehsil Jhang.jpg", description: "Voter density mapping for Tehsil Jhang." },
      { title: "VOTERS DENSITY MAP", image: "/workfull images for web/VOTERS DENSITY MAP.jpg", description: "Voters density mapping." },
      { title: "Voters Local Heat Map", image: "/workfull images for web/Voters Local Heat Map.jpg", description: "Local heat map for voters." },
      { title: "Web map sample", image: "/workfull images for web/web map sample.JPG", description: "Sample web map project." },
      { title: "web map", image: "/workfull images for web/web map.JPG", description: "Web map project." },
      { title: "Website for Music Concert", image: "/workfull images for web/Website for Music Concert.jpg", description: "Music concert mapping website." },
      { title: "Tourism Attraction Places Route Map", image: "/workfull images for web/Tourism Attraction Places Route Map.jpg", description: "Tourism attraction route mapping." },
      { title: "Road & Street map for Darwin", image: "/workfull images for web/Road & Street map for Darwin.jpg", description: "Road and street mapping for Darwin." },
      { title: "Surrey Motorway", image: "/workfull images for web/Surrey Motorway.jpg", description: "Surrey motorway mapping." },
      { title: "USA Temp Map", image: "/workfull images for web/USA Temp Map.jpg", description: "Temperature mapping for USA." },
      { title: "UK temp Map", image: "/workfull images for web/UK temp Map.jpg", description: "Temperature mapping for UK." },
      { title: "Wind Speed map", image: "/workfull images for web/Wind Speed map.jpg", description: "Wind speed mapping." },
      { title: "Zonal Map for Sussex County, USA", image: "/workfull images for web/Zonal Map for Sussex County, USA.jpg", description: "Zonal mapping for Sussex County, USA." },
      { title: "Zonal Map", image: "/workfull images for web/Zonal Map.jpg", description: "Zonal mapping project." },
    ],
  },
  {
    name: "Cadastral Projects",
    projects: [
      { title: "Digitization ", image: "/workfull images for web/Digitization 4.JPG", description: "Cadastral digitization for land records." },
      { title: "Digitization ", image: "/workfull images for web/Digitization 5.JPG", description: "Advanced cadastral mapping and digitization." },
      { title: "County Map for England", image: "/workfull images for web/County Map for England.jpg", description: "County-level cadastral mapping for England." },
      { title: "Cad 1", image: "/workfull images for web/Cad 1.JPG", description: "Cadastral mapping project 1." },
      { title: "Cad 2", image: "/workfull images for web/Cad 2.JPG", description: "Cadastral mapping project 2." },
      { title: "Capture", image: "/workfull images for web/Capture.JPG", description: "Cadastral data capture project." },
      { title: "classification", image: "/workfull images for web/classification.jpeg", description: "Land classification mapping." },
      { title: "Land Cover changes Map", image: "/workfull images for web/Land Cover changes Map.jpg", description: "Land cover change mapping." },
      { title: "LULC Map", image: "/workfull images for web/LULC Map.jpg", description: "Land use/land cover mapping." },
      { title: "Mapping Administrative Boundaries, Infrastructure, and Land Use", image: "/workfull images for web/Mapping Administrative Boundaries, Infrastructure, and Land Use.jpg", description: "Administrative boundaries and infrastructure mapping." },
      { title: "building Locations", image: "/workfull images for web/building Locations.PNG", description: "Building locations mapping." },
      { title: "label", image: "/workfull images for web/label.PNG", description: "Label mapping project." },
      { title: "Points", image: "/workfull images for web/Points.PNG", description: "Points mapping project." },
      { title: "ISLAMABAD HQ AND PROVINCIAL OFFICES", image: "/workfull images for web/ISLAMABAD HQ AND PROVINCIAL OFFICES.jpg", description: "Islamabad HQ and provincial offices mapping." },
      { title: "Reverse Geocoding_1", image: "/workfull images for web/Reverse Geocoding_1.jpg", description: "Reverse geocoding mapping." },
      { title: "Geocoding and mapping", image: "/workfull images for web/Geocoding and mapping.jpg", description: "Geocoding and mapping project." },
    ],
  },
  {
    name: "General Maps",
    projects: [
      { title: "Australia Heat Map", image: "/workfull images for web/Australia Heat map.jpg", description: "General heat map visualization for Australia." },
      { title: "Contour Map ISB", image: "/workfull images for web/Contour map ISB.jpg", description: "General contour mapping for Islamabad region." },
      { title: "Average Rainfall Italy", image: "/workfull images for web/Average annually rainfall map Italy.jpg", description: "General annual rainfall mapping for Italy." },
      { title: "Cluster Web Maps", image: "/workfull images for web/Cluster web Maps.JPG", description: "General cluster analysis for web-based maps." },
      { title: "Swat Watershed Map", image: "/workfull images for web/Swat water shed.jpeg", description: "General watershed mapping for Swat region." },
      { title: "Temperature Distribution Map", image: "/workfull images for web/Temperature Distribution Map.jpg", description: "General temperature distribution mapping." },
      { title: "Temperature Map", image: "/workfull images for web/Temperature Map.jpg", description: "General temperature mapping project." },
      { title: "Temperature Map (jpeg)", image: "/workfull images for web/Temperature Map.jpeg", description: "General temperature mapping (jpeg)." },
      { title: "Kurdistan History Map", image: "/workfull images for web/Recreation of history map of Kurdistan.jpg", description: "General historical map recreation for Kurdistan." },
      { title: "Arkansas Tornado Trend Analysis", image: "/workfull images for web/ARKANSAS Tornado Trend Analysis 1950-2020.png", description: "General trend analysis for tornadoes in Arkansas." },
      { title: "Arkansas Trend 1950-2020", image: "/workfull images for web/ARKANSAS_Trend_1950-2020.jpg", description: "General trend analysis for Arkansas tornadoes (1950-2020)." },
      { title: "Arizona Backpacking Map", image: "/workfull images for web/arizona-backpacking.jpg", description: "General backpacking mapping for Arizona." },
      { title: "Bubble Chart Map", image: "/workfull images for web/bubble Chart.jpg", description: "General bubble chart mapping project." },
      { title: "Portfolio Map 1", image: "/workfull images for web/portfolio-1.jpg", description: "General portfolio map project 1." },
      { title: "Portfolio Map 3", image: "/workfull images for web/portfolio-3.jpg", description: "General portfolio map project 3." },
      { title: "Portfolio Map 11", image: "/workfull images for web/portfolio-11.jpg", description: "General portfolio map project 11." },
      { title: "USA Tornado Trend Analysis 1950-2020", image: "/workfull images for web/USA Tornado Trend Analysis 1950-2020.png", description: "General USA tornado trend analysis (1950-2020)." },
    ],
  },
];

const HeroSection = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      paraRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );
  }, []);
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-black/90 to-primary/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/bg-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black/80 to-primary/10" />
      </div>
      <div className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center">
        <h1 ref={headingRef} className="text-5xl md:text-7xl font-extrabold text-primary drop-shadow-xl mb-4">All Projects</h1>
        <p ref={paraRef} className="max-w-2xl text-xl md:text-2xl text-muted-foreground mb-8">Explore our portfolio of GIS, cadastral, and digitizing projects worldwide. Discover how our solutions empower organizations with spatial intelligence, advanced mapping, and data-driven decision making.</p>
        <Button asChild className="bg-primary text-black px-8 py-3 text-lg font-semibold rounded-full shadow-xl hover:bg-primary/90 transition-all">
          <Link href="/contact">Start Your Project</Link>
        </Button>
      </div>
    </section>
  );
};

const FullscreenIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label="View Fullscreen"
    className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 rounded-full p-2 z-20 transition-colors"
    style={{ lineHeight: 0 }}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  </button>
);

const ProjectCard = ({ project, onFullscreen }: { project: any, onFullscreen: () => void }) => (
  <section className="bg-surface-dark rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-primary/40 animate-fade-in flex flex-col border border-primary/20 mb-8 relative">
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-56 object-cover object-center border-b-2 border-primary" />
      <FullscreenIcon onClick={onFullscreen} />
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <h3 className="text-2xl font-bold text-primary mb-3 animate-slide-up">{project.title}</h3>
      <p className="text-base text-muted-foreground mb-3 animate-fade-in">{project.description}</p>
      <p className="text-xs text-muted-foreground mt-2 animate-fade-in">This project demonstrates our expertise in spatial analysis, data visualization, and innovative mapping solutions tailored for client needs.</p>
    </div>
  </section>
);

const CategorySection = ({ category }: { category: any }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState(false);
  const [fullscreenProject, setFullscreenProject] = useState<null | any>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (projectsGridRef.current) {
      gsap.fromTo(
        projectsGridRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [visibleCount]);
  // Scroll to the last loaded project card
  const scrollToLastLoaded = () => {
    if (projectsGridRef.current) {
      const children = projectsGridRef.current.children;
      if (children.length > 0) {
        children[children.length - 1].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };
  // Scroll to the first project card
  const scrollToFirst = () => {
    if (projectsGridRef.current) {
      const children = projectsGridRef.current.children;
      if (children.length > 0) {
        children[0].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };
  const showMore = () => {
    setVisibleCount((c) => {
      const newCount = Math.min(c + 3, category.projects.length);
      setTimeout(scrollToLastLoaded, 400); // Wait for animation
      return newCount;
    });
    setExpanded(true);
  };
  const hideMore = () => {
    if (projectsGridRef.current) {
      gsap.to(projectsGridRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => {
          setVisibleCount(3);
          setExpanded(false);
          setTimeout(scrollToFirst, 100); // Scroll after hiding
        },
      });
    } else {
      setVisibleCount(3);
      setExpanded(false);
      setTimeout(scrollToFirst, 100);
    }
  };

  // Modal for fullscreen map
  const closeModal = () => setFullscreenProject(null);

  return (
    <section ref={sectionRef} className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 animate-fade-in text-center">{category.name}</h2>
      <div ref={projectsGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {category.projects.slice(0, visibleCount).map((project: any, idx: number) => (
          <ProjectCard key={idx} project={project} onFullscreen={() => setFullscreenProject(project)} />
        ))}
      </div>
      <div className="flex justify-center mt-10 gap-4">
        {visibleCount < category.projects.length && (
          <Button onClick={showMore} className="bg-primary text-black px-7 py-2 font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all">Load More</Button>
        )}
        {expanded && visibleCount > 3 && (
          <Button onClick={hideMore} className="bg-muted text-primary px-7 py-2 font-semibold rounded-full shadow-lg hover:bg-muted/80 transition-all">Hide</Button>
        )}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative bg-surface-dark rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 animate-fade-in flex flex-col items-center">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 z-20"
              aria-label="Close Fullscreen"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <img src={fullscreenProject.image} alt={fullscreenProject.title} className="w-full max-h-96 object-contain rounded-xl mb-6 border border-primary" />
            <h3 className="text-3xl font-bold text-primary mb-3 text-center">{fullscreenProject.title}</h3>
            <p className="text-base text-muted-foreground mb-3 text-center">{fullscreenProject.description}</p>
            <p className="text-xs text-muted-foreground text-center">This project demonstrates our expertise in spatial analysis, data visualization, and innovative mapping solutions tailored for client needs.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default function AllProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-black/95 via-surface-dark/90 to-black/95 pb-16">
        <HeroSection />
        <div className="container mx-auto px-4 pt-12">
          {categories.map((cat, idx) => (
            <CategorySection key={cat.name} category={cat} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
