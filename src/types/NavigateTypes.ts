import {NavigationProp, RouteProp} from '@react-navigation/native';
import {StackParamList} from '../navigation/StackNavigator';

type ScreenName = keyof StackParamList;

export type NavigateProp = NavigationProp<StackParamList, ScreenName>;

export type ArticleRouteType = RouteProp<
  StackParamList,
  'ArticleDetailsScreen'
>;
