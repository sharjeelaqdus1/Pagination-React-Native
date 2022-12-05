import React from 'react';
import {BaseList} from '../../common/baseList';
import {View, StyleSheet, Text} from 'react-native';
import StudentsItem from './studentsItem';
import theme from '../../constants/themes';
const StudentsList = props => {
  const renderItem = ({item}) => {
    return <StudentsItem item={item} />;
  };
  const separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <BaseList
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={separator}
      ListFooterComponent={() => (
        <Text style={styles.footer}>No More Item</Text>
      )}
      {...props}
    />
  );
};
export const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  footer: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: theme.fontSize.h2,
  },
});
export default StudentsList;
