$(function () {
  let isClicked = false;
  $(".btns").mouseenter(function () {
    $(this).css("animation", "btns1 0.5s forwards");
  });
  $(".btns").mouseleave(function () {
    $(this).css("animation", "btns2 0.5s forwards");
  });
  $(".btns").mouseup(function () {
    if (!isClicked) {
      $(this).siblings(".answers").css({
        transform: "scaleY(1)",
        opacity: "1",
      });
      $(this).css("color", "var(--firstColor)");
      $(".btns").mouseleave(function () {
        $(this).css("animation", "btns1 0.5s forwards");
      });
    } else {
      $(this).siblings(".answers").css({
        transform: "scaleY(0)",
        opacity: "0",
      });
      $(this).css("color", "var(--btnColor)");
      $(".btns").mouseleave(function () {
        $(this).css("animation", "btns2 0.5s forwards");
      });
    }
    isClicked = !isClicked;
  });
});
