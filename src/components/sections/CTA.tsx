import { motion } from "framer-motion";
import { Link } from "wouter";

export function CTA() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-700 to-[#0d1117] overflow-hidden" data-testid="section-cta">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto text-white">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-4">Ready to Grow?</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something <br />Great Together
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a complete rebrand, a high-converting ad campaign, or a stunning new website - FTZ Digital has the team and expertise to make it happen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"
              className="bg-white text-blue-700 hover:bg-slate-100 font-bold px-10 py-5 rounded-md text-lg transition-colors"
              data-testid="button-cta-contact">
              Get a Free Quote
            </Link>
            <Link href="/services"
              className="border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-5 rounded-md text-base transition-colors">
              View Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
