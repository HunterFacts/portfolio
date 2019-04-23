$(document).ready(function(){

  $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
  $('.dropdown-trigger').dropdown({
    constrainWidth: false,
    container: $('.yui')
  });
  $('.scrollspy').scrollSpy({
    throttle: 1000
  });
});
