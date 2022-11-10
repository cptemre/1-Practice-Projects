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
    console.log(keywords);
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
  };
  getAll();
});
