$(function () {
  const updateTask = async () => {
    const pathName = window.location.pathname;
    const pathID = pathName.split("/");
    const ID = pathID[pathID.length - 1];
    const name = $("#editName").val();
    const completed = $("#editCompleted").prop("checked");
    await axios.patch(`/api/tasks/${ID}`, {
      name,
      completed,
    });
  };
  $("#updateBtn").mousedown(function () {
    updateTask();
  });
});
