$(function () {
  // $("li").replaceWith("<li>Replaced.</li>");
  /*$("li").replaceWith(function () {
    return "<li>Replaced with function</li>";
  }); */

  // var firstListItem = $("li:first");
  // $("p").replaceWith(firstListItem);

  $(".red-box, .blue-box").replaceWith("<div class = 'green-box'>Green</div>");
});