$(document).ready(function () {
  // slick slider
  $(".information__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
  $('.slick-dots').appendTo('.content');

  // set height 
  var toolsHeight = $('.tools').innerHeight();
  var fixedHeight = $('.fixed').innerHeight();
  $('body').css({"padding-bottom": `${fixedHeight/100}rem`});
  $('.content').css({"height": `calc(100vh)` })
  if(toolsHeight && fixedHeight ) {
    $('body').css({"padding-top": `${(toolsHeight)/100}rem`});
    $('.content').css({"height": `calc(100vh - ${(toolsHeight + fixedHeight)/100}rem)` })
  }
  else if(fixedHeight) {
    $('.content').css({"height": `calc(100vh - ${(fixedHeight)/100}rem)` })
  }
  // modal
  $('.modal__close').click(function(){
    $(".modal").fadeOut();
  })
  $('.checkbox-agree').change(function() {
    if(this.checked) {
      $('.button--main').removeClass('button--disable')
    }
    else {
      $('.button--main').addClass('button--disable')
    }
  });
});
