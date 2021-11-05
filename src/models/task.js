const connection = require('../models/connection');
const { ObjectId } = require('mongodb');
// https://dev.to/jahangeer/how-to-build-a-todo-list-app-with-react-node-js-mern-stack-3ban

const createTask = async (task) => {
  return connection()
    .then((db) => db.collection('tasks').insertOne({ task }))
    .then((res) => res)
    .catch((err) => err);
};

const getAllTasks = async () => {
  return connection()
    .then((db) => db.collection('tasks').find().toArray())
    .then((res) => res)
    .catch((err) => err);
};

const updateTask = async (id) => {
  return connection()
    .then((db) =>
      db.collection('tasks').findOneAndUpdate({ _id: ObjectId(id) })
    )
    .then((res) => res)
    .catch((err) => err);
};

const deleteTask = async (id) => {
  return connection()
    .then((db) =>
      db.collection('tasks').findByIdAndDelete({ _id: ObjectId(id) })
    )
    .then((res) => res)
    .catch((err) => err);
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
