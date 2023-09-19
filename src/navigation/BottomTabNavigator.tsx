import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackNavigator from './StackNavigator';
import FavStackNavigator from './FavStackNavigator';
import {
  favStackNavigatorOptions,
  stackNavigatorOptions,
} from '../components/Tab/TabOptions';

export type TabParamList = {
  StackNavigator: undefined;
  FavStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 2.5,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="StackNavigator"
        children={() => <StackNavigator />}
        options={stackNavigatorOptions}
      />
      <Tab.Screen
        name="FavStackNavigator"
        children={() => <FavStackNavigator />}
        options={favStackNavigatorOptions}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
