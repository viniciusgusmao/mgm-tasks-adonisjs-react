import * as yup from 'yup';

const validation = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  start_date: yup.string().required('A data inicial é obrigatória'),
  start_time: yup.string().required('O horário inicial é obrigatório'),
  end_date: yup.string().required('A data final é obrigatória'),
  end_time: yup.string().required('O horário final é obrigatório'),
  status: yup.string().required('O status é obrigatório'),
  customer_id: yup.string().required('O cliente é um campo obrigatório')
});

export default validation;