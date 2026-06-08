"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxOrbs() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="orb orb-1 left-[-10%] top-[-5%] h-[40rem] w-[40rem] bg-accent/30"
      />
      <motion.div
        style={{ y: y2 }}
        className="orb orb-2 right-[-10%] top-[20%] h-[35rem] w-[35rem] bg-accent2/30"
      />
      <motion.div
        style={{ y: y3 }}
        className="orb orb-3 bottom-[-10%] left-[20%] h-[30rem] w-[30rem] bg-accent3/20"
      />
    </div>
  );
}
