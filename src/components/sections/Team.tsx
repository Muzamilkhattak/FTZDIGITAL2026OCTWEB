import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Team() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.94, 1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0.7]);

  return (
    <section
      ref={ref}
      className="bg-[#0d1117] py-10 overflow-hidden"
      data-testid="section-team"
    >
      <motion.div style={{ scale, opacity }} className="w-full">
        <img
          src="/ftz-team.png"
          alt="FTZ Digital Team"
          className="w-full h-auto block"
          style={{ display: "block" }}
        />
      </motion.div>
    </section>
  );
}
