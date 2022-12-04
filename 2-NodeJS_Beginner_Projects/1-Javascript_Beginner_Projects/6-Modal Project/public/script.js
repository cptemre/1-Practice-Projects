$(function () {
  $("#btn").mouseup(function () {
    $("#filter").css("visibility", "visible");
    $("#container").append("<h3 id='x'>X</h3>");
    $("#container").css("gridTemplateColumns", "90% 10%");
    $("#header").css("paddingLeft", "10%");
    $("#header").html("Our Modal");
    $("#btn").css("display", "none");
    $("#x").mouseenter(function () {
      $(this).css("animation", "y");
    });
    $("#x").mouseleave(function () {
      $(this).css("animation", "x 0.4s infinite");
    });
    $("#x").mouseup(function () {
      $("#filter").css("visibility", "hidden");
      $("#x").remove();
      $("#container").css("gridTemplateColumns", "1fr");
      $("#header").css("paddingLeft", "0%");
      $("#header").html("Modal Project");
      $("#btn").css("display", "block");
    });
  });
});
