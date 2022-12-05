import * as React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {BLACK, WHITE} from '../constants/colors';
import theme from '../constants/themes';
const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLACK,
  },
  label: {
    fontSize: theme.fontSize.normal,
    color: WHITE,
  },
});

export default Button;
