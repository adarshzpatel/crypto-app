import React from "react";

const StatCard = ({ title, value }) => {
  return (
    <div className="grid gap-1 transition-all bg-white hover:z-10  shadow-lg transform-gpu hover:scale-105 hover:shadow-2xl p-4 rounded-md">
      <p className="text-gray-500 font-medium text-sm lg:text-base">{title?title:''}</p>
      <p className="text-3xl font-medium">{value?value:''}</p>
    </div>
  );
};

export default StatCard;
