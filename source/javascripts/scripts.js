$(document).ready(function() {
//  $(".a-detail").hide();
//  $(".a-sidepane").hide();
  $(".a-fakecontrols").hide();

//VIEW SWITCHER
  $(".a-heatmap_tab").click(function() {
    $(this).parents(".#source").css("margin-right", "510px");
    $(".a-sidepane").show();
  });


//COMMENT COLLAPSER
  $(".a-threadexp").click(function() {

//Traverses to content and toggles it
    $(this).parents(".a-widget:eq(0)").children(".a-body").children(".a-content").slideToggle("fast");

//Traverses to replies listing and toggles it
    $(this).parents(".a-.widget:eq(0)").children(".a-replies:eq(0)").slideToggle("fast");

//Switches plus/minus
    $(this).parents(".a-widget:eq(0)").toggleClass(".a-closed");
  });


//CONTROL SHOWER
//
  $(".a-body").hover(function() {
//Shows controls
    $(this).siblings(".a-meta").children(".a-fakecontrols").fadeToggle();
  });

//HOVER HILIGHTS
  $(".a-summary").hover(function() {
    var hash = $(this).attr("id");
    alert(hash);
  });

//BUCKET VIEW TOGGLE
  $("#a-xb9").click(function() {
    $(".a-bucket").hide();
    $(".a-detail").show();
  });

});
