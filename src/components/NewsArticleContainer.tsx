import React from 'react';

import NewsArticle from './Button/NewsArticle';
import {ArticleTypes} from '../types/ArticleTypes';
import {formatDate, trimTitle, truncText} from '../util';
import {unknownPic} from '../util/mock';

const NewsArticleContainer: React.FC<{articleData: ArticleTypes}> = ({
  articleData,
}) => {
  const {title, publishedAt, urlToImage} = articleData;

  const articleDate = formatDate(publishedAt);
  const shortTitle = trimTitle(title);
  const newTitle = truncText(title, '-');
  const articleImg = urlToImage ? urlToImage : unknownPic;

  const data = {
    ...articleData,
    title: newTitle,
    shortTitle,
    publishedAt: articleDate,
    urlToImage: articleImg,
  };

  return <NewsArticle {...data} />;
};

export default NewsArticleContainer;
