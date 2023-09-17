import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import colors from '../../theme/colors';
import formatDate from '../../util/formatDate';
import {ArticleTypes} from '../../types/ArticleTypes';

const unknownPic =
  'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';

const ArticleButton: React.FC<ArticleTypes> = ({
  title,
  author,
  publishedAt,
  urlToImage,
}) => {
  const articleImg = urlToImage ? urlToImage : unknownPic;

  return (
    <TouchableOpacity key={title} style={styles.container}>
      <Image style={styles.img} source={{uri: articleImg}} />

      <View style={styles.content}>
        <Text style={styles.date}>{formatDate(publishedAt)}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
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
  author: {fontSize: 12, color: colors.gray},
});

export default ArticleButton;
