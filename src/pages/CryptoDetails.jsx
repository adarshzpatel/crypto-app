import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { useParams } from "react-router";
import Price from "../components/CryptoDetailsPage/Price";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";

import Loading from "../components/Loading";
import LineChart from "../components/CryptoDetailsPage/LineChart";
import StatCard from "../components/StatCard";
import { Tab } from "@headlessui/react";
import {Link} from 'react-router-dom'
import {ExternalLinkIcon} from '@heroicons/react/outline'


const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);
  if (isFetching) {
    return <Loading />;
  }

  const stats = [
    { title: "Rank", value: cryptoDetails?.rank, icon: "" },
    {
      title: "24h Volume",
      value: `$${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
      icon: "",
    },
    {
      title: "Market Cap",
      value: `$${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
      icon: "",
    },
    {
      title: "All time high",
      value: `$${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: "",
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails.numberOfMarkets,
      icon: "",
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails.numberOfExchanges,
      icon: "",
    },
    {
      title: "Total Supply",
      value: `$${millify(cryptoDetails.totalSupply)}`,
      icon: "",
    },
    {
      title: "Circulating Supply",
      value: `$${millify(cryptoDetails.circulatingSupply)}`,
      icon: "",
    },
  ];

  return (
    <div className="p-8 lg:p-12 flex flex-col gap-4">
      <div className="flex gap-2 items-center ">
        <span>
          <img
            className="h-8 w-8 lg:h-10 lg:w-10 rounded-full overflow-hidden object-center object-contain "
            src={cryptoDetails.iconUrl}
            alt="coin-icon"
          />
        </span>
        <h1 className="text-3xl font-semibold ">{cryptoDetails.name}</h1>
        <span className="text-sm font-medium text-gray-700 bg-gray-300 py-1 px-2 rounded-md">
          {cryptoDetails.symbol}
        </span>
      </div>
      <hr className='border-gray-300'/>
      {/* Stats */}
  
        <Price price={cryptoDetails.price} change={cryptoDetails.change} />
   
      <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
        <h2 className="uppercase tracking-wider font-medium text-gray-500  col-span-2 md:col-span-4">
          STATS
        </h2>
        {stats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
        {genericStats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </div>
      {/* Tabs */}
      
      <Tab.Group as='div' className='my-4 shadow-xl bg-white rounded-lg p-4' defaultIndex={1}>
        <Tab.List className='flex justify-around gap-1 shadow-inner bg-gray-200  p-1 rounded-lg mb-4'>
          <Tab className={({ selected }) =>
            selected ? 'activeTab' : 'tab'
          }>Price Chart</Tab>
          <Tab className={({ selected }) =>
           selected ? 'activeTab' : 'tab'
          }>About</Tab>
          <Tab className={({ selected }) =>
           selected ? 'activeTab' : 'tab'
          }>Links</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel> 
            {coinHistory && (
          <LineChart
            coinHistory={coinHistory}
            color={cryptoDetails.color}
            setTimePeriod={setTimePeriod}
            timePeriod={timePeriod}
          />
        )}</Tab.Panel>
          <Tab.Panel><div className='py-4' id='crypto-description'>{HTMLReactParser(cryptoDetails.description)}</div></Tab.Panel>
          <Tab.Panel>
            <div className='space-y-4'>
            {cryptoDetails.links.map(link=>(
            <Link className='text-blue-600 hover:text-blue-500 flex items-center gap-2' to={link.url}>{link.name}<ExternalLinkIcon className='h-5 w-5 '/><span className='text-gray-600'>({link.type})</span></Link>
            ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>


    
 
    </div>
  );
};

export default CryptoDetails;
