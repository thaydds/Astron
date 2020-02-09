import { createStore } from 'redux';
import students from '../reducers/studentReducer';

const store = createStore(students);

export default store;
