// var swiper = new Swiper('.swiper-container', {
//   direction: 'vertical',
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      spaceBetween: 100,
    },

    960: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },
});


var swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill:"row",
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },

    960: {
      slidesPerView: 4,
      slidesPerColumn: 2,
    }
  },
});

// let swiper2 = new Swiper(".swiper-container2",{
//   slidesPerView: 1, 
//   slidesPerColumn: 1,
//   slidesPerColumnFill:"row",
//   observer:!0,
//   observeParents:!0,
//   observeSlideChildren:!0,
//   breakpoints: {
//     540: { 
//       slidesPerView:2,
//       slidesPerColumn:1
//       },
//     720: {
//       slidesPerView:2,
//       slidesPerColumn:2,
//       },
//     960:{
//       slidesPerView:3,
//       slidesPerColumn:2
//     },
//     1200:{
//       slidesPerView:4,
//       slidesPerColumn:2
//     }
//   }
// })

var swiperTeam = new Swiper('.swiper-team', {
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1200: { 
      slidesPerView: 4,
    }
  }
});

