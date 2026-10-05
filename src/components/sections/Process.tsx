import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business, audience, and goals to build the perfect strategy.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Strategy",
    description: "Creating a clear roadmap with defined KPIs, milestones, and actionable steps.",
  },
  {
    id: 3,
    icon: Rocket,
    title: "Execution",
    description: "Building, launching, and deploying campaigns with precision and creativity.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Scale & Sustain",
    description: "Scale winners and ensure sustainable, measurable growth.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" data-testid="section-process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              How it <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We keep it simple, transparent, and results-driven. Here's exactly how we take your brand from where it is today to where it deserves to be.
            </p>
          </motion.div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 h-full border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center shadow-lg">
                      <span className="text-white font-extrabold text-lg">{step.id}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-all duration-300 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 text-base mb-6">
            Ready to see how we can transform your brand?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 group"
          >
            Get Started Today
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
