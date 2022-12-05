import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {WHITE} from '../../constants/colors';
import {CLASS, Name, RollNo, StudentID} from '../../constants/strings';
import {DisabledStudentContext} from '../../context';
import {AUTH_ROUTES} from '../../navigation/routes';

const StudentsItem = ({item}) => {
  const navigation = useNavigation();
  const {picture, rollNo, firstName, lastName, classValue, id} = item;
  const [disabledStudents, setDisabledStudents] = useContext(
    DisabledStudentContext,
  );
  const onPress = () => {
    navigation.navigate(AUTH_ROUTES.Profile, {
      profile: item,
    });
  };
  const onDisable = () => {
    setDisabledStudents(prevState => {
      prevState[id] = !prevState[id];
      return {...prevState};
    });
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, disabledStudents[id] && styles.disabled]}>
      <View style={styles.innerContainer}>
        <Image style={styles.icon} source={{uri: picture}} />
        <View style={styles.rightContainer}>
          <Text>
            {Name}: {firstName} {lastName}
          </Text>
          <Text>
            {RollNo}: {rollNo}
          </Text>
          <Text>
            {CLASS}: {classValue}
          </Text>
          <Text>
            {StudentID}: {id}
          </Text>
          <TouchableOpacity onPress={onDisable}>
            <Text>
              {disabledStudents[id] === true ? 'Enable' : 'Disable'} this
              student
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
  },
  disabled: {
    opacity: 0.5,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  rightContainer: {
    paddingStart: 10,
  },
  icon: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(10),
  },
});
export default StudentsItem;
