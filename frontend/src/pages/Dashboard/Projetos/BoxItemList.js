import React from 'react';
import Col from 'react-bootstrap/Col'
import { MdToll } from 'react-icons/md';

const BoxItem = ({ color, label, amount }) => (
  <Col className={`${color}-background`}>
    <div>
      <MdToll size={36} />
      <p>{label}</p>
      <span>{amount} itens</span>
    </div>
  </Col>
);

export default BoxItem;
