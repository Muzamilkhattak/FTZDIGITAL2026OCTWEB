import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { allServices } from "@/data/servicesData";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0b1120] text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(99,149,255,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Blue glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-bold text-xs tracking-[0.28em] uppercase mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Services That <span className="text-blue-400">Deliver Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed mb-10"
          >
            From social media to paid ads, web design to SEO - FTZ Digital provides everything your brand needs to dominate online.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:bg-white hover:text-slate-900 text-white font-semibold px-7 py-3.5 rounded-full transition-all group text-sm"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-24 bg-[#0b1120] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {allServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.07, duration: 0.45 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex flex-col bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/50 hover:bg-white/[0.07] rounded-2xl overflow-hidden transition-all duration-300 group h-full"
                    data-testid={`service-card-${i}`}
                  >
                    {/* Top accent bar */}
                    <div
                      className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: service.accent }}
                    />

                    <div className="p-7 flex flex-col flex-1">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                        style={{ backgroundColor: service.accent + "22" }}
                      >
                        <Icon className="w-7 h-7" style={{ color: service.accent }} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-white font-extrabold text-lg mb-2 group-hover:text-blue-300 transition-colors leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                        {service.tagline}
                      </p>

                      {/* Feature bullets — first 3 */}
                      <ul className="space-y-1.5 mb-6">
                        {service.features.slice(0, 3).map((f) => (
                          <li key={f.title} className="flex items-center gap-2 text-xs text-slate-400">
                            <div
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: service.accent }}
                            />
                            {f.title}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div
                        className="inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5 mt-auto"
                        style={{ color: service.accent }}
                      >
                        Explore Service
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why FTZ Digital ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-blue-600 font-bold text-xs tracking-[0.25em] uppercase mb-4">Why Choose Us</p>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                One Agency. Every Service.{" "}
                <span className="text-blue-600">Total Results.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Rather than juggling multiple agencies, FTZ Digital gives you a single integrated team that handles everything - strategy, creative, media buying, and reporting - ensuring every channel works together seamlessly.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated account manager for every client",
                  "Monthly performance reports with full transparency",
                  "Certified Meta & Google Ads specialists",
                  "Flexible packages for all business sizes",
                  "Islamabad-based team with local market expertise",
                ].map((p, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/eman and marukh discussing on project of ftzdigital.webp"
                alt="FTZ Digital at work"
                className="rounded-2xl shadow-xl w-full object-cover h-[420px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0b1120] text-white text-center mt-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-4">
            Let&apos;s grow your business together
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free strategy call and let&apos;s map out your digital marketing plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full text-sm transition-colors group"
          >
            Book a Meeting 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
