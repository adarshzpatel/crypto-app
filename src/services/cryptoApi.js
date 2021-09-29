import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "69049f0243mshee4045759391c7cp1d41b1jsn0c54c10e6469",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });



export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
    getCryptoExchanges: builder.query({
      query: () => createRequest(`/exchanges`),
    })
  }),
});

export const { useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetCryptoExchangesQuery } = cryptoApi;
