"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  Menu,
  X,
  LogOut,
  Bike,
  // ChevronRight,
  Bell,
} from "lucide-react";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Users", href: "/dashboard/users", icon: <Users size={20} /> },
    { name: "Settings", href: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  const NavLink = ({ item }) => {
    const isActive = pathname === item.href;
    return (
      <Link
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
          isActive
            ? "bg-green-600 text-white shadow-lg shadow-green-600/30 translate-x-1"
            : "text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-slate-800 hover:text-green-600 dark:hover:text-green-400"
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`${isActive ? "text-white" : "text-gray-400 group-hover:text-green-600 transition-colors"}`}
          >
            {item.icon}
          </span>
          <span className="font-semibold text-sm">{item.name}</span>
        </div>
        {/* {isActive && <ChevronRight size={14} className="animate-pulse" />} */}
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300">
      {/* --- MOBILE OVERLAY --- */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm lg:hidden transition-all duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* --- FIXED SIDEBAR --- */}
      <aside
        className={`
          fixed top-0 left-0 z-[70] h-screen w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 
          transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          lg:translate-x-0 ${isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Brand Header */}
          <div className="p-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2.5 bg-green-600 rounded-xl text-white shadow-lg shadow-green-600/40 group-hover:rotate-12 transition-transform">
                <Bike size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-xl font-black tracking-tighter text-slate-800 dark:text-white uppercase italic">
                Bike<span className="text-green-600">Portal</span>
              </h2>
            </Link>
          </div>

          {/* Navigation Scrollable Area */}
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
            <div className="mb-4 px-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Main Menu
              </p>
            </div>
            {menuItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          {/* Bottom Profile/Logout */}
          <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-all duration-200 font-bold text-sm">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
        {" "}
        {/* lg:pl-72 ensures content doesn't go under fixed sidebar */}
        {/* Top Header (Professional Desktop & Mobile) */}
        <header className="sticky top-0 z-40 flex h-20 items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 md:px-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-green-100 hover:text-green-600 transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Header Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200 dark:border-slate-800 mx-1 hidden md:block"></div>
          </div>
        </header>
        {/* Page Content */}
        <main className="p-4 md:p-8 lg:p-10 animate-in fade-in duration-700">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
