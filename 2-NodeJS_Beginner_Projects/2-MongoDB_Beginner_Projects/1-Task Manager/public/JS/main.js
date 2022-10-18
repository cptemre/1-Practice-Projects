$(function () {
  // INPUT EVENTS
  $("#createInput").on({
    focus: () => {
      $("#mainForm").css("grid-template-columns", "60vw 20vw");
      $("#createBtn").css("transform", "translateX(0) scale(1)");
      $("#createInput").css({
        transform: "translateX(-2vw)",
        borderBottom: "1px solid rgb(193, 90, 90)",
      });
    },
    focusout: () => {
      $("#mainForm").css("grid-template-columns", "80vw 0.1px");
      $("#createBtn").css("transform", "translateX(-20vw) scale(0)");
      $("#createInput").css({
        transform: "translateX(0)",
        borderBottom: "rgb(193, 90, 90)",
      });
    },
  });
  $("#editID").attr("disabled", true);
});
