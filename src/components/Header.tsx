"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleLogin = () => {
    router.push("/login");
    setMobileOpen(false);
  };

  const handleSignup = () => {
    router.push("/signup");
    setMobileOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-orange-100 shadow-xl transition-all">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 text-2xl font-extrabold text-orange-500 whitespace-nowrap tracking-tight drop-shadow">
            <svg
              className="w-8 h-8 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="url(#orangeGrad)"
              />
              <defs>
                <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Restaurant
            </Link>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex-1 hidden md:flex justify-center gap-10">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
            ].map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`relative text-gray-700 hover:text-orange-500 font-medium px-2 transition-colors duration-200 group${
                    isActive ? " text-orange-500" : ""
                  }`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Login/Signup */}
          <div className="hidden md:flex gap-4">
            <button
              className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 focus:ring-4 focus:ring-orange-200 text-white font-bold py-2.5 px-7 rounded-full shadow-lg transition-all duration-200 outline-none transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2.5 px-7 rounded-full shadow-lg transition-all duration-200 outline-none transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>

          {/* Mobile Hamburger (optional) */}
          {/* Hamburger always visible on mobile */}
          <button
            className="md:hidden text-orange-500 hover:text-orange-600 p-2 rounded-full border border-orange-100 shadow transition-transform duration-200 hover:scale-110 cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open Menu"
          >
            <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </button>

          {/* Mobile Sidebar Drawer */}
        </div>
      </header>
      <Sidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;
