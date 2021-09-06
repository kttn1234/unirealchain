$(document).ready(function () {
  // menu
  $(".header__toggle").click(function (event) {
    $("body").toggleClass("js__menu-open");
  });

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > $(".works").offset().top) {
      $(".header__toggle").addClass("header__toggle--black");
    } else {
      $(".header__toggle").removeClass("header__toggle--black");
    }
  });
  $(".header__lang .header__lang-select a").click(function() {
    $(".header__lang .header__lang-options ul").toggle();
  });

  $(".header__lang .header__lang-options ul li a").click(function() {
      var text = $(this).html();
      $(".header__lang .header__lang-select a").html(text);
      $(".header__lang .header__lang-select a").removeClass();
      $(".header__lang .header__lang-select a").addClass(text.toLowerCase());
      $(".header__lang .header__lang-options ul").hide();
  }); 


  $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (! $clicked.parents().hasClass("header__lang"))
      $(".header__lang .header__lang-options ul").hide();
  });
  // faq
  $('.faq__heading').click(function () {
    $(this).parent('li').toggleClass('active').find('.faq__text').slideToggle();
  });

})
