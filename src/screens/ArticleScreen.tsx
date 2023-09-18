import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import ArticleHeader from '../components/Header/ArticleHeader';
import ArticleContent from '../components/Content/ArticleContent';
import {ArticleRouteType} from '../types/NavigateTypes';

type Props = {
  route: ArticleRouteType;
};

const ArticleScreen: React.FC<Props> = ({route}) => {
  const {title, author, publishedAt, urlToImage, url, content, source} =
    route.params;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <ArticleHeader
        title={title}
        publishedAt={publishedAt}
        author={author}
        urlToImage={urlToImage}
      />

      <ArticleContent source={source.name} content={content} url={url} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ArticleScreen;
