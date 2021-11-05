import axios from 'axios';
const apiUrl = 'http://localhost:3001/tasks';

export async function getAllTasks() {
  return axios
    .get(apiUrl)
    .then((res) => res.data)
    .catch((err) => console.log(err.response));
}

export function createTask(task) {
  return axios.post(apiUrl, { task });
}

export function updateTask(id) {
  return axios.put(apiUrl, +'/' + id);
}

export function deleteTask(id) {
  return axios.delete(apiUrl + '/' + id);
}
