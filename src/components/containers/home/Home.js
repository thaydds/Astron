import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AutoCompleteSearch, Title, StudentsList } from '../../ui';
import { handleNavbar, listStudentsResquest } from '../../../actions';

import './Home.scss';

const Home = () => {
  const { students, selectStudent } = useSelector(state => state);
  const studentsName = students.map(s => s.name);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleNavbar(true));
  }, [dispatch]);
  useEffect(() => {
    dispatch(listStudentsResquest());
  }, [dispatch]);

  console.log('students', students);

  return (
    <div className="home_container">
      <Title title="Bem vindo(a) ao Astron - Edu" />
      <AutoCompleteSearch students={studentsName} />
      <StudentsList students={students} />
    </div>
  );
};

export default Home;
