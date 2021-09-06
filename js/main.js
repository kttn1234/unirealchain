$(document).ready(function () {
  $(".information__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });

  var toolsHeight = $('.tools').innerHeight();
  var phoneHeight = $('.phone').innerHeight();
  var fixedHeight = $('.fixed').innerHeight();
  $('body').css({"padding-top": `${phoneHeight/100}rem`});
  $('.content').css({"height": `calc(100vh - ${phoneHeight/100}rem)` })
  $('body').css({"padding-bottom": `${fixedHeight/100}rem`});
  if(toolsHeight && fixedHeight ) {
    $('body').css({"padding-top": `${(toolsHeight + phoneHeight)/100}rem`});
    $('.content').css({"height": `calc(100vh - ${(toolsHeight + phoneHeight + fixedHeight)/100}rem)` })
  }
  else if(fixedHeight) {
    $('.content').css({"height": `calc(100vh - ${(phoneHeight + fixedHeight)/100}rem)` })
  }
});
