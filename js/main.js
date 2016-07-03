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



  //dynamic load
  $(function() {

    if (Modernizr.history) {

      // history is supported; do magical things

      // hijack the nav click event
      $("nav").delegate("a", "click", function() {

        _href = $(this).attr("href");

        // change the url without a page refresh and add a history entry.
        history.pushState(null, null, _href);

        // load the content
        loadContent(_href); // fear not! we're going to build this function in the next code block

      });

    } else {

      // history is not supported; nothing fancy here

    }

  });

  // set up some variables
  var $mainContent = $("#main-content"),
      $pageWrap    = $("#page-wrap"),
      baseHeight   = 0,
      $el;

  // calculate wrapper heights to prevent jumping when loading new content
  $pageWrap.height($pageWrap.height());
  baseHeight = $pageWrap.height() - $mainContent.height();

  function loadContent(href) {

    $mainContent
      .find("#guts")
      .fadeOut(200, function() { // fade out the content of the current page
        $mainContent
          .hide()
          .load(href + " #guts", function() { // load the contents of whatever href is
            $mainContent.fadeIn(200, function() {
              $pageWrap.animate({
                height: baseHeight + $mainContent.height() + "px"
              });
           });

        $("nav a").removeClass("current");

        $("nav a[href$='" + href + "']").addClass("active");

      });

    });

  }

  $(window).bind("popstate", function() {
      link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
      loadContent(link);
  });


});
