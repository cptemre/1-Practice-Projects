$(function () {
  // All Games
  const GAMES = [{}];
  // Action Games
  const ACTION = [
    {
      name: "God of War",
      price: "69,99",
      src: [
        {
          src0: "https://www.1337.games/app/uploads/2020/09/kratos-god-of-war-ps4-y797-scaled.jpg",
          src1: "https://images.hdqwalls.com/wallpapers/kratos-angry-eyes-god-of-war-4-6y.jpg",
          src2: "https://static2.gamerantimages.com/wordpress/wp-content/uploads/2021/06/kratos-god-of-war-.jpg",
        },
      ],
    },
    {
      name: "Marvel's Spider-man",
      price: "69,99",
      src: [
        {
          src2: "https://images.pushsquare.com/screenshots/92141/large.jpg",
          src1: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/08/marvels-spider-man-2-in-game-suit-up.jpg?q=50&fit=contain&w=943&h=500&dpr=1.5",
          src0: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/09/Marvels-Spider-Man-Remastered-First-Person-PC-Mod.jpg?q=50&fit=contain&w=943&h=&dpr=1.5",
        },
      ],
    },
    {
      name: "Read Dead Redemption II",
      price: "69,99",
      src: [
        {
          src0: "https://leganerd.com/wp-content/uploads/2018/10/red-dead-redemption-2-new-trailer-coming-this-week_zgk7-1.jpg",
          src1: "https://assets.vg247.com/current/2018/10/red_dead_redemption_2_screenshot-r_55.jpg",
          src2: "https://www.numerama.com/content/uploads/2018/11/rdr2_screenshot-194.jpg",
        },
      ],
    },
    {
      name: "GTA V",
      price: "29,99",
      src: [
        {
          src0: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/05/gta-v-1942357.jpg?itok=QYfuqQIU",
          src1: "https://cdn.mos.cms.futurecdn.net/kARo6rq88hQtVQj8E3pkfk.jpg",
          src2: "https://i.ytimg.com/vi/HqZXw5M6qQY/maxresdefault.jpg",
        },
      ],
    },
    {
      name: "Uncharted 4",
      price: "49,99",
      src: [
        {
          src0: "https://allhdwallpapers.com/wp-content/uploads/2015/05/Uncharted-4-A-Thief-.-End-3.jpg",
          src1: "https://images.hdqwalls.com/download/uncharted-4-desktop-game-3840x2400.jpg",
          src2: "https://images.pushsquare.com/33bd0a8591908/1280x720.jpg",
        },
      ],
    },
    {
      name: "The Last of Us Part I",
      price: "59,99",
      src: [
        {
          src0: "https://www.pcgamesn.com/wp-content/uploads/2019/10/the-last-of-us.jpg",
          src1: "https://www.gamepur.com/files/imagepicker/6/the-last-of-us-wallpaper-1.jpg",
          src2: "http://wallpapercave.com/wp/wp1811296.jpg",
        },
      ],
    },
  ];
  const RPG = [
    {
      name: "Mount & Blade Bannerlord",
      price: "29,99",
      src: [
        {
          src0: "https://gameranx.com/wp-content/uploads/2016/03/Mount-Blade-2-Bannerlord-4K-Wallpaper-1.jpg",
          src1: "https://gamersgatep.imgix.net/8/5/b/64405c24a19bdfbc49cef0a446cf5f78f9962b58.jpg?auto=format&w=1200",
          src2: "https://artfiles.alphacoders.com/111/111250.jpg",
        },
      ],
    },
    {
      name: "Elder Scrolls V: Skyrim",
      price: "9,99",
      src: [
        {
          src0: "https://www.ixbt.com/img/n1/news/2021/7/5/elder-scrolls-v-skyrim-2433643_large.jpg",
          src1: "https://www.pixelstalk.net/wp-content/uploads/images2/Desktop-Skyrim-Wallpapers-HD-Free-Download.jpg",
          src2: "https://www.pixelstalk.net/wp-content/uploads/2016/03/Full-HD-1080-skyrim-wallpaper.jpg",
        },
      ],
    },
    {
      name: "Assassin's Creed Valhalla",
      price: "59,99",
      src: [
        {
          src0: "https://wallpapercave.com/wp/wp6196548.jpg",
          src1: "https://images.hdqwalls.com/download/assassins-creed-valhalla-4k-game-ul-2560x1700.jpg",
          src2: "https://images.hdqwalls.com/download/assassins-creed-valhalla-logo-4k-kw-3840x2400.jpg",
        },
      ],
    },
  ];
  const STRATEGY = [
    {
      name: "Civilization",
      price: "29,99",
      src: [
        {
          src0: "https://cdn.wallpapersafari.com/53/94/NGsIly.jpg",
          src1: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/Civilization-6-leaders-civs-Japan-England-Egypt-China-America-shacknews.jpg",
          src2: "https://generacionxbox.com/wp-content/uploads/2019/04/Sid-Meiers-Civilization-VI-generacionxbox.jpg",
        },
      ],
    },
    {
      name: "Frostpunk",
      price: "9,99",
      src: [
        {
          src0: "https://www.gamescreed.com/wp-content/uploads/2020/07/Frostpunk.jpg",
          src1: "https://www.heypoorplayer.com/wp-content/uploads/2018/08/Frostpunk-Banner-1024x595.jpg",
          src2: "https://www.gamereactor.dk/media/92/frostpunkreleasedate_2389293b.jpg",
        },
      ],
    },
    {
      name: "Crusader Kings III",
      price: "29,99",
      src: [
        {
          src0: "https://news.xbox.com/fr-fr/wp-content/uploads/sites/5/2020/11/ms_1920x1080_titled.jpg",
          src1: "https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/05/Crusader-Kings-III-Preview.jpg",
          src2: "https://www.pcgamesn.com/wp-content/uploads/2020/09/crusader-kings-3-guide-ck3-tips.jpg",
        },
      ],
    },
    {
      name: "Total War: Rome II",
      price: "5,99",
      src: [
        {
          src0: "https://artfiles.alphacoders.com/920/92028.jpg",
          src1: "https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2019/03/11104214/ROME2_Cleopatra_HiRes_Final-1024x576.jpg",
          src2: "https://www.oyunindir.vip/wp-content/uploads/2019/02/Total-War-Rome-2-indir.jpg",
        },
      ],
    },
  ];
  const FPS = [
    {
      name: "Call of Duty: Modern Warfare II",
      price: "69,99",
      src: [
        {
          src0: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/09/call-of-duty-modern-warfare-2-campaign-ghost.jpg",
          src1: "https://i3.wp.com/twinfinite.net/wp-content/uploads/2022/09/call-of-duty-modern-warfare-2.jpg",
          src2: "https://i1.wp.com/deluxe.news/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-2-gets-explosive-campaign-trailer.jpg",
        },
      ],
    },
    {
      name: "Battlefield 2042",
      price: "69,99",
      src: [
        {
          src0: "https://preview.redd.it/kdjiikp0o8471.jpg?auto=webp&s=1790f08f00e654a2651d7ccbd5361e38dc7a74eb",
          src1: "https://images.everyeye.it/img-notizie/battlefield-2042-nuovo-fps-ea-dice-beta-mese-leak-v3-522337.jpg",
          src2: "https://compass-ssl.xbox.com/assets/84/28/8428c630-0a52-42c3-8521-181ab70f1ccb.jpg?n=299441_GLP-Page-Hero-1084_1920x1080.jpg",
        },
      ],
    },
    {
      name: "Wolfenstein: The New Colossus",
      price: "29,99",
      src: [
        {
          src0: "https://images8.alphacoders.com/865/865677.jpg",
          src1: "https://c.wallhere.com/photos/54/50/video_games_Wolfenstein_II_The_New_Colossus-1324039.jpg!d",
          src2: "https://wallpapercave.com/wp/wp3542001.jpg",
        },
      ],
    },
  ];
  // Game Type Push to Games List
  GAMES[0]["rpg"] = RPG;
  GAMES[0]["strategy"] = STRATEGY;
  GAMES[0]["fps"] = FPS;
  GAMES[0]["action"] = ACTION;

  const DOM = `<div class="gameDiv grid">
          <figure>
          <div class="imgDiv">
            <img load class="src src0"
              src= ""
              alt=""
            />
            <img load class="src src1" src="" alt="">
          <img load class="src src2" src="" alt="">
            </div>
            <figcaption>
              <h4 class="name"></h4>
              <p class="price"><span class="dollar"></span> $</p>
            </figcaption>
          </figure>
        </div>
      </div>`;
  const P_ALL_DOM = `<p class="categories" id="all">all</p>`;
  const P_DOM = `<p class="categories"></p>`;

  const APPEND_P_FUNC = () => {
    $("#category").append(P_ALL_DOM);
    // All Keys in an Array
    let keys = [];
    // Loop and Push All Keys to an Array, Append the Categories P_DOM element to Menu
    for (const key in GAMES[0]) {
      keys.push(key);
      $("#category").append(P_DOM);
    }
    // Loop and Add HTML Text to All Categories and ID Attr with the Same Value
    for (let i = 0; i < keys.length; i++) {
      $(`.categories:eq(${i + 1})`).html(keys[i]);
      $(`.categories:eq(${i + 1})`).attr("id", keys[i]);
    }
  };
  APPEND_P_FUNC();
  // Append items, imgs, names with a loop.
  const APPEND_FUNC = (newGames, i, gameDiv = 0) => {
    $("#gamesDiv").append(DOM);
    // Images Append Loop
    for (let x = 0; x < Object.keys(newGames[i]["src"][0]).length; x++) {
      let srcs = newGames[i]["src"][0];
      $(`.src${x}:eq(${gameDiv + i})`).attr("src", srcs[`src${x}`]);
    }
    // Name and Price DOM Manipulation
    $(`.name:eq(${gameDiv + i})`).html(newGames[i]["name"]);
    $(`.dollar:eq(${gameDiv + i})`).html(newGames[i]["price"]);
  };
  // Append template for a key.
  const APPEND = (key) => {
    let gameDiv = $(".gameDiv").length;
    for (let i = 0; i < GAMES[0][key].length; i++) {
      APPEND_FUNC(GAMES[0][key], i, gameDiv);
    }
    gameDiv = $(".gameDiv").length;
  };
  // Append Function for Items.
  const APPEND_ALL_FUNC = () => {
    for (const key in GAMES[0]) {
      APPEND(key);
    }
  };

  // Element Iteration, DOM Append and Manipulation For All List Items
  APPEND_ALL_FUNC();

  // On categories click change the page list with the proper genre. Check ID and use the proper function to append items.
  $(".categories").mouseup(function (e) {
    let key = e.currentTarget.id;
    $("#gamesDiv").empty();
    if (key !== "all") {
      APPEND(key);
    } else {
      APPEND_ALL_FUNC();
    }
    $(".categories").css("color", "white");
    $(`#${key}`).css("color", "aquamarine");
    $("input").val("");
    IMG_HOVER_FUNC();
    IMG_TRANSFORM_FUNC();
  });

  // Game Mouseover Effects
  const IMG_TRANSFORM_FUNC = () => {
    $(".imgDiv").on({
      mouseover: (e) => {
        let imgDiv = $(e.currentTarget);
        // Img Div Movement
        $(imgDiv).css("left", "-6rem");
        // All Img Animations
        imgDiv.children(".src1").css("right", "-10rem");
        $(imgDiv).children(".src2").css({
          left: "5rem",
          transform: "scale(1.1)",
        });
      },
      mouseout: (e) => {
        let imgDiv = $(e.currentTarget);
        // Img Div Movement
        $(imgDiv).css("left", "0");
        // All Img Animations
        $(imgDiv).children(".src0").css("transform", "scale(1)");
        $(".src1").css("right", "0");
        $(".src2").css({
          left: "0",
          transform: "scale(1)",
        });
      },
    });
  };
  IMG_TRANSFORM_FUNC();
  const IMG_HOVER_FUNC = () => {
    $(".src").on({
      mouseover: (e) => {
        let src = e.currentTarget;
        // Current ImgDiv Imgs Z-index equality
        for (let i = 0; i < $(src).parent().children().length; i++) {
          $(src).parent().children().css("zIndex", 1);
        }
        // Z-index and Scale Change on Mouseover to Show the Img.
        $(src).css({
          transform: "scale(1.2)",
          zIndex: "3",
        });
      },
      mouseout: (e) => {
        let src = e.currentTarget;
        $(src).css("transform", "scale(1)");
      },
    });
  };
  IMG_HOVER_FUNC();

  // Input keyup event to search items through list
  $("input").keyup(function (e) {
    // Input value after keyup
    let value = e.currentTarget.value.trim();
    // Regex created as our value.
    let regex = new RegExp(value, "gi");
    // New Item List to push items which includes our search value
    let newGames = [];
    // Empty all HTML list
    $("#gamesDiv").empty();
    // If input is empty add all items back again and select all category
    if (value == "") {
      APPEND_ALL_FUNC();
      $("#all").css("color", "aquamarine");
    } else {
      // Loop all keys in main list
      for (const key in GAMES[0]) {
        // Loop lists inside keys.
        for (let i = 0; i < GAMES[0][key].length; i++) {
          // For every value of the object filter every item by regex test. Then push the filtered items to newGames list
          Object.values(GAMES[0][key][i])
            .filter((game) => regex.test(game))
            .forEach(() => newGames.push(GAMES[0][key][i]));
        }
      }
      // Append every newGames list item to HTML
      for (let i = 0; i < newGames.length; i++) {
        APPEND_FUNC(newGames, i);
      }
      // Change all category names' color to white.
      $(".categories").css("color", "white");
    }
    IMG_HOVER_FUNC();
    IMG_TRANSFORM_FUNC();
  });
});
