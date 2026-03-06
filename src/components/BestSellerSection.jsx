import Link from "next/link";
import React from "react";

export const BestSellerSection = () => {
  return (
    <section className="bg-[#0f1115] py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[150px]"></div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
              Top Picks of the Month
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Best Sellers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                Products This Week
              </span>
            </h2>
          </div>
          <Link
            href="/allbikes"
            className="text-gray-400 hover:text-orange-500 font-semibold transition-colors flex items-center gap-2 group"
          >
            View All Collection
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Featured Card (Spans 5 columns) */}
        <div className="lg:col-span-5 group relative bg-gradient-to-br from-zinc-900 to-black border border-gray-800 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden shadow-2xl h-[500px]">
          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="relative z-10">
            <div className="bg-orange-600 text-[10px] font-bold text-white px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-widest">
              World's Fastest
            </div>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              KAWASAKI <br /> NINJA H2R <br /> 2024 EDITION
            </h3>
            <p className="text-gray-400 mb-8 max-w-[250px] font-medium leading-relaxed">
              Experience 310 horsepower of pure adrenaline. The pinnacle of supercharged
              engineering.
            </p>
          </div>

          <Link
            href="/allbikes"
            className="relative z-10 bg-white text-black font-bold py-4 px-8 rounded-2xl w-fit shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 transform active:scale-95"
          >
            Explore Performance
          </Link>

          {/* Decorative Pattern */}
          <div className="absolute -bottom-10 -right-10 opacity-20">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="gray">
              <path
                d="M0 0 L100 100 M20 0 L100 80 M40 0 L100 60 M60 0 L100 40 M80 0 L100 20"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        {/* Right Showcase Card (Spans 7 columns) */}
        <div className="lg:col-span-7 group relative bg-[#1a1d23] border border-gray-800 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden transition-all duration-500 hover:border-orange-500/30">
          <div className="flex-1 z-10 text-center md:text-left">
            <div className="inline-block bg-orange-500/10 text-orange-500 text-[10px] font-bold px-3 py-1 rounded-full mb-6 border border-orange-500/20 uppercase tracking-widest">
              Supercharged Engine
            </div>
            <h3 className="text-3xl font-black text-white mb-4 transition-colors">
              Kawasaki <br /> Ninja H2 ABS
            </h3>
            <p className="text-gray-400 mb-6 max-w-[280px] leading-relaxed">
              998cc supercharged inline-four, Brembo Stylema calipers, and street-legal dominance.
            </p>

            {/* Quick Specs Table */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-left max-w-[250px] mx-auto md:mx-0 border-t border-gray-800 pt-4">
              <div>
                <p className="text-[10px] text-gray-500 uppercase">Power</p>
                <p className="text-sm font-bold text-white">228 HP</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase">Top Speed</p>
                <p className="text-sm font-bold text-white">209 MPH</p>
              </div>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start">
              <Link
                href="/allbikes"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-xl shadow-orange-500/20 active:scale-95"
              >
                Pre-Order Now
              </Link>
            </div>
          </div>

          <div className="flex-1 relative mt-12 md:mt-0 flex justify-center items-center">
            {/* Soft Shadow behind bike */}
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[80px]"></div>

            <img
              src="./kawasaki.avif"
              alt="Kawasaki Ninja H2R"
              className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
