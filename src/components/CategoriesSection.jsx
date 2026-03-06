import React from "react";

export const CategoriesSection = async () => {
  const res = await fetch("http://localhost:3000/api/allBikes");
  const bikes = await res.json();

  // Unique categories collect korchi
  const singleCategory = [...new Set(bikes.map((bike) => bike.category))];

  return (
    <section className="bg-[#0f1115] text-white py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-3">
            Exploration
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Bike <span className="text-orange-600">Categories</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-orange-600 rounded-full"></div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {singleCategory.map((category, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1d23] border border-gray-800 rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-2"
            >
              {/* Category Icon Placeholder/Decoration */}
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:bg-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.59 10.37m6 4a14.94 14.94 0 0 1-9.75 3.51"
                  />
                </svg>
              </div>

              {/* Category Title */}
              <h3 className="font-black text-lg uppercase tracking-wider text-white mb-2">
                {category}
              </h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                Explore our premium collection of {category.toLowerCase()} bikes.
              </p>

              {/* Action Button */}
              <button className="mt-auto w-full py-3 bg-gray-800 text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                Discover
              </button>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
