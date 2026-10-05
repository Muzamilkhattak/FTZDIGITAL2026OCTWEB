import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function StatsBar() {
  const stats = [
    { value: "200+", label: "Campaigns Launched" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "4.9", label: "Client Rating", icon: <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 inline ml-1" /> },
  ];

  return (
    <section className="bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-12 px-6 flex flex-col items-center text-center justify-center"
              data-testid={`stat-${i}`}>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 flex items-center">
                {stat.value}{stat.icon && stat.icon}
              </div>
              <div className="text-sm md:text-base font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
