import '../scss/style.scss';

import { ProjectSlider } from './ProjectSlider';

export function init() {
  new ProjectSlider('.swiper-container');
}

document.addEventListener('DOMContentLoaded', init);
