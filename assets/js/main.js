'use strict';

(() => {
  // === DOM & VARS =======
  const DOM = {};
  DOM.imgEls = document.querySelectorAll('.product-img');
  console.log(DOM);

  // === INIT =============
  const init = () => {
    DOM.imgEls.forEach((img) => {
      img.addEventListener('mousemove', onMouseMove);
    });
  };

  // === EVENTHANDLER =====

  const onMouseMove = (e) => {
    const { clientX } = e;
    const imgEl = e.target;
    console.log(imgEl);
    const percent = calcPercent(clientX);

    moveImageBackground(imgEl, percent);
  };

  // === XHR/FETCH ========

  // === FUNCTIONS ========

  const calcPercent = (clientX) => {
    return (clientX / window.innerWidth) * 100;
  };

  const moveImageBackground = (img, percent) => {
    img.animate(
      {
        objectPosition: `${percent}% 0%`,
      },
      { fill: 'forwards', duration: 250, easing: 'ease-in' }
    );
  };

  init();
})();
