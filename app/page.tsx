'use client'
import Image from "next/image";
import AboutSection from "./components/AboutSection";
import InspirationSection from "./components/InspirationSection";
import HotTopicsSection from "./components/HotTopicsSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-Poppins">
      <Navbar/>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="leftCurve" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H0.9 Q0.78,0.45 0.62,1 H0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative w-full h-125 bg-white overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 h-full w-[65%]">
          <Image
            src="/office.webp"
            alt="office"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute left-0 top-0 h-full w-[60%] bg-blue-900 text-white flex flex-col justify-center px-16 z-10 clip-left">
          <p className="text-xs tracking-widest mb-4 opacity-80">
            ACCOUNTANTS AND GLOBAL BUSINESS ADVISORS
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            EMPOWERED <br /> WORKPLACES
          </h1>

          <p className="text-sm opacity-80 mb-6 max-w-md">
            By fostering inclusivity, encouraging growth, promoting
            collaboration, valuing diversity, supporting innovation, and
            building a culture of shared success.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-black font-semibold px-6 py-2 rounded-md w-fit flex items-center gap-2">
            LETS CONNECT
          </button>

          <p className="absolute bottom-6 text-xs opacity-70 max-w-xs">
            ACCOUNTING, TAXATION, & BUSINESS ADVISORY BETWEEN INDIA, JAPAN,
            AND THE WORLD
          </p>
        </div>
      </div>

      <style jsx>{`
        .clip-left {
          clip-path: url(#leftCurve);
        }
        `}</style>
        <HotTopicsSection/>
        <AboutSection/>
        <InspirationSection/>
    </main>
  );
}
