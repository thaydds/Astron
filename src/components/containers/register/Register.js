import React, { useEffect } from 'react';
import './Register.scss';
import { useDispatch } from 'react-redux';
import { Title, RegisterForm } from '../../ui';
import { handleNavbar } from '../../../actions';

const Register = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleNavbar(false));
  }, [dispatch]);

  return (
    <div className="register_container">
      <Title title="Registro de professor" />
      <RegisterForm />
    </div>
  );
};

export default Register;
