//http://djpate.com/2009/10/07/animated-scroll-to-anchorid-function-with-jquery/

function goToByScroll(id){
  $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}
