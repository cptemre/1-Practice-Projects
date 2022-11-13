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
  let page = 1;
  let pages = "";
  let queryParams = "";
  let url = `/api/games?`;
  // REFRESH FUNCTION
  const urlSetFunc = async() => {
    // QUERY LAST "&" REMOVED AND SET TO EMPTY STRING
    console.log(queryParams);
    pages = `&pages=${page}`;
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
    urlSetFunc();
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
      if (name.match(regex)) {
        regList.push(name);
        regList = [...new Set(regList)];
      }
    }
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
  // RECOMMEND CLICK FUNCTION
  const labelQueryFunction = (e) => {
    // LABEL APPEND AND QUERY SET
    $("#labelDiv").empty();
    console.log($("#label").html());
    // CHECK IF LABEL IS NAMES AND CREATE LABELS ACCORDING TO IT. IF LABEL IS NAMES THEN ONLY KEEP THE NAME
    if ($("#label").html() !== "NAMES") {
      labelList[0]["names"] = "";
      for (let i = 0; i < labelList.length; i++) {
        for (const key in labelList[i]) {
          if (labelList[i][key].length && key !== "names") {
            // APPEND LABEL AND GIVE THE VALUE
            $("#labelDiv").append(label);
            $(`.labels:eq(-1)`).val(labelList[i][key]);
            // QUERY IS PREPARED
            queryParams += key + "=" + labelList[i][key] + "&";
            console.log(labelList[i][key]);
          }
        }
      }
    } else {
      // APPEND LABEL AND GIVE THE VALUE
      $("#labelDiv").append(label);
      $(`.labels:eq(-1)`).val(labelList[0]["names"]);
      queryParams += `names=${labelList[0]["names"]}`;
      for (let i = 0; i < labelList.length; i++) {
        for (const key in labelList[i]) {
          if (labelList[i][key].length && key !== "names") {
            labelList[i][key] = "";
          }
        }
      }
      const target = $(e.currentTarget).html()
    }
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
            $(label).remove();
            console.log(label);
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
      $("#search").val();
    });
  };
  const recommendFunc = (e) => {
    const names = $(e.currentTarget).html();

    // CREATES NEW KEY/VALUE PAIR IN LABELLIST OBJECT
    for (let i = 0; i < labelList.length; i++) {
      let labelI = labelList[i];
      let objectLabelI = Object.keys(labelI);
      if (objectLabelI == $("#label").html().toLowerCase()) {
        console.log(labelI[objectLabelI]);
        labelI[objectLabelI] = names;
      }
    }
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
