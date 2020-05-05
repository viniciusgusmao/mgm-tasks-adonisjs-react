import React from 'react';
import { MdToll } from 'react-icons/md';
import './index.scss';
import { useHistory } from 'react-router-dom'

const TaskItem = (props) => {
  const history = useHistory();
  return (
    <div className="container-task-item" onClick={() => history.push(`/tasks/${props.id}/edit`)}>
      <div>
        <MdToll size={18} />
        <p>{props.name}</p>
      </div>
      <span>{props.status}</span>
    </div>
  );

}

  export default TaskItem;
