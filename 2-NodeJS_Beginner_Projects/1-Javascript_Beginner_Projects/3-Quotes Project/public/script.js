$(function () {
  //Arrays
  const AUTHORS = [
    "J.R.R. TOLKIEN",
    "Andrzej SAPKOWSKI",
    "George R.R. MARTIN",
    "C.S. LEWIS",
  ];
  const BOOKS = [
    "The Lord of the Rings",
    "Witcher",
    "Game of Thrones",
    "Narnia Chronicles",
  ];
  const QUOTES = [
    "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
    "If I'm to choose between one evil and another, then I prefer not to choose at all.",
    "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
    "Things never happen the same way twice.",
  ];
  const IMGS = [
    "https://static01.nyt.com/images/2020/01/17/nytnow/16xp-tolkien-image2/12nytnow-tolkien-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://static.cinemagia.ro/img/db/actor/17/62/879/andrzej-sapkowski-774405l.jpg",
    "https://img.ecartelera.com/noticias/46100/46168-m.jpg?v=2.0",
    "https://media.fstatic.com/mORiPCrVg43jikSkyh73E9_Y-p4=/full-fit-in/290x478/media/artists/avatar/2014/01/clive-staples-lewis_a144299_3.jpg",
  ];
  //Variables
  let number = 0;
  //#region Variable Function
  const variableFunc = () => {
    $("#author").html(AUTHORS[number]);
    $("#book").html(BOOKS[number]);
    $("#img").attr({
      src: IMGS[number],
      alt: AUTHORS[number] + "'s Photo",
    });
    $("#quote").html(QUOTES[number]);
  };
  //#endregion Variable Function

  //#region Random Function
  const random = () => {
    number = Math.floor(Math.random() * AUTHORS.length);
    console.log(number);
    variableFunc();
  };
  //#endregion Random Function

  //#region Left Function
  const left = () => {
    number > 0 ? number-- : (number = AUTHORS.length - 1);
    variableFunc();
  };
  $("#left").mousedown(() => left());
  //#endregion Left Function

  //#region Right Function
  const right = () => {
    number < 3 ? number++ : (number = 0);
    variableFunc();
  };
  $("#right").mousedown(() => right());
  //#endregion Right Function

  //#region Random Button Function
  $("#random").mouseup(() => random());
  //#endregion Random Button Function
  
  //#region Body Functions
  $("body").keyup(function (e) {
    switch (e.keyCode) {
      case 13:
        random();
        break;
      case 37:
        left();
        break;
      case 39:
        right();
        break;
      default:
        break;
    }
  });
  //#endregion Body Functions
});
