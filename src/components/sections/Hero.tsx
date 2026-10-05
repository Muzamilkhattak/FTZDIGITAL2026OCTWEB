import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const slides = [
  {
    id: 0,
    label: "DIGITAL MARKETING AGENCY · ISLAMABAD",
    headline: ["Transform, Strategize, Create"],
    sub: "We craft data-driven digital marketing campaigns that grow your audience, elevate your brand, and deliver measurable results across every platform.",
    photo: "/ftzdigital experts.webp",
  },
  {
    id: 1,
    label: "META ADS · GOOGLE ADS · PPC",
    headline: ["Drive real results", "with performance", "advertising."],
    sub: "Our certified ad specialists build and scale Meta and Google campaigns that generate quality leads and maximise your return on ad spend.",
    photo: "/ftzdigital charming faces.webp",
  },
  {
    id: 2,
    label: "WEB DESIGN · BRANDING · SEO",
    headline: ["Build a brand", "that people", "remember."],
    sub: "From stunning websites to powerful brand identities, we design digital experiences that captivate your audience and convert visitors into customers.",
    photo: "emaninoffice.webp",
  },
  {
    id: 3,
    label: "CONTENT · SOCIAL MEDIA · VIDEO",
    headline: ["Content that", "engages, converts,", "and grows."],
    sub: "We create scroll-stopping content - reels, graphics, blogs, and campaigns - that build loyal communities and turn followers into paying customers.",
    photo: "emanworkingonsales.webp",
  },
];

const INTERVAL = 5500;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = slides[current];

  const textVar = {
    enter: (d: number) => ({ opacity: 0, y: d > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    exit: (d: number) => ({ opacity: 0, y: d > 0 ? -30 : 30, transition: { duration: 0.35 } }),
  };

  const photoVar = {
    enter: { opacity: 0, x: 60, scale: 0.97 },
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } },
    exit: { opacity: 0, x: -40, scale: 0.97, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="relative overflow-hidden bg-[#0d1117] text-white"
      style={{ minHeight: "92vh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-testid="section-hero"
    >
      {/* Photo — right half */}
      <div className="absolute inset-y-0 right-0 w-[55%] lg:w-[50%] z-0 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={`photo-${current}`}
            src={slide.photo}
            alt={`FTZ Digital - ${slide.label}`}
            custom={direction}
            variants={photoVar}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full object-cover object-center"
            draggable={false}
            fetchpriority={current === 0 ? "high" : "auto"}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0d1117] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[92vh] py-20">
        <div className="max-w-xl lg:max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.p key={`label-${current}`} custom={direction} variants={textVar} initial="enter" animate="center" exit="exit"
              className="text-blue-500 font-semibold text-xs tracking-[0.25em] uppercase mb-6"
              data-testid="hero-label">
              {slide.label}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={`head-${current}`}>
              {slide.headline.map((line, i) => (
                <motion.h1 key={i} custom={direction} variants={textVar} initial="enter" animate="center" exit="exit"
                  transition={{ delay: i * 0.07 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                  {line}
                </motion.h1>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div key={`div-${current}`} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }} style={{ originX: 0 }}
            className="h-[2px] w-16 bg-blue-500 my-7" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.p key={`sub-${current}`} custom={direction} variants={textVar} initial="enter" animate="center" exit="exit"
              transition={{ delay: 0.15 }}
              className="text-slate-300 text-base leading-relaxed max-w-md mb-10">
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={`cta-${current}`} custom={direction} variants={textVar} initial="enter" animate="center" exit="exit"
              transition={{ delay: 0.2 }}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 rounded-md transition-colors text-sm group"
                  data-testid="button-hero-cta">
                  Get a Free Quote
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold px-7 py-4 rounded-md transition-colors text-sm"
                  data-testid="button-hero-secondary">
                  See Our Work
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 left-4 sm:left-8 flex items-center gap-3" data-testid="hero-dots">
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} data-testid={`hero-dot-${i}`}
              className={`h-[3px] rounded-full transition-all duration-300 ${i === current ? "w-8 bg-blue-500" : "w-4 bg-white/30 hover:bg-white/60"}`} />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div key={`prog-${current}`} className="absolute bottom-0 left-0 h-[3px] bg-blue-500 z-30"
          initial={{ width: "0%" }} animate={{ width: "100%" }}
          transition={{ duration: INTERVAL / 1000, ease: "linear" }} />
      )}
    </section>
  );
}
