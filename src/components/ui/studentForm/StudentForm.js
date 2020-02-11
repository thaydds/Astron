import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { addStudentRequest } from '../../../actions';
import './StudentForm.scss';

const initialValues = {
  name: '',
  email: '',
  gender: '',
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
  gender: yup.string().required('Genero e um campo obrigatorio'),
  name: yup.string().required('Nome e um campo obrigatorio'),
  birthday: yup.string().required('Data de nascimento e um campo obrigatorio'),
  grade: yup.string().required('Ensino e um campo obrigatorio'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        const student = {
          ...values,
          status: true,
          birthday: new Date(values.birthday),
        };
        console.log('student', student);
        return dispatch(addStudentRequest(student));
      }}
      validationSchema={validation}
    >
      <Form className="student_form_container">
        <div className="student_form_container__form_group">
          <label htmlFor="email">Email</label>
          <div>
            <Field name="email" placeholder="Email" type="text" />
            <ErrorMessage component="span" name="email" />
          </div>
        </div>
        <div className="student_form_container__form_group">
          <label htmlFor="name">Nome</label>
          <div>
            <Field name="name" placeholder="Nome" type="text" />
            <ErrorMessage component="span" name="name" />
          </div>
        </div>
        <div className="student_form_container__form_group">
          <label htmlFor="gender">Gender</label>
          <div>
            <Field as="select" name="gender">
              <option disabled defaultValue value="">
                Selecione o genero
              </option>
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
              <option value="O">Outro</option>
            </Field>
            <ErrorMessage component="span" name="gender" />
          </div>
        </div>
        <div className="student_form_container__form_group">
          <label htmlFor="birthday">Data de Nascimento</label>
          <div>
            <Field
              name="birthday"
              placeholder="Data de Nascimento"
              type="date"
            />
            <ErrorMessage component="span" name="birthday" />
          </div>
        </div>
        <div className="student_form_container__form_group">
          <label htmlFor="grade">Ensino</label>
          <div>
            <Field name="grade" placeholder="Ensino" type="text" />
            <ErrorMessage component="span" name="grade" />
          </div>
        </div>
        <div className="student_form_container__form_group">
          <label htmlFor="password">Senha</label>
          <div>
            <Field name="password" placeholder="Senha" type="text" />
            <ErrorMessage component="span" name="password" />
          </div>
        </div>
        <div className="student_form_container__button_group">
          <button type="submit">Adicionar</button>
          <button type="submit">Cancelar</button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
