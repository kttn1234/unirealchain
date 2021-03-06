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
  
  $('.content').css({"height": `calc(100vh)` })
  
  if(toolsHeight && fixedHeight ) {
    $('body').css({"padding-top": `${(toolsHeight)/100}rem`});
    $('body').css({"padding-bottom": `${fixedHeight/100}rem`});
    $('.content').css({"height": `calc(100vh - ${(toolsHeight + fixedHeight)/100}rem)` })
  }
  else if(toolsHeight) {
    $('body').css({"padding-top": `${(toolsHeight)/100}rem`});
    $('.content').css({"height": `calc(100vh - ${(toolsHeight)/100}rem)` })
  }
  else if(fixedHeight) {
    $('body').css({"padding-bottom": `${fixedHeight/100}rem`});
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
  // form
  // if('.form-send__input')
  if( $('.form-send__input').val() ) {
    $('.form-send__group').addClass('focused');
  }
  $('.form-send__input').focus(function(){
    $(this).parents('.form-send__group').addClass('focused');
  });
  
  $('.form-send__input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).parents('.form-send__group').removeClass('focused');  
    } 
  }) 

  $('.setting__list--switch li div, .transaction__list--switch li').click(function(){
    var switchCheck = $(this).find('input');
    if($(switchCheck).prop("checked")) {
      $(switchCheck).prop("checked", false); 
    }
    else {
      $(switchCheck).prop("checked", true); 
    }
  })
});
