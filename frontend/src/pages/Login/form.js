import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Divider from 'components/Divider';
import ErrorMsg from 'components/ErrorMsg';
import LoginButton from 'components/LoginButton';
import TextInput from 'components/FormFields/TextInput';

import urls from 'res/urls';

const Form = () => {
  const history = useHistory();
  const userValidation = yup.object().shape({
    email: yup.string().required('O e-mail é obrigatório')
      .email('Digite um e-mail válido.'),
    password: yup.string().required('A senha é obrigatória.')
  });

  return (
    <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={userValidation}
          onSubmit={(values) => {
            const { email, password } = values;
            axios.post(urls.login,{ email, password })
              .then((response) => {
                const { access_token: { token }, user: { email, name, id } } = response.data
                const userTv = { token, id, email, name }
                localStorage.setItem(`@user${id}`,JSON.stringify(userTv))
                history.push('/dashboard');
              })
              .catch((error) => {
                console.log(error)
              })
          }}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            setFieldTouched,
            handleSubmit,
          }) => (
            <div>
              <TextInput 
                label="E-mail" 
                value={values.email} 
                handleChange={handleChange('email')}
                onSetFieldTouched={() => setFieldTouched('titulo')}
              />
              <Divider height={5} />
              {touched.email && errors.email && (
                <ErrorMsg description={errors.email} />
              )}
              <Divider height={20} />
              <TextInput 
                label="Senha" 
                secure={true}
                value={values.password} 
                handleChange={handleChange('password')}
                onSetFieldTouched={() => setFieldTouched('password')}
              />
              <Divider height={5} />
              {touched.password && errors.password && (
                <ErrorMsg description={errors.password} />
              )}
              <Divider height={20} />
              <LoginButton title="Entrar" handleSubmit={handleSubmit} />
            </div>
          )}
    </Formik>
  );
};

export default Form;
