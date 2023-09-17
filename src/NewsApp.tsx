import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeScreen} from './screens';
import colors from './theme/colors';

const NewsApp: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white},
});

export default NewsApp;
