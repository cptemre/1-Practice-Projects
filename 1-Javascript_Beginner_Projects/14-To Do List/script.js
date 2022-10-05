$(function () {
  const element = `<div class="element grid">
            <p class="text"></p>
            <div class="signs grid"><div class="check sign cursor">&#10003</div><div class="delete sign cursor">&#x58</div></div>
        </div>`;
  let list = [];
  let item;
  const checkFunc = () => {
    $(".check").mouseup(function (e) {
      let index = $(e.currentTarget).parent().parent().index();
      if (!list[index][0]["check"]) {
        $(e.currentTarget)
          .parent()
          .siblings()
          .css("textDecorationLine", "line-through");
      } else {
        $(e.currentTarget)
          .parent()
          .siblings()
          .css("textDecorationLine", "none");
      }
      list[index][0]["check"] = !list[index][0]["check"];
      clearLocalStorage();
    });
  };
  const deleteFunc = () => {
    $(".delete").mouseup(function () {
      let remove = $(this).parent().parent();
      console.log(remove.index());
      list.splice(remove.index(), 1);
      $(remove).remove();
      clearLocalStorage();
      clearAllOpacity();
    });
  };

  const clearAllFunc = () => {
    $("#clearBtn").mouseup(function () {
      localStorage.clear();
      location.reload(true);
    });
  };
  const clearAllOpacity = () => {
    if ($("#toDoContainer").children().length !== 0) {
      $("#clearBtn").css("display", "block");
    } else {
      $("#clearBtn").css("display", "none");
    }
  };
  const clearLocalStorage = () => {
    localStorage.clear();
    for (let i = 0; i < list.length; i++) {
      localStorage.setItem(i, JSON.stringify(list[i]));
    }
  };
  const submitFunc = () => {
    $("#toDoContainer").append(element);
    let input = $("#input").val();
    $("#toDoContainer .element:last-child .text").html(input);
    let length = $("#toDoContainer").children().length;
    let object = [
      {
        text: input,
        check: false,
      },
    ];
    localStorage.setItem(length - 1, JSON.stringify(object));
    $("#input").val("");
    location.reload(true);
  };
  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
      item = JSON.parse(localStorage.getItem(i));
      $("#toDoContainer").append(element);
      $("#toDoContainer .element:last-child .text").html(item[0]["text"]);
      if (item[0]["check"] == true) {
        $("#toDoContainer .element:last-child .text").css(
          "textDecorationLine",
          "line-through"
        );
      }
      list.push(item);
    }
    $("#clearBtn").css("display", "block");
  }
  $("#btn").mouseup(function () {
    submitFunc();
  });
  $("#input").keyup(function (e) {
    if (e.keyCode == 13) {
      submitFunc();
    }
  });
  checkFunc();
  deleteFunc();
  clearAllFunc();
});
