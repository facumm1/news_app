import {createSlice} from '@reduxjs/toolkit';
import {ArticleTypes} from '../types/ArticleTypes';

export const searchedDataSlice = createSlice({
  name: 'searchedData',
  initialState: {
    searchedData: [] as ArticleTypes[],
    dataLoading: true as boolean,
  },
  reducers: {
    setSearchedData: (state, action) => {
      state.searchedData = action.payload;
      state.dataLoading = false;
    },
    toggleSearchedData: (state, action) => {
      const id = action.payload;

      const updatedData = state.searchedData.map(article => {
        if (article.id === id) {
          return {...article, isFavourite: !article.isFavourite};
        }
        return article;
      });

      state.searchedData = updatedData;
    },
  },
});

export const {setSearchedData, toggleSearchedData} = searchedDataSlice.actions;
