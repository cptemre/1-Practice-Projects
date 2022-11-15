$(function () {
  // HTML ELEMENT VARIABLES
  const games = ` <div class="games grid pointer transition">
            <figure class="transition">
            <div id="borderAnimateTop" class="upDown"></div>
            <div id="borderAnimateRight" class="leftRight"></div>
            <div id="borderAnimateBottom" class="upDown"></div>
            <div id="borderAnimateLeft" class="leftRight"></div>
              <img
                src=""
                alt=""
                class="gameImg transition"
              />
              <figcaption class="transition grid">
              </figcaption>
            </figure></div>`;
  const label = `<div class="label grid pointer">
                  <input type="search" value="" name="" class="labels" />
                  <span class="delete transition grid pointer">X</span>
                </div>`;
  // AN OBJECT TO GET QUERIES
  let labelList = [
    { names: "" },
    { developers: "" },
    { publishers: "" },
    { engines: "" },
    { platforms: "" },
    { years: "" },
    { genres: "" },
    { modes: "" },
  ];
  // URL AND QUERY VARIABLES
  let page = 1;
  let pages = "";
  let queryParams = "";
  let queryParamsBackup = "";
  let url = `/api/games?`;

  // NAV FUNCTION - SETS LABEL HTML ACCORDING TO CLICKED NAV OPTION
  $("nav").on({
    mouseenter: () => {
      $(".genres").mouseup(function (e) {
        let name = e.currentTarget.id;
        $("#label").html(name.toUpperCase());
        if (name == "years") {
          $(".year").css("display", "initial");
          $("#buttonDiv").css("display", "grid");
          $("#search, #label").css("display", "none");

          $("#submitBtn").unbind("mouseup");
          $("#submitBtn").mouseup(function () {
            const fromValue = $("#year1").val();
            const toValue = $("#year2").val();
            const yearQuery = fromValue + "-" + toValue;
            $("#gameLibrary").attr("class", yearQuery);
            searchFunc(e);
          });
        } else {
          $(".year").css("display", "none");
          $("#buttonDiv").css("display", "none");
          $("#search, #label").css("display", "initial");
          $("#search").attr("name", name);
        }
        $(".search").val("");
        $("#recommendDiv").empty();
      });
    },
  });
  // BASE DATA REQUEST
  const dataFunc = async () => {
    const { data } = await axios.get("/api/games");
    createGames(data);
  };
  dataFunc();
  // GAME APPEND FUNC
  const createGames = (data) => {
    for (let i = 0; i < data.length; i++) {
      $("#gameArticle").append(games);
      $(`.gameImg:eq(${i})`).attr("src", data[i]["src"]);
      $(`figcaption:eq(${i})`).html(data[i]["names"]);
    }

    const gameFunc = () => {
      $(".games").on({
        mouseenter: (e) => {
          const gamesDiv = $(e.currentTarget);
          const figure = gamesDiv.children("figure");
          const upDown = figure.children(".upDown");
          const leftRight = figure.children(".leftRight");
          const gameImg = figure.children(".gameImg");
          const figcaption = figure.children("figcaption");
          $(upDown).css({
            width: 0,
            borderRadius: "1.2rem",
            borderWidth: "3px",
            animation: "animationUpDown 1s forwards",
          });
          $(leftRight).css({
            height: 0,
            borderRadius: "1.2rem",
            borderWidth: "3px",
            animation: "animationLeftRight 1s forwards 1s",
          });
          $(figure).css({
            height: "25rem",
            borderRadius: "1.2rem",
            borderWidth: "5px",
          });
          $(gameImg).css({
            transform: "scale(1.3)",
          });
          $(figcaption).css({
            height: "100%",
            top: "-0",
          });
        },
        mouseleave: (e) => {
          const gamesDiv = $(e.currentTarget);
          const figure = gamesDiv.children("figure");
          const upDown = figure.children(".upDown");
          const leftRight = figure.children(".leftRight");
          const gameImg = figure.children(".gameImg");
          const figcaption = figure.children("figcaption");
          $(upDown).css({
            width: "100%",
            borderRadius: "0.8rem",
            borderWidth: "2px",
            animation: "none",
          });
          $(leftRight).css({
            height: "100%",
            borderRadius: "0.8rem",
            borderWidth: "2px",
            animation: "none",
          });
          $(figure).css({
            height: "20rem",
            borderRadius: "0.8rem",
            borderWidth: "3px",
          });
          $(gameImg).css({
            transform: "scale(1)",
          });
          $(figcaption).css({
            height: "2rem",
            top: "10rem",
          });
        },
      });
    };
    gameFunc();
  };
  const urlSetFunc = async () => {
    // QUERY LAST "&" REMOVED AND SET TO EMPTY STRING
    pages = `&pages=${page}`;
    queryParamsBackup = queryParams;
    queryParams += pages;
    url += queryParams;
    queryParams = "";
    const { data } = await axios.get(url);

    // EMPTY WHOLE GAMES
    $("#gameArticle").empty();

    createGames(data);
    url = "/api/games?";
  };
  $("#more").mouseup(function () {
    page++;
    labelQueryFunction();
    //TEST
    $(".label:eq(-1)").remove();
    //TEST
    $("html, body").animate(
      {
        scrollTop: $(document).height(),
      },
      "slow"
    );
  });
  // SEARCH FUNCTION - GET DATA AND A KEY NAME TO LOOP
  const keyUpFunc = (data, searchName) => {
    let regex = new RegExp($("#search").val(), "gi");
    let regList = [];
    const recommend = `<div class="recommend transition pointer grid"></div>`;
    for (let i = 0; i < data.length; i++) {
      let name = data[i][searchName];
      // CHECK THE VALUE IS AN ARRAY OR NOT THEN PUSH THE VALUES TO REGLIST ARRAY - REMOVE THE DUBLICATES
      if (!Array.isArray(name)) {
        regList.push(name);
      } else {
        name = name.join().split(",");
        name = [...new Set(name)];

        for (let i = 0; i < name.length; i++) {
          if (name[i].match(regex)) {
            regList.push(name[i]);
          }
        }
      }
      regList = [...new Set(regList)];
    }

    // CHECK THE DATA LENGTH - ACCORDING TO THAT ADD RECOMMEND DIV TO HTML TO SHOW RECOMMENDED REGULAR EXPRESSION RESULTS
    if (regList.length >= 3) {
      $("#recommendDiv").css("display", "initial");
      while ($(".recommend").length < 3) {
        $("#recommendDiv").append(recommend);
      }
      for (let i = 0; i < 3; i++) {
        $(`.recommend:eq(${i})`).html(regList[i]);
      }
    }
    if (regList.length < 3) {
      $("#recommendDiv").css("display", "initial");
      $("#recommendDiv").empty();

      for (let i = 0; i < regList.length; i++) {
        $("#recommendDiv").append(recommend);
        $(`.recommend:eq(${i})`).html(regList[i]);
      }
      while ($(".recommend").length !== regList.length) {
        $(`.recommend:eq(-1)`).remove();
      }
    }
    if ($("#search").val() == "") {
      $("#recommendDiv").empty();
    }
  };

  // EMPTY AND CREATE LABELS FROM THE VALUES OF LABELLIST KEYS
  const labelQueryFunction = () => {
    $("#labelDiv").empty();
    // CHECK IF LABEL IS NAMES AND CREATE LABELS ACCORDING TO IT. IF LABEL IS NAMES THEN ONLY KEEP THE NAME
    if ($("#label").html() !== "NAMES") {
      labelList[0]["names"] = "";
      for (let i = 0; i < labelList.length; i++) {
        for (const key in labelList[i]) {
          if (labelList[i][key] && key !== "names") {
            // APPEND LABEL AND GIVE THE VALUE
            $("#labelDiv").append(label);
            $(`.labels:eq(-1)`).val(labelList[i][key]);
            $(`.labels:eq(-1)`).attr("name", key);
            $(`.labels:eq(-1)`).attr("class", "labels " + labelList[i][key]);
            // QUERY IS PREPARED
            if (key == "years") {
              queryParams += `years=${labelList[5]["years"]}`;
            } else {
              queryParams += key + "=" + labelList[i][key] + "&";
            }
          }
        }
      }
    } else {
      // APPEND LABEL FOR NAME AND GIVE THE VALUE
      $("#labelDiv").append(label);
      $(`.labels:eq(-1)`).val(labelList[0]["names"]);
      $(`.labels:eq(-1)`).attr("name", "names");
      $(`.labels:eq(-1)`).attr("class", "labels " + labelList[0]["names"]);
      queryParams += `names=${labelList[0]["names"]}`;
      for (let i = 0; i < labelList.length; i++) {
        for (const key in labelList[i]) {
          if (labelList[i][key] && key !== "names") {
            labelList[i][key] = "";
          }
        }
      }
    }
    queryParamsBackup = queryParams;
    // CALLS LABEL EVENTS
    labelFunc();
    // URL SET FUNCTION
    urlSetFunc();
  };

  // LABEL FUNCTIONS TO CONTROL ANIMATIONS AND DELETE FUNCTIONS
  const labelFunc = () => {
    // LABEL FUNCTIONS
    $(".label").on({
      keydown: (e) => {
        e.preventDefault();
      },
      mouseenter: (e) => {
        const deleteSign = $(e.currentTarget).children(".delete");
        $(deleteSign).css({
          transform: "scale(1)",
          left: "-10rem",
        });
        $(deleteSign).on({
          mouseenter: (e) => {
            $(e.currentTarget).css({
              backgroundColor: "var(--deleteColor)",
            });
          },
          mouseleave: (e) => {
            $(e.currentTarget).css({
              backgroundColor: "var(--labelColor)",
            });
          },
          mouseup: (e) => {
            const label = $(e.currentTarget).parent();
            $(label).remove();
            queryParams = "";
            page = 1;
            // LOOP LABELLIST TO CHECK IF IT MATCHES WITH LABEL CLASS NAME. IF SO UPDATE THE KEY, IF NOT ASSIGN "" AND SET A NEW QUERYPARAMS
            if ($(".labels").length) {
              for (let i = 0; i < labelList.length; i++) {
                for (const key in labelList[i]) {
                  for (let y = 0; y < $(".labels").length; y++) {
                    let labelName = $(`.labels:eq(${y})`).attr("name");
                    let labelVal = $(`.labels:eq(${y})`).attr("class");
                    labelVal = labelVal.replace("labels ", "");

                    if (key == labelName) {
                      labelList[i][key] = labelVal;
                    } else {
                      labelList[i][key] = "";
                    }
                    if (labelList[i][key]) {
                      queryParams += key + "=" + labelList[i][key];
                    }
                  }
                }
              }
            } else {
              for (let i = 0; i < labelList.length; i++) {
                for (const key in labelList[i]) {
                  labelList[i][key] = "";
                }
              }
            }
            // GET DATA WITH URL + QUERY
            urlSetFunc();
            // RECURSION TO REPEAT LABEL EVENTS
            labelFunc();
          },
        });
      },
      mouseleave: (e) => {
        const deleteSign = $(e.currentTarget).children(".delete");
        $(deleteSign).css({
          transform: "scale(0)",
          left: "-2rem",
        });
      },
      mousedown: (e) => {
        e.preventDefault();
      },
    });
  };

  // ALL FUNCTIONS TOGETHER TO SET QUERY, BRING DATA AND CREATE LABELS
  const searchFunc = (e) => {
    page = 1;
    // RECOMMEND CLICK FUNCTION
    recommendFunc(e);
    // APPEND LABELS AND SET QUERY STRING
    labelQueryFunction(e);
    // LABEL FUNCTIONS
    labelFunc();
    // EMPTY INPUTS AND RECOMMENDDIV
    $(".search").val("");
    $("#recommendDiv").empty();
  };

  // RECOMMEND DIV FUNCTIONS
  const recommendClickFunc = () => {
    $(".recommend").mouseup(function (e) {
      searchFunc(e);
    });
  };
  // CREATES NEW KEY/VALUE PAIR IN LABELLIST OBJECT
  const recommendFunc = (e) => {
    const names = $(e.currentTarget).html();
    for (let i = 0; i < labelList.length; i++) {
      let labelI = labelList[i];
      let objectLabelI = Object.keys(labelI);
      if (objectLabelI == $("#label").html().toLowerCase()) {
        labelI[objectLabelI] = names;
      }
    }
    // SETS YEAR VALUE TO GAMELIBRARY CLASS
    labelList[5]["years"] = $("#gameLibrary").attr("class");
  };

  // SEARCH INPUT KEYUP FUNCTION
  $("#search").on({
    keyup: () => {
      const searchName = $("#search").attr("name");
      const searchVal = $("#search").val();
      // REQUEST TO GET REGEX DATA FROM SERVER WITH KEY VALUE PAIR
      const query = async () => {
        const { data } = await axios.get(
          `/api/games?${searchName}=${searchVal}`
        );
        // RECOMMEND CREATE FUNCTION
        keyUpFunc(data, searchName);
        // RECOMMEND FUNCTIONS
        $(".recommend").unbind("mouseup");
        recommendClickFunc();
      };
      query();
    },
  });
});
