"use client";
import React from "react";
import { Eye, Trash2, Edit3 } from "lucide-react";

const ManageBikesTable = ({ bike, index }) => {
  return (
    <tr className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-all group">
      {/* Index */}
      <th className="pl-6 text-gray-400 font-medium">{index + 1}</th>

      {/* Bike Info */}
      <td className="py-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="mask mask-squircle w-14 h-14 bg-gray-100 dark:bg-gray-800">
              <img
                src={bike.image}
                alt={bike.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-gray-800 dark:text-gray-100 text-base">{bike.name}</div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                {bike.color}
              </span>
            </div>
          </div>
        </div>
      </td>

      {/* Brand & Category */}
      <td>
        <div className="flex flex-col gap-1">
          <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold w-fit uppercase">
            {bike.brand}
          </span>
          <span className="text-xs text-gray-400 ml-1">{bike.category}</span>
        </div>
      </td>

      {/* Price */}
      <td>
        <div className="text-lg font-bold text-orange-600">
          ${Number(bike.price).toLocaleString()}
        </div>
      </td>

      {/* Actions */}
      <td className="pr-6">
        <div className="flex items-center justify-end gap-2">
          {/* Edit/View Button */}
          <button
            className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            title="Edit"
          >
            <Edit3 size={16} />
          </button>

          {/* Delete Button */}
          <button
            className="p-2.5 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageBikesTable;
