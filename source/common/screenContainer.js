import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import {BACKGROUND} from '../constants/colors';
import Header from './header';
const ScreenConatiner = ({children, container, ...props}) => {
  return (
    <SafeAreaView style={[styles.container, container]}>
      <Header {...props} />

      {children}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: BACKGROUND,
  },
});

export default ScreenConatiner;
