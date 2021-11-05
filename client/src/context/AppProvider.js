import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const contextValue = {
    task,
    setTask,
    taskList,
    setTaskList,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default Provider;
