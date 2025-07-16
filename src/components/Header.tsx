"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onToggleSidebar?: () => void; // optional if no sidebar used
}
const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-orange-100 shadow-lg transition-all">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-2xl font-extrabold text-orange-500 whitespace-nowrap tracking-tight drop-shadow">
          <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="url(#orangeGrad)"/>
            <defs>
              <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          <Link href="/" className="hover:text-orange-600 transition-colors">Restaurant</Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="flex-1 hidden md:flex justify-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="relative text-gray-700 hover:text-orange-500 font-medium px-2 transition-colors duration-200 group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right: Login/Signup */}
        <div className="hidden md:flex gap-3">
          <button
            className="bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-200 outline-none"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-200 outline-none"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>

        {/* Mobile Hamburger (optional) */}
        {onToggleSidebar && (
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={onToggleSidebar}
            aria-label="Open Sidebar"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
