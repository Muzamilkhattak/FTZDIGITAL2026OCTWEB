import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { allServices } from "@/data/servicesData";

/* ── Single card ── */
function ServiceCard({ service, index }: { service: typeof allServices[0]; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/services/${service.slug}`} className="block h-full" data-testid={`service-link-${service.slug}`}>
        <div className="relative overflow-hidden rounded-2xl bg-[#0d1117] text-center flex flex-col items-center px-7 pt-10 pb-8 h-full group cursor-pointer select-none border border-white/5 hover:border-blue-500/50 transition-all duration-300">
          {/* ── Hover accent bar ── */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

          {/* ── Circle icon ── */}
          <div className="relative z-10 mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-600 group-hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center shadow-lg">
              <Icon className="w-9 h-9 text-white" strokeWidth={1.6} />
            </div>
          </div>

          {/* ── Title ── */}
          <h3 className="relative z-10 text-lg font-extrabold text-white transition-colors duration-300 mb-3 leading-snug group-hover:text-blue-400">
            {service.title}
          </h3>

          {/* ── Tagline ── */}
          <p className="relative z-10 text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm leading-relaxed line-clamp-3 flex-1">
            {service.tagline}
          </p>

          {/* ── Learn More pill ── */}
          <span className="relative z-10 mt-5 inline-flex items-center gap-1 text-xs font-semibold text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
            Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Main section ── */
export function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white overflow-hidden"
      data-testid="section-services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-blue-600 font-semibold text-xs tracking-[0.25em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            Everything You Need to <span className="text-blue-600">Grow Online</span>
          </h2>
          <p className="text-lg text-slate-600">
            Full-stack digital marketing paid ads, SEO, content, design and web production. All under one roof.
          </p>
        </motion.div>

        {/* Services Grid - 3 cards per row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allServices.map((service, i) => (
            <div 
              key={service.slug}
              className={allServices.length % 3 !== 0 && i === allServices.length - 1 ? "lg:col-start-2" : ""}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/services"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30 group"
            data-testid="link-view-all-services">
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
