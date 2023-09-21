import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NoResultsError: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No articles found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 10, alignItems: 'center'},
  text: {fontSize: 16},
});

export default NoResultsError;
