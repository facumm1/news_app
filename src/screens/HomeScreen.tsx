import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useFetch} from '../hooks';

import HomeHeader from '../components/Header/HomeHeader';
import SearchBar from '../components/Field/SearchBar';
import ArticleButton from '../components/Button/ArticleButton';
import Loader from '../components/Loader/Loader';

import {ArticleTypes} from '../types/ArticleTypes';

const HomeScreen: React.FC = () => {
  const {data, isLoading} = useFetch();

  return (
    <ScrollView style={styles.content}>
      <HomeHeader />

      <SearchBar />

      {isLoading ? (
        <Loader />
      ) : (
        data.map((articleData: ArticleTypes, index) => (
          <ArticleButton key={index} {...articleData} />
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {alignSelf: 'center', width: '85%', marginTop: 20},
});

export default HomeScreen;
