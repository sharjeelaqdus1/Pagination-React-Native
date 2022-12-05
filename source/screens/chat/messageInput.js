import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {SendIC} from '../../assets/images';
import {BLACK, BLUE, WHITE} from '../../constants/colors';
import theme from '../../constants/themes';
const MessageInput = ({onSendMessage, item, ...props}) => {
  const [message, setMessage] = useState();
  const onSendMessageEvent = () => {
    onSendMessage(message);
    setMessage('');
  };
  return (
    <View style={[styles.outerContainer]}>
      <TextInput
        value={message}
        onChangeText={text => setMessage(text)}
        multiline
        style={styles.input}
        {...props}
      />
      <TouchableOpacity onPress={onSendMessageEvent}>
        <Image source={SendIC} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  outerContainer: {
    marginVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    minHeight: moderateScale(40),
    flex: 1,
    color: BLACK,
    borderWidth: 2,
    borderRadius: moderateScale(5),
    backgroundColor: WHITE,
    borderColor: BLUE,
    fontSize: theme.fontSize.h1,
    paddingStart: scale(8),
  },
  icon: {
    marginStart: scale(10),
    width: moderateScale(20),
    height: moderateScale(20),
  },
});
export default MessageInput;
