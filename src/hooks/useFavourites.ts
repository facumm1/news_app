import {useCallback, useState} from 'react';
import {ArticleTypes} from '../types/ArticleTypes';

export type useFavouritesHook = {
  favs: ArticleTypes[];
  handleFav: (newFav: ArticleTypes) => void;
  deleteFav: (id: string) => void;
  updateFav: (id: string) => void;
};

const useFavourites = (): useFavouritesHook => {
  const [favs, setFavs] = useState<ArticleTypes[]>([]);

  const handleFav = useCallback((newFav: ArticleTypes) => {
    setFavs(prevFavs => [...prevFavs, newFav]);
  }, []);

  const deleteFav = useCallback((id: string) => {
    setFavs(prevFavs => prevFavs.filter(fav => fav.id !== id));
  }, []);

  const updateFav = useCallback((id: string) => {
    setFavs(prevFavs => {
      return prevFavs.map(fav => {
        if (fav.id === id) {
          return {...fav, isFavourite: !fav.isFavourite};
        }
        return fav;
      });
    });
  }, []);

  return {favs, handleFav, deleteFav, updateFav};
};

export default useFavourites;
