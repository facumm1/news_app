import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import {NewsProvider} from './context';

const NewsApp: React.FC = () => {
  return (
    <NewsProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </NewsProvider>
  );
};

export default NewsApp;
