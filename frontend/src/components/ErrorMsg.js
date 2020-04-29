import React from 'react';

const ErrorMsg = ({ description }) => (
    <span style={{
      display: 'block',
      width: '100%',
      fontSize: '12px',
      color: 'tomato'

    }}>{description}</span>
);

export default ErrorMsg;

