import React, { useState } from "react";
import Title from "../components/Title";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loading from "../components/Loading";
import NewsCard from "../components/NewsCard";

import { useGetCryptosQuery } from "../services/cryptoApi";
const News = ({ simplified }) => {
  const [newsCategory,setNewsCategory] = useState('Cryptocurrency');
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 12 : 100,
  });
  const { data: coins } = useGetCryptosQuery(100);
  const coinOptions = coins?.data?.coins;
  const cryptoNews = data?.value;
  console.log(cryptoNews);

  if(isFetching){
      <Loading/>
  }

  return (
    <div className={simplified ? "" : "p-4 lg:p-8 mb-4"}>

    {!simplified && (
    <div className="flex justify-between items-center">
      <Title>News</Title>
          <select className='rounded-md py-1 px-2 mb-8 ' value={newsCategory} onChange={(e)=> setNewsCategory(e.target.value)} name="news-category" id="news-category">
     
            <option value='Cryptocurrency'> All </option>
            {coinOptions?.map((coin)=> <option key={coin.name} value={coin.name}>{coin.name}</option>)}

          </select>
    </div>
    )}

      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 flex-col'>
            {cryptoNews?.map((news,index)=><NewsCard key={index} name={news?.name} description={news?.description} image={news?.image?.thumbnail.contentUrl} datePublished={news?.datePublished} url={news.url} source={news.provider[0].name}/>)}
      </div>
    </div>
  );
};

export default News;
