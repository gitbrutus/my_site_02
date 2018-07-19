
//Navbar Animation
$(window).scroll(function() {
  if ($(document).scrollTop() > 0) { // > 50 for scroll down
    // shadow
    $('.mdc-top-app-bar').addClass('nav-shadow');
    // text color change
    $('.mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').addClass('nav-text-colorchange');
    $('.mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').removeClass('hover-opacity');
    // logo color change
    $('.mdc-top-app-bar__title .nav-logo').addClass('nav-logo-colorchange');
    $('.mdc-top-app-bar__title .nav-logo-text').addClass('nav-logo-text-colorchange');
    // shrink size and background-color change
    $('.mdc-top-app-bar, .mdc-top-app-bar__row').addClass('nav-shrink');
  } else {
    // shadow
    $('.mdc-top-app-bar').removeClass('nav-shadow');
    // color-change
    $('.mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').removeClass('nav-text-colorchange');
    $('.mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').addClass('hover-opacity');
    // logo color change
    $('.mdc-top-app-bar__title .nav-logo').removeClass('nav-logo-colorchange');
    $('.mdc-top-app-bar__title .nav-logo-text').removeClass('nav-logo-text-colorchange');
    // shrink
    $('.mdc-top-app-bar, .mdc-top-app-bar__row').removeClass('nav-shrink');
  }
});


// Hide nav on scroll down on mobile.
// for desktop move 'nav-up' in html out of mediaquery
$(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();

       if(Math.abs(lastScrollTop - st) <= delta)
          return;

       if (st > lastScrollTop){
           // downscroll code
           $('.mdc-top-app-bar, .mdc-top-app-bar__row').addClass('nav-up');
       } else {
          // upscroll code
          $('.mdc-top-app-bar, .mdc-top-app-bar__row').removeClass('nav-up');
       }
       lastScrollTop = st;
    });
});
