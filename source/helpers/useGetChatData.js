import {useState, useEffect, useCallback} from 'react';
import {getChatRecords, setChatItem} from './localStorage';
import {sampleMessages} from './mockData';
import useAppState from './useAppState';
import {useGetMyProfile} from './useGetMyProfile';

export const useGetChatData = ({userID}) => {
  const [chatList, setChatList] = useState([]);
  const [defaultChat, setDefaultChat] = useState([]);
  const {profile} = useGetMyProfile();
  const {appStateVisible} = useAppState();
  useEffect(() => {
    if (profile?.id) {
      getChatRecords(profile?.id, userID).then(data => {
        if (data?.length) {
          setChatList(data);
          setDefaultChat(data);
        }
      });
    }
  }, [profile, userID]);

  const onSearchChat = keyword => {
    if (keyword) {
      let results = defaultChat.filter(chatItem => {
        return chatItem?.message.toLowerCase().includes(keyword.toLowerCase());
      });
      setChatList(results);
    } else {
      setChatList(defaultChat);
    }
  };

  const updateChatInStorage = useCallback(() => {
    setChatItem(profile.id, userID, chatList);
  }, [profile, userID, chatList]);
  useEffect(() => {
    if (appStateVisible === 'background' && profile?.id && userID) {
      updateChatInStorage();
    }
  }, [appStateVisible, profile, userID, chatList, updateChatInStorage]);

  const onSendMessage = message => {
    if (message && profile?.id) {
      let messageObject = {
        message,
        senderID: profile?.id,
        createdAt: new Date(),
        id: Math.random(),
      };
      setChatList(prevState => [messageObject, ...prevState]);
    }
  };

  const generateAutomatedMessage = useCallback(() => {
    let message = sampleMessages[Math.floor(Math.random() * 10)];
    if (message && profile?.id) {
      let messageObject = {
        message,
        senderID: userID,
        createdAt: new Date(),
        id: Math.random(),
      };
      setChatList(prevState => [messageObject, ...prevState]);
    }
  }, [profile?.id, userID]);

  const resetList = () => {
    setChatList(defaultChat);
  };

  useEffect(() => {
    if (chatList?.[0]?.senderID === profile?.id) {
      generateAutomatedMessage();
    }
  }, [chatList, profile, generateAutomatedMessage]);
  return {
    chatList,
    onSendMessage,
    updateChatInStorage,
    onSearchChat,
    resetList,
  };
};
