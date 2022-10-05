$(function () {
  let isClicked = false;
  // Navbar Function to Change Its Color on Scroll
  $(document).scroll(function () {
    if ($(document).scrollTop() !== 0) {
      $("#nav").css("backgroundColor", "var(--navColor)");
    } else {
      $("#nav").css("backgroundColor", "transparent");
    }
  });
  // Hamburger Menu Function to Animate Navbar
  $("#hamburger").mouseup(function () {
    if (!isClicked) {
      $("#brand").css({
        opacity: 0,
        left: "-50rem",
      });
      $("#links").css({
        opacity: 1,
        left: "0",
      });
      $("#nav").css("height", "8rem");
    } else {
      $("#brand").css({
        opacity: 1,
        left: "1rem",
      });
      $("#links").css({
        opacity: 0,
        left: "-50rem",
      });
      $("#nav").css("height", "4rem");
    }
    isClicked = !isClicked;
  });
  $(window).resize(function () {
    if (isClicked) {
      $("#brand").css({
        opacity: 1,
        left: "1rem",
      });
      $("#links").css({
        opacity: 0,
        left: "0",
      });
      isClicked = !isClicked;
    }
  });
});
