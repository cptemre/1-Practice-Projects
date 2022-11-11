$(function () {
  // NAV FUNCTION
  $("nav").on({
    mouseenter: () => {
      $(".genres").mouseup(function (e) {
        let name = e.currentTarget.id;
        $("#search").attr("name", name);
        $("#label").html(name.toUpperCase());
      });
    },
  });
});
