import {
  ADD_STUDENT_REQUEST,
  SELECT_STUDENT,
  SHOW_NAVBAR,
  ADD_STUDENT_SUCESS,
  LIST_STUDENTS_REQUEST,
  LIST_STUDENTS_SUCESS,
} from './constants';

export const selectStudent = studentName => {
  return {
    type: SELECT_STUDENT,
    payload: { studentName },
  };
};

export const handleNavbar = flag => {
  return {
    type: SHOW_NAVBAR,
    payload: { flag },
  };
};

export const addStudentRequest = student => {
  return {
    type: ADD_STUDENT_REQUEST,
    payload: { student },
  };
};

export const addStudentSucess = student => {
  return {
    type: ADD_STUDENT_SUCESS,
    payload: { student },
  };
};

export const listStudentsResquest = () => {
  return {
    type: LIST_STUDENTS_REQUEST,
  };
};

export const listStudentsSucess = students => {
  return {
    type: LIST_STUDENTS_SUCESS,
    payload: { students },
  };
};
