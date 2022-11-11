$(function () {
  const getAll = async () => {
    // GET DATA
    const { data } = await axios.get("/api/games");
    // VARIABLES
    const titles = [
      "names",
      "developers",
      "publishers",
      "engines",
      "platforms",
      "years",
      "genres",
      "modes",
    ];
    let keywords = [
      { names: [] },
      { developers: [] },
      { publishers: [] },
      { engines: [] },
      { platforms: [] },
      { years: [] },
      { genres: [] },
      { modes: [] },
    ];

    // PUSH DATA TO KEYWORDS OBJECTS
    for (let i = 0; i < data.length; i++) {
      for (let y = 0; y < titles.length; y++) {
        if (
          !Object.values(keywords[y][titles[y]]).includes(data[i][titles[y]])
        ) {
          keywords[y][titles[y]].push(data[i][titles[y]]);
        }
      }
    }
    // DOM ELEMENTS

    // CREATE NAVBAR
    for (let i = 0; i < titles.length; i++) {
      const navElement = `<div class="genres pointer transition"></div>`;
      $("nav").append(navElement);
      $(`.genres:eq(${i})`).html(titles[i].toUpperCase());
      $(`.genres:eq(${i})`).attr("id", titles[i]);
    }

    // CREATE MAIN MENU GAMES

    const createGames = () => {
      const games = ` <div class="games grid pointer">
            <figure>
              <img
                src=""
                alt=""
                class="gameImg"
              />
              <figcaption class="transition grid">
              </figcaption>
            </figure></div>`;
      for (let i = 0; i < data.length; i++) {
        $("#gameArticle").append(games);
        $(`.gameImg:eq(${i})`).attr("src", data[i]["src"]);
        $(`figcaption:eq(${i})`).html(data[i]["names"]);
      }
      // console.log(Object.values(keywords[0].names).length);
    };
    createGames();

    // SEARCH FUNCTION

    const keyUpFunc = () => {
      let regex = new RegExp($("#search").val(), "gi");
      let regList = [];
      const recommend = `<div class="recommend transition pointer grid"></div>`;
      for (let i = 0; i < keywords[0]["names"].length; i++) {
        let name = keywords[0][`names`][i];
        if (name.match(regex)) {
          regList.push(name);
        }
        console.log(regList);
      }
      if (regList.length >= 3) {
        $("#recommendDiv").css("display", "initial");
        while ($(".recommend").length < 3) {
          $("#recommendDiv").append(recommend);
        }
        for (let i = 0; i < 3; i++) {
          $(`.recommend:eq(${i})`).html(regList[i]);
        }
      }
      if (regList.length < 3) {
        $("#recommendDiv").css("display", "initial");
        $("#recommendDİv").empty();

        for (let i = 0; i < regList.length; i++) {
          $("#recommendDiv").append(recommend);
          $(`.recommend:eq(${i})`).html(regList[i]);
        }
        while ($(".recommend").length !== regList.length) {
          $(`.recommend:eq(-1)`).remove();
        }
      }
      if ($("#search").val() == "") {
        $("#recommendDiv").empty();
      }
    };
    $("#search").on({
      keyup: () => {
        keyUpFunc();
        $(".recommend").mouseup(function (e) {
          const names = $(e.currentTarget).html();
          const label = `<div class="label grid pointer">
                  <input type="search" value="${names}" name="developers" class="labels" />
                  <span class="delete transition grid pointer">X</span>
                </div>`;
          $("#labelDiv").append(label);
          console.log(names);
          $(".recommend").unbind("mouseup");
          // LABEL FUNCTIONS
          $(".label").on({
            keydown: (e) => {
              e.preventDefault();
            },
            mouseenter: (e) => {
              const deleteSign = $(e.currentTarget).children(".delete");
              $(deleteSign).css({
                transform: "scale(1)",
                left: "-10rem",
              });
              $(deleteSign).on({
                mouseenter: (e) => {
                  $(e.currentTarget).css({
                    backgroundColor: "var(--deleteColor)",
                  });
                },
                mouseleave: (e) => {
                  $(e.currentTarget).css({
                    backgroundColor: "var(--labelColor)",
                  });
                },
                mouseup: (e) => {
                  const label = $(e.currentTarget).parent();
                  $(label).remove();
                  console.log(label);
                },
              });
            },
            mouseleave: (e) => {
              const deleteSign = $(e.currentTarget).children(".delete");
              $(deleteSign).css({
                transform: "scale(0)",
                left: "-2rem",
              });
            },
            mousedown: (e) => {
              e.preventDefault();
            },
          });
        });
      },
    });
  };
  // const query = async () => {
  //   await axios.get("/api/games?page=1");
  // };
  // query();

  getAll();
});
