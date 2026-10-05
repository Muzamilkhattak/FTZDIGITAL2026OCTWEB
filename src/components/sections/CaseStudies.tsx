import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, TrendingUp } from "lucide-react";
import { allCaseStudies } from "@/data/caseStudiesData";

export function CaseStudies() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      className="py-24 bg-slate-50 overflow-hidden"
      data-testid="section-case-studies"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="text-blue-600 font-bold text-xs tracking-[0.25em] uppercase mb-3">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Case <span className="text-blue-600">Studies</span>
            </h2>
            <p className="mt-4 text-slate-500 text-base max-w-xl leading-relaxed">
              Real strategies. Real numbers. See how we've transformed brands across Pakistan and the Gulf.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold px-6 py-3 rounded-md transition-all group text-sm"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCaseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group"
              data-testid={`case-study-card-${cs.slug}`}
            >
              <Link href={`/case-studies/${cs.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={cs.cardImg}
                      alt={cs.client}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
                    />
                    {/* Colour overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-400"
                      style={{ backgroundColor: cs.color }}
                    />
                    {/* Industry badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                        style={{ backgroundColor: cs.color }}
                      >
                        {cs.industry}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {cs.client}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">
                      {cs.tagline}
                    </p>

                    {/* Top 2 metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {cs.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100"
                        >
                          <div
                            className="text-2xl font-extrabold"
                            style={{ color: cs.color }}
                          >
                            {m.value}
                          </div>
                          <div className="text-slate-500 text-[11px] font-semibold mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Services tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cs.services.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full uppercase tracking-wide"
                        >
                          {s}
                        </span>
                      ))}
                      {cs.services.length > 3 && (
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full uppercase tracking-wide">
                          +{cs.services.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Read more */}
                    <div
                      className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all"
                      style={{ color: cs.color }}
                    >
                      <TrendingUp className="w-4 h-4" />
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                    style={{ backgroundColor: cs.color }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
