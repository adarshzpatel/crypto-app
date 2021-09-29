import React from "react";
import StatCard from "../components/StatCard";
import Title from "../components/Title";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import {Cryptocurrencies,News} from './index' 
import Loading from "../components/Loading";
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);
  
  if (isFetching) {
    return (
      <Loading/>
    );
  }

  if(!isFetching){
    const globalStats = data?.data?.stats;
    return (
      <div className='p-4 lg:p-8 '>
      <Title>Global Crypto Stats</Title>
      <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
        <StatCard title='Total Cryptocurrencies' value={globalStats?.total}/>
        <StatCard title='Total Exchanges' value={globalStats?millify(globalStats?.totalExchanges):0}/>
        <StatCard title='Total Market Cap' value={globalStats?millify(globalStats?.totalMarketCap):0}/>
        <StatCard title='Total 24h Volume' value={globalStats?millify(globalStats?.total24hVolume):0}/>
        <StatCard title='Total Markets' value={globalStats?.totalMarkets}/>
      </div>
      <div className="pt-8 mb-4 flex justify-between items-center">
        <h3 className='text-xl font-semibold'>Top 10 Cryptocurrencies in the world</h3>
        <h4 className='text-blue-600 hover:text-blue-700  hover:font-medium'><Link to='/cryptocurrencies'>Show More</Link></h4>
      </div>
      <Cryptocurrencies simplified/>
      <div className="pt-8 mb-4 flex justify-between items-center">
        <h3 className='text-xl font-semibold'>Latest Crypto News</h3>
      <h4 className='text-blue-600 hover:text-blue-700 hover:font-medium'><Link to='/news'>Show More</Link></h4>
      </div>
      <News simplified/>
    </div>
  );
}
};

export default Homepage;
