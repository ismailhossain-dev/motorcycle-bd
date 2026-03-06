"use client";
import { postUser } from "@/action/server/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const registerInfo = { name, email, password };

    const result = await postUser(registerInfo);
    console.log("hello mama ei to ei ", result);
    // Success logic (like toast or redirect) eikhane add korte paren
  };

  // Modern Input Styling
  const inputStyle = `w-full px-4 py-3 rounded-xl border border-gray-200 
    bg-gray-50/50 text-black outline-none transition-all duration-200
    focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
    placeholder:text-gray-400 shadow-sm`;

  const labelStyle = `block text-sm font-medium text-gray-700 mb-1.5 ml-1`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create Account</h1>
          <p className="text-gray-500 mt-2 text-sm">Join our community and start your journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className={labelStyle}>Full Name</label>
            <input type="text" name="name" required className={inputStyle} placeholder="Jhon Doe" />
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
            disabled={loading}
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3.5 rounded-xl shadow-md shadow-indigo-200 transition-all transform active:scale-[0.98] mt-2 flex items-center justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              "Get Started"
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="ml-1.5 text-indigo-600 font-bold hover:text-indigo-700 hover:underline transition-all"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
