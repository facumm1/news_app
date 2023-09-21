import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

import DetailsContent from './HeaderContent';
import HeaderButtons from '../Button/HeaderButtons';

const {height} = Dimensions.get('window');

type Props = {
  title: string;
  publishedAt: string;
  author: string;
  urlToImage: string;
  fillStar: boolean;
  handleFavourite: () => void;
  goBackNav: () => void;
};

const ArticleHeader: React.FC<Props> = ({
  title,
  publishedAt,
  author,
  urlToImage,
  fillStar,
  handleFavourite,
  goBackNav,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: urlToImage}} />
      <View style={styles.darkBackground} />

      <HeaderButtons
        fillStar={fillStar}
        handleFavourite={handleFavourite}
        goBackNav={goBackNav}
      />

      <DetailsContent author={author} title={title} publishedAt={publishedAt} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(0,0,0, 0.35)'},
  img: {
    height: height / 2,
    backgroundColor: 'rgba(0,0,0, 0.35)',
  },
  darkBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ArticleHeader;
