import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

import {newsApi, newsSlice, favsSlice} from './index';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    newsData: newsSlice.reducer,
    favsData: favsSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);
