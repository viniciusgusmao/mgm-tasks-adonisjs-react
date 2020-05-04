import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';

const BackButtonForm = () => {
  const history = useHistory();
  return (
    <button className="back-button-form" onClick={() => history.goBack()}>Voltar</button>
  );
}

export default BackButtonForm;
