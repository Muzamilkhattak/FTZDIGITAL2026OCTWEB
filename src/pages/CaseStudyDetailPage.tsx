import { useRoute, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, ExternalLink, CheckCircle2, Quote } from "lucide-react";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { allCaseStudies } from "@/data/caseStudiesData";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function CaseStudyDetailPage() {
  const [, params] = useRoute("/case-studies/:slug");
  const cs = allCaseStudies.find((c) => c.slug === params?.slug);

  const resultsRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const isResultsInView = useInView(resultsRef, { once: true, margin: "-10%" });
  const isApproachInView = useInView(approachRef, { once: true, margin: "-10%" });

  // Load Elfsight script for Dr. Asma case study
  useEffect(() => {
    if (cs?.slug === "dr-asma-javed") {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [cs?.slug]);

  // Load Instagram embed script for Chaayé Khana case study
  useEffect(() => {
    if (cs?.slug === "chaye-khana-park-road") {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [cs?.slug]);

  // Load TikTok embed script for Nabhia's Salon case study
  useEffect(() => {
    if (cs?.slug === "nabhias-salon") {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [cs?.slug]);

  // Load TikTok embed script for Nabhia's Salon case study
  useEffect(() => {
    if (cs?.slug === "nabhias-salon") {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [cs?.slug]);

  if (!cs) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
            <Link href="/case-studies" className="text-blue-600 hover:underline font-semibold">
              ← Back to Case Studies
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-32 pb-24"
        style={{ backgroundColor: cs.color }}
        data-testid="case-study-hero"
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              All Case Studies
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            {/* Industry badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 backdrop-blur-sm"
            >
              {cs.industry}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              {cs.client}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/85 text-xl leading-relaxed mb-10"
            >
              {cs.tagline}
            </motion.p>

            {/* Service tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {cs.services.map((s) => (
                <span
                  key={s}
                  className="bg-white/15 border border-white/25 text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wide backdrop-blur-sm"
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 flex items-center justify-center" style={{ minHeight: '400px', maxHeight: '600px' }}>
            <img
              src={cs.heroImg}
              alt={`${cs.client} banner`}
              className="w-full h-full object-contain"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Metrics strip ── */}
      <section className="py-16 bg-white border-b border-slate-100" data-testid="case-study-metrics">
        <div ref={resultsRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={isResultsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="text-center"
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-none"
                  style={{ color: cs.color }}
                >
                  {m.value}
                </div>
                <div className="text-slate-500 font-semibold text-xs sm:text-sm">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenge + Approach ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p
                className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: cs.color }}
              >
                The Challenge
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                What Stood Between Them and Growth
              </h2>
              <p className="text-slate-600 text-base leading-relaxed text-lg">{cs.challenge}</p>
            </motion.div>

            {/* Approach */}
            <div ref={approachRef}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isApproachInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55 }}
              >
                <p
                  className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: cs.color }}
                >
                  Our Approach
                </p>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                  The Strategy We Built
                </h2>
                <ul className="space-y-4">
                  {cs.approach.map((step, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isApproachInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <CheckCircle2
                        className="w-6 h-6 flex-shrink-0 mt-0.5"
                        style={{ color: cs.color }}
                      />
                      <p className="text-slate-600 leading-relaxed">{step}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p
              className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: cs.color }}
            >
              The Outcome
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">Results That Moved the Needle</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{cs.results}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Instagram Feed (Dr. Asma only) ── */}
      {cs.slug === "dr-asma-javed" && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-12"
            >
              <p
                className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: cs.color }}
              >
                Social Media Growth
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Instagram Presence
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Follow Dr. Asma's Instagram to see our content strategy in action - 20,600+ followers and growing.
              </p>
            </motion.div>
            
            {/* Elfsight Instagram Feed Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="elfsight-app-b44a2fe9-3312-48cf-84e4-da639d2a8762" data-elfsight-app-lazy></div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Instagram Videos (Chaayé Khana only) ── */}
      {cs.slug === "chaye-khana-park-road" && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-12"
            >
              <p
                className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: cs.color }}
              >
                Video Content
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Viral Moments on Instagram
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Our video content strategy captured the essence of Chaayé Khana - reaching over 100,000 views on a single post.
              </p>
            </motion.div>
            
            {/* Instagram Video Embeds */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {/* Video 1 */}
              <div className="flex justify-center">
                <iframe
                  src="https://www.instagram.com/reel/DZrkjKZIBmv/embed"
                  width="400"
                  height="700"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>

              {/* Video 2 */}
              <div className="flex justify-center">
                <iframe
                  src="https://www.instagram.com/reel/DZhznKEkhGb/embed"
                  width="400"
                  height="700"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </motion.div>

            {/* Third Video - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex justify-center"
            >
              <iframe
                src="https://www.instagram.com/reel/DX6rSimnUyU/embed"
                width="400"
                height="700"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="rounded-lg shadow-lg"
              ></iframe>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Social Videos (Nabhia's Salon only) ── */}
      {cs.slug === "nabhias-salon" && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-12"
            >
              <p
                className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: cs.color }}
              >
                Video Strategy
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                TikTok Content Performance
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Our video content strategy on TikTok - building trust through transformation stories and behind-the-scenes moments.
              </p>
            </motion.div>
            
            {/* TikTok Video Only - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@nabhiassalon/video/7629743800935664917"
                data-video-id="7629743800935664917"
                style={{ maxWidth: '605px', minWidth: '325px' }}
              >
                <section>
                  <a
                    target="_blank"
                    title="@nabhiassalon"
                    href="https://www.tiktok.com/@nabhiassalon?refer=embed"
                    rel="noopener noreferrer"
                  >
                    @nabhiassalon
                  </a>
                </section>
              </blockquote>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Social Media Results (Elysium only) ── */}
      {cs.slug === "elysium-dental-aesthetics" && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-12"
            >
              <p
                className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: cs.color }}
              >
                Social Media Growth
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Instagram Performance
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Our comprehensive social media management strategy delivered consistent growth and engagement for Elysium Dental & Aesthetics Clinic.
              </p>
            </motion.div>
            
            {/* Social Media Results Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-4">
                <img
                  src="/elysium dental and aesthteic clinic social media results.jpeg"
                  alt="Elysium Dental & Aesthetics Clinic Social Media Results"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Social Media Results (Le Macon only) ── */}
      {cs.slug === "le-macon" && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-12"
            >
              <p
                className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: cs.color }}
              >
                Social Media Growth
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                From Zero to 9,400+ Followers
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Building a complete social media presence from scratch for an award-winning architecture firm.
              </p>
            </motion.div>
            
            {/* Social Media Results Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-4">
                <img
                  src="/casestudiesimages/lemaconsocialmediaresults.jpg"
                  alt="Le Macon Social Media Growth Results"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Shopify Store Showcase (Health Point Pakistan only) ── */}
      {cs.slug === "health-point-pakistan" && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-12"
            >
              <p
                className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: cs.color }}
              >
                Shopify eCommerce Solution
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Complete Online Store Built for Healthcare Retail
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                A custom Shopify store designed to make healthcare shopping easy, trustworthy, and conversion-focused.
              </p>
            </motion.div>
            
            {/* Store Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-4">
                <img
                  src="/casestudiesimages/healthpointshopifystore.webp"
                  alt="Health Point Pakistan Shopify Store"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  Shopify Features Delivered
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: cs.color + '15' }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: cs.color }} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Mobile Optimized</h4>
                    <p className="text-slate-600 text-sm">Fully responsive design for seamless mobile shopping</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: cs.color + '15' }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: cs.color }} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Conversion Focused</h4>
                    <p className="text-slate-600 text-sm">Strategic CTAs and trust elements throughout</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: cs.color + '15' }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: cs.color }} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">SEO Ready</h4>
                    <p className="text-slate-600 text-sm">Built with search engine visibility in mind</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Website Pages Showcase (Atlas Dental only) ── */}
      {cs.slug === "atlas-dental" && (
        <>
          {/* Tech Stack Section */}
          <section className="py-20 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="text-center mb-12"
              >
                <p
                  className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: cs.color }}
                >
                  Technology Migration
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                  From WordPress to Modern React Stack
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  We rebuilt the entire website from a slow, template-based WordPress site into a lightning-fast, custom React application.
                </p>
              </motion.div>
              
              <div className="max-w-5xl mx-auto">
                {/* Before & After Tech Comparison */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Old Stack */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-50 rounded-xl p-8 border-2 border-slate-200"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <h3 className="text-xl font-bold text-slate-900">Old WordPress Site</h3>
                    </div>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Slow page load times (5-8 seconds)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Generic theme with limited customization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Plugin bloat affecting performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Difficult to maintain and update</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Poor mobile responsiveness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>Security vulnerabilities from outdated plugins</span>
                      </li>
                    </ul>
                  </motion.div>

                  {/* New Stack */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2"
                    style={{ borderColor: cs.color }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <h3 className="text-xl font-bold text-slate-900">Modern React Stack</h3>
                    </div>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: cs.color }} />
                        <span>Lightning-fast load times (under 2 seconds)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: cs.color }} />
                        <span>Fully custom design with complete control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: cs.color }} />
                        <span>No plugin overhead - clean codebase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: cs.color }} />
                        <span>Easy to maintain with modern tooling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: cs.color }} />
                        <span>Perfect mobile experience on all devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: cs.color }} />
                        <span>Modern security with no legacy vulnerabilities</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Tech Stack Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Technologies Used</h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="px-8 py-4 rounded-xl bg-[#61DAFB]/10 border-2 border-[#61DAFB] text-slate-900 font-semibold shadow-md flex items-center gap-3 hover:scale-105 transition-transform">
                      <SiReact className="w-8 h-8 text-[#61DAFB]" />
                      <span className="text-lg">React JS</span>
                    </div>
                    <div className="px-8 py-4 rounded-xl bg-[#06B6D4]/10 border-2 border-[#06B6D4] text-slate-900 font-semibold shadow-md flex items-center gap-3 hover:scale-105 transition-transform">
                      <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />
                      <span className="text-lg">Tailwind CSS</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-2" style={{ color: cs.color }}>2s</div>
                      <div className="text-slate-600 text-sm">Average Load Time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2" style={{ color: cs.color }}>100%</div>
                      <div className="text-slate-600 text-sm">Mobile Responsive</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2" style={{ color: cs.color }}>0</div>
                      <div className="text-slate-600 text-sm">WordPress Plugins</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Website Pages Showcase */}
          <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-center mb-12"
            >
              <p
                className="font-bold text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: cs.color }}
              >
                Website Redesign
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Before & After: Complete Digital Transformation
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                From a dated, generic template to a modern, conversion-optimized website that reflects the quality of care Atlas Dental provides.
              </p>
            </motion.div>
            
            {/* Website Pages Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Homepage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src="/casestudiesimages/atlasdentalhomepage.webp"
                      alt="Atlas Dental Homepage Redesign"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-slate-900">Homepage</h3>
                    <p className="text-slate-600 text-sm mt-1">Hero section with clear CTAs and trust signals</p>
                  </div>
                </div>
              </motion.div>

              {/* About Page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src="/casestudiesimages/atlasdentalaboutpage.webp"
                      alt="Atlas Dental About Page"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-slate-900">About Page</h3>
                    <p className="text-slate-600 text-sm mt-1">Team credentials and CEO spotlight</p>
                  </div>
                </div>
              </motion.div>

              {/* Services Page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src="/casestudiesimages/atlasdentalservicespage.webp"
                      alt="Atlas Dental Services Page"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-slate-900">Services Page</h3>
                    <p className="text-slate-600 text-sm mt-1">16 treatments in scannable card format</p>
                  </div>
                </div>
              </motion.div>

              {/* Blog Page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src="/casestudiesimages/blogpageatlasdental.webp"
                      alt="Atlas Dental Blog Page"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-slate-900">Blog - Patient Guides</h3>
                    <p className="text-slate-600 text-sm mt-1">Educational content for SEO and trust</p>
                  </div>
                </div>
              </motion.div>

              {/* Gallery Page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src="/casestudiesimages/atlasdentalgallerypage.webp"
                      alt="Atlas Dental Clinic Gallery"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-slate-900">Clinic Gallery</h3>
                    <p className="text-slate-600 text-sm mt-1">Real photos of facility and treatment rooms</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Page */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="overflow-hidden bg-slate-50">
                    <img
                      src="/casestudiesimages/atlasdentalcontactpage.webp"
                      alt="Atlas Dental Contact Page"
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-slate-900">Contact Page</h3>
                    <p className="text-slate-600 text-sm mt-1">Multi-channel contact with embedded map</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  Design System Highlights
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: cs.color + '15' }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: cs.color }} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Consistent Branding</h4>
                    <p className="text-slate-600 text-sm">Navy-white palette with recurring card components</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: cs.color + '15' }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: cs.color }} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Conversion Focus</h4>
                    <p className="text-slate-600 text-sm">Persistent CTAs and floating WhatsApp/call icons</p>
                  </div>
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: cs.color + '15' }}
                    >
                      <CheckCircle2 className="w-8 h-8" style={{ color: cs.color }} />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">Trust Signals</h4>
                    <p className="text-slate-600 text-sm">Real credentials, photos, and patient education</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        </>
      )}

      {/* ── Testimonial (if exists) ── */}
      {cs.testimonial && (
        <section
          className="py-20"
          style={{ backgroundColor: cs.color }}
          data-testid="case-study-testimonial"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="w-16 h-16 text-white/30 mx-auto mb-8" strokeWidth={1} />
              <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed italic mb-8">
                "{cs.testimonial.quote}"
              </p>
              <div className="w-12 h-0.5 bg-white/40 mx-auto mb-6" />
              <p className="text-white font-extrabold text-lg">{cs.testimonial.author}</p>
              <p className="text-white/70 font-medium text-sm mt-1">{cs.testimonial.role}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0d1117]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready for Results Like These?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Let's build a strategy tailored to your brand and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-md transition-colors"
              >
                Get a Free Strategy Call
              </Link>
              <a
                href={cs.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Visit {cs.client}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
