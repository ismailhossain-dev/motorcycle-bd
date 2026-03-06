import ManageBikesTable from "@/components/ManageBikesTable";
import React from "react";

const ManageBikes = async () => {
  const res = await fetch("http://localhost:3000/api/allBikes");
  const bikes = await res.json();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage All Bikes</h2>

      <div className="overflow-x-auto w-full rounded-xl border border-base-300 shadow-sm">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Bike Info</th>
              <th>Brand & Category</th>
              <th>Price</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bikes?.map((bike, index) => (
              <ManageBikesTable key={bike._id} bike={bike} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBikes;
