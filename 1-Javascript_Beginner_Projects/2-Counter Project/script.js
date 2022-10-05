$(function () {
  let btnID;
  let number = 0;
  $(".btn").mouseup(function (e) {
    btnID = e.target.id;
    btnID == "decrease" ? number-- : btnID == "reset" ? (number = 0) : number++;
    $("#number").html(number);
    number < 0
      ? $("#number").css("color", "var(--redColor)")
      : number == 0
      ? $("#number").css("color", "black")
      : $("#number").css("color", "var(--greenColor)");
  });
});
