import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import colors from '../../theme/colors';
import {truncText} from '../../util';

type Props = {
  source: string;
  content: string;
  url: string;
};

const ArticleContent: React.FC<Props> = ({source, content, url}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.newsSource}>{source}</Text>
      <Text style={styles.articleContent}>{truncText(content, '[')}</Text>

      <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.btn}>
        <Text style={styles.btnText}>Read full article here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  newsSource: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  articleContent: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
    lineHeight: 25,
  },
  btn: {
    borderRadius: 50,
    backgroundColor: colors.blue,
    width: '80%',
    marginTop: 15,
    marginBottom: 30,
    alignSelf: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 10,
  },
});

export default ArticleContent;
