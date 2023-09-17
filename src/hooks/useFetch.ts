import axios from 'axios';
import {useEffect, useState} from 'react';

const topHeadlines = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&category=business&apiKey=${apiKey}`;
const everything = `https://newsapi.org/v2/everything?&apiKey=${apiKey}`;

const useFetch = () => {
  const [response, setResponse] = useState({
    data: [],
    isLoading: true,
  });

  const fetchNews = async () => {
    try {
      const res = await axios.get(topHeadlines);
      setResponse({data: res.data.articles, isLoading: false});
    } catch (err) {
      console.warn('Error fetching: ', err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return response;
};

export default useFetch;
