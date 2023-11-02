let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('menu-cross');
    navlist.classList.toggle('open')
}


// search

$(document).ready(function() {
     
  $(".bi-search").click(function() {
     $(".search-box").toggle();
     $("input[type='text']").focus();
   });

});


// gallery   

baguetteBox.run('.tz-gallery');


// testimonial

// $('#custom-testimonials').owlCarousel({
//   loop: true,
//   animateOut: 'fadeOut',
//   autoplay: true,
//   margin: 10,
//   responsiveClass: true,
//   responsive: {
//       0: {
//           items: 1,
//           nav: true,
//           loop:true,
//           margin:10,
//           autoplay:true,
//           autoplayTimeout:1000,
//           autoplayHoverPause:true
//       },
//       600: {
//           items: 2,
//           nav: false,
//           loop:true,
//           margin:10,
//           autoplay:true,
//           autoplayTimeout:1000,
//           autoplayHoverPause:true
//       },
//       1000: {
//           items: 3,
//           nav: true,
//           loop:true,
//           margin:10,
//           autoplay:true,
//           autoplayTimeout:1000,
//           autoplayHoverPause:true
//       }
//   }
// });

jQuery(document).ready(function($) {
  "use strict";
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });

  $('#custom-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }

  });

});


  
  