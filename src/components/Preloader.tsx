import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Use requestAnimationFrame for smooth animations
    let rafId: number;
    
    const startAnimation = () => {
      rafId = requestAnimationFrame(() => {
        // Minimum loading time to show smooth animation
        const minLoadTime = 1500;
        const startTime = performance.now();

        // Wait for all resources to load
        const checkLoad = () => {
          const elapsed = performance.now() - startTime;
          
          if (document.readyState === "complete" && elapsed >= minLoadTime) {
            // Start fade out animation
            setFadeOut(true);
            
            // Remove preloader after fade out completes
            setTimeout(() => {
              setIsLoading(false);
              document.body.style.overflow = "unset";
            }, 800); // Match CSS transition duration
          } else {
            requestAnimationFrame(checkLoad);
          }
        };

        checkLoad();
      });
    };

    startAnimation();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-800 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
        style={{
          willChange: "opacity",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
            delay: 0.2,
          }}
          className="relative"
          style={{
            willChange: "transform, opacity",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <img
            src="/ftzdigitalofficallogo.png"
            alt="FTZ Digital"
            className="w-48 h-auto md:w-64"
            style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
              WebkitFontSmoothing: "antialiased",
            }}
          />

          {/* Animated pulse ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -m-8 rounded-full border-4 border-blue-600"
            style={{
              willChange: "transform, opacity",
              transform: "translate3d(0, 0, 0)",
            }}
          />
        </motion.div>

        {/* Loading dots animation (without text) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-20 flex items-center gap-2"
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-blue-600"
                style={{
                  willChange: "opacity",
                  transform: "translate3d(0, 0, 0)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
