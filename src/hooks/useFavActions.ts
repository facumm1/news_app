// useFavActions.ts
import {useDispatch} from 'react-redux';
import {
  addNewFav,
  deleteFav,
  toggleAddedFav,
  toggleNewsFav,
  toggleSearchedData,
} from '../redux';
import {ArticleTypes} from '../types';

type useFavActionsHook = {
  toggleFavActions: (id: string) => void;
  addFav: (article: ArticleTypes) => void;
  removeFav: (id: string) => void;
};

const useFavActions = (): useFavActionsHook => {
  const dispatch = useDispatch();

  const toggleFavActions = (id: string) => {
    dispatch(toggleNewsFav(id));
    dispatch(toggleAddedFav(id));
    dispatch(toggleSearchedData(id));
  };

  const addFav = (article: ArticleTypes) => {
    dispatch(addNewFav(article));
    toggleFavActions(article.id);
  };

  const removeFav = (id: string) => {
    dispatch(deleteFav(id));
    toggleFavActions(id);
  };

  return {addFav, removeFav, toggleFavActions};
};

export default useFavActions;
