import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {ArticleTypes, FavsSliceTypes} from '../types';

import ScreenHeader from '../components/Header/ScreenHeader';
import FavError from '../components/Error/FavError';
import NewsArticle from '../components/Button/NewsArticle';
import FadeAnimWrapper from '../wrapper/FadeAnimWrapper';

const FavScreen: React.FC = () => {
  const {favsData} = useSelector((state: FavsSliceTypes) => state.favsData);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <FadeAnimWrapper wrapperStyle={styles.content}>
        <ScreenHeader
          title="Favourites"
          subtitle="Here you can find your favourite articles"
        />

        {favsData.length > 0 ? (
          favsData.map((articleData: ArticleTypes) => (
            <NewsArticle key={articleData.id} {...articleData} />
          ))
        ) : (
          <FavError />
        )}
      </FadeAnimWrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {alignSelf: 'center', width: '85%', marginTop: 20},
});
export default FavScreen;
