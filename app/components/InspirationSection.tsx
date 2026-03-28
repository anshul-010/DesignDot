import Image from "next/image";
import React from "react";

const InspirationSection = () => {
  const steps = [
    {
      title: "Pre-market Entry",
      description:
        "Pro-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads.",
      isActive: true,
    },
    {
      title: "Market Entry",
      description:
        "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning.",
    },
    {
      title: "Operations",
      description:
        "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction.",
    },
    {
      title: "Growth & Expansion",
      description:
        "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage.",
    },
  ];

  return (
    <section className="w-full mx-auto p-8 bg-white font-Poppins">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="">
          <div className="bg-gray-100 rounded-2xl p-8 h-40 flex items-center justify-center w-56">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 leading-tight">
              INSPIRATION & <br /> INSIGHTS
            </h2>
          </div>
        </div>

        {/* Middle Content List */}
        <div className="lg:w-2/5 space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-6 last:border-0"
            >
              <h3
                className={`text-lg font-bold mb-2 ${step.isActive ? "text-blue-900" : "text-gray-900"}`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${step.isActive ? "text-blue-800 font-medium" : "text-gray-600"}`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:w-2/5 flex gap-4 h-125">
          <div className="relative flex-2 rounded-3xl overflow-hidden group">
            <Image
              src="/coins.jpg"
              alt="Pre-Market"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
            <div className="absolute bottom-0 p-6 text-white">
              <h4 className="font-bold text-xl mb-2">Pre-Market</h4>
              <p className="text-xs opacity-90 leading-snug">
                Evaluating Supply Chain Readiness Before Committing Capital in
                Emerging Markets
              </p>
            </div>
          </div>

          <div className="relative flex-1 rounded-3xl overflow-hidden bg-slate-900">
            <Image
              src="/card1.jpg"
              alt="Operations"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 768px) 50vw, 15vw"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-12 pointer-events-none">
              <span className="-rotate-90 origin-center whitespace-nowrap text-white font-bold text-lg tracking-wide">
                Operations
              </span>
            </div>
          </div>

          <div className="relative flex-1 rounded-3xl overflow-hidden bg-slate-900">
            <Image
              src="/card2.jpg"
              alt="Growth"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 768px) 50vw, 15vw"
            />
            <div className="absolute inset-0 flex items-end justify-center pb-12 pointer-events-none">
              <span className="-rotate-90 origin-center whitespace-nowrap text-white font-bold text-lg tracking-wide text-center leading-none">
                Growth &<br />
                Expansion
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
