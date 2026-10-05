import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { allCaseStudies } from "@/data/caseStudiesData";

const DIRECTION = { NEXT: 1, PREV: -1 };

export default function CaseStudiesPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const dragStartX = useRef(0);

  const cs = allCaseStudies[index];

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + allCaseStudies.length) % allCaseStudies.length);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Navbar />

      {/* ── Hero slider — full dark section ── */}
      <section
        className="relative overflow-hidden bg-[#0b1120] py-20 md:py-28"
        data-testid="section-case-studies-hero"
        onPointerDown={(e) => { dragStartX.current = e.clientX; }}
        onPointerUp={(e) => {
          const dx = e.clientX - dragStartX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
      >
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(99,149,255,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top label */}
          <div className="flex justify-center mb-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs tracking-[0.3em] uppercase hover:text-blue-300 transition-colors"
            >
              CASE STUDIES <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold text-white text-center mb-14 leading-tight"
          >
            Our latest <span className="text-blue-400">Case</span> Studies
          </motion.h1>

          {/* Slider */}
          <div className="relative flex items-center gap-6 lg:gap-10">
            {/* Prev arrow */}
            <button
              onClick={() => go(DIRECTION.PREV)}
              className="flex-shrink-0 w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-blue-600 hover:border-blue-600 text-white flex items-center justify-center transition-all z-20"
              aria-label="Previous case study"
              data-testid="cs-prev"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Slide */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={cs.slug}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: "easeInOut" }}
                  className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl min-h-[420px]"
                  data-testid={`cs-slide-${cs.slug}`}
                >
                  {/* Left — white info card */}
                  <div className="bg-white p-8 md:p-10 flex flex-col justify-between">
                    {/* Industry badge */}
                    <div>
                      <span
                        className="inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm mb-5"
                        style={{ backgroundColor: cs.color + "18", color: cs.color }}
                      >
                        {cs.industry}
                      </span>

                      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                        {cs.client}
                      </h2>

                      <p className="text-slate-500 text-sm leading-relaxed mb-7 max-w-sm">
                        {cs.challenge.slice(0, 180)}{cs.challenge.length > 180 ? "…" : ""}
                      </p>

                      {/* Industry + Country row */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6 text-sm">
                        <div>
                          <span className="text-slate-400 font-medium">Industry: </span>
                          <span className="text-slate-700 font-semibold">{cs.industry}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-medium">Country: </span>
                          <span className="text-slate-700 font-semibold">Pakistan</span>
                        </div>
                      </div>

                      {/* Services as colored pills */}
                      <div className="mb-7">
                        <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                          Core Services:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cs.services.slice(0, 4).map((s) => (
                            <span
                              key={s}
                              className="text-[11px] font-bold px-3 py-1 rounded-sm uppercase tracking-wide"
                              style={{ backgroundColor: cs.color + "15", color: cs.color }}
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics row */}
                    <div className="flex gap-5 mb-8">
                      {cs.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-extrabold" style={{ color: cs.color }}>
                            {m.value}
                          </div>
                          <div className="text-slate-500 text-[11px] font-semibold">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-lg transition-all w-fit group"
                      style={{ backgroundColor: cs.color }}
                      data-testid={`cs-read-${cs.slug}`}
                    >
                      READ CASE
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </Link>
                  </div>

                  {/* Right — image */}
                  <div
                    className="relative overflow-hidden min-h-[300px] lg:min-h-0"
                    style={{
                      background: `linear-gradient(135deg, ${cs.color}cc, ${cs.color}44)`,
                    }}
                  >
                    <img
                      src={cs.heroImg}
                      alt={cs.client}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Subtle inner vignette */}
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next arrow */}
            <button
              onClick={() => go(DIRECTION.NEXT)}
              className="flex-shrink-0 w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-blue-600 hover:border-blue-600 text-white flex items-center justify-center transition-all z-20"
              aria-label="Next case study"
              data-testid="cs-next"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-10" data-testid="cs-dots">
            {allCaseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-blue-400 w-8" : "bg-white/25 w-1.5 hover:bg-white/50"
                }`}
                aria-label={`Case study ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Full grid ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-bold text-xs tracking-[0.25em] uppercase mb-3">All Projects</p>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Every Story, <span className="text-blue-600">Every Result</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCaseStudies.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group"
              >
                <Link href={`/case-studies/${item.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-350 cursor-pointer h-full flex flex-col">
                    {/* Top accent */}
                    <div className="h-1 w-full" style={{ backgroundColor: item.color }} />

                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.cardImg}
                        alt={item.client}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                        style={{ backgroundColor: item.color }}
                      />
                      <span
                        className="absolute top-3 right-3 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wide"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.industry.split(" ")[0]}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-extrabold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                        {item.client}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                        {item.tagline}
                      </p>

                      <div className="flex gap-4 mb-4">
                        {item.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <div className="font-extrabold text-xl" style={{ color: item.color }}>{m.value}</div>
                            <div className="text-[10px] text-slate-400 font-semibold">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      <div
                        className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all"
                        style={{ color: item.color }}
                      >
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
