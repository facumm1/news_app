import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';

type Props = {
  author: string;
  title: string;
  publishedAt: string;
};

const HeaderContent: React.FC<Props> = ({author, title, publishedAt}) => {
  return (
    <View style={styles.textContainer}>
      <View style={styles.authorContainer}>
        <Text style={styles.author}>{author}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.articleDate}>{publishedAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default HeaderContent;
