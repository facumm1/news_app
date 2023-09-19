import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import ScreenHeader from '../components/Header/ScreenHeader';
import SearchBar from '../components/Field/SearchBar';
import Loader from '../components/Loader/Loader';

import {ArticleTypes} from '../types/ArticleTypes';
import NewsArticleContainer from '../components/NewsArticleContainer';
import {NewsContext} from '../context/NewsContext';

const HomeScreen: React.FC = () => {
  const {data, isLoading} = useContext(NewsContext);

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
