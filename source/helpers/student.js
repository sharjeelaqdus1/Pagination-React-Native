import {studentList} from './mockData';

export const fetchStudentList = ({limit, nextPointer}) => {
  return new Promise((resolve, reject) => {
    //right now we are mocking data so promise is not that much useful
    // but when we will place fetch requests here we can resolve promise
    // on getting data and reject on errors
    let start = nextPointer || 0;
    let end = start + limit;
    if (end >= studentList.length) {
      end = studentList.length;
    }
    if (start >= studentList.length) {
      reject('No More Data');
    }
    let data = studentList.slice(start, end);
    let newNextPointer = data?.[data?.length - 1]?.id;
    resolve({
      data: data,
      nextPointer: newNextPointer,
    });
  });
};

export const searchStudentList = keyword => {
  return new Promise((resolve, reject) => {
    try {
      let data = studentList.filter(studentItem => {
        return (
          studentItem.firstName.toLowerCase().includes(keyword) ||
          studentItem.lastName.toLowerCase().includes(keyword)
        );
      });
      resolve({
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getStudentProfile = id => {
  let data = studentList.find(studentItem => {
    return studentItem.id === Number(id);
  });
  if (data) {
    return data;
  } else {
    return false;
  }
};
