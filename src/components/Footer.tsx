import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="bg-gray-200 py-4 mt-auto">
    <div className="container">
      <ul className="flex justify-start space-x-4">
        <li>
          <Link href="/terms" className="text-gray-600 hover:text-gray-800">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-gray-600 hover:text-gray-800">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact Information
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
