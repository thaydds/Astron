import {
  ADD_STUDENT_SUCESS,
  LIST_STUDENTS_SUCESS,
  SELECT_STUDENT,
  SHOW_NAVBAR,
  CLEAR_SELECTED_STUDENT,
} from '../actions/constants';

const initialState = {
  students: [],
  selectedtudent: [],
  showNavbar: false,
};

function students(state = initialState, { type, payload }) {
  switch (type) {
    case SELECT_STUDENT:
      return {
        ...state,
        selectedtudent: state.students.filter(s => {
          return s.name.toLowerCase() === payload.studentName.toLowerCase();
        }),
      };
    case CLEAR_SELECTED_STUDENT:
      return { ...state, selectedtudent: [] };
    case ADD_STUDENT_SUCESS:
      return { ...state, students: [...state.students, payload.student] };
    case LIST_STUDENTS_SUCESS:
      return { ...state, students: payload.students };
    case SHOW_NAVBAR:
      return { ...state, showNavbar: payload.flag };
    default:
      return state;
  }
}

export default students;
