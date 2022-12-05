import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {WHITE, AQUA_GREEN, BLACK} from '../../constants/colors';
const ChatListItem = ({item, profile, search}) => {
  const {message, senderID} = item;
  return (
    <View
      style={[
        styles.outerContainer,
        senderID === profile.id && styles.senderContainer,
      ]}>
      <View
        style={[styles.container, senderID === profile.id && styles.sender]}>
        <Text
          style={[
            styles.message,
            search && message.toLowerCase()?.includes(search?.toLowerCase()) &&
              styles.highlight,
          ]}>
          {message}
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  outerContainer: {
    paddingEnd: moderateScale(20),
    paddingStart: 0,
  },
  senderContainer: {
    paddingStart: moderateScale(20),
    paddingEnd: 0,
  },
  container: {
    backgroundColor: WHITE,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
  },
  sender: {
    backgroundColor: AQUA_GREEN,
  },
  rightContainer: {
    backgroundColor: AQUA_GREEN,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
  },
  message: {
    color: BLACK,
  },
  icon: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(10),
  },
  highlight: {
    backgroundColor: 'yellow',
  },
});
export default ChatListItem;
