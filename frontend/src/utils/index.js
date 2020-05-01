export const isLogin = () => {
  const user = JSON.parse(localStorage.getItem('@user_gp'));
  return Boolean(user);
}

export const getIdCompany = () => {
  const company_id_ = JSON.parse(localStorage.getItem('@user_gp'));
  return company_id_.id;
}

export const getToken = () => {
  const token_ = JSON.parse(localStorage.getItem('@user_gp'));
  return token_?.token;
}

export const getAvailableProjectStatus = () => {
  return [
    {
      id: 'APROVADO',
      name: 'APROVADO'
    },
    {
      id: 'ATIVO',
      name: 'ATIVO'
    },
    {
      id: 'EM PROGRESSO',
      name: 'EM PROGRESSO'
    },
    {
      id: 'ATRASADO',
      name: 'ATRASADO'
    },
    {
      id: 'CANCELADO',
      name: 'CANCELADO'
    },
    {
      id: 'COMPLETO',
      name: 'COMPLETO'
    }
  ];
}

export const joinDateTimeAndPrepareToDB = (values) => { 
  const dataMod = values;
  dataMod['start'] = values.start_date+' '+values.start_time+':00';
  dataMod['end'] = values.end_date+' '+values.end_time+':00';
  delete dataMod['start_date'];
  delete dataMod['start_time'];
  delete dataMod['end_date'];
  delete dataMod['end_time'];
  return dataMod;
}