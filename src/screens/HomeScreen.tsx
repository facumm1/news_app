import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import ScreenHeader from '../components/Header/ScreenHeader';
import HomeContent from '../components/HomeContent';
import FadeAnimWrapper from '../wrapper/FadeAnimWrapper';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <FadeAnimWrapper wrapperStyle={styles.content}>
        <ScreenHeader
          title="Discover"
          subtitle="News from all around the world"
        />

        <HomeContent />
      </FadeAnimWrapper>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {alignSelf: 'center', width: '85%', marginTop: 20},
});

export default HomeScreen;
