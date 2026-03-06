import AllBikeSkeleton from "@/components/skeleton/AllBikeSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid my-5 grid-cols-4 my-5 gap-5">
      {[...Array(12)].map((_, index) => (
        <AllBikeSkeleton key={index}></AllBikeSkeleton>
      ))}
    </div>
  );
};

export default loading;
