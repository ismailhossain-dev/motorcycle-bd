"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  const pathName = usePathname();
  console.log("hello mama", pathName);
  return (
    <nav className="bg-[#111111] text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 1. Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold flex items-center">
              B<span className="w-2 h-2 bg-orange-600 rounded-full mt-2"></span>ike
            </h1>
          </Link>
        </div>

        {/* 2. Desktop Search (Hidden on Mobile) */}
        <div className="hidden md:flex flex-grow max-w-xs lg:max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-md focus:outline-none"
            />
            <button className="absolute right-3 top-2.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 3. Desktop Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6 text-gray-300 font-medium">
          {/* <Link href="/bikes" className="hover:text-white transition">
            Bikes
          </Link> */}
          <Link
            href="/allBooks"
            className={`py-2 px-5 rounded-md font-medium transition-all duration-300 ${
              pathName === "/allBooks"
                ? "bg-orange-500 text-white shadow-lg "
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            Shop
          </Link>
          <Link href="#" className="hover:text-white transition">
            About
          </Link>

          {user ? (
            <div className="relative ml-4">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full border-2 border-orange-600 overflow-hidden focus:outline-none"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button
                    onClick={() => setUser(null)}
                    className="w-full text-left block px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3 ml-4">
              <Link href="#" className="px-4 py-2 hover:text-white">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-700"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* 4. Mobile Menu Button (Visible on Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 5. Mobile Sidebar/Menu (Toggle) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#1a1a1a] rounded-lg p-4 space-y-4 border-t border-gray-800">
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#2a2a2a] text-gray-300 px-4 py-2 rounded-md focus:outline-none"
            />
          </div>
          <Link href="#" className="block text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="#" className="block text-gray-300 hover:text-white">
            Shop
          </Link>
          <Link href="#" className="block text-gray-300 hover:text-white">
            About
          </Link>
          <hr className="border-gray-700" />
          {user ? (
            <>
              <Link href="#" className="block text-gray-300">
                Profile
              </Link>
              <button onClick={() => setUser(null)} className="block text-red-500">
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-center py-2 border border-gray-600 rounded-md">
                Login
              </Link>
              <Link href="/register" className="text-center py-2 bg-orange-600 rounded-md">
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
