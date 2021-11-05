import React, { useState, useEffect } from 'react';
import NewTask from './components/NewTask';
import * as axios from './services/taskServices';
// https://www.devjuniorplus.com.br/criando-um-todo-list-para-entender-o-react/
// https://dev.to/jahangeer/how-to-build-a-todo-list-app-with-react-node-js-mern-stack-3ban

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(axios.getAllTasks());

    setTaskList(data);
  }, []);

  function handleInputChange(e) {
    let inputTask = e.target.value;

    setTask(JSON.stringify(inputTask));
  }

  async function addTaskToList(e) {
    e.preventDefault();

    if (task) {
      setTaskList([...taskList, task]);
    }

    setTask('');

    await axios.createTask(task);
  }

  async function delTask(index) {
    const copyListOfTasks = Object.assign([], taskList);

    copyListOfTasks.splice(index, 1);

    setTaskList(copyListOfTasks);

    await axios.deleteTask(index);
  }

  return (
    <div className="container-fluid">
      {console.log(taskList)}
      <section className="d-flex flex-column align-items-center">
        <h2>TODO-LIST</h2>
        <div>
          <input
            type="text"
            placeholder="your new task"
            onChange={handleInputChange}
            value={task}
          />
          <button type="submit" className="ms-1" onClick={addTaskToList}>
            +
          </button>
        </div>
        <ul>
          {taskList.length > 0 &&
            taskList.map((item, index) => (
              <NewTask key={index} task={item} delEvent={() => delTask(index)}>
                {item}
              </NewTask>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
