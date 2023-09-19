import React, {useContext, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import ArticleHeader from '../components/Header/ArticleHeader';
import ArticleContent from '../components/Content/ArticleContent';
import {ArticleRouteType, NavigateProp} from '../types/NavigateTypes';
import {NewsContext} from '../context/NewsContext';
import {useIsFocused} from '@react-navigation/native';

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

  const {selectFavourite, handleFav, deleteFav, updateFav} =
    useContext(NewsContext);

  const toggleFavourite = () => {
    navigation.setParams({...route.params, isFavourite: !isFavourite});
  };

  //TODO 3
  const addNewFav = () => {
    toggleFavourite(); //Local
    selectFavourite(id); // Updates in data array
    handleFav(route.params); // Adds to favs array
    updateFav(id); // Updates in favourites array
  };

  const removeFav = () => {
    toggleFavourite(); // Local
    selectFavourite(id); // Updates in data array
    deleteFav(id); // Deletes in favs array
    updateFav(id); // Updates in favourites array
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
        handleFavourite={isFavourite ? removeFav : addNewFav}
      />

      <ArticleContent source={source.name} content={content} url={url} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ArticleScreen;
