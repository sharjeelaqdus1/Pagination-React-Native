import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {WelcomeIC} from '../assets/images';
import {LIGHT_BLUE} from '../constants/colors';
const RoundLabel = ({label}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={WelcomeIC} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_BLUE,
    borderRadius: 10,
  },
  icon: {
    height: moderateScale(100),
    width: '100%',
  },
});

export default RoundLabel;
