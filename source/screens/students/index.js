import React, {useState} from 'react';
import ScreenContainer from '../../common/screenContainer';
import {DisabledStudentContext} from '../../context';
import {useGetStudentData} from '../../helpers/useGetStudentData';
import StudentsList from './studentsList';
const StudentsScreen = () => {
  const [disabledStudents, setDisabledStudents] = useState({});
  const {resetList, studentData, fetchMoreData, onSearchStudents} =
    useGetStudentData();
  const {data} = studentData || {};

  const onToggleSearch = status => {
    if (!status) {
      resetList();
    }
  };
  return (
    <DisabledStudentContext.Provider
      value={[disabledStudents, setDisabledStudents]}>
      <ScreenContainer
        title={'Students'}
        showBack
        showSearch
        onSearch={onSearchStudents}
        onToggleSearch={onToggleSearch}>
        <StudentsList data={data} onEndReached={fetchMoreData} />
      </ScreenContainer>
    </DisabledStudentContext.Provider>
  );
};

export default StudentsScreen;
