import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import IgSocial from "@/assets/social-instagram.svg";
import YtSocial from "@/assets/social-youtube.svg";
export const Footer = () => {
  return <footer className="py-5 border-t border-white/15">
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
      <div className="flex gap-2 lg:items-center lg:flex-1">
        <Logo className='h-6 w-6'/>
      <div className="">AI Startup Landing Page</div>
      </div>
      <div className="">
        <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1">
          <a href="#" className="text-white/70 hover:text-white text-xs transition">Features</a>
          <a href="#" className="text-white/70 hover:text-white text-xs transition">Developers</a>
          <a href="#" className="text-white/70 hover:text-white text-xs transition">Company</a>
          <a href="#" className="text-white/70 hover:text-white text-xs transition">Blog</a>
          <a href="#" className="text-white/70 hover:text-white text-xs transition">Changelog</a>
        </nav>
      </div>
      <div className="flex gap-5 lg:flex-1 lg:justify-end">
      <XSocial className="text-white/40 hover:text-white transition"/>
      <IgSocial className="text-white/40 hover:text-white transition"/>
      <YtSocial className="text-white/40 hover:text-white transition"/>
      </div>
      </div>
      </div>
  </footer>;
};
