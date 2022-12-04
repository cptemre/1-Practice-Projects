import { GAMES } from "./GAMES.js"; // List
import { DOM } from "./DOM.js"; // HTML DOM Element

// First for loop is to find elements of the array. Second loop is to find this elemenets' key value. Third loop is to add html elements according to this key values.
const APPEND_FUNC = () => {
  for (let i = 0; i < GAMES.length; i++) {
    for (const key in GAMES[i]) {
      for (let x = 0; x < GAMES[i][key].length; x++) {
        // Games
        const secondRow = `.secondRow:eq(${i})`;
        const img = `.imgs:eq(${x})`;
        const figcaptions = `.figcaptions:eq(${x})`;
        const link = `.links:eq(${x})`;

        $(secondRow).append(DOM);
        $(`${secondRow} ${img}`).attr("src", GAMES[i][key][x]["src"]);
        $(`${secondRow} ${figcaptions}`).html(GAMES[i][key][x]["name"]);
        // Create href from their figcaption name and remove empty space and add underscore.
        $(`${secondRow} ${link}`).attr(
          "href",
          $(`${secondRow} ${figcaptions}`).html().replace(/ /g, "_")
        );
        console.log(GAMES[i][key][x]["name"]);
      }
    }
  }
};
export { APPEND_FUNC };
