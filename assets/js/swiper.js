// var swiper = new Swiper('.swiper-container', {
//   direction: 'vertical',
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 100
    },

    960: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },
});