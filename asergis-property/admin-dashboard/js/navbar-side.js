$(document).ready(function() {
  $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));
  var toggler = '.navbar-toggle';
  var pagewrapper = '#page-wrapper';
  var navigationwrapper = '.navbar';
  var menuwidth = '100%';
  var slidewidth = '80%';
  var menuneg = '-100%';
  var slideneg = '-80%';
  $("#slide-nav").on("click", toggler, function(e) {
    var selected = $(this).hasClass('slide-active');
    if($('#slide-nav').hasClass('sidemenu-left')) {
      $('#slidemenu').stop().animate({
        left: selected ? menuneg : '0px'
      });
      $('#navbar-height-col').stop().animate({
        left: selected ? slideneg : '0px'
      });
      $(pagewrapper).stop().animate({
        left: selected ? '0px' : slidewidth
      });
      $(navigationwrapper).stop().animate({
        left: selected ? '0px' : slidewidth
      });
    } else {
      $('#slidemenu').stop().animate({
        right: selected ? menuneg : '0px'
      });
      $('#navbar-height-col').stop().animate({
        right: selected ? slideneg : '0px'
      });
      $(pagewrapper).stop().animate({
        right: selected ? '0px' : slidewidth
      });
      $(navigationwrapper).stop().animate({
        right: selected ? '0px' : slidewidth
      });
    }
    $(this).toggleClass('slide-active', !selected);
    $('#slidemenu').toggleClass('slide-active');
    $('#page-wrapper, .navbar, body, .navbar-header').toggleClass('slide-active');
  });
  var selected = '#slidemenu, #page-wrapper, body, .navbar, .navbar-header';
  $(window).on("resize", function() {
    if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
      $(selected).removeClass('slide-active');
    }
  });
});
