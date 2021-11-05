import React from 'react';
// https://www.youtube.com/watch?v=tJYBMSuOX3s

export default function NewTask(props) {
  return (
    <li>
      <span>{props.task}</span>
      <button onClick={props.delEvent}>Delete</button>
    </li>
  );
}
