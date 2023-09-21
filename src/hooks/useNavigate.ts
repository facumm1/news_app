import {useNavigation} from '@react-navigation/native';
import {NavigateProp} from '../types/NavigateTypes';
import {StackParamList} from '../navigation/StackNavigator';
import {ArticleTypes} from '../types';

type UseNavigateHook = {
  handleNav: () => void;
  goBackNav: () => void;
  toggleStarIcon: (article: ArticleTypes) => void;
};

const useNavigate = (screenName?: string, props = {}): UseNavigateHook => {
  //TODO 2
  const navigation: NavigateProp = useNavigation();

  const handleNav = () => {
    navigation.navigate(screenName as keyof StackParamList, props as any);
  };

  const goBackNav = () => {
    navigation.goBack();
  };

  const toggleStarIcon = (article: ArticleTypes) => {
    navigation.setParams({...article, isFavourite: !article.isFavourite});
  };

  return {handleNav, goBackNav, toggleStarIcon};
};

export default useNavigate;
