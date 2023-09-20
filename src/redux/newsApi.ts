import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import addID from '../util/addID';
import {NewsApiResponse} from '../types/NewsApiResponse';

const apiKey = '';
const baseUrl = 'https://newsapi.org/v2';

export const newsApi = createApi({
  reducerPath: 'newsFetchedData',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: builder => ({
    fetchNews: builder.query({
      query: () =>
        `/top-headlines?country=us&pageSize=8&category=health&apiKey=${apiKey}`,
      transformResponse: (res: NewsApiResponse) => {
        console.log(res);
        const newsData = addID(res.articles);
        return newsData;
      },
    }),
  }),
});

export const {useFetchNewsQuery} = newsApi;
