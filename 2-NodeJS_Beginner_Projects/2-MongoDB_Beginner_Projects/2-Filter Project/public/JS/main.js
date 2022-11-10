$(function () {
  // ARROW SLIDE DOWN AND UP FUNCTION
  let isClicked = false;
  $("#arrowDiv").on({
    mousedown: () => {
      if (isClicked) {
        $("#searchDiv, #labelForm").css({
          transform: "scale(0)",
          height: 0,
        });
        $("#arrowDiv").css("transform", "translateY(-3rem)");
        $("#arrowDiv").html("&#8659;");
      } else {
        $("#searchDiv, #labelForm").css({
          transform: "scale(1)",
          height: "auto",
        });
        $("#arrowDiv").css("transform", "translateY(-2rem)");
        $("#arrowDiv").html("&#8657;");
      }
      isClicked = !isClicked;
    },
  });

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
