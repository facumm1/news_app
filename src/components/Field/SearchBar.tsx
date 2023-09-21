import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from '../../theme/colors';
import {useManageHook} from '../../hooks/useManageSearchResults';

const SearchBar: React.FC<useManageHook> = ({
  renderSearchNews,
  fieldValue,
  handleFieldValue,
  searchByKeyword,
  hideSearchResults,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={searchByKeyword} style={styles.searchBtn}>
        <Feather
          style={styles.icon}
          size={25}
          name={'search'}
          color={colors.white}
        />
      </TouchableOpacity>

      <TextInput
        value={fieldValue}
        placeholder={'Search'}
        style={styles.field}
        onChangeText={handleFieldValue}
      />

      {renderSearchNews && (
        <TouchableOpacity onPress={hideSearchResults} style={styles.backBtn}>
          <AntDesign
            style={styles.icon}
            size={25}
            name={'back'}
            color={colors.white}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  field: {flex: 1, paddingLeft: 10},
  searchBtn: {
    borderRadius: 10,
    backgroundColor: colors.blue,
    height: '100%',
    flexDirection: 'row',
  },
  icon: {paddingHorizontal: 7.5, alignSelf: 'center'},
  backBtn: {
    borderRadius: 10,
    backgroundColor: colors.red,
    height: '100%',
    flexDirection: 'row',
  },
});

export default SearchBar;
