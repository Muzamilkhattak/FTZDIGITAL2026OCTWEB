import { Navbar } from "../components/sections/Navbar";
import { Hero } from "../components/sections/Hero";
import { StatsBar } from "../components/sections/StatsBar";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Portfolio } from "../components/sections/Portfolio";
import { CEOMessage } from "../components/sections/CEOMessage";
import { Team } from "../components/sections/Team";
import { Industries } from "../components/sections/Industries";
import { FAQ } from "../components/sections/FAQ";
import { Testimonials } from "../components/sections/Testimonials";
import { Process } from "../components/sections/Process";
import { Blog } from "../components/sections/Blog";
import { CTA } from "../components/sections/CTA";
import { Footer } from "../components/sections/Footer";
import { ParallaxVideo } from "../components/sections/ParallaxVideo";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <About />
        <Industries />
        <Services />
        <Testimonials />
        <Process />
        <Portfolio />
        <CEOMessage />
        <Team />
        <ParallaxVideo />
        
       <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
