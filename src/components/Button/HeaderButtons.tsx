import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';

type Props = {
  fillStar: boolean;
  handleFavourite: () => void;
  goBackNav: () => void;
};

const HeaderButtons: React.FC<Props> = ({
  fillStar,
  goBackNav,
  handleFavourite,
}) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={goBackNav}>
        <Feather name="arrow-left" size={25} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFavourite}>
        <AntDesign
          name={fillStar ? 'star' : 'staro'}
          size={25}
          color={fillStar ? colors.yellow : colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
  },
});

export default HeaderButtons;
