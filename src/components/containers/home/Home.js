import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AutoCompleteSearch, Title, StudentsList } from '../../ui';
import { handleNavbar } from '../../../actions';
import './Home.scss';

const Home = () => {
  const { students } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleNavbar(true));
  }, []);
  return (
    <div className="home_container">
      <Title title="Bem vindo(a) ao Astron - Edu" />
      <AutoCompleteSearch students={students} />
      <StudentsList />
    </div>
  );
};

export default Home;
