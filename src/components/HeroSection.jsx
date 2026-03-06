import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="bg-[#111111] text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-gray-400 mb-3">New Arrival 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            The Motorcycle <br /> Revolution
          </h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Discover the latest trend of high performance motorcycle with next‑level speed, design
            and durability.
          </p>
          <div className="flex gap-4">
            <Link href="/allbikes" className="btn flex items-center justify-center">
              Shop Now
            </Link>
            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              Explore Models
            </button>
          </div>
        </div>

        <div className=" rounded-2xl p-6 flex items-center justify-center">
          <img
            src="/R15.avif"
            alt="bike"
            className="w-auto max-w-md object-contain h-130 rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
};
