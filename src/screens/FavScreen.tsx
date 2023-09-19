import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import {ArticleTypes} from '../types/ArticleTypes';
import {NewsContext} from '../context/NewsContext';
import ScreenHeader from '../components/Header/ScreenHeader';
import FavError from '../components/Error/FavError';
import NewsArticle from '../components/Button/NewsArticle';

const FavScreen: React.FC = () => {
  const {favs} = useContext(NewsContext);

  return (
    <View style={styles.content}>
      <ScreenHeader
        title="Favourites"
        subtitle="Here you can find your favourite articles"
      />

      {favs.length > 0 ? (
        favs.map((articleData: ArticleTypes, index: number) => (
          <NewsArticle key={index} {...articleData} />
        ))
      ) : (
        <FavError />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {alignSelf: 'center', width: '85%', marginTop: 20},
});
export default FavScreen;
