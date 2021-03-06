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
  $('textarea#textarea1').characterCounter();
  $('div.slider').slider();
  $('.arrow-right').click(function(){
    $('div.slider').slider('next');
  });
  $('.arrow-left').click(function(){
    $('div.slider').slider('prev');
  });
  $("#dropdown-one, #dropdown-two").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});
window.onload = function (){
  $('#loaders').hide();
}
$('#sendInfo').click(function(){
  let name = $('#nameuser').val(),
  mail = $('#email').val(),
  tel = $('#telephone').val(),
  select = $('#selectModal').val(),
  textarea = $('#textarea1').val(),
  selectObject;
  if (name != null &&  name != "" && mail != null && mail != ""){
    var formData = new FormData();
    if (select.length != 0){
      selectObject = Object.assign({}, select);
      formData.append('selected', JSON.stringify(selectObject));
    }
    formData.append('name', name);
    formData.append('mail', mail);
    if (tel != null &&  tel != ""){
      formData.append('tel', tel);
    }
    if (textarea != null &&  textarea != ""){
      formData.append('textarea', textarea);
    }
    $.ajax({
        url: "backend/newbot.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        crossDomain: true,
        success: function (data){
          M.toast({html: 'Отправлено!'});
          $('#nameuser').val("");
          $('#email').val("");
          $('#telephone').val("");
          $('#selectModal').val("");
          $('#textarea1').val("");
          $('.modal').modal('close');
        },
        error: function (error){
          M.toast({html: 'Ошибка!'});
        }
      })
  }
  else {
    M.toast({html: 'Вы не указали имя или почту'});
  }


});
function openModalOnPreview(){
  $('.button--close').click();
  openModal(0);
}

function switchParticles(){
  if ($('#switch-particles').data('particle-state') == "on"){
    $('.stars1, .stars2, stars3, .shooting-stars').hide();
    $('#switch-particles').data('particle-state', 'off');
    $('#switch-particles').html('<i style="font-size: 2.25rem;" class="material-icons">sync</i>Включить космические частицы</a>');
  }
  else {
    $('#switch-particles').data('particle-state', 'on');
    $('.stars1, .stars2, stars3, .shooting-stars').show();
    $('#switch-particles').html('<i style="font-size: 2.25rem;" class="material-icons">sync</i>Отключить космические частицы</a>');
  }
}

function openModal(trigger = 0){
  $('#selectModal option').prop('selected', false);
  switch(trigger) {
  case 0:  // if (x === 'value1')
    //$('#modalMainContent').html("HELLO");
    break;

  case 1:  // if (x === 'value2')
    $('#selectModal option#verstk').prop('selected', true);
    $('#selectModal option#cms').prop('selected', true);
    break;
  case 2:
    $('#selectModal option#parsing').prop('selected', true);
    break;
  case 3:
    $('#selectModal option#bot').prop('selected', true);
    break;
  case 4:
    $('#selectModal option#pravka').prop('selected', true);
    break;
  case 5:
    $('#selectModal option#ystanovka').prop('selected', true);
    break;
  case 6:
    $('#selectModal option#drugoe').prop('selected', true);
    break;
  default:
    break;
  }
  $('.modal').modal('open');
  $('select').formSelect();
  $("#telephone").mask("+7(999) 999-9999");
}
