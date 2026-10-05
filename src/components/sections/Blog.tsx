import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { allBlogPosts } from "@/data/blogData";

const catColor: Record<string, string> = {
  "Social Media": "#2563eb",
  "Paid Ads": "#7c3aed",
  SEO: "#059669",
};

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-white" data-testid="section-blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-bold text-xs tracking-[0.25em] uppercase mb-3">Our Blog</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Latest <span className="text-blue-600">Insights & Tips</span>
            </h2>
            <p className="text-lg text-slate-600">
              Digital marketing strategies, platform updates, and growth hacks written by the FTZ Digital team.
            </p>
          </div>
          <Link   
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-slate-900 transition-colors shrink-0 group"
          >
      View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                data-testid={`blog-card-${i}`}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-transparent transition-all duration-300 cursor-pointer h-full flex flex-col">
                    {/* Top accent */}
                    <div className="h-0.5 w-full" style={{ backgroundColor: accent }} />

                    {/* Image */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span
                        className="absolute top-4 left-4 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest"
                        style={{ backgroundColor: accent }}
                      >
                        {post.cat}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-slate-400 text-xs font-medium mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug flex-1">
                        {post.title}
                      </h3>

                      <p className="text-slate-500 mb-6 line-clamp-3 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div
                        className="inline-flex items-center gap-1.5 font-bold text-sm group-hover:gap-2.5 transition-all mt-auto"
                        style={{ color: accent }}
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
