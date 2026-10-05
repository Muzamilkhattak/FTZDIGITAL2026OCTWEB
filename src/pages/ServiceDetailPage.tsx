import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getServiceBySlug, allServices } from "@/data/servicesData";

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const service = getServiceBySlug(params.slug ?? "");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-4">
          <h1 className="text-4xl font-bold text-slate-900">Service Not Found</h1>
          <p className="text-slate-500">This service page doesn't exist.</p>
          <Link href="/services" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            View All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  // Sibling services (exclude current)
  const siblings = allServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1117] text-white overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        {/* Hero image right half */}
        <div className="absolute inset-y-0 right-0 w-[45%] overflow-hidden z-0 hidden lg:block">
          <img src={service.heroImg} alt={service.title}
            className="w-full h-full object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-slate-400 mb-10">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-300">{service.title}</span>
          </motion.div>

          <div className="max-w-2xl">
            {/* Icon */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
              style={{ backgroundColor: service.accent }}>
              <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: service.accent }}>
              FTZ Digital · Service
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {service.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
              className="text-xl text-slate-300 italic mb-4 leading-relaxed">
              "{service.tagline}"
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-slate-400 text-base leading-relaxed mb-10 max-w-xl">
              {service.heroDesc}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-md transition-colors"
                style={{ backgroundColor: service.accent }}
                data-testid="button-hero-cta">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-4 rounded-md transition-colors"
                data-testid="button-back-services">
                <ArrowLeft className="w-4 h-4" /> All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: service.accent }}>
                Overview
              </p>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                What is <span style={{ color: service.accent }}>{service.title}?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">{service.overview}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700"
                    data-testid={`benefit-${i}`}>
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.accent }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: service.accent }}>
              What's Included
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Get With <span style={{ color: service.accent }}>This Service</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              A comprehensive set of deliverables designed to drive real, measurable results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08, duration: 0.45 }}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                data-testid={`feature-card-${i}`}>
                {/* Accent number */}
                <div className="text-xs font-black tracking-widest mb-4 opacity-30"
                  style={{ color: service.accent }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                {/* Bottom accent bar on hover */}
                <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: service.accent }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 bg-[#0d1117] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: service.accent }}>
              How It Works
            </p>
            <h2 className="text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A clear, structured approach that delivers consistent results - every time.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-white/10" />

            {service.process.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
                data-testid={`process-step-${i}`}>
                {/* Circle */}
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-5 font-extrabold text-2xl z-10 border-2 border-white/10 text-white"
                  style={{ backgroundColor: service.accent }}>
                  {step.num}
                </div>
                <h3 className="text-base font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="py-20 border-b border-slate-100" style={{ backgroundColor: service.accent }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-2">By The Numbers</p>
            <h2 className="text-3xl font-bold text-white">Results We Deliver</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {service.results.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center text-white"
                data-testid={`result-${i}`}>
                <div className="text-5xl font-extrabold mb-2">{r.value}</div>
                <div className="text-white/70 text-sm font-medium">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: service.accent }}>FAQ</p>
            <h2 className="text-4xl font-bold text-slate-900">Common Questions About <br />{service.title}</h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="border border-slate-100 rounded-xl overflow-hidden shadow-sm"
                data-testid={`faq-item-${i}`}>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                    : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: service.accent }}>
              <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Ready to Get Started with <span style={{ color: service.accent }}>{service.title}?</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Book a free consultation with our team. We'll discuss your goals, answer your questions, and put together a personalised plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: service.accent }}
                data-testid="button-cta-final">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold px-8 py-4 rounded-md transition-colors">
                <ArrowLeft className="w-4 h-4" /> All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Explore Other Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {siblings.map((s, i) => {
              const SIcon = s.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={`/services/${s.slug}`}
                    className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
                    data-testid={`related-service-${i}`}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: s.accent }}>
                      <SIcon className="w-6 h-6 text-white" strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{s.title}</div>
                      <div className="text-slate-400 text-xs mt-0.5 line-clamp-1">{s.tagline}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 ml-auto flex-shrink-0 transition-colors" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
