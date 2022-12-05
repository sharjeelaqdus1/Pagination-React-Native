import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {BACKGROUND} from '../constants/colors';
import Header from './header';
const KeyboardAvoidingViewComponent = ({children, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Header {...props} />

        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(20),
    backgroundColor: BACKGROUND,
  },
  keyboardView: {
    flex: 1,
  },
});

export default KeyboardAvoidingViewComponent;
