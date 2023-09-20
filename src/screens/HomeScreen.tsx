import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ArticleTypes, NewsSliceTypes} from '../types';

import ScreenHeader from '../components/Header/ScreenHeader';
import SearchBar from '../components/Field/SearchBar';
import Loader from '../components/Loader/Loader';
import NewsArticleContainer from '../components/NewsArticleContainer';

const HomeScreen: React.FC = () => {
  const {newsData: data, isLoading} = useSelector(
    (state: NewsSliceTypes) => state.newsData,
  );

  //TODO 1
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>
        <ScreenHeader
          title="Discover"
          subtitle="News from all around the world"
        />
        <SearchBar />

        {isLoading ? (
          <Loader />
        ) : (
          data.map((articleData: ArticleTypes, index: number) => (
            <NewsArticleContainer key={index} articleData={articleData} />
          ))
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {alignSelf: 'center', width: '85%', marginTop: 20},
});

export default HomeScreen;
