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
