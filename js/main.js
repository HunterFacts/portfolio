$(document).ready(function(){

  $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
  $('.dropdown-trigger').dropdown({
    constrainWidth: false,
    container: $('.yui')
  });
});
window.onload = function (){
  $('#loaders').hide();
}
