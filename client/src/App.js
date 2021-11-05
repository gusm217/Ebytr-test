import React, { useState, useEffect } from 'react';
import NewTask from './components/NewTask';
import * as axios from './services/taskServices';
// https://www.devjuniorplus.com.br/criando-um-todo-list-para-entender-o-react/
// https://dev.to/jahangeer/how-to-build-a-todo-list-app-with-react-node-js-mern-stack-3ban

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    try {
      async function getAllTasks() {
        const data = await axios.getAllTasks();
        setTaskList(data);
      }
      getAllTasks();
    } catch (err) {
      console.log(err);
    }
  }, []);

  function handleInputChange(e) {
    let inputTask = e.target.value;

    setTask(inputTask);
  }

  async function addTaskToList(e) {
    e.preventDefault();

    // if (task) {
    // setTaskList([...taskList, { task }]);
    // }

    const createdTask = await axios.createTask(task);
    setTaskList([...taskList, createdTask.data]);

    setTask('');
  }

  async function delTask(id) {
    // const copyListOfTasks = Object.assign([], taskList);

    // copyListOfTasks.splice(id, 1);

    // setTaskList(copyListOfTasks);

    await axios.deleteTask(id);
    setTaskList(taskList.filter((task) => task._id !== id));
  }

  return (
    <div className="container-fluid mt-5">
      {/* {console.log(taskList)} */}
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
              <NewTask
                key={index}
                task={item.task}
                delEvent={() => delTask(item._id)}
              />
            ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
