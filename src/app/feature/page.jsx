import Container from "@/components/Container";
import React from "react";

const featuredBikes = [
  {
    id: 1,
    name: "Yamaha R15 V4",
    price: "$4,500",
    image: "./R15.avif",
    tag: "Hot",
    specs: { engine: "155cc", power: "18.4 HP", mileage: "45 kmpl" },
  },
  {
    id: 2,
    name: "Kawasaki Ninja 400",
    price: "$5,200",
    image: "./kawasaki.avif",
    tag: "New",
    specs: { engine: "399cc", power: "45 HP", mileage: "25 kmpl" },
  },
  {
    id: 3,
    name: "Honda CBR 150R",
    price: "$4,100",
    image: "./honda.avif",
    tag: "Featured",
    specs: { engine: "149cc", power: "17.1 HP", mileage: "40 kmpl" },
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-hidden">
      <Container>
        <div className="container mx-auto px-4">
          {/* --- Header Section --- */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="relative">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">
                Premium Collection
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Featured <span className="text-blue-600 italic">Machines</span>
              </h2>
              <div className="absolute -left-6 top-0 w-1 h-full bg-blue-600 hidden md:block"></div>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-[280px] text-right leading-relaxed font-medium mb-4">
                Engineered for speed, designed for the bold. Explore our top-tier performance bikes.
              </p>
              <div className="px-4 py-1 border border-zinc-200 dark:border-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                / 03 Models
              </div>
            </div>
          </div>

          {/* --- Product Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBikes.map((bike) => (
              <div
                key={bike.id}
                className="group relative bg-zinc-50 dark:bg-[#0c0c0c] rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-zinc-900 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-72 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  {/* Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="bg-white/90 dark:bg-blue-600/90 backdrop-blur-md text-zinc-900 dark:text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                      {bike.tag}
                    </span>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 dark:from-[#0c0c0c] via-transparent to-transparent z-10 opacity-80"></div>

                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                </div>

                {/* Content Section */}
                <div className="p-10 relative z-20 -mt-12">
                  <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-blue-600 transition-colors duration-300 my-6">
                    {bike.name}
                  </h3>

                  {/* Specs Grid (Clean Technical Look) */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-zinc-200 dark:border-zinc-800/50">
                    {[
                      { label: "Engine", val: bike.specs.engine },
                      { label: "Power", val: bike.specs.power },
                      { label: "Mileage", val: bike.specs.mileage },
                    ].map((spec, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-[9px] uppercase text-zinc-400 dark:text-zinc-500 font-bold tracking-widest">
                          {spec.label}
                        </span>
                        <span className="text-xs font-black tracking-tight">{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Action */}
                  <div className="mt-8 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] uppercase text-zinc-400 font-bold tracking-widest mb-1">
                        Starting Price
                      </p>
                      <p className="text-3xl font-black tracking-tighter text-blue-600 dark:text-blue-500">
                        {bike.price}
                      </p>
                    </div>

                    <button className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group/btn hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-zinc-400 group-hover/btn:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
