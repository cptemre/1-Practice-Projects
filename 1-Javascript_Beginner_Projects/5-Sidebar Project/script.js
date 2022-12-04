$(function () {
  let isClicked = false;
  //hamburger menu function
  $("#hamburger").mouseup(function () {
    if (!isClicked) {
      $("#nav").css("left", "0");
    } else {
      $("#nav").css("left", "-100rem");
    }
    isClicked = !isClicked;
  });
  //X button function
  $("#x").on({
    mouseenter: () => {
      $("#x").css("animation", "x1 1s");
    },
    mouseleave: () => {
      $("#x").css("animation", "x2 1s");
    },
    mouseup: () => {
      $("#nav").css("left", "-100rem");
      isClicked = !isClicked;
    },
  });
  //Link function
  $(".link").mouseenter(function () {
    $(this).children("a").css("color", "white");
  });
  $(".link").mouseleave(function () {
    $(this).children("a").css("color", "var(--linkColor)");
  });
});
