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
          color={colors.gray}
        />
      </TouchableOpacity>

      <TextInput
        value={fieldValue}
        placeholder={'Search'}
        style={{flex: 1}}
        onChangeText={handleFieldValue}
      />

      {renderSearchNews && (
        <TouchableOpacity onPress={hideSearchResults} style={styles.backBtn}>
          <AntDesign
            style={styles.icon}
            size={25}
            name={'back'}
            color={colors.gray}
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
    borderRadius: 50,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  searchBtn: {
    borderRadius: 50,
  },
  icon: {paddingHorizontal: 10},
  backBtn: {
    borderRadius: 50,
  },
});

export default SearchBar;
