import {useNavigation} from '@react-navigation/native';
import {NavigateProp} from '../types/NavigateTypes';
import {StackParamList} from '../navigation/StackNavigator';

const useNavigate = (screenName: string, props = {}): (() => void) => {
  //TODO 2
  const navigation: NavigateProp = useNavigation();

  const handleNav = () => {
    navigation.navigate(screenName as keyof StackParamList, props as any);
  };

  return handleNav;
};

export default useNavigate;
