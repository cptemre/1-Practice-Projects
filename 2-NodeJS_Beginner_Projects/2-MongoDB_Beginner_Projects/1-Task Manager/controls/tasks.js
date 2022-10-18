const Task = require("../models/Task");

const getAll = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
};

const getSingle = async (req, res) => {
  const { id: taskID } = req.params;
  console.log(taskID);
  const task = await Task.findOne({ _id: taskID });
  res.status(200).json({ task });
};

module.exports = { getAll, getSingle };
