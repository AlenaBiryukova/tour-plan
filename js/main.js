const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

$('.newsletter').parallax({
  imageSrc: 'img/newsletter-bg.jpeg',
  speed: 0.3,
});

var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке меню');
  document
    .querySelector('.navbar-button')
    .classList.toggle('navbar-button--visible');
});