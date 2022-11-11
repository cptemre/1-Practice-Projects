$(function () {
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
      $("#recommendDİv").empty();

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
  let labelList = [
    { names: [] },
    { developers: [] },
    { publishers: [] },
    { engines: [] },
    { platforms: [] },
    { years: [] },
    { genres: [] },
    { modes: [] },
  ];

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
        $(".recommend").mouseup(function (e) {
          if (searchName == "names") {
            $("#labelDiv").empty();
            $("#gameArticle").empty();
          }
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
          const names = $(e.currentTarget).html();
          const label = `<div class="label grid pointer">
                  <input type="search" value="${names}" name="${searchName}" class="labels" />
                  <span class="delete transition grid pointer">X</span>
                </div>`;
          for (let i = 0; i < labelList.length; i++) {
            if (Object.keys(labelList[i]) == $("#label").html().toLowerCase()) {
              labelList[i][Object.keys(labelList[i])].push(names);
              labelList[i][Object.keys(labelList[i])] = [
                ...new Set(labelList[i][Object.keys(labelList[i])]),
              ];
            }
          }
          $("#labelDiv").empty();
          for (let i = 0; i < labelList.length; i++) {
            for (const key in labelList[i]) {
              if (labelList[i][key].length) {
                $("#labelDiv").append(label);
              }
            }
          }

          console.log(labelList);

          $("#gameArticle").append(games);

          if (searchName == "names") {
            for (let i = 0; i < data.length; i++) {
              if (data[i]["names"] == $(".labels:eq(0)").val()) {
                $(".gameImg").attr("src", data[i]["src"]);
                break;
              }
              continue;
            }
          }
          const queryList = [];

          for (let i = 0; i < $(".labels").length; i++) {
            queryList.push(
              $(`.labels:eq(${i})`).attr("name") +
                "=" +
                $(`.labels:eq(${i})`).val()
            );
          }
          const filteredGames = () => {
            const url = `/api/games?`;
          };
          console.log(queryList);
          filteredGames();
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
      query();
    },
  });
});
