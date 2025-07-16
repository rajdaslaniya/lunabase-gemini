import React from "react";

interface Benefit {
  title: string;
  description: string;
}

const BenefitCard: React.FC<Benefit> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default BenefitCard;
