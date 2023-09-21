import {
  newsApi,
  useFetchNewsQuery,
  useSearchNewsByKeywordQuery,
} from './newsApi';
import {newsSlice, setNewsData, toggleNewsFav} from './newsSlice';
import {favsSlice, addNewFav, deleteFav, toggleAddedFav} from './favsSlice';
import {
  searchedDataSlice,
  setSearchedData,
  toggleSearchedData,
} from './searchedDataSlice';

export {newsApi, newsSlice, favsSlice, searchedDataSlice};

export {setNewsData, toggleNewsFav};

export {addNewFav, deleteFav, toggleAddedFav};

export {setSearchedData, toggleSearchedData};

export {useFetchNewsQuery, useSearchNewsByKeywordQuery};
