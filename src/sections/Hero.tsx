'use client';
import { Button } from "@/components/ui/button";
import startBg from "@/assets/stars.png";
import { motion ,useScroll, useMotionValueEvent, useTransform} from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end','end start']
  })

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300,300]); 

  return (
  <motion.section ref={sectionRef} className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
  style={{ 
    backgroundImage: `url(${startBg.src})` ,
    backgroundPositionY
  }}
  >
    <div className="inset-0 absolute bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
    {/* Start planer */}
    <div className="absolute h-80 w-80 bg-purple-500 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]">
    </div>
    {/* End planer */}
    {/* start ring 1 */}
<motion.div 
style={{
  translateY: '-50%',
  translateX: '-50%'
}}
animate={{
  rotate: '1turn'
}}
transition={{
  duration: 30,
  repeat: Infinity,
  ease: 'linear'
}}
className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-8 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="h-2 w-2 bg-white rounded-full"></div></div>

</motion.div>
    {/* end ring 1 */}
    {/* start ring 2 */}
<motion.div
style={{
  translateY: '-50%',
  translateX: '-50%'
}}
animate={{
  rotate: '-1turn'
}}
transition={{
  duration: 30,
  repeat: Infinity,
  ease: 'linear'
}} className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
</motion.div>

    {/* end ring 2 */}

    <div className="container relative mt-16">
      <h1 className="text-6xl sm:text-[100px] md:text-[168px] md:leading-none bg-white	font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">AI SEO</h1>
      <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
      Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
      </p>
      <div className="flex justify-center mt-5">

      <Button className="bg-gradient-to-b shadow-[0px_0px_12px_#8c45ff] from-[#190d2e] to-[#4a208a] hover:from-[#ff7e5f] hover:to-[#feb47b] ">
  Join waitlist
</Button>
      </div>
    </div>
  </motion.section>);
};
