import * as React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {WHITE} from '../constants/colors';
import theme from '../constants/themes';
const SearchInput = ({onSearch}) => {
  return (
    <TextInput onChangeText={text => onSearch(text)} style={styles.container} />
  );
};

export const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    backgroundColor: WHITE,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    height: verticalScale(30),
    paddingHorizontal: scale(10),
    fontSize: theme.fontSize.normal,
  },
});

export default SearchInput;
