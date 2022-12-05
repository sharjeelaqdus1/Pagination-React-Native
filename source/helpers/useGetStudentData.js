import {useState, useEffect} from 'react';
import {fetchStudentList, searchStudentList} from './student';

export const useGetStudentData = () => {
  const [studentData, setStudentData] = useState();

  const fetchMoreData = () => {
    if (studentData?.type !== 'search') {
      fetchStudentList({
        limit: 20,
        nextPointer: studentData?.nextPointer,
      }).then(response => {
        const {data} = response;

        if (data) {
          setStudentData({
            data: [...studentData?.data, ...response?.data],
            nextPointer: response?.nextPointer,
          });
        }
      });
    }
  };

  const resetList = () => {
    fetchStudentList({
      limit: 20,
    }).then(response => {
      setStudentData(response);
    });
  };

  const onSearchStudents = keyword => {
    if (keyword) {
      searchStudentList(keyword.toLowerCase()).then(response => {
        setStudentData({
          data: response.data,
          nextPointer: null,
          type: 'search',
        });
      });
    } else {
      resetList();
    }
  };

  useEffect(() => {
    resetList();
  }, []);

  return {
    studentData,
    fetchMoreData,
    onSearchStudents,
    resetList,
  };
};
