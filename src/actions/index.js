import { ADD_STUDENT_REQUEST, SELECT_STUDENT, SHOW_NAVBAR } from './constants';

export const selectStudent = studentName => {
  return {
    type: SELECT_STUDENT,
    payload: { studentName },
  };
};

export const addStudentRequest = student => {
  return {
    type: ADD_STUDENT_REQUEST,
    payload: { student },
  };
};

export const handleNavbar = flag => {
  return {
    type: SHOW_NAVBAR,
    payload: { flag },
  };
};
