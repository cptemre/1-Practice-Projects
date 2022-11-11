$(function () {
  // ARROW SLIDE DOWN AND UP FUNCTION
  let isClicked = false;
  const slideFunc = () => {
    if (isClicked) {
      $("#searchDiv, #labelForm").css({
        transform: "scale(0)",
        height: 0,
      });
      $("#arrowDiv").css("transform", "translateY(-3rem)");
      $("#arrowDiv").html("&#8659;");
    } else {
      $("#searchDiv, #labelForm").css({
        transform: "scale(1)",
        height: "auto",
      });
      $("#arrowDiv").css("transform", "translateY(-2rem)");
      $("#arrowDiv").html("&#8657;");
    }
    isClicked = !isClicked;
  };
  $("#arrowDiv").on({
    mousedown: () => {
      slideFunc();
    },
  });
  // NAV FUNCTION
  $("nav").on({
    mouseup: () => {
      $(".genres").mouseup(function (e) {
        slideFunc();
        let name = e.currentTarget.id;
        $("#search").attr("name", name);
      });
    },
  });
});
