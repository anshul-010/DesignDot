"use client";

export default function HotTopicsSection() {
  return (
    <section className="relative bg-white py-24 px-20 w-full flex flex-col items-center gap-12 font-Poppins">
      <div className="flex gap-8">
        <button className="text-sm h-12.5 font-semibold mb-8 w-75 bg-[#FF7300] text-black rounded-xl">
          Hot Topics
        </button>

        <ul className="space-y-4 text-gray-700 text-md flex gap-20">
          <li className="border-t-2 border-t-[#00338D] pt-2">
            Parliament Introduces Income Tax Bill to Reshape India’s Direct Tax
            Landscape
          </li>
          <li className="border-t-2 border-t-[#00338D] pt-2">
            Indian Export Earnings at Risk as U.S. Tariffs Double to 50%
          </li>
          <li className="border-t-2 border-t-[#00338D] pt-2">
            India Eases Select BIS Norms While Tightening Overall Standards
            Enforcement
          </li>
          <li className="border-t-2 border-t-[#00338D] pt-2">
            India Modernizes Maritime Law with Carriage of Goods by Sea Bill,
            2025
          </li>
        </ul>
      </div>
    </section>
  );
}
