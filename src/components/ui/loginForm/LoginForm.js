import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './LoginForm.scss';

const initialValues = {
  email: '',
  password: '',
};

const validation = yup.object().shape({
  email: yup
    .string()
    .email('Digite um Email valido')
    .required('Email e um campo obrigatorio'),
  password: yup.string().required('Senha e um campo obrigatorio'),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={props => console.log(props)}
      validationSchema={validation}
    >
      <Form className="login_form_container">
        <div className="login_form_container__form_group">
          <label htmlFor="email">Email</label>
          <div>
            <Field name="email" placeholder="Email" type="text" />
            <ErrorMessage component="span" name="email" />
          </div>
        </div>
        <div className="login_form_container__form_group">
          <label htmlFor="password">Senha</label>
          <div>
            <Field name="password" placeholder="Senha" type="text" />
            <ErrorMessage component="span" name="password" />
          </div>
        </div>
        <div className="login_form_container__button_group">
          <button type="submit">Entrar</button>
          <button type="submit">Registrar</button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
