"use client";

import { MoveRight } from "lucide-react";
import { CustomButton } from "./CustomButton";

export default function HotTopicsSection() {
  return (
    <section className="relative bg-white py-24 px-20 w-full flex flex-col items-center gap-12 font-Poppins">
      <div className="flex gap-8">
       <button className="relative w-fit group">
            <svg
              width="206"
              height="49"
              viewBox="0 0 260 70"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-200"
            >
              <path
                d="M10 0 
                  H190 
                  Q200 0 205 10 
                  L250 60 
                  Q255 70 240 70 
                  H10 
                  Q0 70 0 60 
                  V10 
                  Q0 0 10 0 Z"
                fill="#FF7900"
                className="group-hover:fill-[#E66D00]"
              />
            </svg>

            <span className="absolute inset-0 flex items-center right-15 justify-center font-bold text-xs text-black">
              {"HOT TOPICS"}
            </span>
          </button>

        <ul className="space-y-4 text-gray-700 text-md flex gap-20">
          <li className="border-t-2 border-t-[#00338D] pt-2 relative">
            Parliament Introduces Income Tax Bill to Reshape India’s Direct Tax
            Landscape
            <MoveRight className="absolute right-0 top-20" color="black"/>
          </li>
          <li className="border-t-2 border-t-[#00338D] pt-2 relative">
            Indian Export Earnings at Risk as U.S. Tariffs Double to 50%
            <MoveRight className="absolute right-0 top-20" color="black"/>
          </li>
          <li className="border-t-2 border-t-[#00338D] pt-2 relative">
            India Eases Select BIS Norms While Tightening Overall Standards
            Enforcement
            <MoveRight className="absolute right-0 top-20" color="black"/>
          </li>
          <li className="border-t-2 border-t-[#00338D] pt-2 relative">
            India Modernizes Maritime Law with Carriage of Goods by Sea Bill,
            2025
            <MoveRight className="absolute right-0 top-20" color="black"/>
          </li>
        </ul>
      </div>
    </section>
  );
}
