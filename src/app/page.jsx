import { BestSellerSection } from "@/components/BestSellerSection";
import BikeCard from "@/components/Cards/BikeCard";

import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/bikes");
  const books = await res.json();
  return (
    <div>
      {/* Hero section */}
      <HeroSection />
      <FeaturesSection />
      <BestSellerSection />
      <CategoriesSection />
      {/*bike */}
      <div>
        <div className="flex flex-col items-center text-center mb-12 px-4 my-10">
          {/* Subtitle with line */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
            <h3 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm ">
              Our Product
            </h3>
            <span className="h-[2px] w-8 bg-blue-600 rounded-full"></span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Products
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-slate-500 text-sm md:text-base leading-relaxed italic">
              "Ultra-premium components, engineered by{" "}
              <span className="font-bold text-slate-800">Probike</span>. The ultimate riding
              experience. Wherever you ride, we&apos;ve got a bike for the joyrider in you."
            </p>
          </div>

          {/* Bottom Decorative Element */}
          <div className="mt-6 flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
            <div className="h-1.5 w-12 rounded-full bg-blue-100"></div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-4 ">
          {books.map((bike) => (
            <BikeCard key={bike._id} bike={bike}></BikeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
