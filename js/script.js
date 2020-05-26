$(function () {
  /*  $("p").click(function() {
      $(this).slideUp();
  });
  $("#content").append("<p>This is a dynamically added paragraph.</p>");
*/
  //delegated events

  $("#content").on("click", "p", function () {
    $(this).slideUp();
  });
  $("#content").append("<p>This is a dynamically added paragraph.</p>");

  // mini-challenge mouseenter on body that delegates on li to change font color

  $("body").on("mouseenter", "li", function () {
    $(this).css("color", "blue");
  });
});
