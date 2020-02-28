import { call, put, all, takeLatest } from 'redux-saga/effects';
import API from '../http/constants';
import {
  addStudentSucess,
  listStudentsSucess,
  addTeacherSucess,
  signFailure,
  signInSuccess,
} from '../actions';
import {
  ADD_STUDENT_REQUEST,
  LIST_STUDENTS_REQUEST,
  ADD_TEACHER_REQUEST,
  SIGN_IN_REQUEST,
} from '../actions/constants';

import history from '../histoty';

function* addStudent({ payload }) {
  try {
    const response = yield call(API.post, '/students', payload.student);
    yield put(addStudentSucess(response.data));
    history.push('/home');
  } catch (e) {
    console.log(e);
  }
}

function* addTeacher({ payload }) {
  try {
    const response = yield call(API.post, '/teacher', payload.teacher);
    yield put(addTeacherSucess(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* listStudents() {
  const response = yield call(API.get, '/students');

  yield put(listStudentsSucess(response.data));
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(API.post, '/teacher/login', {
      email,
      password,
    });

    const { token, user } = response.data;

    // API.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/home');
  } catch (err) {
    // yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(API.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    API.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}
export default all([
  takeLatest(ADD_STUDENT_REQUEST, addStudent),
  takeLatest(ADD_TEACHER_REQUEST, addTeacher),
  takeLatest(LIST_STUDENTS_REQUEST, listStudents),
  takeLatest(SIGN_IN_REQUEST, signIn),
]);
