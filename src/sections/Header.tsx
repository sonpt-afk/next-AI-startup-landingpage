"use client";

import React from "react";
import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";

export default function Header() {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur-md bg-black/20">
    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent -z-10"></div>
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
        <div className="absolute inset-0 backdrop-blur-md bg-black/10 -z-10 rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
        </div>
          
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">Features</a>
              <a href="#" className="text-white/70 hover:text-white transition">Developers</a>
              <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
              <a href="#" className="text-white/70 hover:text-white transition">Changelog</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-2 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff] ">
              <div className="absolute inset-0 ">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border  absolute inset-0 border-white/40 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              Join waitlist
            </button>
            <MenuIcon className="md:hidden "/>
          </div>
        </div>
      </div>
    </header>
  );
}
