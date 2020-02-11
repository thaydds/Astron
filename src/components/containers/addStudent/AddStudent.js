import React, { useEffect } from 'react';
import './AddStudent.scss';
import { useDispatch } from 'react-redux';
import { Title, StudentForm } from '../../ui';
import { handleNavbar } from '../../../actions';

const AddSurvivor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleNavbar(true));
  }, [dispatch]);

  return (
    <div className="add_student_container">
      <Title title="Registro de aluno" />
      <StudentForm />
    </div>
  );
};

export default AddSurvivor;
