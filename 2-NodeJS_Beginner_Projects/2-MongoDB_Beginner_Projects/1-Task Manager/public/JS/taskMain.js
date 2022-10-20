$(function () {
  const getSingle = async () => {
    const pathName = window.location.pathname;
    const pathID = pathName.split("/");
    const ID = pathID[pathID.length - 1];
    const {
      data: { task },
    } = await axios.get(`/api/tasks/${ID}`);
    $("#editID").val(task._id);
    $("#editName").val(task.name);
    if (task.completed) {
      $("#editCompleted").prop("checked", true);
    }
    console.log(task);
  };
  getSingle();
});
