import * as React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Image} from 'react-native';
import {BLUE} from '../constants/colors';
const RoundButton = ({image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.icon} source={image} />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLUE,
    borderWidth: 1,
    borderRadius: 10,
  },
  icon: {
    height: 40,
    width: 40,
  },
});

export default RoundButton;
