import React from 'react';
import ArticleContent from '../Content/ArticleContent';

type Props = {
  source: string;
  content: string;
  url: string;
};

export const MemoizedArticleContent = React.memo<Props>(
  ({source, content, url}) => (
    <ArticleContent source={source} content={content} url={url} />
  ),
);
