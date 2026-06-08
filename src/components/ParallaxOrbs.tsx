"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ORB_1 =
  "orb orb-1 left-[-25%] top-[-5%] h-[20rem] w-[20rem] bg-accent/30 md:h-[40rem] md:w-[40rem] md:left-[-10%]";
const ORB_2 =
  "orb orb-2 right-[-25%] top-[20%] h-[18rem] w-[18rem] bg-accent2/30 md:h-[35rem] md:w-[35rem] md:right-[-10%]";
const ORB_3 =
  "orb orb-3 bottom-[-10%] left-[10%] h-[16rem] w-[16rem] bg-accent3/20 md:h-[30rem] md:w-[30rem] md:left-[20%]";

export function ParallaxOrbs() {
  const [parallax, setParallax] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(min-width: 768px) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setParallax(fine && !reduce);
  }, []);

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 140]);

  if (!parallax) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className={ORB_1} />
        <div className={ORB_2} />
        <div className={ORB_3} />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div style={{ y: y1 }} className={ORB_1} />
      <motion.div style={{ y: y2 }} className={ORB_2} />
      <motion.div style={{ y: y3 }} className={ORB_3} />
    </div>
  );
}
