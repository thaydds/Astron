import {
  ADD_STUDENT_REQUEST,
  SELECT_STUDENT,
  SHOW_NAVBAR,
  ADD_STUDENT_SUCESS,
  LIST_STUDENTS_REQUEST,
  LIST_STUDENTS_SUCESS,
  CLEAR_SELECTED_STUDENT,
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_OUT,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST,
  ADD_TEACHER_REQUEST,
  ADD_TEACHER_SUCESS,
} from './constants';

export const selectStudent = studentName => {
  return {
    type: SELECT_STUDENT,
    payload: { studentName },
  };
};

export const clearSelectedStudent = () => {
  return {
    type: CLEAR_SELECTED_STUDENT,
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

// auth actions

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: SIGN_IN_FAILURE,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export const addTeacherRequest = teacher => {
  return {
    type: ADD_TEACHER_REQUEST,
    payload: { teacher },
  };
};

export const addTeacherSucess = teacher => {
  return {
    type: ADD_TEACHER_SUCESS,
    payload: { teacher },
  };
};
