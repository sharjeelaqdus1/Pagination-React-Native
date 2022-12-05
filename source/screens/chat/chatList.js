import React from 'react';
import {BaseList} from '../../common/baseList';
import {View, StyleSheet} from 'react-native';
import ChatListItem from './chatListItem';
import {moderateScale} from 'react-native-size-matters';
const ChatList = ({search, ...props}) => {
  const renderItem = ({item}) => {
    return (
      <ChatListItem item={item} profile={props?.profile} search={search} />
    );
  };
  const separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <BaseList
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={separator}
      inverted={true}
      {...props}
    />
  );
};
export const styles = StyleSheet.create({
  separator: {
    height: moderateScale(20),
  },
});
export default ChatList;
