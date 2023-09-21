import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchedData, useSearchNewsByKeywordQuery} from '../redux';

import {FavsSliceTypes, SearchedDataSliceTypes} from '../types';
import Loader from './Loader/Loader';
import SearchedNewsCond from './Layout/SearchedNewsCond';
import {findFavouriteArticles} from '../util';

type Props = {
  keywordToSearch: string;
};

const SearchedNewsMap: React.FC<Props> = ({keywordToSearch}) => {
  const dispatch = useDispatch();
  const {data, isLoading} = useSearchNewsByKeywordQuery(keywordToSearch);
  const {favsData} = useSelector((state: FavsSliceTypes) => state.favsData);
  const {searchedData, dataLoading} = useSelector(
    (state: SearchedDataSliceTypes) => state.searchedData,
  );

  const checkAddedFavourites = () => {
    if (favsData.length > 0 && data) {
      const updatedData = findFavouriteArticles(data, favsData);

      dispatch(setSearchedData(updatedData));
    } else {
      dispatch(setSearchedData(data));
    }
  };

  useEffect(() => {
    if (!isLoading) {
      checkAddedFavourites();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, data]);

  return dataLoading ? (
    <Loader />
  ) : (
    <SearchedNewsCond searchedData={searchedData} />
  );
};

export default SearchedNewsMap;
