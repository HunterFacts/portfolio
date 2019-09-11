$(document).ready(function(){

  $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
  $('.dropdown-trigger').dropdown({
    constrainWidth: false,
    container: $('.yui')
  });
  $('.modal').modal();
  $('select').formSelect();
  $('textarea#textarea1').characterCounter();
  $('div.slider').slider();
  $('.arrow-right').click(function(){
    $('div.slider').slider('next');
  });
  $('.arrow-left').click(function(){
    $('div.slider').slider('prev');
  });
});
window.onload = function (){
  $('#loaders').hide();
}
function openModal(trigger = 0){
  switch(trigger) {
  case 0:  // if (x === 'value1')
    //$('#modalMainContent').html("HELLO");
    break;

  case 1:  // if (x === 'value2')
    break;

  default:
    break;
  }
  $('.modal').modal('open');
}
