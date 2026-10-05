import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about-us" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
            <div className="inline-block bg-blue-50 text-blue-600 font-semibold px-4 py-2 rounded-lg text-sm">
              About FTZ Digital
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Transforming Brands Through <span className="text-blue-600">Strategy & Creativity</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              FTZ Digital is a full-service digital marketing agency based in Islamabad, Pakistan. We partner with ambitious brands to craft bold digital strategies, compelling creative content, and high-performance campaigns that deliver real, measurable growth.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              {[
                "Social Media Management & Growth",
                "Performance Advertising (Meta & Google)",
                "Professional Web Design & Development",
                "Graphic Design & Brand Identity",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3" data-testid={`about-point-${i}`}>
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Link href="/about"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md transition-colors"
                data-testid="button-about-learn">
                Learn More About Us
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6">
            {/* Video Section */}
            <div className="relative">
              <video
                src="/ourwork.webm"
                autoPlay
                muted
                loop
                playsInline
                className="w-full object-contain"
                style={{ maxHeight: '480px' }}
                aria-label="FTZ Digital work showcase video"
                title="FTZ Digital Portfolio Showcase"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Stats and Mission Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-blue-600 font-bold text-3xl mb-2">50+</div>
                <div className="text-slate-700 font-medium text-sm">Happy Clients Across Pakistan</div>
              </div>
              <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                <p className="text-blue-100 text-xs">To empower businesses in Pakistan and beyond through bold digital strategy and creative excellence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
