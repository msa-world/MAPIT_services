import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import { ServicesShowcase } from "@/components/sections/services-showcase";
// import GISPerformance from "@/components/sections/ai-performance";
//import SatelliteDataAccess from "@/components/sections/global-data-access";
import PreciseSpatialAnalysis from "@/components/sections/accurate-bookkeeping";
//import RealtimeMonitoring from "@/components/sections/realtime-insights";
//import GeospatialIntelligence from "@/components/sections/ai-personalization";
import GISOperations from "@/components/sections/accounting-operations";
import { PortfolioShowcase } from "@/components/sections/portfolio-showcase";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main>
        <HeroSection />


        <PortfolioShowcase />
        
        {/* Interactive Map Feature Section with Parallax, Animation, and Mockups */}
        <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-x-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left: Info Card */}
              <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <div className="bg-surface-dark border border-primary/30 rounded-xl shadow-lg p-6 flex flex-col justify-center h-full max-w-md mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                    Interactive Map
                  </h2>
                  <p className="text-base text-gray-300 mb-4">
                    Discover real-world geospatial data and insights with our live interactive map. Explore locations, analyze spatial relationships, and experience the power of modern web GIS technology.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-center text-gray-400"><span className="w-2 h-2 bg-primary rounded-full mr-3" />Real-time map interaction</li>
                    <li className="flex items-center text-gray-400"><span className="w-2 h-2 bg-primary rounded-full mr-3" />Zoom, pan, and explore features</li>
                    <li className="flex items-center text-gray-400"><span className="w-2 h-2 bg-primary rounded-full mr-3" />Custom layers and overlays</li>
                  </ul>
                  <div className="flex gap-3">
                    <a href="/Arizona%20Glamping%20%20Sites/index.html" target="_blank" rel="noopener" className="inline-block bg-primary text-black font-medium px-5 py-2 rounded-lg shadow hover:bg-primary/90 transition">Open Full Map</a>
                    <a href="/solutions/data-visualization" className="inline-block bg-gray-800 text-primary font-medium px-5 py-2 rounded-lg shadow hover:bg-gray-700 transition">Explore More</a>
                  </div>
                </div>
              </div>
              {/* Right: Map Embed with Mockup and Parallax */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                {/* Desktop: Laptop Mockup */}
                <div className="hidden md:flex w-full items-center justify-center">
                  <div className="relative w-full max-w-[700px] mx-auto z-10">
                    <img src="/mockup/mockup.png" alt="Laptop Mockup" className="w-full" />
                    <div className="absolute top-[23%] left-[12.5%] w-[75%] h-[49%] rounded-xl overflow-hidden shadow-lg z-20">
                      <iframe
                        src="/Arizona%20Glamping%20%20Sites/index.html"
                        title="Arizona Glamping Sites Map"
                        className="w-full h-full border-none"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                {/* Mobile: Mobile Mockup */}
                <div className="flex md:hidden w-full items-center justify-center">
                  <div className="relative w-full max-w-[400px] min-h-[700px] mx-auto z-10">
                    <img src="/mockup/mobile.png" alt="Mobile Mockup" className="w-[400px] h-[700px] object-contain" />
                    <div className="absolute top-[23.5%] left-[27.5%] w-[45%] h-[53%] rounded-2xl overflow-hidden shadow-lg z-20">
                      <iframe
                        src="/Arizona%20Glamping%20%20Sites/index.html"
                        title="Arizona Glamping Sites Map"
                        className="w-full h-full border-none"
                        
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesShowcase />

  {/* <GISPerformance /> */}

        <div className="space-y-0">
          {/* <SatelliteDataAccess /> */}
        {/*<PreciseSpatialAnalysis />*/}
          {/* <RealtimeMonitoring /> */}
          {/* <GeospatialIntelligence /> */}
        </div>

        {/* <GISOperations /> */}

        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}