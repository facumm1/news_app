import React, {useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import ArticleHeader from '../components/Header/ArticleHeader';
import {ArticleRouteType, NavigateProp} from '../types/NavigateTypes';
import {MemoizedArticleContent} from '../components/Memo/MemoizedArticleContent';

import {useNavigate, useFavActions} from '../hooks';

type Props = {
  route: ArticleRouteType;
  navigation: NavigateProp;
};

const ArticleScreen: React.FC<Props> = ({route}) => {
  const {
    id,
    isFavourite,
    title,
    author,
    publishedAt,
    urlToImage,
    url,
    content,
    source,
  } = route.params;

  const isFocused = useIsFocused();
  const {goBackNav, toggleStarIcon} = useNavigate();
  const {removeFav, addFav} = useFavActions();

  const handleFavAction = () => {
    toggleStarIcon(route.params); //Local
    if (isFavourite) {
      removeFav(id as string);
    } else {
      addFav(route.params);
    }
  };

  useEffect(() => {
    if (!isFocused) {
      goBackNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <ArticleHeader
        title={title}
        publishedAt={publishedAt}
        author={author}
        urlToImage={urlToImage}
        fillStar={isFavourite}
        goBackNav={goBackNav}
        handleFavourite={handleFavAction}
      />

      <MemoizedArticleContent
        source={source.name}
        content={content}
        url={url}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ArticleScreen;
