/*$(function () {
  // $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>");
  //$(".red-box").after("<div class='red-box'>Another Red</div>")
  /*$(".blue-box").before(function() {
      return "<div class='blue-box'>Blue 2</div>";
  });
  // $("p").after($("#list"));


});*/

$(function () {
  $(".red-box").after("<div class='red-box'>Red</div>");

  $(".green-box").after("<div class='green-box'>Green</div>");

  $(".blue-box").after("<div class='blue-box'>Blue</div>");
});
