import React from 'react';
// import AppContext from '../context/AppContext';
// https://www.youtube.com/watch?v=tJYBMSuOX3s

export default function NewTask(props) {
  // const { task, setTask } = useContext(AppContext);
  return (
    <li>
      <span>{props.children}</span>
      <button onClick={props.delEvent}>Delete</button>
    </li>
  );
}
