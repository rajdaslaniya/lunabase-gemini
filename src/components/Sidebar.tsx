"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

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
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-md transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Restaurant</h3>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={onClose}
              aria-label="Close Sidebar"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
              </svg>
            </button>
          </div>
          <nav>
            <ul className="flex flex-col">
              {["Home", "About", "Services"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-800 block py-2 px-4"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded block mt-2 mx-4 cursor-pointer"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded block mt-2 mx-4 cursor-pointer"
                  onClick={handleSignup}
                >
                  Signup
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
