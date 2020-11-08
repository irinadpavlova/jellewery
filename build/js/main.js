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
  var buttons = document.querySelectorAll('.login');
  var buttonClose = document.querySelector('.modal__button-close');
  var popup = document.querySelector('.modal--login');
  var overlay = document.querySelector('.overlay');
  var password = document.querySelector('.modal__password');
  var email = document.querySelector('.modal__email');
  var storageMail = '';

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup(popup, overlay, buttonClose);
    }
  };

  var onOutsideOfPopupClick = function (evt) {
    evt.preventDefault();
    closePopup(popup, overlay, buttonClose);
  };

  var onButtonCloseClick = function (evt) {
    evt.preventDefault();
    closePopup(popup, overlay, buttonClose);
  };

  var openPopup = function (modalPopup, modalOverlay, modalButtonClose) {
    modalPopup.classList.add('modal--show');
    modalOverlay.classList.add('overlay--show');

    modalOverlay.addEventListener('click', onOutsideOfPopupClick);

    modalButtonClose.addEventListener('click', onButtonCloseClick);

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function (modalPopup, modalOverlay, modalButtonClose) {
    modalPopup.classList.remove('modal--show');
    modalOverlay.classList.remove('overlay--show');

    modalOverlay.removeEventListener('click', onOutsideOfPopupClick);

    modalButtonClose.removeEventListener('click', onButtonCloseClick);

    document.removeEventListener('keydown', onPopupEscPress);
  };

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      openPopup(popup, overlay, buttonClose);

      if (storageMail) {
        email.value = storageMail;
        password.value = '';
        password.focus();
      } else {
        email.focus();
      }
    });
  }
})();

(function () {
  var swiper = new Swiper('.new__swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.new__button-next',
      prevEl: '.new__button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      }
    }
  });
})();

(function () {
  var panelItem = document.querySelectorAll('.questions__item-title');
  var active = document.getElementsByClassName('questions__item-title--active');

  Array.from(panelItem).forEach(function (item) {
    item.addEventListener('click', function () {
      if (active.length > 0 && active[0] !== item) { // если есть активный элемент, и это не тот по которому кликнули
        active[0].classList.remove('questions__item-title--active');
      } // убрать класс panel-active
      // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
      item.classList.toggle('questions__item-title--active');
    });
  });
})();

(function () {
  var panelItem = document.querySelectorAll('.filter__item-legend');
  var active = document.getElementsByClassName('filter__item-legend--active');

  Array.from(panelItem).forEach(function (item) {
    item.addEventListener('click', function () {
      if (active.length > 0 && active[0] !== item) { // если есть активный элемент, и это не тот по которому кликнули
        active[0].classList.remove('filter__item-legend--active');
      } // убрать класс panel-active
      // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
      item.classList.toggle('filter__item-legend--active');
    });
  });
})();

(function () {
  var filterButton = document.querySelector('.filter__button');
  var filterClose = document.querySelector('.filter__button-close');
  var filterPopup = document.querySelector('.filter__form');

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup(filterPopup, filterClose);
    }
  };

  var onButtonCloseClick = function (evt) {
    evt.preventDefault();
    closePopup(filterPopup, filterClose);
  };

  var openPopup = function (modalPopup, modalButtonClose) {
    modalPopup.classList.add('filter__form--modal');

    modalButtonClose.addEventListener('click', onButtonCloseClick);

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function (modalPopup, modalButtonClose) {
    modalPopup.classList.remove('filter__form--modal');

    modalButtonClose.removeEventListener('click', onButtonCloseClick);

    document.removeEventListener('keydown', onPopupEscPress);
  };

  filterButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup(filterPopup, filterClose);
  });
})();
