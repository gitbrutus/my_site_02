$('[data-toggle="tooltip"]').tooltip();

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


//Navbar Animation
$(window).scroll(function() {
  if ($(document).scrollTop() > 150) { // > 50 for scroll down
    // shadow
    $('.mdc-top-app-bar').addClass('nav-shadow');
    // text color change
    $('.mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').addClass('nav-text-colorchange');
    $('.mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').removeClass('hover-opacity');
    $('.mdc-top-app-bar__title').addClass('d-flex');
    // shrink size and background-color change
    $('.mdc-top-app-bar, .mdc-top-app-bar__row').addClass('nav-shrink');
  } else {
    // shadow
    $('.mdc-top-app-bar').removeClass('nav-shadow');
    // color-change
    $('.mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').removeClass('nav-text-colorchange');
    $('.mdc-top-app-bar__navigation-icon, .mdc-top-app-bar__section .nav-link').addClass('hover-opacity');
    $('.mdc-top-app-bar__title').removeClass('d-flex');
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



// Swiper ----------------
$(document).ready(function(){
var swiper1 = new Swiper('.swiper1', {
   slidesPerView: 1,
   spaceBetween: 0,
   slidesPerGroup: 1,
   loop: false,
   loopFillGroupWithBlank: true,
   grabCursor: true, // if true, hand appears when hovering slide
   freeMode: false, // if true, slider does not jump
   // effect: 'fade', // fade
   // autoplay: { // autoplay
   //     delay: 2500,
   //     disableOnInteraction: false,
   //   },

  pagination: {
        el: '.swiper-pagination1',
        type: 'progressbar',
      },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  // scrollbar: {
  //   el: '.swiper-scrollbar1',
  //   hide: true,
  // },
});

var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    grabCursor: true, // if true, hand appears when hovering slide
    freeMode: false, // if true, slider does not jump
    // effect: 'fade', // fade
    autoplay: { // autoplay
        delay: 4000,
        disableOnInteraction: false,
      },

    pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  scrollbar: {
    el: '.swiper-scrollbar2',
    hide: true,
  },
});

var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    grabCursor: true, // if true, hand appears when hovering slide
    freeMode: false, // if true, slider does not jump
    effect: 'fade', // fade
    autoplay: { // autoplay
        delay: 2500,
        disableOnInteraction: false,
      },

  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  scrollbar: {
    el: '.swiper-scrollbar3',
    hide: true,
  },
});

});



// material stuff - must be at the end of the JS file!!!

let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.mdc-top-app-bar__navigation-icon').addEventListener('click', () => drawer.open = true);

var btns = document.querySelectorAll('.myripple');
for (var i = 0, btn; btn = btns[i]; i++) {
mdc.ripple.MDCRipple.attachTo(btn);
}

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

var toggleButton = new mdc.iconButton.MDCIconButtonToggle(document.getElementById('add-to-favorites'));

var toggleButton2 = new mdc.iconButton.MDCIconButtonToggle(document.getElementById('add-to-favorites2'));

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
