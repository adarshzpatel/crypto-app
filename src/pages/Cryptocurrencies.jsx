import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Title from "../components/Title";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(data?.data?.coins);
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <div className={simplified ? "" : "p-4 lg:p-8 mb-4"}>
        <div className="flex justify-between">
          {!simplified && (
            <Title>Cryptocurrencies</Title>)}

          {!simplified && (
            <div className="mb-4 focus:outline-none border-gray-500 rounded ">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search coins.."
                className="rounded-md  py-1"
              />
            </div>
          )}
        </div>

          <p className='text-xs text-gray-600'>*Click on the coin name to view details.</p>
        <div className="rounded-lg overflow-hidden">
          <table className="w-full divide-y divide-gray-300 shadow-lg">
            <thead className="bg-blue-600  text-white overflow-x-scroll scrollbar-w-2">
              <tr>
                <th
                  scope="col"
                  className="px-2 md:px-4 lg:px-6 py-2 text-left text-xs font-medium uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-2 md:px-4 lg:px-6 py-2 text-left text-xs font-medium uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-2 md:px-4 lg:px-6 py-2 text-center text-xs font-medium uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-2 md:px-4 lg:px-6 py-2 text-center text-xs font-medium uppercase tracking-wider"
                >
                  Daily Change
                </th>
                <th
                  scope="col"
                  className="px-2 md:px-4 lg:px-6 py-2 text-center text-xs font-medium  uppercase tracking-wider"
                >
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 overflow-x-scroll scrollbar-w-2 ">
              {cryptos?.map((coin) => (
                <tr key={coin.uuid} className=" ">
                  {/* Rank */}
                  <td className="px-2 md:px-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-full text-sm lg:text-lg font-medium">
                        {coin.rank}.
                      </div>
                    </div>
                  </td>
                  {/*Name & Icon */}
                  <td className="px-2 md:px-4 py-2 ">
                    <Link
                      to={`/crypto/${coin.id}`}
                      as="div"
                      className="flex items-center justify-start"
                    >
                      <div className="flex-shrink-0 h-full">
                        <img
                          className="h-8 w-8 lg:h-10 lg:w-10 rounded-full overflow-hidden object-center object-contain "
                          src={coin.iconUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-4 lg:whitespace-nowrap w text-sm lg:text-base">
                        <div className="font-medium text-gray-900">
                          {coin.name}
                        </div>
                        <div className=" font-medium text-xs md:text-sm text-gray-500">
                          {coin.symbol}
                        </div>
                      </div>
                    </Link>
                  </td>
                  {/* Price */}
                  <td className="px-2 md:px-4 py-2 text-gray-800 text-sm md:text-base  font-medium text-center">
                    <div>${millify(coin.price)}</div>
                  </td>
                  <td className="px-2 md:px-4 py-2 font-medium  text-sm md:text-base text-center">
                    <div
                      className={
                        coin.change < 0 ? "text-red-500" : "text-green-500"
                      }
                    >
                      {millify(coin.change)}%
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-2 text-gray-800 text-sm md:text-base font-medium text-center">
                    <div>${millify(coin.marketCap)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cryptocurrencies;
