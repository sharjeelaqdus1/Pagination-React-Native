import {getStudentProfile} from './student';

export const getFilteredChatRooms = data => {
  if (data) {
    let roomsKeys = Object.keys(data);
    let parsedArray = [];
    roomsKeys.map(chatID => {
      let chat = data[chatID];
      let profile = getStudentProfile(chatID);
      if (chat?.length > 0) {
        parsedArray.push({
          ...chat[0],
          profile: profile,
        });
      }
    });
    parsedArray.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return parsedArray;
  }
  return [];
};
