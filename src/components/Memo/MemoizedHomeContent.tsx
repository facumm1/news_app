import React from 'react';
import NewsMap from '../NewsMap';
import SearchedNewsMap from '../SearchedNewsMap';

export const MemoizedSearchNewsMap = React.memo<{keywordToSearch: string}>(
  ({keywordToSearch}) => <SearchedNewsMap keywordToSearch={keywordToSearch} />,
);

export const MemoizedNewsMap = React.memo(() => <NewsMap />);
