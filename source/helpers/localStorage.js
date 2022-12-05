import AsyncStorage from '@react-native-async-storage/async-storage';

export const setChatItem = async (myID, studentID, chatList) => {
  try {
    let newData = {};
    const data = await AsyncStorage.getItem('chat' + myID);
    if (data) {
      newData = JSON.parse(data);
      newData[studentID] = chatList;
    } else {
      newData = {};
      newData[studentID] = chatList;
    }
    storeData('chat', newData, myID);
  } catch (e) {
    console.log('error', e);
    // saving error
  }
};

export const getChatRecords = (myID, studentID) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (myID) {
        const data = await AsyncStorage.getItem('chat' + myID);
        if (data) {
          let parsedData = JSON.parse(data);
          if (parsedData[studentID]) {
            resolve(parsedData[studentID]);
          } else {
            resolve([]);
          }
        } else {
          resolve([]);
        }
      } else {
        resolve([]);
      }
    } catch (error) {
      resolve([]);
      // saving error
    }
  });
};

export const getChatRooms = myID => {
  return new Promise(async (resolve, reject) => {
    try {
      if (myID) {
        const data = await AsyncStorage.getItem('chat' + myID);
        if (data) {
          let parsedData = JSON.parse(data);
          if (parsedData) {
            resolve(parsedData);
          } else {
            resolve([]);
          }
        } else {
          resolve([]);
        }
      } else {
        resolve([]);
      }
    } catch (error) {
      resolve([]);
      // saving error
    }
  });
};
export const updateChatRecords = id => {
  getChatRecords(id);
};

const storeData = async (key, value, id) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key + id, jsonValue);
  } catch (e) {
    console.log('e', e);
    // saving error
  }
};

export const removeItem = () => {
  AsyncStorage.removeItem('chat1001');
};
