var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index < 4) {
        
        return '<span class="' + className + '"></span>';
      } else {
       
        return '';
      }
    }
  },
  
   breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2.5,
    },
    1201: {
      slidesPerView: 4,
    },
  },
});


