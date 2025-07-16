"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";

const Header: React.FC = ({}) => {
  const router = useRouter();
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-gray-800 hover:text-gray-600 whitespace-nowrap">
          <Link href="/">Restaurant</Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="flex-1 hidden md:flex justify-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Services
          </Link>
        </nav>

        {/* Right: Login/Signup */}
        <div className="hidden md:flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>

        {/* Mobile Hamburger (optional) */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={() => setToggleSidebar(true)}
          aria-label="Open Sidebar"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        </button>
        <Sidebar
          isOpen={toggleSidebar}
          onClose={() => setToggleSidebar(false)}
        />
      </div>
    </header>
  );
};

export default Header;
