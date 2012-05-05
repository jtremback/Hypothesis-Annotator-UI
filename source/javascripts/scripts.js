$(document).ready(function() {
  $(".a-detail").hide();
  $(".a-sidepane").hide();
  $(".a-fakecontrols").hide();
  $(".a-writer").hide();
  var view = "heatmap";


//VIEW SWITCHER
  $(".a-heatmap_tab").click(function() { //catches clicks on heatmap tab
    $("#source").css("margin-right", "510px"); //adjust margin
    $(".a-sidepane").show(); //shows sidepane
    view = "bucket"; //remembers that view is bucket
  });

  $("#a-xb9").click(function() { //catches clicks on summary
    $(".a-bucket").hide(); //hides bucket
    $(".a-detail").show();  //
    view = "detail";
  });


//CONTENT CLICK BACKSTEPPER
  $("#content").click(function() { //catches clicks on page content
    //Bucket to heatmap view
    if (view == "bucket") { //checks if view is bucket
      $(".a-sidepane").hide(); //hides sidepane
      $("#source").css("margin-right", "0px"); //normalizes source margin
      view = "heatmap"; //remembers that view is heatmap
    }
    //Detail to bucket view
    else if(view == "detail") { //checks if view is detail
    $(".a-bucket").show(); //shows bucket
    $(".a-detail").hide(); //hides detail
    view = "bucket"; //remembers that view is detail
    }
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



////HOVER HILIGHTS
//  $(".a-summary").hover(function() {
//    var hash = $(this).attr("id");
//    alert(hash);
//  });


});
