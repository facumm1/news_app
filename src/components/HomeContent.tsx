import React from 'react';

import {useManageSearchResults} from '../hooks/';

import SearchBar from './Field/SearchBar';
import {
  MemoizedNewsMap,
  MemoizedSearchNewsMap,
} from './Memo/MemoizedHomeContent';

const HomeContent: React.FC = () => {
  const manageHook = useManageSearchResults();

  return (
    <>
      <SearchBar {...manageHook} />

      {!manageHook.renderSearchNews ? (
        <MemoizedNewsMap />
      ) : (
        <MemoizedSearchNewsMap keywordToSearch={manageHook.keywordToSearch} />
      )}
    </>
  );
};

export default HomeContent;
