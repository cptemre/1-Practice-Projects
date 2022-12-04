$(function () {
  $(".count:eq(0)").html(0);
  $(".count:eq(1)").html(100);
  $(".btn").mouseup(function (e) {
    let btn = e.currentTarget.innerHTML;
    let count = parseInt($(this).parent().siblings(".count").html());
    let decrease = count - 1;
    let increase = count + 1;
    switch (btn) {
      case "Decrease":
        $(this).parent().siblings(".count").html(decrease);
        break;
      case "Reset":
        $(this).parent().siblings(".count").html(0);
        break;
      case "Increase":
        $(this).parent().siblings(".count").html(increase);
        break;

      default:
        break;
    }
  });
});
