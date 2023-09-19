import React from 'react';
import {useFavourites, useFetch} from '../hooks';
import {NewsContext} from './NewsContext';

type ProviderProps = {
  children: React.ReactElement;
};

export const NewsProvider: React.FC<ProviderProps> = ({children}) => {
  const fetchHook = useFetch();
  const favHook = useFavourites();

  return (
    <NewsContext.Provider value={{...fetchHook, ...favHook}}>
      {children}
    </NewsContext.Provider>
  );
};
