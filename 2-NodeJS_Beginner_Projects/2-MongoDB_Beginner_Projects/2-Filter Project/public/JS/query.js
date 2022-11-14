$(function () {
  const games = ` <div class="games grid pointer">
            <figure>
              <img
                src=""
                alt=""
                class="gameImg"
              />
              <figcaption class="transition grid">
              </figcaption>
            </figure></div>`;
  const label = `<div class="label grid pointer">
                  <input type="search" value="" name="" class="labels" />
                  <span class="delete transition grid pointer">X</span>
                </div>`;
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
  let platforms = [
    "Microsoft Windows",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox One",
    "Xbox Series X",
    "Xbox Series S",
    "macOS",
    "Nintendo Switch",
    "Linux",
    "Stadia",
    "Amazon Luna",
    "iPadOS",
  ];
  let page = 1;
  let pages = "";
  let queryParams = "";
  let queryParamsBackup = "";
  let url = `/api/games?`;

  // NAV FUNCTION
  $("nav").on({
    mouseenter: () => {
      $(".genres").mouseup(function (e) {
        let name = e.currentTarget.id;
        $("#label").html(name.toUpperCase());
        if (name == "years") {
          $(".year").css("display", "initial");
          $("#buttonDiv").css("display", "grid");
          $("#search, #label").css("display", "none");

          $("#gameLibrary").unbind("mouseup");
          $("#gameLibrary").mouseup(function () {
            const fromValue = $("#year1").val();
            const toValue = $("#year2").val();
            const yearQuery = fromValue + "-" + toValue;
            $("#gameLibrary").attr("class", yearQuery);
            console.log(labelList);
            // TEST
            // RECOMMEND CLICK FUNCTION
            recommendFunc(e);
            // APPEND LABELS AND SET QUERY STRING
            labelQueryFunction(e);

            labelFunc();
            $("#search").val("");
            $("#recommendDiv").empty();
            //TEST
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
  // REFRESH FUNCTION
  const urlSetFunc = async () => {
    // QUERY LAST "&" REMOVED AND SET TO EMPTY STRING
    console.log(queryParams);
    pages = `&pages=${page}`;
    queryParamsBackup = queryParams;
    queryParams += pages;
    url += queryParams;
    queryParams = "";
    console.log(url);
    const { data } = await axios.get(url);
    console.log(url);
    console.log(data);
    // EMPTY WHOLE GAMES
    $("#gameArticle").empty();

    for (let i = 0; i < data.length; i++) {
      $("#gameArticle").append(games);
      $(`.gameImg:eq(${i})`).attr("src", data[i]["src"]);
      $(`figcaption:eq(${i})`).html(data[i]["names"]);
    }
    url = "/api/games?";
    console.log(labelList);
  };
  $("#more").mouseup(function () {
    page++;
    // TEST
    // QUERY LAST "&" REMOVED AND SET TO EMPTY STRING
    console.log(queryParams);
    pages = `&pages=${page}`;
    url += queryParamsBackup + pages;
    queryParams = "";
    console.log(url);
    const newData = async () => {
      const { data } = await axios.get(url);
      console.log(data);
      // EMPTY WHOLE GAMES
      $("#gameArticle").empty();

      for (let i = 0; i < data.length; i++) {
        $("#gameArticle").append(games);
        $(`.gameImg:eq(${i})`).attr("src", data[i]["src"]);
        $(`figcaption:eq(${i})`).html(data[i]["names"]);
      }
      url = "/api/games?";
      console.log(labelList);
    };
    newData();
    console.log(url);

    //TEST
    $("html, body").animate(
      {
        scrollTop: $(document).height(),
      },
      "slow"
    );
  });
  // SEARCH FUNCTION
  const keyUpFunc = (data, searchName) => {
    console.log(data.length);
    let regex = new RegExp($("#search").val(), "gi");
    let regList = [];
    const recommend = `<div class="recommend transition pointer grid"></div>`;
    for (let i = 0; i < data.length; i++) {
      let name = data[i][searchName];
      console.log(name);
      //TEST
      if (!Array.isArray(name)) {
        if (name.match(regex)) {
          regList.push(name);
        }
      } else {
        name = name.split(",");
        name = [...new Set(name)];
        console.log(name);

        for (let i = 0; i < name.length; i++) {
          if (name[i].match(regex)) {
            regList.push(name[i]);
          }
        }
      }
      regList = [...new Set(regList)];
      console.log(regList);
    }
    //TEST
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
    console.log(regList);
  };
  // RECOMMEND CLICK FUNCTION
  const labelQueryFunction = (e) => {
    // LABEL APPEND AND QUERY SET
    $("#labelDiv").empty();
    console.log($(labelList));
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
            console.log(labelList[i][key]);
          }
        }
      }
    } else {
      // APPEND LABEL AND GIVE THE VALUE
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
  // LABEL FUNCTIONS
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
            console.log(label);
            $(label).remove();

            // LOOP LABELLIST TO CHECK IF IT MATCHES WITH LABEL CLASS NAME. IF SO UPDATE THE KEY, IF NOT ASSIGN ""
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
            // TO CALL DATA WITH QUERY
            urlSetFunc();
            // RECURSION TO REPEAT LABEL EVENTS
            labelFunc();
            console.log(labelList);
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

  const recommendClickFunc = () => {
    $(".recommend").mouseup(function (e) {
      // RECOMMEND CLICK FUNCTION
      recommendFunc(e);
      // APPEND LABELS AND SET QUERY STRING
      labelQueryFunction(e);

      labelFunc();
      $("#search").val("");
      $("#recommendDiv").empty();
    });
  };
  const recommendFunc = (e) => {
    const names = $(e.currentTarget).html();
    console.log(labelList);
    // CREATES NEW KEY/VALUE PAIR IN LABELLIST OBJECT
    for (let i = 0; i < labelList.length; i++) {
      let labelI = labelList[i];
      let objectLabelI = Object.keys(labelI);
      if (objectLabelI == $("#label").html().toLowerCase()) {
        console.log(labelI[objectLabelI]);
        labelI[objectLabelI] = names;
      }
    }
    console.log(labelList);

    labelList[5]["years"] = $("#gameLibrary").attr("class");
    console.log(labelList);
  };

  recommendClickFunc();

  $("#search").on({
    keyup: () => {
      const searchName = $("#search").attr("name");
      const searchVal = $("#search").val();
      const query = async () => {
        const { data } = await axios.get(
          `/api/games?${searchName}=${searchVal}`
        );
        keyUpFunc(data, searchName);
        console.log(data);
        $(".recommend").unbind("mouseup");
        recommendClickFunc();
      };
      query();
    },
  });
});
