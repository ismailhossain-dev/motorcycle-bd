import BikeBrand from "@/components/BikeBrand";
import AllBikeCard from "@/components/Cards/AllBikeCard";

import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/allBikes");
  const allBooks = await res.json();
  // console.log(allBooks);
  //brand gola dekanore jorno function

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* --- Left Side: Category Sidebar --- */}
        <BikeBrand allBooks={allBooks} />

        {/* --- Right Side: Product Grid --- */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBooks.map((bike) => (
              <AllBikeCard key={bike._id} bike={bike} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
