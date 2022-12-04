$(function () {
  const LOREM =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis possimus ab quae, odit cupiditate veritatis velit. Aperiam, quis tenetur culpa quod earum ea aut. Cumque, aut. Itaque, totam atque! Consectetur, dolorem incidunt reprehenderit repudiandae quam illum expedita nisi, nobis repellat excepturi accusantium eveniet esse cupiditate odio, nesciunt quos quaerat rerum dolor. Delectus harum doloribus optio facilis sint perferendis minus ut adipisci qui facere quaerat, ea, dignissimos officia sed voluptas quas numquam porro magnam unde ipsum? Odio, veritatis facere et dolorum incidunt quae aut expedita, corporis consectetur excepturi nisi reprehenderit eum repellat fuga animi id fugit ipsa at eius numquam?";
  let LOREM_LIST = LOREM.split(" ");
  $("#paragraph").focus(function () {
    $(this).css("border", "2px solid black");
  });
  $("#paragraph").focusout(function () {
    $(this).css("border", "none");
  });
  $("#btn").mouseenter(function () {
    $(this).css("backgroundColor", "var(--btnHover)");
  });
  $("#btn").mouseout(function () {
    $(this).css("backgroundColor", "var(--btnColor)");
  });
  const random = () => {
    return Math.floor(Math.random() * 101);
  };
  const generateFunc = () => {
    let value = $("#paragraph").val();
    let i = value;
    let randomNumber;
    let newLoremList = "";
    if (value > 0 && value < 101) {
      while (i > 0) {
        randomNumber = random(value);
        newLoremList = newLoremList + " " + LOREM_LIST[randomNumber];
        i--;
      }
      newLoremList = newLoremList + ".";
      $("#paragraphContainer").append(`<p class="lorem">${newLoremList}</p>`);
      $("#paragraph").val("");
    } else {
        alert("Please enter a number between 1-100 including both.")
    }
  };
  $("#btn").mouseup(function () {
    generateFunc();
  });
  $("body").keyup(function (e) {
    if (e.keyCode === 13) {
      generateFunc();
    }
  });
});
