$(function () {
  const IMGS = [
    {
      id: 0,
      src: "https://www.sampleposts.com/wp-content/uploads/2020/04/Nature-climate.jpg",
      alt: "Nature",
    },
    {
      id: 1,
      src: "https://images2.minutemediacdn.com/image/upload/c_crop,h_2170,w_3863,x_0,y_403/v1554931830/shape/mentalfloss/istock-481123206_1.jpg?itok=49GhJNN-",
      alt: "Canada",
    },
    {
      id: 2,
      src: "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1509382317/lofoten-islands-norway-aurora-borealis-northern-lights-NORWAYLIGHTS1017.jpg?itok=hk8qG4bN",
      alt: "Norway",
    },
    {
      id: 3,
      src: "https://discovercracow.com/blog/wp-content/uploads/2018/03/mountains-2532800_1920.jpg",
      alt: "Poland",
    },
  ];
  let i = 0;
  $("#next").mouseup(function () {
    i++;
    if (i < IMGS.length) {
      if ($("#prev").css("display") == "none") {
        $("#prev").css("display", "block");
      }
      $("#nextImg").css({
        transition: "0.3s",
        left: 0,
        opacity: 1,
      });
      if (i !== IMGS.length - 1) {
        $("#nextImg img").attr("src", IMGS[i]["src"]);
        $("#nextImg figcaption").html(IMGS[i + 1]["id"]);
      }
      setTimeout(() => {
        $("#mainImg img").attr("src", IMGS[i]["src"]);
        $("#mainImg figcaption").html(IMGS[i]["id"] + 1);
        $("#nextImg").css({
          left: "-80vw",
          opacity: 0,
          display: "none",
        });
      }, 400);
      setTimeout(() => {
        $("#nextImg").css("display", "block");
        if (i !== IMGS.length - 1) {
          $("#nextImg img").attr("src", IMGS[i + 1]["src"]);
          $("#nextImg figcaption").html(IMGS[i + 1]["id"] + 1);
        } else {
          $("#next").css("display", "none");
        }
      }, 500);
    }
  });
  $("#prev").mouseup(function () {
    i--;
    if (i >= 0) {
      if ($("#next").css("display") == "none") {
        $("#next").css("display", "block");
      }
      $("#prevImg").css({
        transition: "0.3s",
        right: 0,
        opacity: 1,
      });
      $("#prevImg img").attr("src", IMGS[i]["src"]);
      $("#prevImg figcaption").html(IMGS[i + 1]["id"]);
      setTimeout(() => {
        $("#mainImg img").attr("src", IMGS[i]["src"]);
        $("#mainImg figcaption").html(IMGS[i + 1]["id"]);
        $("#prevImg").css({
          right: "-80vw",
          opacity: 0,
          display: "none",
        });
      }, 400);
      setTimeout(() => {
        $("#prevImg").css("display", "block");
        if (i !== 0) {
          $("#prevImg img").attr("src", IMGS[i - 1]["src"]);
          $("#prevImg figcaption").html(IMGS[i - 1]["id"]);
        } else {
          $("#prev").css("display", "none");
        }
      }, 500);
    }
  });
});
