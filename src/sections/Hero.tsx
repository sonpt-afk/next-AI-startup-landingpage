import { Button } from "@/components/ui/button";
import startBg from "@/assets/stars.png";
export const Hero = () => {
  return (
  <section className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
  style={{ backgroundImage: `url(${startBg.src})` }}
  >
    <div className="inset-0 absolute bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
    {/* Start planer */}
    <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]">
    </div>
    {/* End planer */}
    {/* start ring 1 */}
<div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-8 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-5 w-5 left-full border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="h-2 w-2 bg-white rounded-full"></div></div>

</div>
    {/* end ring 1 */}
    {/* start ring 2 */}
<div className="absolute h-[444px] w-[444px] rounded-full border border-white/20 opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
</div>

    {/* end ring 2 */}

    <div className="container relative mt-16">
      <h1 className="text-9xl md:text-[168px] md:leading-none bg-white	font-semibold tracking-tighter bg-[radia-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">AI SEO</h1>
      <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
      Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
      </p>
      <div className="flex justify-center mt-5">

      <Button className="bg-gradient-to-r from-[#190d2e] to-[#4a208a]">
  Join waitlist
  </Button> 
      </div>
    </div>
  </section>);
};
