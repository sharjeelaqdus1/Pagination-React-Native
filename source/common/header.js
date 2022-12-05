import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {Text, View} from 'react-native';
import theme from '../constants/themes';
import {BackIC, SearchIC} from '../assets/images';
import {useNavigation} from '@react-navigation/native';
import SearchInput from './searchInput';
const Header = ({
  title,
  onLeftPress,
  showBack,
  showSearch,
  onSearch,
  onToggleSearch,
}) => {
  const navigation = useNavigation();
  const [activeSearch, setActiveSearch] = useState(false);
  const onActiveSearch = () => setActiveSearch(!activeSearch);

  useEffect(() => {
    onToggleSearch?.(activeSearch);
  }, [activeSearch]);

  const onGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {showBack && (
          <TouchableOpacity
            onPress={onLeftPress || onGoBack}
            style={styles.button}>
            <Image style={styles.icon} source={BackIC} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        {showSearch ? (
          <TouchableOpacity onPress={onActiveSearch} style={styles.button}>
            <Image style={styles.icon} source={SearchIC} />
          </TouchableOpacity>
        ) : (
          <View style={styles.button} />
        )}
      </View>
      {activeSearch && <SearchInput onSearch={onSearch} />}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    minHeight: verticalScale(44),
    width: '100%'
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: verticalScale(44),
    width: '100%',
  },
  button: {
    height: verticalScale(40),
    width: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: verticalScale(18),
    width: verticalScale(18),
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    flex: 1,
    fontSize: theme.fontSize.h1,
  },
});

export default Header;
