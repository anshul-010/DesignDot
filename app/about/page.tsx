'use client'
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-20 py-16">
      <div className="grid grid-cols-2 gap-16 items-center">
        {/* LEFT SECTION */}
        <div className="relative">
          {/* ABOUT FIRM BOX */}
          <div className="absolute -left-10 top-0 w-40 h-40 bg-gray-200 rounded-3xl flex items-center justify-center">
            <p className="font-semibold text-lg text-black leading-tight">
              ABOUT <br /> FIRM
            </p>
          </div>

          {/* TEXT CONTENT */}
          <div className="ml-40">
            <h2 className="text-3xl font-semibold mb-4">HLS Global Group</h2>

            <p className="text-gray-600 text-sm leading-7 mb-10">
              is an international accounting and business advisory firm with a focus
              on providing superior services in the areas of accounting, tax,
              audit, advisory, and consulting. Founded in 1990, we pride ourselves
              in delivering the highest levels of quality and customer service
              while remaining cost-effective. We have grown to more than 250
              professionals serving clients in the United States, Japan, Mexico,
              India, Germany, and UAE. While catering to the business requirements
              of Japanese subsidiaries operating in the United States, Mexico,
              India, Germany, and UAE, we also provide comprehensive solutions to
              non-Japanese multinational companies operating in Japan.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h3 className="text-4xl font-bold">250+</h3>
                <p className="text-gray-600 text-sm">
                  Professional Staff <br /> Members Globally
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">1000+</h3>
                <p className="text-gray-600 text-sm">
                  Clients in the HLS <br /> Global Network
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[2px] bg-blue-900 my-8"></div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h3 className="text-4xl font-bold">35+</h3>
                <p className="text-gray-600 text-sm">
                  Years of Experience <br /> Connecting Japan
                  and the World
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">15+</h3>
                <p className="text-gray-600 text-sm">
                  Countries Covered <br /> With Our Alliance Network
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative">
          {/* LOCATION BUTTON */}
          <div className="absolute top-0 right-0 bg-orange-500 text-black px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-3">
            WE ARE LOCATED
            <span className="font-bold">INDIA ▼</span>
          </div>

          {/* IMAGE */}
          <div className="mt-12 rounded-3xl overflow-hidden">
            <Image
              src="/building.jpg"
              alt="building"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
