import React from 'react';
import {BaseList} from '../../common/baseList';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import RoomItem from './roomItem';
const RoomsList = ({onPressItem, ...props}) => {
  const renderItem = ({item}) => {
    return <RoomItem onPressItem={onPressItem} item={item} />;
  };
  const separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <BaseList
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={separator}
      {...props}
    />
  );
};
export const styles = StyleSheet.create({
  separator: {
    height: moderateScale(20),
  },
});
export default RoomsList;
