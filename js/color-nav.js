$(function(){
  $(document).scroll(function() {
    var scroll = $(this).scrollTop();
    if (scroll >= 500) {
      $(".header").addClass("white");
      $(".header").removeClass("font-white");
    } else if (scroll <= 500){
      $(".header").removeClass("white");
      $(".header").addClass("font-white");
    }
  });
});
