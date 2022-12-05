import React from 'react';
import {FlatList} from 'react-native';

export const BaseList = ({
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  onEndReachedThreshold = 0.5,
  ...props
}) => {
  return (
    <FlatList
      {...props}
      onEndReachedThreshold={onEndReachedThreshold}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  );
};
