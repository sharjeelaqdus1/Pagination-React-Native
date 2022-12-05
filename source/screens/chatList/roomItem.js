import React from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {WHITE, BLACK} from '../../constants/colors';
import theme from '../../constants/themes';
const RoomItem = ({item, onPressItem}) => {
  const {message, profile} = item;
  return (
    <TouchableOpacity
      onPress={() => onPressItem(item)}
      style={[styles.container]}>
      <Text style={styles.name}>
        {profile?.firstName + ' ' + profile?.lastName}
      </Text>
      <Text style={styles.message}>{message}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    borderLeftWidth: 1,
  },

  message: {
    color: BLACK,
  },
  name: {
    color: BLACK,
    fontWeight: '600',
    fontSize: theme.fontSize.h1,
  },
});
export default RoomItem;
