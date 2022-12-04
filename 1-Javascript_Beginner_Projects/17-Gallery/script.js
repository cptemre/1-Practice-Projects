$(function () {
  // List
  const GAMES = [
    {
      PS: [
        {
          id: 0,
          name: "Marvel's Spider-man",
          src: "https://images.pushsquare.com/screenshots/92141/large.jpg",
        },
        {
          id: 1,
          name: "God of War",
          src: "https://static2.gamerantimages.com/wordpress/wp-content/uploads/2021/06/kratos-god-of-war-.jpg",
        },
        {
          id: 2,
          name: "The Last of Us",
          src: "https://s1.eestatic.com/2016/12/05/videojuegos/videojuegos_175994137_22488886_1706x960.jpg",
        },
        {
          id: 3,
          name: "Uncharted 4",
          src: "https://images.pushsquare.com/33bd0a8591908/1280x720.jpg",
        },
      ],
    },
    {
      PC: [
        {
          id: 0,
          name: "Mount & Blade Bannerlord",
          src: "https://gamersgatep.imgix.net/8/5/b/64405c24a19bdfbc49cef0a446cf5f78f9962b58.jpg?auto=format&w=1200",
        },
        {
          id: 1,
          name: "Skyrim",
          src: "https://www.ixbt.com/img/n1/news/2021/7/5/elder-scrolls-v-skyrim-2433643_large.jpg",
        },
        {
          id: 2,
          name: "Read Dead Redemption",
          src: "https://leganerd.com/wp-content/uploads/2018/10/red-dead-redemption-2-new-trailer-coming-this-week_zgk7-1.jpg",
        },
        {
          id: 3,
          name: "Hades",
          src: "https://www.pcgamesn.com/wp-content/uploads/2018/12/hades-1-1.jpg",
        },
        {
          id: 4,
          name: "GTA V",
          src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/05/gta-v-1942357.jpg?itok=QYfuqQIU",
        },
      ],
    },
  ];
  // DOM element to add.
  const ELEMENT = `<div class="imgContainer">
            <figure class="figures">
              <img
                lazy
                src=""
                alt=""
                class="imgs"
              />
              <figcaption class="figcaptions"></figcaption>
            </figure>
          </div>`;
  // First for loop is to find elements of the array. Second loop is to find this elemenets' key value. Third loop is to add html elements according to this key values.
  for (let i = 0; i < GAMES.length; i++) {
    for (const key in GAMES[i]) {
      for (let x = 0; x < GAMES[i][key].length; x++) {
        // PC Games
        $(`.secondRow:eq(${i})`).append(ELEMENT);
        $(`.secondRow:eq(${i}) .imgs:eq(${x})`).attr(
          "src",
          GAMES[i][key][x]["src"]
        );
        $(`.secondRow:eq(${i}) .figcaptions:eq(${x})`).html(
          GAMES[i][key][x]["name"]
        );
      }
    }
  }
});