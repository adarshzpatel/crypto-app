import React from "react";
import { TrendingDownIcon, TrendingUpIcon } from "@heroicons/react/solid";
const Price = ({ price, change }) => {
  const roundedPrice = Math.round(price * 1000) / 1000;
  return (
    <div className="flex justify-between ">
      <div>
        <h2 className="flex uppercase tracking-wider font-medium text-gray-500 mb-2">
          Price
        </h2>
        <h3 className="text-2xl md:text-4xl font-semibold">${roundedPrice}</h3>
      </div>
      <div>
        <h2 className="text-right uppercase tracking-wider  font-medium text-gray-500 mb-2">
          24h Change
        </h2>
        <h6 className="flex gap-1 font-semibold text-xl md:text-3xl  items-center ">
          <span className={change >= 0 ? "text-green-500" : "text-red-600"}>
            {change} %{" "}
          </span>
          {change >= 0 ? (
            <TrendingUpIcon className="h-8 w-8 text-green-500" />
          ) : (
            <TrendingDownIcon className="h-8 w-8 text-red-500" />
          )}
        </h6>
      </div>
    </div>
  );
};

export default Price;
