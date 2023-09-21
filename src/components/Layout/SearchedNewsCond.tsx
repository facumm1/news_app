import React from 'react';
import {ArticleTypes} from '../../types';
import NewsArticleContainer from '../NewsArticleContainer';
import NoResultsError from '../Error/NoResultsError';

type Props = {
  searchedData: ArticleTypes[];
};

const SearchedNewsCond: React.FC<Props> = ({searchedData}) => {
  const renderData = searchedData === undefined;

  return !renderData ? (
    searchedData.map((articleData: ArticleTypes) => (
      <NewsArticleContainer key={articleData.id} articleData={articleData} />
    ))
  ) : (
    <NoResultsError />
  );
};

export default SearchedNewsCond;
