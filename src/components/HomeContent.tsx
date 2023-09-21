import React from 'react';

import {useManageSearchResults} from '../hooks/';

import NewsMap from './NewsMap';
import SearchedNewsMap from './SearchedNewsMap';
import SearchBar from './Field/SearchBar';

const HomeContent: React.FC = () => {
  const manageHook = useManageSearchResults();

  return (
    <>
      <SearchBar {...manageHook} />

      {!manageHook.renderSearchNews ? (
        <NewsMap />
      ) : (
        <SearchedNewsMap keywordToSearch={manageHook.keywordToSearch} />
      )}
    </>
  );
};

export default HomeContent;
