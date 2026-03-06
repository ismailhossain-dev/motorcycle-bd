"use client";
import React from "react";
import { Eye, Trash2 } from "lucide-react";

const ManageBikesTable = ({ bike, index }) => {
  return (
    <tr className="hover:bg-base-100 transition-colors">
      <th>{index + 1}</th>

      {/* Bike Image & Name */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={bike.image} alt={bike.name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{bike.name}</div>
            <div className="text-sm opacity-50">{bike.color}</div>
          </div>
        </div>
      </td>

      {/* Brand & Category */}
      <td>
        <span className="badge badge-ghost badge-sm font-semibold">{bike.brand}</span>
        <br />
        <span className="text-xs">{bike.category}</span>
      </td>

      {/* Price */}
      <td className="font-medium text-success">{bike.price}</td>

      {/* Action Buttons */}
      <td>
        <div className="flex items-center justify-center gap-3 my-3">
          {/* View Button */}
          <button
            className="btn btn-ghost btn-xs text-info hover:bg-info/10"
            // onClick={() => console.log("Viewing:", bike.name)}
            title="View Details"
          >
            <Eye size={18} />
            <span className="hidden lg:inline">View</span>
          </button>

          {/* Delete Button */}
          <button
            className="btn btn-ghost btn-xs text-error hover:bg-error/10"
            // onClick={() => onDelete(bike._id)}
            title="Delete Bike"
          >
            <Trash2 size={18} />
            <span className="hidden lg:inline">Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageBikesTable;
