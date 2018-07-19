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
var scroll = new SmoothScroll('a[href*="#_scroll"]', {
  speed: 500,
  offset: 100,
  easing: 'easeInOutCubic',
});

$("#top").click(function() {
  $("html, body").animate({ scrollTop: 100 }, "slow");
  return false;
});


function topFunction() {
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
}


//copy to clipboard
$.fn.modal.Constructor.prototype._enforceFocus = function() {};
new ClipboardJS('.copytoclipboard');


// Fade text ----------------
$(document).ready(function(){

  AOS.init({ //initiatlize fade plugin
    duration: 1000,   // how long it goes
    once: true,      //true=no repeat if scrolled back up
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



// snackbar
function mysnackbar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}



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
