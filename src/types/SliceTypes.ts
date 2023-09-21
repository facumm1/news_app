import {ArticleTypes} from './ArticleTypes';

export type NewsSliceTypes = {
  newsData: {
    newsData: ArticleTypes[];
    isLoading: boolean;
  };
};

export type FavsSliceTypes = {
  favsData: {
    favsData: ArticleTypes[];
  };
};

export type SearchedDataSliceTypes = {
  searchedData: {searchedData: ArticleTypes[]; dataLoading: boolean};
};
