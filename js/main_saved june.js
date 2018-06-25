
$('.mytrigger').click(function(){
  $('.box').toggleClass('mybox z-index-animation');


  // $('.box2').toggleClass('mybox2');

})



//   $(".navbar-toggler").click(function(){
//     $(".hamburger").toggleClass("is-active");
//     $(".")
//   });
// });


// Smooth Scrolling -----------------
// make sure you delete this part when unlinking dist/js in html
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  offset: 0,
  easing: 'easeInOutCubic',
});


//Navbar Shrink
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.mdc-top-app-bar, .mdc-top-app-bar__row').addClass('nav-shrink');
    $('.mdc-top-app-bar').addClass('nav-shadow');
    $('.mdc-top-app-bar__title, .mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').addClass('nav-text-colorchange');
  } else {
    $('.mdc-top-app-bar, .mdc-top-app-bar__row').removeClass('nav-shrink');
    $('.mdc-top-app-bar').removeClass('nav-shadow');
    $('.mdc-top-app-bar__title, .mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').removeClass('nav-text-colorchange');
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




// Fade text ----------------
$(document).ready(function(){

  AOS.init({ //initiatlize fade plugin
    duration: 1000,   // how long it goes
    once: false,      //true=no repeat if scrolled back up
    offset: 50,       //trigger from screen bottom distance
    // delay: 100,
    // easing: 'ease-in-out-quart',
    //'easing: 'ease-out-cubic',
  });
});



// SLICK SLIDER ----------------
$(document).ready(function(){


$('.slick-slide-fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.slick-slide-small').slick({
  infinite: false,
  edgeFriction: 0.1,
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: false,
  // autoplaySpeed: 3000,
  variableWidth: true,

  responsive: [
  {
    breakpoint: 576,
    settings: {
      centerMode: false,
      variableWidth: false,
      slidesToShow: 1,
      dots: false,
      autoplay: false
    }
  }
]
});

$('.slick-slide-cards').slick({
  infinite: false,
  edgeFriction: 0.1,
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: false,
  // autoplaySpeed: 3000,
  variableWidth: true,
  centerMode: false,


  responsive: [
  {
    breakpoint: 576,
    settings: {
      centerMode: false,
      variableWidth: false,
      slidesToShow: 1,
      dots: false,
      autoplay: false
    }
  }
]
});

$('.slick-slide-big').slick({
  infinite: true,
  edgeFriction: 0.1,
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: false,
  autoplaySpeed: 6000,
  variableWidth: false,
});

$('.slider-dual-1').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 dots: true,
 infinite: true,
 autoplay: false,
 autoplaySpeed: 4000,
 centerMode: true,
 asNavFor: '.slider-dual-2'
});

$('.slider-dual-2').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 dots: false,
 variableWidth: false,
 asNavFor: '.slider-dual-1',
});
});



// material stuff - must be at the end of the JS file!!!
let bitbutton = new mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-ripple'));

let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.mdc-top-app-bar__navigation-icon').addEventListener('click', () => drawer.open = true);




//
// var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar'));
// var dots = document.querySelector('.dots');
// var panels = document.querySelector('.panels');
//
// dynamicTabBar.tabs.forEach(function(tab) {
//   tab.preventDefaultOnClick = true;
// });
//
// function updateDot(index) {
//   var activeDot = dots.querySelector('.dot.active');
//   if (activeDot) {
//     activeDot.classList.remove('active');
//   }
//   var newActiveDot = dots.querySelector('.dot:nth-child(' + (index + 1) + ')');
//   if (newActiveDot) {
//     newActiveDot.classList.add('active');
//   }
// }
//
// function updatePanel(index) {
//   var activePanel = panels.querySelector('.panel.active');
//   if (activePanel) {
//     activePanel.classList.remove('active');
//   }
//   var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
//   if (newActivePanel) {
//     newActivePanel.classList.add('active');
//   }
// }
//
// dynamicTabBar.listen('MDCTabBar:change', function ({detail: tabs}) {
//   var nthChildIndex = tabs.activeTabIndex;
//
//   updatePanel(nthChildIndex);
//   updateDot(nthChildIndex);
// });
//
// dots.addEventListener('click', function (evt) {
//   if (!evt.target.classList.contains('dot')) {
//     return;
//   }
//
//   evt.preventDefault();
//
//   var dotIndex = [].slice.call(dots.querySelectorAll('.dot')).indexOf(evt.target);
//
//   if (dotIndex >= 0) {
//     dynamicTabBar.activeTabIndex = dotIndex;
//   }
//
//   updatePanel(dotIndex);
//   updateDot(dotIndex);
// });
