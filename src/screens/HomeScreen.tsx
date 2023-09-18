import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useFetch} from '../hooks';

import HomeHeader from '../components/Header/HomeHeader';
import SearchBar from '../components/Field/SearchBar';
import Loader from '../components/Loader/Loader';

import {ArticleTypes} from '../types/ArticleTypes';
import NewsArticleContainer from '../components/NewsArticleContainer';

const HomeScreen: React.FC = () => {
  const {data, isLoading} = useFetch();

  //TODO 1
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>
        <HomeHeader />
        <SearchBar />

        {isLoading ? (
          <Loader />
        ) : (
          data.map((articleData: ArticleTypes, index) => (
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
