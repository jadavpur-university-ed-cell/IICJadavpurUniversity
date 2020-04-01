(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//Initialization for the autoplay of sliders
$( window ).on( "load", function() {
  console.log( "window loaded" );
  $('.carousel.carousel-slider').carousel({
fullWidth: true,
indicators: true
});
autoplay();
function autoplay(){
$('.carousel').carousel('next');
setTimeout(autoplay,3500);
}

});
//Initialization for the sliders end