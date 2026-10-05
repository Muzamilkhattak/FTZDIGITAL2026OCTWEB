import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Dr. Asma Javed",
    role: "CEO, Skin Rejuv Clinic",
    rating: 5.0,
    stars: 5,
    quote:
      "FTZ Digital created our website and handles our social media and Meta ads. The website generates 2,000+ leads organically, and our Instagram has grown to 20,600+ followers. Their complete digital presence strategy transformed our clinic.",
    photo: "/testimonial clients image/drasmajavedclient.webp",
  },
  {
    name: "Dr. Maaz Qureshi",
    role: "CEO, Atlas Dental",
    rating: 5.0,
    stars: 5,
    quote:
      "They created and designed our website and handle our Google Ads campaigns. The professional design elevated our brand, and their Google Ads expertise brings us consistent patient appointments. Exceptional web design and PPC management.",
    photo: "/testimonial clients image/DrMaazQureshiprofile.webp",
  },
  {
    name: "Danish Baloch",
    role: "CEO, Chaayé Khana Amazon Mall Islamabad",
    rating: 5.0,
    stars: 5,
    quote:
      "FTZ Digital handles our social media, Meta ads, and Google Profile. Their Instagram content is stunning - one video crossed 100,000 views. Our Google Business Profile now brings us local customers every single day. Outstanding work.",
    photo: "/testimonial clients image/danishbalochclient.webp",
  },
  {
    name: "Dr. Fatima",
    role: "CEO, Elysium Dental and Aesthetic Clinic",
    rating: 5.0,
    stars: 5,
    quote:
      "Their comprehensive digital marketing approach helped establish our clinic's online presence. From website design to social media management, every touchpoint reflects the premium quality of our services. Professional and results-driven team.",
    photo: "/testimonial clients image/drfatimaheromainpage.webp",
  },
  {
    name: "Saqib Naseem",
    role: "CEO, Health Point Pakistan",
    rating: 5.0,
    stars: 5,
    quote:
      "They created our Shopify store and handle our Meta ads with excellent results. The e-commerce site is beautifully designed, and their Meta ads campaigns generated strong sales for our skin products. Highly recommend their e-commerce expertise.",
    photo: "/testimonial clients image/saqibnasim.webp",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const full = i <= Math.floor(rating);
        const half = !full && i - 0.5 <= rating;
        return (
          <svg key={i} className="w-4 h-4" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="50%" stopColor="#374151" />
              </linearGradient>
            </defs>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              fill={full ? "#f97316" : half ? `url(#half-${i})` : "#374151"}
            />
          </svg>
        );
      })}
    </div>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 20,
    },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => { 
      emblaApi.off("select", onSelect); 
      emblaApi.off("reInit", onSelect); 
    };
  }, [emblaApi]);

  return (
    <section
      className="relative overflow-hidden py-20 bg-[#0d1117]"
      data-testid="section-testimonials"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start">

          {/* Left: heading */}
          <div className="lg:w-[38%] flex-shrink-0 relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-400 uppercase tracking-[0.2em] text-xs font-semibold mb-4"
            >
              OUR CLIENTS TESTIMONIALS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8"
            >
              What our customers say?
            </motion.h2>

            {/* Scroll controls */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-blue-500 hover:bg-blue-500/10 flex items-center justify-center transition-all"
                data-testid="testimonials-prev"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-blue-500 hover:bg-blue-500/10 flex items-center justify-center transition-all"
                data-testid="testimonials-next"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right: testimonial cards carousel */}
          <div className="lg:w-[62%] lg:pl-10 w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-5">
                {reviews.map((r, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                    data-testid={`testimonial-card-${i}`}
                  >
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col hover:border-blue-500/30 hover:bg-white/[0.08] transition-all duration-300">
                      {/* Client Photo */}
                      <div className="flex items-center justify-center mb-5">
                        <img 
                          src={r.photo} 
                          alt={r.name}
                          width="64"
                          height="64"
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30"
                        />
                      </div>

                      {/* Name + role */}
                      <div className="text-center mb-4">
                        <div className="font-bold text-white text-base">{r.name}</div>
                        <div className="text-slate-400 text-xs mt-1">{r.role}</div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-3xl font-extrabold text-white leading-none">{r.rating.toFixed(1)}</span>
                        <StarRating rating={r.stars} />
                      </div>

                      {/* Quote */}
                      <p className="text-slate-300 text-sm leading-relaxed italic flex-1 text-center">{r.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6 justify-center lg:justify-start" data-testid="testimonials-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-testid={`testimonials-dot-${i}`}
                  className={`h-[3px] rounded-full transition-all duration-300 relative before:absolute before:inset-[-12px] before:content-[''] ${
                    i === selectedIndex ? "w-6 bg-blue-500" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
