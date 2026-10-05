import { motion } from "framer-motion";
import { Globe, Share2, Palette, Video } from "lucide-react";
import { Link } from "wouter";

const portfolioCategories = [
  {
    icon: Globe,
    title: "Websites",
    description: "Custom-built websites that convert visitors into customers with stunning design and seamless functionality.",
    projectCount: "15+ Projects",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    color: "blue",
    link: "/portfolio/websites",
    ariaLabel: "View Websites Portfolio",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Engaging social media campaigns and content that build communities and drive real business results.",
    projectCount: "50+ Campaigns",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    color: "pink",
    link: "/case-studies",
    ariaLabel: "View Social Media Case Studies",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description: "Eye-catching visual identities, logos, and marketing materials that make your brand unforgettable.",
    projectCount: "100+ Designs",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    color: "purple",
    link: "/portfolio/graphics",
    ariaLabel: "View Graphics Portfolio",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video content that tells your story and captivates your audience across all platforms.",
    projectCount: "30+ Videos",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    color: "green",
    link: "/case-studies",
    ariaLabel: "View Video Production Case Studies",
  },
];

const colorMap = {
  blue: { bg: "bg-blue-600", border: "border-blue-500", text: "text-blue-400", hover: "hover:border-blue-500" },
  pink: { bg: "bg-pink-600", border: "border-pink-500", text: "text-pink-400", hover: "hover:border-pink-500" },
  purple: { bg: "bg-purple-600", border: "border-purple-500", text: "text-purple-400", hover: "hover:border-purple-500" },
  green: { bg: "bg-green-600", border: "border-green-500", text: "text-green-400", hover: "hover:border-green-500" },
};

export function Portfolio() {
  return (
    <section
      className="py-24 bg-[#0d1117] overflow-hidden"
      data-testid="section-portfolio"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-500 font-semibold text-xs tracking-[0.25em] uppercase mb-3">
              Our Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Work That <span className="text-blue-400">Delivers Results</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto">
              From websites and social media to graphics and video we create digital experiences that convert, engage, and grow your business.
            </p>
          </motion.div>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioCategories.map((category, i) => {
            const Icon = category.icon;
            const colors = colorMap[category.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                data-testid={`portfolio-card-${i}`}
              >
                <div className={`relative rounded-2xl overflow-hidden bg-slate-800 border border-white/5 ${colors.hover} transition-all duration-400 shadow-xl hover:shadow-2xl group h-full flex flex-col`}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                    {/* Icon */}
                    <div className={`absolute top-4 right-4 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Project count badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                        {category.projectCount}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className={`text-white font-extrabold text-xl mb-3 ${colors.text} group-hover:${colors.text} transition-colors`}>
                      {category.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                      {category.description}
                    </p>

                    {/* View Work Link */}
                    <Link
                      href={category.link}
                      className={`inline-flex items-center gap-2 ${colors.text} hover:text-white text-sm font-semibold group/link transition-colors`}
                      data-testid={`portfolio-view-${i}`}
                      aria-label={category.ariaLabel}
                    >
                      View Work
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Hover accent line at bottom */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.bg} scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30 group"
          >
            View All Case Studies
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
