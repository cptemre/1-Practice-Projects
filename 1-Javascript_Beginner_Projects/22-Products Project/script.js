$(function () {
  const GAMES = [
    {
      name: "Call of Duty: Modern Warfare II",
      price: "69,99",
      src: "https://i1.wp.com/deluxe.news/wp-content/uploads/2022/06/Call-of-Duty-Modern-Warfare-2-gets-explosive-campaign-trailer.jpg",
      description:
        "Modern Warfare II connects with the new Call of Duty®: WarzoneTM 2.0 experience, and with it, the evolution in Battle Royale with a brand-new play space and sandbox mode. Expect a massive calendar of free content post-launch featuring evolving gameplay with new maps, modes, seasonal events, community celebrations and more.",
      pc: true,
      ps: true,
    },
    {
      name: "Battlefield 2042",
      price: "69,99",
      src: "https://images.everyeye.it/img-notizie/battlefield-2042-nuovo-fps-ea-dice-beta-mese-leak-v3-522337.jpg",
      description:
        "Battlefield 2042 is a first-person shooter, developed by DICE and published by Electronic Arts. It is the twelfth main installment in the Battlefield series and was released on November 19, 2021 for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S.",
      pc: true,
      ps: true,
    },
    {
      name: "Wolfenstein: The New Colossus",
      price: "29,99",
      src: "https://wallpapercave.com/wp/wp3542001.jpg",
      description:
        "Wolfenstein II: The New Colossus is a 2017 action-adventure first-person shooter video game developed by MachineGames and published by Bethesda Softworks. It was released on 27 October 2017 for Microsoft Windows, PlayStation 4, and Xbox One, and was released on 29 June 2018 for Nintendo Switch.",
      pc: true,
      ps: true,
    },
    {
      name: "Civilization VI",
      price: "29,99",
      src: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/Civilization-6-leaders-civs-Japan-England-Egypt-China-America-shacknews.jpg",
      description:
        "Sid Meier's Civilization VI is a turn-based strategy 4X video game developed by Firaxis Games, published by 2K Games, and distributed by Take-Two Interactive. The Mobile port was published by Aspyr Media.",
      pc: true,
      ps: true,
    },
    {
      name: "Frostpunk",
      price: "9,99",
      src: "https://www.gamereactor.dk/media/92/frostpunkreleasedate_2389293b.jpg",
      description:
        "Frostpunk is a city-building survival videogame developed and published by 11 bit studios. Players take on the role of a leader in an alternate-history late 19th century, in which they must build and maintain a city during a worldwide volcanic winter, managing resources, making choices on how to survive, and exploring the area outside their city for survivors, resources, or other useful items.",
      pc: true,
      ps: true,
    },
    {
      name: "Crusader Kings III",
      price: "29,99",
      src: "https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/05/Crusader-Kings-III-Preview.jpg",
      description:
        "Crusader Kings III is an upcoming grand strategy game set in the Middle Ages, developed by Paradox Development Studio and published by Paradox Interactive as a sequel to Crusader Kings II. The game was first announced during PDXCon 2019 in October 2019 and is set to be released in 2020.",
      pc: true,
      ps: true,
    },
    {
      name: "Total War: Rome II",
      price: "5,99",
      src: "https://www.oyunindir.vip/wp-content/uploads/2019/02/Total-War-Rome-2-indir.jpg",
      description:
        "Total War: Rome II is a strategy video game developed by Creative Assembly and published by Sega. It was released on 3 September 2013, for Microsoft Windows as the eighth standalone game in the Total War series of video games and the successor to the 2004 game Rome: Total War.",
      pc: true,
      ps: true,
    },
    {
      name: "Elder Scrolls V: Skyrim",
      price: "9,99",
      src: "https://www.pixelstalk.net/wp-content/uploads/2016/03/Full-HD-1080-skyrim-wallpaper.jpg",
      description:
        "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion, and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011.",
      pc: true,
      ps: true,
    },
    {
      name: "Assassin's Creed Valhalla",
      price: "59,99",
      src: "https://images.hdqwalls.com/download/assassins-creed-valhalla-4k-game-ul-2560x1700.jpg",
      description:
        "Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's Creed Odyssey.",
      pc: true,
      ps: true,
    },
    {
      name: "God of War",
      price: "69,99",
      src: "https://images.hdqwalls.com/wallpapers/kratos-angry-eyes-god-of-war-4-6y.jpg",
      description:
        "God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 video game console, and has become a flagship title for the PlayStation brand, consisting of ten games across multiple platforms with an eleventh currently in development.",
      pc: false,
      ps: true,
    },
    {
      name: "Marvel's Spider-man",
      price: "69,99",
      src: "https://images.pushsquare.com/screenshots/92141/large.jpg",
      description:
        "After eight years behind the mask, Peter Parker is a crime-fighting expert. Feel the full power of a more experienced Spider-Man with improvisational combat, dynamic acrobatics, fluid urban traversal, and environmental interactions. A rookie no longer, this is the most masterful Spider-Man you’ve ever played.",
      pc: false,
      ps: true,
    },
    {
      name: "Red Dead Redemption II",
      price: "69,99",
      src: "https://assets.vg247.com/current/2018/10/red_dead_redemption_2_screenshot-r_55.jpg",
      description:
        "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, in a fictionalized representation of the Western, Midwestern, and Southern United States. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries.",
      pc: true,
      ps: true,
    },
    {
      name: "GTA V",
      price: "29,99",
      src: "https://i.ytimg.com/vi/HqZXw5M6qQY/maxresdefault.jpg",
      description:
        "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",
      pc: true,
      ps: true,
    },
    {
      name: "Uncharted 4",
      price: "49,99",
      src: "https://images.hdqwalls.com/download/uncharted-4-desktop-game-3840x2400.jpg",
      description:
        "Uncharted 4: A Thief's End is a 2016 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. It is the fourth main entry in the Uncharted series. Set several years after the events of Uncharted 3: Drake's Deception, players control Nathan Drake, a former treasure hunter coaxed out of retirement by his presumed-dead brother Samuel.",
      pc: false,
      ps: true,
    },
    {
      name: "The Last of Us Part I",
      price: "59,99",
      src: "https://www.pcgamesn.com/wp-content/uploads/2019/10/the-last-of-us.jpg",
      description:
        "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective.",
      pc: false,
      ps: true,
    },
  ];
  const DOM = `<div class="gameDiv">
          <figure class="figures grid">
            <a href="./product.html" class="links"
              ><img
                lazy
                src=""
                alt=""
                class="imgs"
            /></a>
            <figcaption class="figcaptions grid">
              <div class="name"></div>
              <div class="price"><span class="number">19.99</span>$</div>
            </figcaption>
          </figure>
        </div>`;
  // Index Page Loop For All Games
  for (let i = 0; i < GAMES.length; i++) {
    $("#gamesDiv").append(DOM);
    $(`.imgs:eq(${i})`).attr("src", GAMES[i]["src"]);
    $(`.name:eq(${i})`).html(GAMES[i]["name"]);
  }
  // Item click event. Saves item info to localstorage.
  $(".links").mouseup(function (e) {
    let src = $(e.currentTarget).children(".imgs").attr("src");
    let figcaption = $(e.currentTarget).siblings(".figcaptions");
    let name = figcaption.children(".name").html();
    let number = figcaption.children(".price").children(".number").html();
    let game = {
      src,
      name,
      number,
    };
    localStorage.setItem("game", JSON.stringify(game));
  });
  // Sends localstorage info to product page to if there is any clicked before.
  (() => {
    if (localStorage.getItem("game")) {
      let game = JSON.parse(localStorage.getItem("game"));
      $("#img").attr("src", game["src"]);
      $("#name").html(game["name"]);
      $("#number").html(game["number"]);
      console.log(game["name"]);
      // find the item with the name
      let description = GAMES.filter((a) => a["name"] == game["name"]);
      $("#p").html(description[0]["description"]);
      if (description[0]["pc"]) {
        $("#pc").attr("checked", true)
      }
      if (description[0]["ps"]) {
        $("#ps").attr("checked", true);
      }
    } else {
      $("#productContainer").empty();
      $("#productContainer").html("You did not choose any game to view.");
    }
  })();
  // Disables input change.
  $("input").attr("disabled", true);

  $("#btn").mouseup(function () {
    localStorage.clear();
  });
});
