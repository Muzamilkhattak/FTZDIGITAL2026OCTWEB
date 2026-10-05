import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart, Users, Award, Globe, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy we build is tied to measurable KPIs. No vanity metrics - only growth that matters to your bottom line." },
  { icon: Eye, title: "Full Transparency", desc: "You'll always know exactly where your budget is going and what results it's generating with detailed monthly reports." },
  { icon: Heart, title: "Client-First", desc: "We treat every client like a long-term partner. Your success is our success - we're invested in your growth." },
  { icon: TrendingUp, title: "Data-Led Creativity", desc: "We combine creative excellence with data intelligence to produce campaigns that are both beautiful and effective." },
];

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "200+", label: "Campaigns Launched" },
  { icon: Globe, value: "5+", label: "Years in Business" },
  { icon: TrendingUp, value: "4.9★", label: "Average Client Rating" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1117] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-semibold text-xs tracking-[0.25em] uppercase mb-4">
            About FTZ Digital
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            We're a Digital Agency <span className="text-blue-400">Built for Growth</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed">
            FTZ Digital is Islamabad's full-service digital marketing agency - transforming brands through strategy, creativity, and data-driven campaigns.
          </motion.p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              <div className="inline-block bg-blue-50 text-blue-600 font-semibold px-4 py-2 rounded-lg text-sm">Our Story</div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                From a Small Studio to <span className="text-blue-600">Islamabad's Leading Digital Agency</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                FTZ Digital bridges the gap between local enterprise and global digital excellence. As a comprehensive, full-service agency, we are the trusted growth partner for over 50 brands navigating the digital landscape across Pakistan and beyond.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, our team of strategists, designers, content creators, and performance marketers works together under one roof  - delivering integrated campaigns that generate real, measurable results for brands of all sizes.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md transition-colors text-sm">
                  Work With Us
                </Link>
                <Link href="/services"
                  className="border border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-md transition-colors text-sm">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative">
                <img src="/ftzdigital office.webp"
                  alt="FTZ Digital office" 
                  className="w-full h-80 object-cover object-center shadow-lg" 
                  style={{
                    borderRadius: '2rem 2rem 2rem 8rem'
                  }} />
              </div>
              <img src="emanftzdigital.webp"
                alt="Team collaboration" className="rounded-2xl w-full shadow-lg" />
              <img src="emaninoffice.webp"
                alt="Strategy session" className="rounded-2xl w-full shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-center text-white">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <div className="text-4xl font-extrabold mb-1">{s.value}</div>
                  <div className="text-blue-100 text-sm font-medium">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission & Vision</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Guided by strong values and a clear purpose.</p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower Pakistani businesses with world-class digital marketing that drives sustainable growth, builds memorable brands, and creates real competitive advantage in an increasingly digital world.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-blue-600 rounded-2xl p-8 shadow-sm text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To be the most trusted digital growth partner for businesses in Pakistan - known for transparency, creativity, and results that consistently exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Stand For</h2>
            <p className="text-slate-500 max-w-xl mx-auto">The principles that guide every campaign, every creative, every conversation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team Image ── */}
      <section className="bg-[#0d1117] py-10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full">
          <img
            src="/ftz-team.png"
            alt="FTZ Digital Team"
            className="w-full h-auto block"
            style={{ display: "block" }}
          />
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to work with us?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">Let's discuss your goals and build a digital strategy that delivers real results.</p>
          <Link href="/contact"
            className="bg-white text-blue-700 hover:bg-slate-100 font-bold px-10 py-4 rounded-md text-lg transition-colors inline-block">
            Get a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
