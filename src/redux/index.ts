import {newsApi, useFetchNewsQuery} from './newsApi';
import {newsSlice, setNewsData, toggleNewsFav} from './newsSlice';
import {favsSlice, addNewFav, deleteFav, toggleAddedFav} from './favsSlice';

export {newsApi, newsSlice, favsSlice};

export {setNewsData, toggleNewsFav};

export {addNewFav, deleteFav, toggleAddedFav};

export {useFetchNewsQuery};
