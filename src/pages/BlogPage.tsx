import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "wouter";
import { allBlogPosts } from "@/data/blogData";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const catColor: Record<string, string> = {
  "Social Media": "#2563eb",
  "Paid Ads": "#7c3aed",
  SEO: "#059669",
  "Content Marketing": "#dc2626",
  "Branding": "#ea580c",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative bg-[#0b1120] overflow-hidden pt-28 pb-20">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(99,149,255,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Gradient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/20 blur-3xl rounded-full pointer-events-none"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-bold px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 uppercase tracking-widest">
              <Tag className="w-4 h-4" /> Our Blog
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Insights, Strategies & <span className="text-blue-400">Digital Marketing Tips</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real-world digital marketing strategies, platform updates, and growth tactics from the FTZ Digital team — designed specifically for Pakistani businesses.
          </motion.p>
        </div>
      </section>

      {/* ── Blog Grid Section ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allBlogPosts.map((post, i) => {
              const accent = catColor[post.cat] ?? "#2563eb";
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl hover:border-transparent transition-all duration-300 cursor-pointer h-full flex flex-col">
                      {/* Top accent bar */}
                      <div className="h-1 w-full" style={{ backgroundColor: accent }} />

                      {/* Image */}
                      <div className="relative h-56 overflow-hidden flex-shrink-0">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span
                          className="absolute top-4 left-4 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg"
                          style={{ backgroundColor: accent }}
                        >
                          {post.cat}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta info */}
                        <div className="flex items-center gap-4 text-slate-400 text-xs font-medium mb-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
                          {post.excerpt}
                        </p>

                        {/* Read More Link */}
                        <div className="flex items-center justify-end pt-4 border-t border-slate-100">
                          <div
                            className="inline-flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all"
                            style={{ color: accent }}
                          >
                            Read Article
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl relative overflow-hidden">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Ready to Grow Your Brand?
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  FTZ Digital helps businesses across Pakistan get more leads, more sales, and more brand visibility online through proven digital marketing strategies.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-base px-8 py-4 rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
                >
                  Book a Free Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
