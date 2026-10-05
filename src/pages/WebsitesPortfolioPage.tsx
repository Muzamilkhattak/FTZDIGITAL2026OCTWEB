import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const projects = [

  {
    name: "OsloEliteHotel",
    category: "Hotel & Hospitality",
    url: "https://osloelitehotel.com/",
    img: "/osloelitehotel.webp",
    tags: ["Web Design", "Development"],
  },

  {
    name: "Atlas Dental",
    category: "Healthcare & Clinic",
    url: "https://www.atlasdental.pk/",
    img: "/project-atlasdental.png",
    tags: ["Web Design", "Development"],
  },
  {
    name: "City Furniture Dubai",
    category: "Curtains and Furniture",
    url: "https://cityfurniture.ae/",
    img: "/project-cityfurniture.webp",
    tags: ["Web Design", "E-commerce"],
  },
  {
    name: "United AA Brothers",
    category: "Logistics & Manufacturing",
    url: "http://unitedaabrothers.com/",
    img: "/project-unitedaa.webp",
    tags: ["Web Design", "Development"],
  },

  {
    name: "Mashaal news Website",
    category: "News Channel",
    url: "https://mashaal.digital/",
    img: "/mashalalwebsite.webp",
    tags: ["Web Design", "Development"],
  },

  {
    name: "EDAC",
    category: "Elysium dental and Aesthetic clinic",
    url: "https://edac.com.pk/",
    img: "/edac web.webp",
    tags: ["Web Design", "dental clinic"],
  },
  {
    name: "DrAsmaJaved",
    category: "Skin Rejuv Aesthetic clinic",
    url: " http://drasmajaved.com/",
    img: "/drasmawebsite.webp",
    tags: ["Web Design", "dental clinic"],
  },
  {
    name: "Health Point Pakistan",
    category: "Healthcare",
    url: "https://healthpointpakistan.com/",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900",
    tags: ["Web Design", "Development"],
  },
  {
    name: "Topline Estate",
    category: "Real Estate",
    url: "https://toplineestate.com/",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=900",
    tags: ["Web Design", "Development"],
  },

  {
    name: "Manage Plus Solutions",
    category: "Business Management",
    url: "http://manageplussolutions.com/",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
    tags: ["Web Design", "Development"],
  },
  {
    name: "Chest Surgi Care clinic",
    category: "chest specialist clinic",
    url: " https://chestsurgicare.com/",
    img: "/chestsurgicarewebsite.webp",
    tags: ["Web Design", "Development"],
  },
  {
    name: "Asset Plus",
    category: "Real Estate Investment",
    url: "https://assetplus.com.pk/",
    img: "/project-assetplus.png",
    tags: ["Web Design", "Development"],
  },
  {
    name: "Lema Con Arc",
    category: "Architecture & Construction",
    url: "http://lemaconarc.com/",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=900",
    tags: ["Web Design", "Branding"],
  },
];

const CARD_W = 400;
const CARD_GAP = 24;
const SCROLL_STEP = CARD_W + CARD_GAP;

export default function WebsitesPortfolioPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Auto-scroll ── */
  const startAuto = useCallback(() => {
    autoRef.current = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
      }
    }, 3200);
  }, []);

  const stopAuto = useCallback(() => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
  }, []);

  useEffect(() => {
    if (paused || dragging) { stopAuto(); return; }
    startAuto();
    return stopAuto;
  }, [paused, dragging, startAuto, stopAuto]);

  /* ── Arrow navigation ── */
  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * SCROLL_STEP, behavior: "smooth" });
  };

  /* ── Mouse drag ── */
  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = trackRef.current?.scrollLeft ?? 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX.current;
    if (trackRef.current) trackRef.current.scrollLeft = scrollStartX.current - dx;
  };

  const onPointerUp = () => setDragging(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1117] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-semibold text-xs tracking-[0.25em] uppercase mb-4">
            Our Websites Portfolio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Websites We've <span className="text-blue-400">Built</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed">
            Real projects. Real clients. Every site is designed to convert, perform, and make a lasting first impression.
          </motion.p>
        </div>
      </section>

      {/* ── Portfolio Slider ── */}
      <section
        className="py-24 bg-[#0d1117] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with arrows */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                Our <span className="text-blue-400">Website Projects</span>
              </h2>
              <p className="text-slate-400 text-base max-w-xl">
                Browse through our collection of custom-built websites across various industries.
              </p>
            </div>

            {/* Arrow controls */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => scrollBy(-1)}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600 hover:border-blue-600 text-white flex items-center justify-center transition-all"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600 hover:border-blue-600 text-white flex items-center justify-center transition-all"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider track — full-bleed */}
        <div
          ref={trackRef}
          className={`flex gap-6 overflow-x-auto px-4 sm:px-8 lg:px-12 pb-4 scrollbar-hide select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.06, 0.4), duration: 0.5 }}
              className="flex-none group"
              style={{ width: CARD_W, scrollSnapAlign: "start" }}
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-white/5 hover:border-blue-500/50 transition-all duration-400 shadow-xl hover:shadow-blue-900/30 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                  {/* Tags on image */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-blue-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-white font-extrabold text-xl mb-4 group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>

                  {/* Visit Website button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    Visit Website
                  </a>
                </div>

                {/* Hover accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </div>
            </motion.div>
          ))}

          {/* Trailing spacer */}
          <div className="flex-none w-4" aria-hidden="true" />
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Project ${i + 1}`}
              onClick={() => {
                trackRef.current?.scrollTo({ left: i * SCROLL_STEP, behavior: "smooth" });
              }}
              className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-blue-500 transition-colors"
            />
          ))}
        </div>

        {/* Hide scrollbar via global style injection */}
        <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}`}</style>
      </section>

      <Footer />
    </div>
  );
}
