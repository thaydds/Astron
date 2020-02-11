import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import './StudentForm.scss';

const initialValues = {
  name: '',
  cpf: '',
  email: '',
  age: '',
  birthday: '',
  grade: '',
  password: '',
};

const validation = yup.object().shape({
  email: yup
    .string()
    .email('Digite um Email valido')
    .required('Email e um campo obrigatorio'),
  password: yup.string().required('Senha e um campo obrigatorio'),
  name: yup.string().required('Senha e um campo obrigatorio'),
  cpf: yup.string().required('Senha e um campo obrigatorio'),
  age: yup.string().required('Senha e um campo obrigatorio'),
  birthday: yup.string().required('Senha e um campo obrigatorio'),
  grade: yup.string().required('Senha e um campo obrigatorio'),
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
          <label htmlFor="email">Nome</label>
          <div>
            <Field name="email" placeholder="Nome" type="text" />
            <ErrorMessage component="span" name="email" />
          </div>
        </div>
        <div className="login_form_container__form_group">
          <label htmlFor="email">idade</label>
          <div>
            <Field name="email" placeholder="idade" type="text" />
            <ErrorMessage component="span" name="email" />
          </div>
        </div>
        <div className="login_form_container__form_group">
          <label htmlFor="email">Data de Nascimento</label>
          <div>
            <Field name="email" placeholder="Data de Nascimento" type="text" />
            <ErrorMessage component="span" name="email" />
          </div>
        </div>
        <div className="login_form_container__form_group">
          <label htmlFor="email">Ensino</label>
          <div>
            <Field name="email" placeholder="Ensino" type="text" />
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
          <button type="submit">Adicionar</button>
          <button type="submit">Cancelar</button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
