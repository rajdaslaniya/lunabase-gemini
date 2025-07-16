"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white/90 backdrop-blur-lg shadow-2xl rounded-r-2xl border-r border-orange-100 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-extrabold text-orange-500 tracking-tight">
              Restaurant
            </h3>
            <button
              className="text-orange-400 hover:text-orange-600 text-3xl font-bold cursor-pointer"
              onClick={onClose}
              aria-label="Close Sidebar"
            >
              &times;
            </button>
          </div>
          <nav className="flex-1">
            <ul className="flex flex-col gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
              ].map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`block text-lg font-semibold px-2 py-2 rounded transition-colors relative group${isActive ? " text-orange-500" : " text-gray-700 hover:text-orange-500"}`}
                      onClick={onClose}
                    >
                      {label}
                      <span className={`absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300 ${isActive ? "w-[90%]" : "w-0 group-hover:w-[90%]"}`}></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-3 mt-8">
              <button
                className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-200 outline-none cursor-pointer"
                onClick={() => {
                  onClose();
                  handleLogin();
                }}
              >
                Login
              </button>
              <button
                className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-200 outline-none cursor-pointer"
                onClick={() => {
                  onClose();
                  handleSignup();
                }}
              >
                Signup
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
