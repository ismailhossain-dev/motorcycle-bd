"use client";
import { postUser } from "@/action/server/auth";
import React, { useState } from "react";
//action/server/auth.js er mardome database data patano hoytese
const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const RegisterInfo = {
      name,
      email,
      password,
    };

    const result = await postUser(RegisterInfo);
  };

  const inputStyle = `w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-black`;

  const labelStyle = `block text-sm font-semibold text-gray-700 mb-1`;
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl border border-gray-100">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Sign Up</h1>
          <p className="text-gray-500 mt-2">Join us today! It only takes a minute.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className={labelStyle}>Full Name</label>
            <input
              type="text"
              name="name"
              required
              className={inputStyle}
              placeholder="Enter yourn name"
            />
          </div>

          {/* Email */}
          <div>
            <label className={labelStyle}>Email Address</label>
            <input
              type="email"
              name="email"
              required
              className={inputStyle}
              placeholder="name@company.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className={labelStyle}>Password</label>
            <input
              type="password"
              name="password"
              required
              className={inputStyle}
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-indigo-200 transition-all transform active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <a href="/login" className="ml-1 text-indigo-600 font-semibold hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
