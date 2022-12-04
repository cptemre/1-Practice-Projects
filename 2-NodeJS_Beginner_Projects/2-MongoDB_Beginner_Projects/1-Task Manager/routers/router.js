const express = require("express");
const router = express.Router();
const {
  getAll,
  getSingle,
  createTask,
  deleteTask,
  updateTask,
} = require("../controls/tasks");

router.route("/").get(getAll).post(createTask);
router.route("/:id").get(getSingle).delete(deleteTask).patch(updateTask);

module.exports = router;
