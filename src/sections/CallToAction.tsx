'use client';
import { Button } from "@/components/ui/button";
import GridLine from "@/assets/grid-lines.png";
import starsBg from "@/assets/stars.png";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import {useRelativeMousePosition} from "@/hooks/useRelativeMousePosition";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end','end start']
})

   const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300,300])

   const [mouseX,mouseY] = useRelativeMousePosition(borderedDivRef);
   
   const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}% ${mouseY}%,black,transparent)`;

  
  return <section className="py-20 md:py-24" ref={sectionRef}>
    <motion.div className="container">
      <motion.div
      ref={borderedDivRef}
      className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
      animate={{
        backgroundPositionX: starsBg.width
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: 60
      }}
       style={{ 
        // backgroundPositionY,
        backgroundImage: `url(${starsBg.src})`
         }}>
        <div className="absolute inset-0 bg-[#4A1E8D] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
        style={{
                     backgroundImage: `url(${GridLine.src})`,
      }}
        ></div>
          <motion.div className="absolute inset-0 bg-[#4A1E8D] bg-blend-overlay  opacity-0  group-hover:opacity-100 transition duration-700"        style={{
                    maskImage,
                    backgroundImage: `url(${GridLine.src})`,
      }}
        ></motion.div>
        <div className="relative">
      <h2 className="text-5xl text-center tracking-tighter font-medium">
      AI-driven SEO<br className="block md:hidden" /> for everyone.

      </h2>
      <p className="text-white/70 mx-auto text-lg md:text-xl max-w-xs text-center mt-5 tracking-tight ">Achieve clear, impactful results without the complexity.</p>
      </div>
      <div className="flex justify-center mt-5">

<Button className="relative bg-gradient-to-b shadow-[0px_0px_12px_#8c45ff] from-[#190d2e] to-[#4a208a] hover:from-[#ff7e5f] hover:to-[#feb47b] ">
Join waitlist
</Button>
</div>
</motion.div>

    </motion.div>
  </section>;
};
