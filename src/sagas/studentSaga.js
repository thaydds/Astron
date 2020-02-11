import { call, put, all, takeLatest } from 'redux-saga/effects';
import API from '../http/constants';
import { addStudentSucess, listStudentsSucess } from '../actions';
import {
  ADD_STUDENT_REQUEST,
  LIST_STUDENTS_REQUEST,
} from '../actions/constants';

function* addStudent({ payload }) {
  try {
    console.log('STUNDET', payload.student);
    const response = yield call(API.post, '/students', payload.student);
    yield put(addStudentSucess(response.data));
  } catch (e) {
    console.log(e);
  }
}

function* listStudents() {
  const response = yield call(API.get, '/students');

  yield put(listStudentsSucess(response.data));
}
export default all([
  takeLatest(ADD_STUDENT_REQUEST, addStudent),
  takeLatest(LIST_STUDENTS_REQUEST, listStudents),
]);
