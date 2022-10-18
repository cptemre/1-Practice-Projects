$(function () {
  let isPlaying = false;
  const pauseFunc = () => {
    $("#video").trigger("pause");
    // Slider
    $("#isPlaying").css({
      left: "calc(3rem + 16px)",
      "border-top-right-radius": "10px",
      "border-bottom-right-radius": "10px",
      "border-top-left-radius": "15px",
      "border-bottom-left-radius": "15px",
      backgroundColor: "var(--slideColor2)",
    });
    // Filter
    $("#filter").css({
      backgroundColor: "blue",
      opacity: 0.5,
      filter: "brightness(0.3)",
      "z-index": "4",
    });
  };
  const playFunc = () => {
    $("#video").trigger("play");
    // Slider
    $("#isPlaying").css({
      left: "0",
      "border-top-right-radius": "15px",
      "border-bottom-right-radius": "15px",
      "border-top-left-radius": "10px",
      "border-bottom-left-radius": "10px",
      backgroundColor: "var(--slideColor1)",
    });
    // Filter
    $("#filter").css({
      backgroundColor: "var(--backgroundColor)",
      opacity: 1,
      filter: "brightness(1)",
      "z-index": "-5",
    });
  };
  $("#btns").mouseup(function () {
    if (!isPlaying) {
      playFunc();
    } else {
      pauseFunc();
    }
    isPlaying = !isPlaying;
  });
  $("body").keydown(function (e) {
    if (e.keyCode === 32 && !isPlaying) {
      playFunc();
    } else if (e.keyCode === 32 && isPlaying) {
      pauseFunc();
    }
    isPlaying = !isPlaying;
  });
});