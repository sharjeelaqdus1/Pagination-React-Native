import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import KeyboardAvoidingViewComponent from '../../common/keyboardAvoidingView';
import {useGetChatData} from '../../helpers/useGetChatData';
import {useGetMyProfile} from '../../helpers/useGetMyProfile';
import ChatList from './chatList';
import MessageInput from './messageInput';
const ChatScreen = ({route}) => {
  const [search, setSearch] = useState();
  const {profile} = route?.params;
  const {firstName, id} = profile || {};
  const navigation = useNavigation();
  const {chatList, onSendMessage, updateChatInStorage, resetList} =
    useGetChatData({
      userID: id,
    });
  const {profile: MyProfile} = useGetMyProfile();

  const onBackButton = () => {
    navigation.goBack();
    updateChatInStorage();
  };

 
  return (
    <KeyboardAvoidingViewComponent
      title={firstName}
      showBack
      showSearch
      onLeftPress={onBackButton}
      onSearch={setSearch}>
      <ChatList data={chatList} profile={MyProfile} search={search} />
      <MessageInput onSendMessage={onSendMessage} />
    </KeyboardAvoidingViewComponent>
  );
};

export default ChatScreen;
