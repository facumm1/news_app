import React from 'react';
import {useSelector} from 'react-redux';

import {ArticleTypes, NewsSliceTypes} from '../types';
import Loader from './Loader/Loader';
import NewsArticleContainer from './NewsArticleContainer';
import NoResultsError from './Error/NoResultsError';

const NewsMap: React.FC = () => {
  const {newsData: data, isLoading} = useSelector(
    (state: NewsSliceTypes) => state.newsData,
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : data ? (
        data.map((articleData: ArticleTypes, index: number) => (
          <NewsArticleContainer key={index} articleData={articleData} />
        ))
      ) : (
        <NoResultsError />
      )}
    </>
  );
};

export default NewsMap;
