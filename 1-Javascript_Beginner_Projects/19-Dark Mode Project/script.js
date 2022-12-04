$(function () {
  // LIST TO ADD TO DOM
  const ARTICLES = [
    {
      id: 0,
      header: "HTML",
      date: "05/10/2020",
      page: 3,
      summary:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
    },
    {
      id: 1,
      header: "CSS",
      date: "15/12/2020",
      page: 5,
      summary:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.",
    },
    {
      id: 2,
      header: "JavaScript",
      date: "12/01/2021",
      page: 10,
      summary:
        "JavaScript, often abbreviated to JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
    },
    {
      id: 3,
      header: "NodeJS",
      date: "20/05/2021",
      page: 7,
      summary:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.",
    },
    {
      id: 0,
      header: "React",
      date: "28/09/2022",
      page: 14,
      summary:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js.",
    },
  ];
  // DOM ELEMENT TO ADD
  const DOM = `<div class="articleDiv">
          <div class="articleHeaderDiv">
            <h1 class="articleHeader"></h1>
            <div class="dateDiv">
              <span class="date"></span> - 
              <span class="page"></span> pages
            </div>
          </div>
          <div class="summaryDiv">
            <p class="summary"></p>
          </div>
        </div>`;
  // TO CHECK EITHER DARK MODE OR LIGHT MODE IS OPEN
  let isDark = true;
  // BACKGROUND-COLOR AND COLOR VARIABLES
  const COLOR1 = {
    backgroundColor: "white",
    color: "black",
  };
  const COLOR2 = {
    backgroundColor: "black",
    color: "white",
  };
  // BORDER-COLOR VARIABLE
  const BORDER_COLOR = ["borderColor", "black", "white", "red"];

  // BUTTON HOVER AND OUT FUNCTIONS
  const DARK_MODE_BTN = (e) => {
    $(e.currentTarget).css(COLOR1);
    $("#btn").html("Light Mode");
  };
  const LIGHT_MODE_BTN = (e) => {
    $(e.currentTarget).css(COLOR2);
    $("#btn").html("Dark Mode");
  };
  // LOOP TO ADD DOM ELEMENTS AND MANIPULATE THEIR HTML
  for (let i = 0; i < ARTICLES.length; i++) {
    $("#articleContainer").append(DOM);
    $(`.articleHeader:eq(${i})`).html(ARTICLES[i]["header"]);
    $(`.date:eq(${i})`).html(ARTICLES[i]["date"]);
    $(`.page:eq(${i})`).html(ARTICLES[i]["page"]);
    $(`.summary:eq(${i})`).html(ARTICLES[i]["summary"]);
  }
  // EVENT TO CHANGE DARK OR LIGHT MODE
  $("#btn").on({
    mouseover: (e) => {
      if (isDark) {
        DARK_MODE_BTN(e);
      } else {
        LIGHT_MODE_BTN(e);
      }
    },
    mouseout: (e) => {
      if (isDark) {
        LIGHT_MODE_BTN(e);
      } else {
        DARK_MODE_BTN(e);
      }
    },
    mouseup: () => {
      if (isDark) {
        $("body, #btn").css(COLOR1);
        $("#btn").html("Dark Mode");
        $("#btn, .articleDiv").css(BORDER_COLOR[0], BORDER_COLOR[1]);
      } else {
        $("body, #btn").css(COLOR2);
        $("#btn, .articleDiv").css(BORDER_COLOR[0], BORDER_COLOR[2]);
        $("#btn").html("Light Mode");
      }
      isDark = !isDark;
    },
  });
});
