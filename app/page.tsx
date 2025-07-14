"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen min-h-[100dvh] overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* الخلفية المتحركة */}
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      {/* صورة البروفايل */}
      <div className="z-20 mt-12 animate-slide-up flex flex-col items-center">
        <img
          src="/mohamed.jpg"
          alt="Mohamed Alarbi"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-zinc-500 shadow-lg object-cover"
        />

        {/* العنوان الوظيفي */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-400 font-light animate-typewriter overflow-hidden whitespace-nowrap border-r-0">
          Creative Director
        </p>
      </div>

      {/* الخط العلوي المتدرج */}
      <div className="w-[90vw] h-[2px] bg-gradient-to-r from-zinc-300/0 via-zinc-300/70 to-zinc-300/0 mt-8 mb-2 z-10" />

      {/* الاسم */}
      <h1 className="z-10 py-2 px-1 text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-transparent bg-white bg-clip-text animate-title font-display whitespace-nowrap">
        Mohamed Alarbi
      </h1>

      {/* الخط السفلي المتدرج */}
      <div className="w-[90vw] h-[2px] bg-gradient-to-r from-zinc-300/0 via-zinc-300/70 to-zinc-300/0 mt-2 mb-6 z-10" />

      {/* الأزرار */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 animate-fade-in z-10">
        <Link
          href="/projects"
          className="group w-36 h-10 md:w-48 md:h-14 flex items-center justify-center border border-white/10 rounded-md bg-white/5 text-white hover:border-white/30 transition-all duration-500 hover:bg-white/10"
        >
          <span className="text-sm md:text-lg font-medium group-hover:text-white transition-colors duration-500">
            أعمالي
          </span>
        </Link>

        <Link
          href="/services"
          className="group w-36 h-10 md:w-48 md:h-14 flex items-center justify-center border border-white/10 rounded-md bg-white/5 text-white hover:border-white/30 transition-all duration-500 hover:bg-white/10"
        >
          <span className="text-sm md:text-lg font-medium group-hover:text-white transition-colors duration-500">
            خدماتي
          </span>
        </Link>

        <Link
          href="/contact"
          className="group w-36 h-10 md:w-48 md:h-14 flex items-center justify-center border border-white/10 rounded-md bg-white/5 text-white hover:border-white/30 transition-all duration-500 hover:bg-white/10"
        >
          <span className="text-sm md:text-lg font-medium group-hover:text-white transition-colors duration-500">
            تواصل معي
          </span>
        </Link>
      </div>
    </div>
  );
}
