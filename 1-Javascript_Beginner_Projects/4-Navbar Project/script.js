$(function () {
  let isClicked = true;
  $("#icon").mouseup(function () {
    if (isClicked) {
      $("#nav").css("gridTemplateRows", "1fr 4fr");
      $("#ul1").css("transform", "scaleY(1)");
    } else {
      $("#nav").css("gridTemplateRows", "1fr");
      $("#ul1").css("transform", "scaleY(0)");
    }
    isClicked = !isClicked;
  });
});
