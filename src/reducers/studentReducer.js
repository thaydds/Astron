import {
  ADD_STUDENT_REQUEST,
  SELECT_STUDENT,
  SHOW_NAVBAR,
} from '../actions/constants';

const initialState = {
  students: ['Jonas', 'Thayrone', 'Elma', 'Erildo', 'Joicy', 'Larissa'],
  selectedtudent: [],
  showNavbar: false,
};

function students(state = initialState, { type, payload }) {
  switch (type) {
    case SELECT_STUDENT:
      return {
        ...state,
        selectedtudent: state.survivors.filter(
          s => s.name.toLowerCase() === payload.survivorName.toLowerCase()
        ),
      };
    case ADD_STUDENT_REQUEST:
      return { ...state, students: [...this.state.students, payload.student] };
    case SHOW_NAVBAR:
      return { ...state, showNavbar: payload.flag };
    default:
      return state;
  }
}

export default students;
