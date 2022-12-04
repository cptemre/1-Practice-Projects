import { GAMES } from "./GAMES.js";

const GAME = () => {
  let pathname = window.location.pathname
    .slice(1, window.location.pathname.length)
    .replace(/_/g, " ");

  for (let i = 0; i < GAMES.length; i++) {
    for (const key in GAMES[i]) {
      // find the game with the same url path
      let filtered = GAMES[i][key].filter((game) => game["name"] === pathname);
      // if filtered is undefined skip it.
      if (filtered[0] == undefined) {
        continue;
      }
      // Set the values of the game
      $("#img").attr("src", filtered[0]["src"]);
      $("#figcaption").html(filtered[0]["name"]);
      $("#description").html(filtered[0]["description"]);
    }
  }

  // Hover effect on img
  $("#figure").on({
    mouseenter: (e) => {
      $("#figure, #img").css({
        height: "50vh",
        width: "100vw",
      });

      $("#figcaption").css("opacity", "0");
    },
    mouseleave: (e) => {
      $("#figure, #img").css({
        height: "15rem",
        width: "10rem",
        left: "0",
      });
      $("#figure").css({
        height: "18.2rem",
      });
      $("#figcaption").css("opacity", "1");
    },
  });
};

GAME();
