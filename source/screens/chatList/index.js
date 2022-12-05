import {useNavigation} from '@react-navigation/native';
import React from 'react';
import ScreenContainer from '../../common/screenContainer';

import {useGetChatList} from '../../helpers/useGetChatList';
import {AUTH_ROUTES} from '../../navigation/routes';
import RoomsList from './roomsList';
const ChatList = () => {
  const navigation = useNavigation();
  const {chatRooms, onSearchRooms, resetList} = useGetChatList();
  const onPressItem = item => {
    const {profile} = item;
    if (profile) {
      navigation.navigate(AUTH_ROUTES.Chat, {profile});
    }
  };
  const onToggleSearch = status => {
    if (!status) {
      resetList();
    }
  };
  return (
    <ScreenContainer
      title={'Chat Rooms'}
      showBack
      showSearch
      onSearch={onSearchRooms}
      onToggleSearch={onToggleSearch}>
      <RoomsList data={chatRooms} onPressItem={onPressItem} />
    </ScreenContainer>
  );
};

export default ChatList;
