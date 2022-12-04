$(function () {
  const LIST = {
    About:
      "We found our company in 1998 in our garden with 3 close friends. Since then we are continuesly working and improving ourselves in nano-tech and artificial intelligience. We got our first and biggest support so far from EU. This big support helped us to create a global team with 50 people. Our first prototype is finished in 2003. Our first product is created in 2007. It was not perfect but it was a start for a new technology. Eventually in 2010 we created our proud model MARK-1.",
    Progress:
      "Since we created our MARK-1 model our motivation is highly increased. We also got attention of many countries to sell our products and got investments to prepare next generation MARK models even with special arrangements to create unique types for unique needs of the country. 2022 is a new mile stone for us. From now on we will introduce our new prototype called ARTEMIS. ARTEMIS is more advanced and rapid comparing to our MARK models.",
    Future:
      "Our ARTEMIS models will be able to decide the right choices in a very fast way to create the maximum efficiency for your needs. We will continue to optimise ARTEMIS till its perfection and limits. We recently got an agreement with NASA to prepare a unique model for Mars. We will mainly focus on space and Mars athmosphere to create the best models suitable for humankind's future.",
  };
  $("#tabsP").html(LIST[0]);
  let inside;
  let underline;
  $(".tabs").mouseover(function (e) {
    inside = e.currentTarget.children[0].innerHTML;
    underline = e.currentTarget.children[1];
    if (inside !== $("#tabHeader").html()) {
      $(this).css("color", "var(--insideColor)");
      $(underline).css("width", "50px");
    }
  });
  $(".tabs").mouseout(function (e) {
    inside = e.currentTarget.children[0].innerHTML;
    underline = e.currentTarget.children[1];
    if (inside !== $("#tabHeader").html()) {
      $(this).css("color", "black");
      $(underline).css("width", "0.5rem");
    }
    $(this).mouseup(function () {
      $(this).css("color", "black");
      $(underline).css("width", "0.5rem");
      $(".inside").removeClass("selectedTabs");
      $(this.children[0]).addClass("selectedTabs");
      $(".underline").removeClass("selectedUnderline");
      $(this.children[1]).addClass("selectedUnderline");
        $("#tabHeader").html(inside);
        $("#tabsP").html(LIST[inside]);
    });
  });
});
