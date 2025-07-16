import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="backdrop-blur bg-white/70 border-t border-orange-100 shadow-t-lg py-6 mt-auto">
    <div className="container mx-auto px-4">
      <ul className="flex flex-wrap justify-center gap-6">
        {[
          { href: "/terms", label: "Terms of Service" },
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/contact", label: "Contact Information" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="relative text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 px-2 group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-center text-xs text-gray-400 mt-2">&copy; {new Date().getFullYear()} Restaurant. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
