import React,{ useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { useHistory } from "react-router-dom";

import Divider from 'components/Divider';
import ErrorMsg from 'components/ErrorMsg';
import LoginButton from 'components/LoginButton';
import TextInput from 'components/FormFields/TextInput';
import Loading from 'components/Loading';

import { handleLogin } from 'services/user';

const Form = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const userValidation = yup.object().shape({
    email: yup.string().required('O e-mail é obrigatório')
      .email('Digite um e-mail válido.'),
    password: yup.string().required('A senha é obrigatória.')
  });

  return (
    <>
    <Loading loading={loading} />
    <Formik
          initialValues={{
            email: 'suporte@tecnovix.com.br',
            password: 'tecnovix@123',
          }}
          validationSchema={userValidation}
          onSubmit={(values) => {
            const { email, password } = values;
            setLoading(true);
            handleLogin(email, password)
              .then((response) => {
                const { access_token: { token }, user: { email, name, id } } = response.data
                const userTv = { token, id, email, name }
                setLoading(true);
                localStorage.setItem('@user_gp',JSON.stringify(userTv))
                history.push('/dashboard');
              })
              .catch((error) => {
                setLoading(false);
                setError("Login ou senha incorretos")
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
              {error != '' && <><ErrorMsg description={error} /><Divider height={20} /></>}
              <LoginButton title="Entrar" handleSubmit={handleSubmit} />
            </div>
          )}
    </Formik>
    </>
  );
};

export default Form;
