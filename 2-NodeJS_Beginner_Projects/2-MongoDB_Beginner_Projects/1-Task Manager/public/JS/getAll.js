$(function () {
  const getAll = async () => {
    const section = `<section class="task transition cursor"><a class="anchor" href="#"></a></section>`;
    const {
      data: { tasks },
    } = await axios.get("/api/tasks");
    for (let i = 0; i < tasks.length; i++) {
      $("#tasks").append(section);
      $(`.anchor:eq(${i})`).html(tasks[i].name);
      $(`.anchor:eq(${i})`).attr("href", `/yourTask/${tasks[i]._id}`);
      if (tasks[i].completed) {
        $(`.anchor:eq(${i})`).addClass("true");
      } else {
        $(`.anchor:eq(${i})`).addClass("false");
      }
    }
    $(".task").mouseup(function (e) {});
  };
  const createTask = async () => {
    const name = $("#createInput").val();
    await axios.post("/api/tasks", { name });
  };
  $("#createBtn").mouseup(function () {
    createTask();
    getAll();
  });

  getAll();
});
