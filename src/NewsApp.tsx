import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator';

const NewsApp: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default NewsApp;
