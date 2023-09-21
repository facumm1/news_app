import React from 'react';

import NewsArticle from './Button/NewsArticle';
import {ArticleTypes} from '../types/ArticleTypes';
import {formatDate, trimTitle, truncText} from '../util';
import {unknownPic} from '../util/mock';
import {trimAuthor} from '../util/trimTitle';

const NewsArticleContainer: React.FC<{articleData: ArticleTypes}> = ({
  articleData,
}) => {
  const {author, title, publishedAt, urlToImage} = articleData;

  const articleDate = formatDate(publishedAt);
  const shortTitle = trimTitle(title);
  const newTitle = truncText(title, '-');
  const shortAuthor = trimAuthor(author);
  const articleImg = urlToImage ? urlToImage : unknownPic;

  const data = {
    ...articleData,
    title: newTitle,
    publishedAt: articleDate,
    urlToImage: articleImg,
    author: shortAuthor,
    shortTitle,
  };

  return <NewsArticle {...data} />;
};

export default NewsArticleContainer;
