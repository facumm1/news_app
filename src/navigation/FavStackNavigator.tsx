import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ArticleDetailsScreen, FavScreen} from '../screens';
import {ArticleTypes} from '../types/ArticleTypes';

export type StackParamList = {
  FavScreen: undefined;
  ArticleDetailsScreen: ArticleTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

const FavStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FavScreen" component={FavScreen} />
      <Stack.Screen
        name="ArticleDetailsScreen"
        component={ArticleDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FavStackNavigator;
