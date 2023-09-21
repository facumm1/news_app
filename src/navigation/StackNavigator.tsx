import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, ArticleScreen} from '../screens';
import {ArticleTypes} from '../types/ArticleTypes';
import {setNewsData, useFetchNewsQuery} from '../redux';
import {useDispatch} from 'react-redux';

export type StackParamList = {
  HomeScreen: undefined;
  ArticleScreen: ArticleTypes;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator: React.FC = () => {
  const {data, isLoading} = useFetchNewsQuery({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setNewsData(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

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
