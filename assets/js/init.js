$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $('.sidenav').sidenav();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  $('.tabs').tabs();
});
//Autoplay of carsoul initialization
$(window).on("load", function () {
  console.log("window loaded");
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3500);
  }

});
//Carsoul script ends

