import {ArticleTypes} from '../types';

export const findFavouriteArticles = (
  data: ArticleTypes[],
  favsData: ArticleTypes[],
) => {
  return data.map((searchedArticle: ArticleTypes) => {
    const matchingFav = favsData.find(
      (favArticle: ArticleTypes) => favArticle.url === searchedArticle.url, //Check if new articles are already added to favourites
    );

    return matchingFav
      ? {...searchedArticle, id: matchingFav.id, isFavourite: true}
      : searchedArticle;
  });
};
