$(function () {
  // APPEND FUNCTION TEMPLATE FOR HEADER AND NAVBAR
  const appendlinksFunc = (appendDom, links, linksDom, anchorClass) => {
    let linksEq;
    let linksILower;
    for (let i = 0; i < links.length; i++) {
      linksILower = links[i].toLowerCase();
      linksEq = `${anchorClass}:eq(${i})`;
      // APPEND DOM
      $(appendDom).append(linksDom);
      // INSERT HTML
      $(`${linksEq}`).html(links[i]);
      // INSERT HREF
      $(`${linksEq}`).attr("href", `/${linksILower}`);
      // INSERT ID
      $(`${linksEq}`).attr("id", `/${linksILower}`);
    }
  };

  //#region HEADERLIST
  // HEADERLIST APPEND FUNCTION
  const headerlistFunc = () => {
    // APPEND DOM
    const appendDom = "#footerList";
    // LINKS
    const links = [
      "EMAIL",
      "FACEBOOK",
      "TWITTER",
      "INSTAGRAM",
      "GITHUB",
      "LINKEDIN",
    ];
    // LINKS DOM
    const linksDom = `<li class="footerlists">
            <a href="" class="footerlinks" target="_blank">EMAIL</a>
          </li>`;
    // ANCHOR CLASS
    const anchorClass = `.footerlinks`;
    appendlinksFunc(appendDom, links, linksDom, anchorClass);
  };
  headerlistFunc();
  //#endregion HEADERLIST

  //#region NAVLIST
  // NAVLIST APPEND FUNCTION
  const navlistFunc = () => {
    // APPEND DOM
    const appendDom = "#navlist";
    // LINKS
    const links = [
      "HOME",
      "LIBRARY",
      "AUTHORS",
      "QUOTES",
      "GENRES",
      "INSERT",
      "LOGIN",
      "SETTINGS",
      "USERS",
    ];
    // LINKS DOM
    const linksDom = `<li class="navlists"><a href="" class="navlinks"></a></li>`;
    // ANCHOR CLASS
    const anchorClass = `.navlinks`;
    appendlinksFunc(appendDom, links, linksDom, anchorClass);

    // CHANGE FIRST HREF TO "/"
    $(`.navlinks:eq(0)`).attr("href", `/`);
  };
  navlistFunc();
  //#endregion NAVLIST

  // HAMBURGER FUNCTIONS
  const hamburgerFunc = () => {
    $("#hamburgerDiv").mouseup(function () {
      $("#nav").css("animation", "scale ease 0.3s forwards");

      $(".hamburgerLines:eq(0)").css("transform", "rotate(45deg)");
      $(".hamburgerLines:eq(1)").css("opacity", "0");
      $(".hamburgerLines:eq(2)").css("transform", "rotate(-45deg)");
    });
  };
  hamburgerFunc();
});
