export class ProjectSlider {
  constructor(container) {
    this.container = container;

    this.initSlider(this.container);
  }

  initSlider(container) {
    new Swiper(container, {
      loop: true,
      slidesPerView: 1,
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
  }
}
