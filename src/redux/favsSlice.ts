import {createSlice} from '@reduxjs/toolkit';
import {ArticleTypes} from '../types/ArticleTypes';

export const favsSlice = createSlice({
  name: 'favsData',
  initialState: {
    favsData: [] as ArticleTypes[],
  },
  reducers: {
    addNewFav: (state, action) => {
      const articleToAdd = action.payload;
      state.favsData = [...state.favsData, articleToAdd];
    },
    deleteFav: (state, action) => {
      const id = action.payload;
      const updatedData = state.favsData.filter(fav => fav.id !== id);
      state.favsData = updatedData;
    },
    toggleAddedFav: (state, action) => {
      const id = action.payload;
      const updatedData = state.favsData.map(article => {
        if (article.id === id) {
          return {...article, isFavourite: !article.isFavourite};
        }
        return article;
      });
      state.favsData = updatedData;
    },
  },
});

export const {addNewFav, deleteFav, toggleAddedFav} = favsSlice.actions;
