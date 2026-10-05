import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function CEOMessage() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8%" });
  const imgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      data-testid="section-ceo-message"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1a46db 1px,transparent 1px),linear-gradient(90deg,#1a46db 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 items-center rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          {/* ── Photo side ── */}
          <div className="relative h-[520px] lg:h-[680px] overflow-hidden bg-[#0d1117]">
            <motion.div
              ref={imgRef}
              style={{ y: imgY }}
              className="absolute inset-[-8%]"
            >
              <img
                src="/ftz-ceo.webp"
                alt="Umair — CEO, FTZ Digital"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Gradient overlay — right edge to blend into content */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0d1117]/70 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent lg:hidden" />

            {/* Name badge on image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="absolute bottom-6 left-6 right-6 lg:right-auto"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 inline-block">
                <p className="text-white font-extrabold text-lg leading-tight">
                  Umair Rajput
                </p>
                <p className="text-blue-300 text-sm font-semibold">
                  Chief Executive Officer · FTZ Digital
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Message side ── */}
          <div className="bg-[#0d1117] px-10 py-14 lg:py-16 flex flex-col justify-center relative">
            {/* Giant decorative quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="absolute top-8 right-10 opacity-10"
            >
              <Quote className="w-20 h-20 text-blue-400" strokeWidth={1} />
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-blue-400 font-bold text-xs tracking-[0.28em] uppercase mb-5"
            >
              A Message From Our CEO
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8"
            >
              We Don't Just Market Brands - We Build Legacies.
            </motion.h2>

            {/* Quote body */}
            <div className="space-y-5 mb-10">
              {[
                "When I founded FTZ Digital, my vision was simple: give every business in Pakistan access to the same calibre of digital marketing that global brands enjoy. Strategy-first, creativity-driven, and always accountable to results.",

                "Digital marketing isn't just what we do. It's who we are. And we won't stop until your brand is impossible to ignore.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="text-slate-300 text-base leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Signature divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.65 }}
              style={{ originX: 0 }}
              className="h-px w-24 bg-blue-500 mb-7"
            />

            {/* Signature & role */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.72 }}
              className="mb-8"
            >
              <p className="text-white font-extrabold text-xl">Umair Rajput</p>
              <p className="text-blue-400 text-sm font-semibold">
                Chief Executive Officer, FTZ Digital
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-md transition-colors text-sm group"
                data-testid="button-ceo-cta"
              >
                Let's Build Your Brand
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
