import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Strategic digital marketing that drives real growth",
  "Full-service agency - websites, ads, social media & more",
  "Transparent reporting with measurable ROI",
  "Dedicated account managers for every client",
];

export function ParallaxVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-0"
      style={{ minHeight: "680px" }}
      data-testid="section-parallax-video"
    >
      {/* Parallax background video */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110 z-0"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#0a1628] via-[#0f2650] to-[#0a1628]" />
        {/* Grid lines decoration */}
        <div className="absolute inset-0 z-[1] opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
                <video
                  src="/why choose us video.webm"
                  controls
                  className="w-full h-auto rounded-2xl object-contain"
                  style={{ maxHeight: "450px" }}
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect width='800' height='450' fill='%230d1117'/%3E%3C/svg%3E"
                  title="Why Choose FTZ Digital"
                  aria-label="Video showcasing why you should choose FTZ Digital for digital marketing services"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            {/* Right — text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="text-white space-y-7"
            >
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2" />
                Why Choose Us
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                See How We{" "}
                <span className="text-blue-400">Transform</span> Your Business
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed">
                FTZ Digital combines strategy, creativity, and data-driven marketing to help businesses grow online. From social media to websites, we deliver results that matter.
              </p>

              <ul className="space-y-3" data-testid="features-list">
                {features.map((f, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-slate-200"
                    data-testid={`feature-item-${i}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-base">{f}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Mini stats row */}
              <div className="flex flex-wrap gap-8 pt-2">
                {[
                  { val: "50+", label: "Clients" },
                  { val: "200+", label: "Campaigns" },
                  { val: "5+", label: "Years" },
                ].map((s) => (
                  <div key={s.label} data-testid={`parallax-stat-${s.label.toLowerCase()}`}>
                    <div className="text-3xl font-extrabold text-white">{s.val}</div>
                    <div className="text-sm text-slate-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
