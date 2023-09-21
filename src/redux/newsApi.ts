import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import addID from '../util/addID';
import {NewsApiResponse} from '../types/NewsApiResponse';
import {NEWS_APIKEY} from '@env';

const apiKey = NEWS_APIKEY;
const baseUrl = 'https://newsapi.org/v2';

export const newsApi = createApi({
  reducerPath: 'newsFetchedData',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    fetchNews: builder.query({
      query: () =>
        `/top-headlines?country=us&pageSize=7&category=general&apiKey=${apiKey}`,
      transformResponse: (res: NewsApiResponse) => {
        const newsData = addID(res.articles);
        return newsData;
      },
    }),
    searchNewsByKeyword: builder.query({
      query: keyword => `/everything?apiKey=${apiKey}&pageSize=7&q=${keyword}`,
      transformResponse: (res: NewsApiResponse) => {
        const searchedData = addID(res.articles);
        return searchedData;
      },
    }),
  }),
});

export const {useFetchNewsQuery, useSearchNewsByKeywordQuery} = newsApi;
