class TaskNotFound extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
    return new TaskNotFound(msg, statusCode)
}
module.exports = { createCustomError, TaskNotFound }