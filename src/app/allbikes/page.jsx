import BikeBrand from "@/components/BikeBrand";
import AllBikeCard from "@/components/Cards/AllBikeCard";

import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/allBikes");
  const allbikes = await res.json();

  //brand gola dekanore jorno function

  return (
    <div className="container mx-auto my-10 px-4">
      {/* --- Page Header Section --- */}
      <div className="flex flex-col items-center text-center mb-16 relative overflow-hidden">
        {/* Decorative Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-600/10 blur-[80px] pointer-events-none"></div>

        {/* Badge */}
        <div className="inline-flex items-center bg-blue-600/10 border border-blue-600/20 px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
          <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px]">
            The Full Inventory
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          All{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Available
          </span>{" "}
          Bikes
        </h1>

        {/* Description */}
        <p className="max-w-xl text-gray-500 text-sm md:text-base leading-relaxed">
          From high-speed sports bikes to heavy-duty cruisers, find the perfect machine that matches
          your soul. <span className="text-blue-600 font-bold">Bangladesh&apos;s</span> most trusted
          bike collection.
        </p>

        {/* Divider Line */}
        <div className="mt-8 flex items-center gap-2">
          <div className="h-[1px] w-12 bg-gray-800"></div>
          <div className="h-1.5 w-1.5 rotate-45 border border-blue-600"></div>
          <div className="h-[1px] w-12 bg-gray-800"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* --- Left Side: Category Sidebar --- */}
        <BikeBrand allbikes={allbikes} />

        {/* --- Right Side: Product Grid --- */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allbikes.map((bike) => (
              <AllBikeCard key={bike._id} bike={bike} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
