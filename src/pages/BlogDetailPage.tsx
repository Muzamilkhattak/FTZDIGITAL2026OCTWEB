import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, ExternalLink } from "lucide-react";
import { allBlogPosts } from "@/data/blogData";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

// Helper function to parse text and convert URLs to clickable links
function parseTextWithLinks(text: string) {
  // Pattern to match URLs in format: text (url) or standalone URLs
  const urlPattern = /\(([a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+)\)|https?:\/\/[^\s)]+/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;
  let linkIndex = 0;

  while ((match = urlPattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const url = match[1] || match[0];
    const isExternal = !url.includes('ftzdigital.com');
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    
    // Find the link text (words before the URL in parentheses)
    const beforeMatch = text.substring(0, match.index);
    const words = beforeMatch.trim().split(' ');
    let linkText = '';
    
    if (match[1]) {
      // Extract link text from before the parentheses
      const possibleLinkText = words[words.length - 1];
      if (possibleLinkText && possibleLinkText.length > 2) {
        linkText = possibleLinkText;
        // Remove the link text from previous part if it exists
        if (parts.length > 0 && typeof parts[parts.length - 1] === 'string') {
          const lastPart = parts[parts.length - 1] as string;
          if (lastPart.endsWith(linkText)) {
            parts[parts.length - 1] = lastPart.substring(0, lastPart.length - linkText.length);
          }
        }
      } else {
        linkText = url;
      }
    } else {
      linkText = url;
    }

    parts.push(
      <a
        key={`link-${linkIndex++}`}
        href={fullUrl}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-2 transition-colors inline-flex items-center gap-1"
      >
        {linkText}
        {isExternal && <ExternalLink className="w-3.5 h-3.5 inline" />}
      </a>
    );

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function BlogDetailPage() {
  const [, params] = useRoute("/blog/:slug");
  const post = allBlogPosts.find((p) => p.slug === params?.slug);
  const others = allBlogPosts.filter((p) => p.slug !== params?.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h1>
            <Link href="/#blog" className="text-blue-600 hover:underline font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const catColor: Record<string, string> = {
    "Social Media": "#2563eb",
    "Paid Ads": "#7c3aed",
    SEO: "#059669",
  };
  const accent = catColor[post.cat] ?? "#2563eb";

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0b1120] overflow-hidden pt-28 pb-20">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(99,149,255,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] blur-3xl rounded-full opacity-20 pointer-events-none"
          style={{ backgroundColor: accent }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold group transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Category pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="flex justify-center mb-5"
          >
            <span
              className="inline-flex items-center gap-1.5 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest"
              style={{ backgroundColor: accent }}
            >
              <Tag className="w-3 h-3" /> {post.cat}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-7"
          >
            {post.title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-5 text-slate-400 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="font-semibold text-slate-300">{post.author}</span>
          </motion.div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[16/7]"
        >
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* ── Article + Sidebar ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
          {/* Article body */}
          <article>
            {/* Excerpt lead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl text-slate-600 leading-relaxed mb-10 font-medium border-l-4 pl-6"
              style={{ borderColor: accent }}
            >
              {parseTextWithLinks(post.excerpt)}
            </motion.p>

            {post.content.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="mb-9"
              >
                {section.heading && (
                  <h2
                    className="text-2xl font-extrabold text-slate-900 mb-4 leading-snug"
                  >
                    {section.heading}
                  </h2>
                )}
                <p className="text-slate-600 leading-[1.85] text-[1.05rem]">
                  {parseTextWithLinks(section.body)}
                </p>
              </motion.div>
            ))}

            {/* Author card */}
            <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-5">
              <div
                className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-extrabold text-xl"
                style={{ backgroundColor: accent }}
              >
                F
              </div>
              <div>
                <p className="font-extrabold text-slate-900">{post.author}</p>
                <p className="text-slate-500 text-sm mb-2">{post.authorRole} · FTZ Digital, Islamabad</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our specialists share digital marketing insights drawn from real campaigns run for Pakistani and Gulf-region businesses.
                </p>
              </div>
            </div>

            {/* Share / CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-6 rounded-2xl text-white"
              style={{ backgroundColor: accent }}>
              <div>
                <p className="font-extrabold text-lg">Want results like these for your brand?</p>
                <p className="text-white/80 text-sm mt-1">Book a free strategy call with the FTZ Digital team.</p>
              </div>
              <Link
                href="/contact"
                className="flex-shrink-0 bg-white font-bold text-sm px-6 py-3 rounded-full transition-all hover:opacity-90 inline-flex items-center gap-2"
                style={{ color: accent }}
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28">
            {/* Related posts */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 mb-5">
                More Articles
              </h3>
              <div className="space-y-5">
                {others.map((other) => (
                  <Link key={other.slug} href={`/blog/${other.slug}`}>
                    <div className="group flex gap-3 items-start cursor-pointer">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                        <img
                          src={other.img}
                          alt={other.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider"
                          style={{ color: catColor[other.cat] ?? "#2563eb" }}
                        >
                          {other.cat}
                        </span>
                        <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mt-0.5">
                          {other.title}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">{other.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA box */}
            <div className="bg-[#0b1120] rounded-2xl p-6 text-white">
              <p className="font-extrabold text-base mb-2 leading-snug">
                Ready to grow your brand?
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                FTZ Digital helps businesses across Pakistan get more leads, more sales, and more brand visibility online.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full text-sm transition-colors"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-400 mb-4">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Social Media", "Paid Ads", "SEO", "Content Marketing", "Branding"].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full cursor-default hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
