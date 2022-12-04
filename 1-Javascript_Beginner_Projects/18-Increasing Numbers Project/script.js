$(function () {
  const LIST = [
    {
      id: 0,
      numbers: 500,
      name: "Projects",
    },
    {
      id: 1,
      numbers: 320,
      name: "Employees",
    },
    {
      id: 2,
      numbers: 1750,
      name: "Clients",
    },
  ];
  const DOM = `<div class="containers">
        <div class="number">
          <div class="headerDiv"><h1 class="numbers">0</h1><span>+</span></div>
          <p class="name"></p>
        </div>
        <div class="underline"></div>
      </div>`;
  const COLORS = ["--red","--blue","--green"]
  for (let i = 0; i < LIST.length; i++) {
    $("#mainDiv").append(DOM);
      $(`.name:eq(${i})`).html(LIST[i]["name"]);
      $(`.underline:eq(${i})`).css("borderBottomColor", `var(${COLORS[i]})`);
    htmlFunc(i);
  }
  function htmlFunc(x) {
    let numbers = $(`.numbers:eq(${x})`);
    let numbersHTML = parseInt(numbers.html());
    if (numbersHTML < LIST[x]["numbers"]) {
      setTimeout(() => {
        numbers.html(numbersHTML + 1);
        htmlFunc(x);
      }, 1);
    }
  }
});
