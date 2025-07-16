import React from "react";

interface Benefit {
  title: string;
  description: string;
}

import { FaRegStar } from "react-icons/fa";

const BenefitCard: React.FC<Benefit> = ({ title, description }) => (
  <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-6 transition-transform transform hover:shadow-xl duration-300 flex flex-row items-center text-left border border-orange-100 w-full gap-6">
    <div className="flex-shrink-0 bg-orange-100 rounded-full p-4 shadow-md flex items-center justify-center">
      <FaRegStar className="text-orange-500 text-3xl" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-800 mb-1 drop-shadow-sm">
        {title}
      </h3>
      <p className="text-gray-600 text-base mb-0">{description}</p>
    </div>
  </div>
);

export default BenefitCard;
