import {createContext} from 'react';
import {useFetchHook} from '../hooks/useFetch';
import {useFavouritesHook} from '../hooks/useFavourites';

type NewsContextTypes = useFetchHook & useFavouritesHook;

export const NewsContext = createContext<NewsContextTypes>({
  data: [],
  isLoading: true,
  selectFavourite: () => {},

  favs: [],
  handleFav: () => {},
  deleteFav: () => {},
  updateFav: () => {},
});
