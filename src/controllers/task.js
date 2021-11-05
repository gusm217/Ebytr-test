const tasksModel = require('../models/task');

const createTask = async (req, res) => {
  try {
    const { task } = req.body;
    await tasksModel.createTask(task);
    if (!task) {
      res.status(404).json({ message: 'bad request' });
    }
    res.status(201).json({ task });
  } catch (err) {
    console.log(err);
  }
};

const getAllTasks = async (req, res) => {
  const tasks = await tasksModel.getAllTasks();
  res.status(200).json(tasks);
};

const updateTask = async (req, res) => {
  try {
    const task = await tasksModel.updateTask(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await tasksModel.deleteTask(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
