import React, {useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import ArticleHeader from '../components/Header/ArticleHeader';
import ArticleContent from '../components/Content/ArticleContent';
import {ArticleRouteType, NavigateProp} from '../types/NavigateTypes';

import {
  addNewFav,
  deleteFav,
  toggleAddedFav,
  toggleNewsFav,
  toggleSearchedData,
} from '../redux';

type Props = {
  route: ArticleRouteType;
  navigation: NavigateProp;
};

const ArticleScreen: React.FC<Props> = ({route, navigation}) => {
  const {
    id,
    isFavourite,
    title,
    author,
    publishedAt,
    urlToImage,
    url,
    content,
    source,
  } = route.params;

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const toggleStarIcon = () => {
    navigation.setParams({...route.params, isFavourite: !isFavourite});
  };

  //TODO 3
  const addFav = () => {
    toggleStarIcon(); //Local
    dispatch(addNewFav(route.params)); // Adds to favs array
    dispatch(toggleNewsFav(id)); // Updates in data array
    dispatch(toggleAddedFav(id)); // Updates in favourites array
    dispatch(toggleSearchedData(id)); // Updates in searched array
  };

  const removeFav = () => {
    toggleStarIcon(); // Local
    dispatch(deleteFav(id)); // Deletes in favs array
    dispatch(toggleNewsFav(id)); // Updates in data array
    dispatch(toggleAddedFav(id)); // Updates in favourites array
    dispatch(toggleSearchedData(id)); // Updates in searched array
  };

  const handleNav = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (!isFocused) {
      handleNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <ArticleHeader
        title={title}
        publishedAt={publishedAt}
        author={author}
        urlToImage={urlToImage}
        fillStar={isFavourite}
        handleNav={handleNav}
        handleFavourite={isFavourite ? removeFav : addFav}
      />

      <ArticleContent source={source.name} content={content} url={url} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ArticleScreen;
