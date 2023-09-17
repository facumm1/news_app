import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const Loader: React.FC = () => {
  return (
    <ActivityIndicator
      animating
      size="large"
      color={colors.black}
      style={styles.loader}
    />
  );
};

const styles = StyleSheet.create({
  loader: {marginTop: 10},
});

export default Loader;
