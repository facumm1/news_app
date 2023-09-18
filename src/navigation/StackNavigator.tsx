import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ArticleScreen} from '../screens';
import {ArticleTypes} from '../types/ArticleTypes';

export type StackParamList = {
  HomeScreen: undefined;
  ArticleScreen: ArticleTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
