$(function () {
  let id; // ID of clicked menu
  // Menu of all the food
  const MENU = [
    {
      id: 0,
      src: "https://www.foodandwine.com/thmb/Yai3Y9LlOvy1FAyzuSSiP2fi4zU=/1600x900/smart/filters:no_upscale():focal(799x599:801x601)/kahvalti-turkish-breakfast-2-FT-BLOG0817-cb6fb273a0d342a5922c27f5d9dd2f52.jpg",
      name: "Simit Plate",
      price: 2.49,
      explanation:
        'A classic breakfast for Turks including "simit", tomatoes, cucumbers, olives and cheeses.',
      type: "breakfast",
    },
    {
      id: 1,
      src: "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2019/08/rat2a7-1.jpg",
      name: "Mix Breakfast Plate",
      price: 5.99,
      explanation:
        "Includes all types of Turkish breakfast food in small amounths for the taste.",
      type: "breakfast",
    },
    {
      id: 2,
      src: "https://www.yemekev.com/uploads/images/gallery/yemekev-kusbasili-pide-5.jpg",
      name: "Pide",
      price: 2.49,
      explanation:
        "This is considered as Turkish Pizza with meat, vegetables and cheese.",
      type: "dinner",
    },
    {
      id: 3,
      src: "https://birmilyonnokta.com/view/upload/images/company/2019/10/03/17/89736/e9201a55f01cff336acb6555ba952a39.jpg",
      name: "Lahmacun",
      price: 3.99,
      explanation: "Baked meat and vegetables on a special bread.",
      type: "dinner",
    },
    {
      id: 4,
      src: "https://i.pstimaj.com/img/75/0x0/5fa27225ae298b577ac83e04.jpg",
      name: "İnegöl Meatball",
      price: 6.49,
      explanation:
        'Special kind of meatball cooked with the style of the Turkish city "İnegöl".',
      type: "dinner",
    },
    {
      id: 5,
      src: "https://bgnneyesem.com/wp-content/uploads/2016/05/aAds%C4%B1z.jpg",
      name: "Sütlaç",
      price: 2.49,
      explanation: "A soft desert prepared with milk and sugar.",
      type: "desert",
    },
    {
      id: 6,
      src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2007%2F05%2F22%2Fmr-reshoots-evergreen-002-2000.jpg",
      name: "Baklava",
      price: 2.99,
      explanation: "A heavy desert with a great taste.",
      type: "desert",
    },
    {
      id: 7,
      src: "https://1.bp.blogspot.com/_HzcYTjmQq8M/S-1fbMulPRI/AAAAAAAADAY/6i2TZd3EjvI/s1600/turkishcoffeeicsp1.jpg",
      name: "Turkish Ice Cream",
      price: 1.49,
      explanation:
        'Special type of ice cream from the city called "Kahraman Maraş".',
      type: "desert",
    },
    {
      id: 8,
      src: "https://i.dunya.com/2/1280/720/storage/old/files/2018/6/5/418239/418239.jpg",
      name: "Turkish Black Tea",
      price: 0.99,
      explanation: "Classic every day tea for Turks.",
      type: "drink",
    },
    {
      id: 9,
      src: "https://xbilgi.com/wp-content/uploads/2019/10/turk-kahvesi.jpg",
      name: "Turkish Coffee",
      price: 2.99,
      explanation: "Special type of coffe which is similar to espresso.",
      type: "drink",
    },
  ];
  let newMenu = [];
  //Menu Events
  $(".lists").mouseenter(function () {
    $(this).css("transform", "scale(1.2)");
  });
  $(".lists").mouseleave(function () {
    $(this).css("transform", "scale(1)");
  });
  $(".lists").mouseup(function (e) {
    id = e.target.id;
    // Menu Color Change
    $(".lists").css("backgroundColor", "transparent");
    $(this).css("backgroundColor", "var(--redColor)");
    // Empty the Menu
    $("#menuContainer").empty();
    // Find and Create a New Menu
    newMenu = [];
    // Empty and Append Menu Function
    for (let i = 0; i < MENU.length; i++) {
      const appendFunc = () => {
        newMenu.push(MENU[i]);
        $("#menuContainer").append(`<div class="all ${id}">
          <div class="imgContainer">
            <img
              lazy
              src="${MENU[i]["src"]}"
              alt="${MENU[i]["name"]}"
              class="img"
            />
          </div>
          <div class="nameContainer">
            <h3 class="name">${MENU[i]["name"]}</h3>
            <h3 class="price">$ <span class="number">${MENU[i]["price"]}</span></h3>
          </div>
          <p class="explanation">${MENU[i]["explanation"]}</p>
        </div>`);
      };
      if (id == "all") {
        appendFunc();
      } else if (MENU[i]["type"] == id) {
        appendFunc();
      }
    }
  });
  $(".img").mouseenter(function () {
    $(this).css("transform", "scale(1.2)");
  });
  $(".img").mouseleave(function () {
    $(this).css("transform", "scale(1)");
  });
});
