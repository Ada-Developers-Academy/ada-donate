$(function() {
  var toggleNav = function toggleNav(close) {
    var $nav = $('#nav');

    if($nav.hasClass('active') || close) {
      $nav.removeClass('active');
    } else {
      $nav.addClass('active');
    }
  };

  $('#nav .menu-mobile').click(function(e) {
    toggleNav(false);
  });

  $('a[href^="#"]:not([href="#"])').click(function(e) {
    toggleNav(true);
  });
});
