import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Button from '../../common/button';
import ScreenContainer from '../../common/screenContainer';
import {BLACK, WHITE} from '../../constants/colors';
import {CLASS, Name, RollNo, StudentID} from '../../constants/strings';
import theme from '../../constants/themes';
import {AUTH_ROUTES} from '../../navigation/routes';
const Profile = ({route}) => {
  const navigation = useNavigation();
  const {profile} = route?.params;
  const {picture, rollNo, firstName, lastName, classValue, id} = profile || {};

  const onChatScreen = () => {
    navigation.navigate(AUTH_ROUTES.Chat, {profile});
  };
  return (
    <ScreenContainer title={'Profile'} showBack style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: picture}} />
        <View style={styles.rightContainer}>
          <Text style={styles.label}>
            {Name}: {firstName} {lastName}
          </Text>
          <Text style={styles.label}>
            {RollNo}: {rollNo}
          </Text>
          <Text style={styles.label}>
            {CLASS}: {classValue}
          </Text>
          <Text style={styles.label}>
            {StudentID}: {id}
          </Text>
        </View>
        <Button onPress={onChatScreen} label={'Chat'} />
      </View>
    </ScreenContainer>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
  },

  rightContainer: {
    paddingStart: 10,
  },
  label: {
    fontSize: theme.fontSize.h1,
    color: BLACK,
    marginVertical: moderateScale(10),
  },
  image: {
    width: '100%',
    height: moderateScale(140),
    borderRadius: moderateScale(10),
  },
});
export default Profile;
