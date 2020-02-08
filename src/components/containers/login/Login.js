import React from 'react';
import { LoginForm } from '../../ui';

import './Login.scss';

const Login = () => {
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
