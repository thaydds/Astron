import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleNavbar } from '../../../actions';
import { LoginForm } from '../../ui';

import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleNavbar(false));
  }, [dispatch]);
  return (
    <div className="login_container">
      <img
        height="200"
        width="300"
        alt="logoimage"
        src={`${process.env.PUBLIC_URL}/astron-logo.jpeg`}
      />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
