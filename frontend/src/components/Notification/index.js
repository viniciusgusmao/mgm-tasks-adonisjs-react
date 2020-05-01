import React from 'react';
import Toast from 'react-bootstrap/Toast'

const Notification = ({message,type}) => (    
  <Toast
    delay={3000}
    style={{
      position: 'absolute',
      backgroundColor: (type === 'success') ? 'darkseagreen' : 'indianred',
      color: 'white',
      top: 0,
      right: 0,
      zIndex: 999,
      marginTop: -20
    }}
  >
    <Toast.Body>{message}</Toast.Body>
  </Toast>
);

export default Notification;

