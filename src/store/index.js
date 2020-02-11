import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import students from '../reducers/studentReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(students, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
