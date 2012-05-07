$(document).ready(function() {
  $(".a-detail").hide();
  $(".a-sidepane").hide();
  $(".a-bucket").hide();
  $(".a-fakecontrols").hide();
  $(".a-writer").hide();
  $(".a-adder").hide();
  var view = "heatmap";


  //VIEW SWITCHER
  //catches clicks on heatmap tab
  $(".a-heatmap_tab").click(function() {
    //adjust margin
    $("#source").css("margin-right", "510px");
    //shows sidepane
    $(".a-sidepane").show();
    //shows bucket
    $(".a-bucket").show();
    //remembers that view is bucket
    view = "bucket";
  });

    //catches clicks on summary
  $("#a-s-xb9").click(function() {
    //hides bucket
    $(".a-bucket").hide();
    //shows detail
    $("#a-d-xb9").show();
    //remembers that view is detail
    view = "detail";
  });


  //CONTENT CLICK VIEWSTEPPER
  //catches clicks on page content
  $("#content").click(function(e) {

    //Bucket to heatmap view
    //checks if view is bucket
    if (view == "bucket") {
      //hides sidepane
      $(".a-sidepane").hide();
      //shows bucket
      $(".a-bucket").hide();
      //resets source margin
      $("#source").css("margin-right", "0px");
      //remembers that view is heatmap
      view = "heatmap";
    }

    //detail to bucket view
    //checks if view is detail
    else if(view == "detail") {
      //shows bucket
      $(".a-bucket").show();
      //hides detail
      $(".a-detail").hide();
      //hides writer
      $(".a-writer").hide();
      //remembers that view is bucket
      view = "bucket";
    }

    //adder to heatmap view
    //check if view adder
    else if(view == "adder") {
      //hide adder
      $('.a-adder').hide();
      //change to heatmap view
      view = "heatmap"
    }
  });

  //CONTENT SELECT ADDERPOP
  //catches mouseup (should use select, not working)
  $('#source').mouseup(function(e) {
    //check if heatmap view
    if(view == "heatmap") {
      //show adder
      $('.a-adder').show();
      //position adder to cursor
      $('.a-adder').css({'left': e.pageX, 'top': e.pageY});
      //change to adder view
      view = "adder"
    }
  });

  //ADDERCLICK ANNOTATE
  //catches click
  $('.a-adder> .a-write').click(function() {
    //hide adder
    $('.a-adder').hide();
    //shows sidepane
    $(".a-sidepane").show();
    //shows detail
    $("#a-d-n3w").show();
    //shows writer
    $(".a-writer").show();
    //remembers that view is detail
    view = "detail";
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
    $(this).children(".a-meta").children(".a-fakecontrols").fadeToggle(200);
  });


  //WRITER DISPLAY
  $(".a-write").click(function() {
    //Shows writer
    $(this).parents(".a-widget:eq(0)").find(".a-writer:eq(0)").fadeIn();
  });

  $(".a-save").addClass(".a-delete").click(function() {
    //Hides writer
    $(this).parents(".a-writer:eq(0)").fadeOut();
  });



}); ////END



////HOVER HILIGHTS
//  $(".a-summary").hover(function() {
//    var hash = $(this).attr("id");
//    alert(hash);
//  });

////ADDERPOP
//  $("#content").click(function(e){
//    $('.a-adder').show();
//    $('.a-adder').css({'left': e.pageX, 'top': e.pageY});
//  });
