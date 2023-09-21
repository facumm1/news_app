import React from 'react';
import {ArticleTypes} from '../../types';
import NoResultsError from '../Error/NoResultsError';
import NewsArticleContainer from '../NewsArticleContainer';

type Props = {
  newsData: ArticleTypes[];
};

const NewsCond: React.FC<Props> = ({newsData}) => {
  return newsData ? (
    newsData.map((articleData: ArticleTypes) => {
      return (
        <NewsArticleContainer key={articleData.id} articleData={articleData} />
      );
    })
  ) : (
    <NoResultsError />
  );
};

export default NewsCond;
