$(document).ready(function() {
  $(".heatmap").hide();
  $(".bucket").hide();
  $("#detail1").hide();
  $("#detail2").hide();
  $("#card2").hide();
  $("#card3").hide();
  $("#pointer2").hide();
  $("#pointer3").hide();
  $("#icon1").click(function() {
    $(".heatmap").slideDown();
  });
  $("#pointer1").click(function() {
    $(".bucket").show();
    $(".heatmap").css("margin-right","250px");
  });
  $("#card1").click(function() {
    $("#detail1").show();
  });
  $("#detail1").click(function() {
    $("#card1").hide();
    $(".heatmap").css("top","22em");
    $(".heatmap").css("height","9em");
    $("#pointer1").hide();
    $("#pointer2").show();
  });
  $("#pointer2").click(function() {
    $("#card2").show();
  });
  $("#card2").click(function() {
    $("#detail2").show();
  });
});
