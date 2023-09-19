import axios from 'axios';
import {useEffect, useState} from 'react';
import addID from '../util/addID';
import {ArticleTypes} from '../types/ArticleTypes';

const apiKey = '';
const topHeadlines = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&category=business&apiKey=${apiKey}`;
//const everything = `https://newsapi.org/v2/everything?&apiKey=${apiKey}`;

interface ResponseTypes {
  data: ArticleTypes[];
  isLoading: boolean;
}

export interface useFetchHook extends ResponseTypes {
  selectFavourite: (id: string) => void;
}

const useFetch = (): useFetchHook => {
  const [response, setResponse] = useState<ResponseTypes>({
    data: [],
    isLoading: true,
  });

  const fetchNews = async () => {
    try {
      const res = await axios.get(topHeadlines);

      const newsData = addID(res.data.articles);

      setResponse({data: newsData, isLoading: false});
    } catch (err) {
      console.warn('Error fetching: ', err);
    }
  };

  const selectFavourite = (id: string) => {
    setResponse(prevResp => {
      const updatedData = prevResp.data.map((article: ArticleTypes) => {
        if (article.id === id) {
          return {...article, isFavourite: !article.isFavourite}; // Actualiza la propiedad isFavourite
        }
        return article;
      });

      return {...prevResp, data: updatedData};
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const {data, isLoading} = response;

  return {data, isLoading, selectFavourite};
};

export default useFetch;
