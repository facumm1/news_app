import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';

const {height} = Dimensions.get('window');

type Props = {
  title: string;
  publishedAt: string;
  author: string;
  urlToImage: string;
  fillStar: boolean;
  handleFavourite: () => void;
  handleNav: () => void;
};

const ArticleHeader: React.FC<Props> = ({
  title,
  publishedAt,
  author,
  urlToImage,
  fillStar,
  handleFavourite,
  handleNav,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: urlToImage}} />

      <View style={styles.darkBackground} />

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleNav}>
          <Feather name="arrow-left" size={25} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFavourite}>
          <AntDesign
            name={fillStar ? 'star' : 'staro'}
            size={25}
            color={fillStar ? colors.yellow : colors.white}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.authorContainer}>
          <Text style={styles.author}>{author}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.articleDate}>{publishedAt}</Text>
      </View>
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
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
  },
  textContainer: {position: 'absolute', bottom: 0, padding: 10},
  authorContainer: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  author: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  articleDate: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ArticleHeader;
