'use client';
import { Button } from "@/components/ui/button";
import GridLine from "@/assets/grid-lines.png";
import starsBg from "@/assets/stars.png";
export const CallToAction = () => {
  return <section className="py-20" >
    <div className="container">
      <div className="border border-white/15 py-24 rounded-xl overflow-hidden relative" style={{ backgroundImage: `url(${starsBg.src})` }}>
        <div className="absolute inset-0 bg-[#4A1E8D] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
        style={{ backgroundImage: `url(${GridLine.src})` }}
        ></div>
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
</div>

    </div>
  </section>;
};
