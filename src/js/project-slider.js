const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  // spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
    clickable: true,
  },
});
