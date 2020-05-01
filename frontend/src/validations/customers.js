import * as yup from 'yup';

const validation = yup.object().shape({
  email: yup.string().required('O e-mail é obrigatório')
    .email('Digite um e-mail válido.'),
  name: yup.string().required('O nome é obrigatório'),
  number: yup.number().positive('Digite apenas números no campo acima'),
});

export default validation;