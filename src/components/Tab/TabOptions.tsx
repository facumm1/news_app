import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';

type OptionsParams = {
  focused: boolean;
};

export const stackNavigatorOptions = {
  tabBarLabel: ({focused}: OptionsParams) => (
    <Text style={[styles.text, {color: focused ? colors.blue : colors.gray}]}>
      News
    </Text>
  ),
  tabBarIcon: ({focused}: OptionsParams) => (
    <Ionicons
      name="newspaper-outline"
      color={focused ? colors.blue : colors.gray}
      size={25}
    />
  ),
};

export const favStackNavigatorOptions = {
  tabBarLabel: ({focused}: OptionsParams) => (
    <Text style={[styles.text, {color: focused ? colors.blue : colors.gray}]}>
      Favourites
    </Text>
  ),
  tabBarIcon: ({focused}: OptionsParams) => (
    <AntDesign
      name="star"
      color={focused ? colors.blue : colors.gray}
      size={25}
    />
  ),
};

const styles = StyleSheet.create({
  text: {
    paddingBottom: 2.5,
    fontSize: 12,
  },
});
