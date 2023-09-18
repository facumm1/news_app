import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import colors from '../../theme/colors';
import {ArticleTypes} from '../../types/ArticleTypes';
import {useNavigate} from '../../hooks/';

const NewsArticle: React.FC<ArticleTypes> = data => {
  const {title, publishedAt, urlToImage, source, shortTitle} = data;

  const handleNav = useNavigate('ArticleScreen', data);

  return (
    <TouchableOpacity onPress={handleNav} key={title} style={styles.container}>
      <Image style={styles.img} source={{uri: urlToImage}} />

      <View style={styles.content}>
        <Text style={styles.date}>{publishedAt}</Text>
        <Text style={styles.title}>{shortTitle}</Text>
        <Text style={styles.source}>{source.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginVertical: 10},
  img: {borderRadius: 10, flex: 0.4, height: 100},
  content: {marginLeft: 10, flex: 0.6},
  date: {color: colors.gray},
  title: {fontSize: 16, fontWeight: '500', color: colors.black},
  source: {fontSize: 12, color: colors.gray},
});

export default NewsArticle;
