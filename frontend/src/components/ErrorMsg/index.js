import React from 'react';
import './index.scss';

const ErrorMsg = ({ description }) => {
  const isArray = Array.isArray(description);
  const result = [];
  if (isArray)
    description.map((item,idx) => {
      result.push(<span key={idx} className="error-msg">{item}</span>)
    })
  else
    result.push(<span key={1} className="error-msg">{description}</span>);

  return (
    <>
      {result.map(item => item)}
    </>
  )
}

export default ErrorMsg;

