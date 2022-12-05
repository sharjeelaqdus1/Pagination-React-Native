import React from 'react';
import {View} from 'react-native';
import RoundButton from '../../common/roundButton';
import ScreenContainer from '../../common/screenContainer';
import {ChatIC, StudentIC} from '../../assets/images';
import {styles} from './styles';
import RoundLabel from '../../common/roundLabel';
import {Welcome} from '../../constants/strings';
import {useNavigation} from '@react-navigation/native';
import {AUTH_ROUTES} from '../../navigation/routes';
const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToStudenScreen = () => {
    navigation.navigate(AUTH_ROUTES.Student);
  };
  const navigateToChatScreen = () => {
    navigation.navigate(AUTH_ROUTES.ChatList);
  };
  return (
    <ScreenContainer>
      <RoundLabel label={Welcome} />
      <View style={styles.buttonContainer}>
        <RoundButton onPress={navigateToStudenScreen} image={StudentIC} />
        <RoundButton onPress={navigateToChatScreen} image={ChatIC} />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
