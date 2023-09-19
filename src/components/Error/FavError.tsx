import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';

const FavError: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No favourites yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {borderWidth: 0, height: '50%'},
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: colors.gray,
  },
});

export default FavError;
