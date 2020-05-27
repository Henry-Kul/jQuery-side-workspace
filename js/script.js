$(function () {
  $("html").keydown(function (event) {
    console.log(event.which);
  });

  var ARROW_RIGHT = 39;
  $("html").keydown(function (event) {
    if (event.which === ARROW_RIGHT) {
      $(".blue-box").stop().animate(
        {
          marginLeft: "+=10px",
        },
        50
      );
    }
  });
});
// key39 is right arrow key on keyboard
