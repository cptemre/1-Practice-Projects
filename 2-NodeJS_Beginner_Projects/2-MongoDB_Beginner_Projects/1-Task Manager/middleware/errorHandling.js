const { TaskNotFound } = require("../errors/taskNotFound");

const errorHandling = (err, req, res, next) => {
  if (err instanceof TaskNotFound) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again." });
};

module.exports = errorHandling