$(document).ready(function() {
  $(".a-detail").hide();
  $(".a-sidepane").hide();

  $(".a-heatmap_tab").click(function() {
    $(this).parents(".#source").css("margin-right", "510px")
    $(".a-sidepane").show();
  });

  $(".a-threadexp").click(function() {
    $(this).parents(".a-widget:eq(0)").children(".a-body").children(".a-content").slideToggle("fast");
    $(this).parents(".a-widget:eq(0)").children(".a-replies:eq(0)").slideToggle("fast");
    $(this).toggleClass(".a-closed");
  });

  $("#a-bo1024").click(function() {
    $(".a-bucket").hide();
    $(".a-detail").show();
  });
});
