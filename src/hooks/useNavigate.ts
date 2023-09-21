import {useNavigation} from '@react-navigation/native';
import {NavigateProp} from '../types/NavigateTypes';
import {StackParamList} from '../navigation/StackNavigator';
import {ArticleTypes} from '../types';

type UseNavigateHook = {
  handleNav: (data: ArticleTypes | any) => void;
  goBackNav: () => void;
  toggleStarIcon: (article: ArticleTypes) => void;
};

const useNavigate = (): UseNavigateHook => {
  const navigation = useNavigation<NavigateProp>();

  const handleNav = (data: ArticleTypes | any) => {
    navigation.navigate('ArticleDetailsScreen' as keyof StackParamList, data);
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
