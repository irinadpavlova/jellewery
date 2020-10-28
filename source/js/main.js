'use strict';

(function () {
  var body = document.querySelector('body');
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      body.classList.add('body-lock');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      body.classList.remove('body-lock');
      navMain.classList.remove('main-nav--opened');
    }
  });
})();

(function () {
  objectFitImages();
})();
