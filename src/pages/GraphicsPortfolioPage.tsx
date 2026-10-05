import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const graphicsProjects = [
  {
    id: 1,
    image: "/graphicsdesign/Botox is one of the most effective treatments for reducing fine lines while helping you maintain.webp",
  },
  {
    id: 2,
    image: "/graphicsdesign/chaayekhana client standyy design.webp",
  },
  {
    id: 3,
    image: "/graphicsdesign/Gaichu Managed Services takes care of your old tech, whether it is ready for a second life or at.webp",
  },
  {
    id: 4,
    image: "/graphicsdesign/Our Sehri Platter for Two is packed with your desi favorites, from nihari and qeema to halwa pur.webp",
  },
  {
    id: 5,
    image: "/graphicsdesign/Say hello to fuller, stronger, and healthier hair with our Advanced Hair Restoration Treatments .webp",
  },
  {
    id: 6,
    image: "/graphicsdesign/Spicy, Bold, and Full of Sizzle.Our Beef Chilli Dry is a must have that satisfies your craving..webp",
  },
  {
    id: 7,
    image: "/graphicsdesign/The inspiration behind a timeless Barat look. Rich reds, traditional florals, statement jewelry.webp",
  },
  {
    id: 8,
    image: "/graphicsdesign/The Strawberry Challenge is ON Join us and be part of the fun, chaos, and sweetness!StrawberryF.webp",
  },
  {
    id: 9,
    image: "/graphicsdesign/Your living room deserves more than ordinary.Soft textures, clean design, and effortless luxury. (1).webp",
  },
  {
    id: 10,
    image: "/graphicsdesign/Searching for the best dermatologist in Bahria TownYour solution starts here.📍 Bahria Town Phas.jpg",
  },
  {
    id: 11,
    image: "/graphicsdesign/Your living room deserves more than ordinary.Soft textures, clean design, and effortless luxury..webp",
  },
  {
    id: 12,
    image: "/graphicsdesign/lateerzazafatherday.webp",
  },
];

export default function GraphicsPortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1117] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-purple-400 font-semibold text-xs tracking-[0.25em] uppercase mb-4">
            Graphics Design Portfolio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Visual Designs That <span className="text-purple-400">Captivate</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed">
            Eye-catching graphics, social media posts, and marketing materials designed to make your brand unforgettable.
          </motion.p>
        </div>
      </section>

      {/* ── Graphics Grid ── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {graphicsProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelectedImage(project.id)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
              >
                <img
                  src={project.image}
                  alt={`Graphic Design ${project.id}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                />
                
                {/* Simple Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] cursor-default"
            >
              {graphicsProjects.find(p => p.id === selectedImage) && (
                <img
                  src={graphicsProjects.find(p => p.id === selectedImage)!.image}
                  alt={`Graphic Design ${selectedImage}`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
