$(function(){
  $(document).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll >= 500) {
      $(".header").addClass("white");
    } else if (scroll <= 500){
      $(".header").removeClass("white");
    }
  });

  new WOW().init();

  $( ".burger" ).click(function() {
    console.log("clicked");
    var menu = $('.header ul');

    if (menu.hasClass( "closed" )) {
      $.scrollLock();
      $('.header').addClass('white');
      menu.removeClass('closed');
      menu.addClass('open');
    }else {
      $.scrollLock();
      menu.removeClass('open');
      menu.addClass('closed');
    }
  });
});
