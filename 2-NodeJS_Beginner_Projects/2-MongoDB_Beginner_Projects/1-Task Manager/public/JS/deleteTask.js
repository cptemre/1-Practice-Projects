$(function () {
  const deleteTask = async () => {
    const pathName = window.location.pathname;
    const pathID = pathName.split("/");
    const ID = pathID[pathID.length - 1];
    await axios.delete(`/api/tasks/${ID}`);
  };
  $("#deleteBtn").mousedown(function () {
    deleteTask();
  });
});
