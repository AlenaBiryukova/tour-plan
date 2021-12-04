$(document).ready(function () {

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
  
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal)
  
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      const modalOverlay = $('.modal__overlay');
      const modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
  
});