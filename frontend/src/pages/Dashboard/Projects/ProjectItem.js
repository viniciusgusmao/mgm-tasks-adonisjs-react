import React from 'react';
import Col from 'react-bootstrap/Col'
import { MdToll } from 'react-icons/md';

const ProjectItem = (props) => (
  <Col key={props.id} className={`${props.color}-background`}>
    <div>
      <MdToll size={36} />
      <p>{props.name}</p>
      <span>{props.amount} itens</span>
    </div>
  </Col>
);

export default ProjectItem;
