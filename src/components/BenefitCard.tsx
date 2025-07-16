import React from "react";

interface Benefit {
  title: string;
  description: string;
}

import { FaRegStar } from "react-icons/fa";

const BenefitCard: React.FC<Benefit> = ({ title, description }) => (
  <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 flex flex-col items-center text-center border border-orange-100">
    <div className="bg-orange-100 rounded-full p-3 mb-4 shadow-md">
      <FaRegStar className="text-orange-500 text-2xl" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2 drop-shadow-sm">
      {title}
    </h3>
    <p className="text-gray-600 text-base mb-1">{description}</p>
  </div>
);

export default BenefitCard;
