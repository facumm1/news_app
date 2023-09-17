import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} size={25} name={'search'} color={colors.gray} />
      <TextInput value={''} placeholder={'Search'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 50,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  icon: {paddingHorizontal: 10},
});

export default SearchBar;
