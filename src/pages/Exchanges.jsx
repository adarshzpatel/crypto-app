import React, { Fragment } from "react";
import Title from "../components/Title";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import Loading from "../components/Loading";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import HTMLReactParser from "html-react-parser";
import millify from "millify";

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  const exchanges = data?.data?.exchanges;
  console.log(exchanges);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <Title> Exchanges</Title>
      <div className="flex flex-col gap-2 ">
        {exchanges.map((exchange) => (
          <Disclosure
            as="div"
            className="bg-white rounded-lg"
            key={exchange.id}
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex  rounded-lg justify-between w-full px-4 py-4 font-medium text-left text-gray-900 bg-white focus:outline-none shadow hover:shadow-xl hover:z-10">
                  <div className="flex gap-2 items-center">
                    {exchange?.rank}.
                    <img
                      src={exchange.iconUrl}
                      alt="icon-url"
                      className="h-6 w-6"
                    />
                    {exchange?.name}
                  </div>

                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-6 h-6 transition-all text-blue-600`}
                  />
                </Disclosure.Button>
                <Transition
                  as={Fragment}
                  enter="transition-all transform ease-in-out duration-200"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition-all ease-in-out transform duration-300"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-4"
                >
                  <Disclosure.Panel className="px-4  pt-4 pb-2 text-sm rounded-lg text-gray-500">
                    <div>
                      <p className="font-medium">
                        24h Trade Volume :{" "}
                        <span className="text-gray-900">
                          {millify(exchange.volume)}
                        </span>
                      </p>
                      <p className="font-medium">
                        Markets :{" "}
                        <span className="text-gray-900">
                          {exchange.numberOfMarkets}
                        </span>
                      </p>
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
