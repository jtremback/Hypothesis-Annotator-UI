$(document).ready(function() {
//  $(".a-detail").hide();
//  $(".a-sidepane").hide();
  $(".a-fakecontrols").hide();
  $(".a-writer").hide();

//VIEW SWITCHER
  $(".a-heatmap_tab").click(function() {
    $(this).parents(".#source").css("margin-right", "510px");
    $(".a-sidepane").show();
  });


//COMMENT COLLAPSER
  $(".a-threadexp").click(function() {

//Traverses to content and toggles it
    $(this).parents(".a-widget:eq(0)").find(".a-content").slideToggle("fast");

//Traverses to replies listing and toggles it
    $(this).parents(".a-widget:eq(0)").children(".a-replies:eq(0)").slideToggle("fast");

//Switches plus/minus
    $(this).toggleClass("a-closed");
  });


//CONTROL DISPLAY
  $(".a-nothread").hover(function() {
//Shows controls
    $(this).children(".a-meta").children(".a-fakecontrols").fadeToggle(1000);
  });

//WRITER SHOWER
  $(".a-write").click(function() {
//Shows writer
    $(this).parents(".a-widget:eq(0)").find(".a-writer:eq(0)").fadeIn();
  });

  $(".a-save").addClass(".a-delete").click(function() {
//Hides writer
    $(this).parents(".a-writer:eq(0)").fadeOut();
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
