import {useIsFocused} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {getFilteredChatRooms} from './chat';
import {getChatRooms} from './localStorage';
import {useGetMyProfile} from './useGetMyProfile';

export const useGetChatList = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [defaultRooms, setDefaultRooms] = useState([]);
  const {profile} = useGetMyProfile();
  const isFocused = useIsFocused();

  const onSearchRooms = keyword => {
    if (keyword) {
      let results = defaultRooms.filter(chatRoomItem => {
        return (
          chatRoomItem?.profile?.firstName
            .toLowerCase()
            .includes(keyword.toLowerCase()) ||
          chatRoomItem?.profile?.lastName
            .toLowerCase()
            .includes(keyword.toLowerCase())
        );
      });
      setChatRooms(results);
    } else {
      setChatRooms(defaultRooms);
    }
  };

  useEffect(() => {
    if (profile?.id) {
      getChatRooms(profile?.id).then(data => {
        if (data) {
          getFilteredChatRooms(data);
          let result = getFilteredChatRooms(data);
          setChatRooms(result);
          setDefaultRooms(result);
        }
      });
    }
  }, [profile, isFocused]);

  const resetList = () => {
    setChatRooms(defaultRooms);
  };

  return {
    chatRooms,
    onSearchRooms,
    resetList
  };
};
