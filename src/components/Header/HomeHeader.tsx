import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';

const HomeHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <Text style={styles.subtitle}>News from all around the world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: 15},
  title: {color: colors.black, fontSize: 32, fontWeight: '500'},
  subtitle: {color: colors.gray, fontSize: 16},
});

export default HomeHeader;
