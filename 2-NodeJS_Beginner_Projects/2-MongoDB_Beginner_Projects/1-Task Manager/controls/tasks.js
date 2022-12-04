const Task = require("../models/Task");
const tryCatch = require("../middleware/tryCatch");
const taskNotFound = require("../errors/taskNotFound");

const taskNot = (task) => {
  if (!task) {
    return next(taskNotFound(`No task with id : ${taskID}`, 404));
  }
};

const getAll = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
};

const getSingle = tryCatch(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  taskNot(task);
  res.status(200).json({ task });
});

const createTask = async (req, res, next) => {
  const task = await Task.create(req.body);
  taskNot(task);
  res.status(200).json({ task });
};

const deleteTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  taskNot(task);
  res.status(200).json({ message: "deleted" });
};

const updateTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  taskNot(task);
  res.status(200).json(task);
};

module.exports = { getAll, getSingle, createTask, deleteTask, updateTask };
