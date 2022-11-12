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
  let queryParams = "";
  let url = `/api/games?${queryParams}`;
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

  const recommendClickFunc = () => {
    $(".recommend").mouseup(function (e) {
      // EMPTY WHOLE GAMES
      $("#gameArticle").empty();
      // RECOMMEND CLICK FUNCTION
      recommendFunc(e);
      // LABEL APPEND
      queryParams = "";
      $("#labelDiv").empty();
      for (let i = 0; i < labelList.length; i++) {
        for (const key in labelList[i]) {
          if (labelList[i][key].length) {
            // APPEND LABEL AND GIVE THE VALUE
            $("#labelDiv").append(label);
            $(`.labels:eq(-1)`).val(labelList[i][key]);
            // QUERY IS PREPARED
            queryParams += key + "=" + labelList[i][key] + "&";
            console.log(labelList[i][key]);
          }
        }
      }
      // QUERY LAST "&" REMOVED
      queryParams = queryParams.slice(0,-1)
      console.log(queryParams);

      console.log(labelList);

      // $("#gameArticle").append(games);

      // if (searchName == "names") {
      //   for (let i = 0; i < data.length; i++) {
      //     if (data[i]["names"] == $(".labels:eq(0)").val()) {
      //       $(".gameImg").attr("src", data[i]["src"]);
      //       break;
      //     }
      //     continue;
      //   }
      // }

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
