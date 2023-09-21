import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import ScreenHeader from '../components/Header/ScreenHeader';
import HomeContent from '../components/HomeContent';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.content}>
        <ScreenHeader
          title="Discover"
          subtitle="News from all around the world"
        />

        <HomeContent />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {alignSelf: 'center', width: '85%', marginTop: 20},
});

export default HomeScreen;
