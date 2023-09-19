import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ArticleScreen, FavScreen} from '../screens';
import {ArticleTypes} from '../types/ArticleTypes';

export type StackParamList = {
  FavScreen: undefined;
  ArticleScreen: ArticleTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

const FavStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FavScreen" children={() => <FavScreen />} />
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default FavStackNavigator;
