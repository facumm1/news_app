import {createSlice} from '@reduxjs/toolkit';
import {ArticleTypes} from '../types/ArticleTypes';

export const newsSlice = createSlice({
  name: 'newsData',
  initialState: {
    newsData: [] as ArticleTypes[],
    isLoading: true as boolean,
  },
  reducers: {
    setNewsData: (state, action) => {
      state.newsData = action.payload;
      state.isLoading = false;
    },
    toggleNewsFav: (state, action) => {
      const id = action.payload;

      const updatedData = state.newsData.map(article => {
        if (article.id === id) {
          return {...article, isFavourite: !article.isFavourite};
        }
        return article;
      });

      state.newsData = updatedData;
    },
  },
});

export const {setNewsData, toggleNewsFav} = newsSlice.actions;
