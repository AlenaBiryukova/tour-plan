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
    document.querySelector("body").style.overflow = "hidden";
  }

  function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    document.querySelector("body").style.overflow = "";
    console.log(closeModal);
  }

  //закрытие на клавишу Esc
  $(document).on('keydown', function(evt) {
    if (evt.code == "Escape") {
      closeModal(evt);}
  });

  //закрытие на пустую область
  $('.modal__overlay--close').on('click', function(e) {
        closeModal(e);
  });


  // обработка форм

  $(".form").each(function () {
    $(this).validate({
      errorClass: "validate-error",
      messages: {
        name: {
          required: "Please enter your name",
          minlength: jQuery.validator.format("At least 2 characters required!"),
        },
        email: {
          required: "Please enter your email address",
          email: "Format for email address: name@domain.com",
        },
        phone: {
          required: "Please enter your phone number",
          phone: "Format for phone number: +7 (999) 999-99-99",
          minlength: jQuery.validator.format("At least 18 characters required!"),
        },
      },
    });

    $(".newsletter-subscribe").validate({
    errorClass: "validate-newsletter",
    messages: {
      email: {
        required: "Please enter your email address",
        email: "Format for email address: name@domain.com",
      },
    },
    });

    $('.phone-number').mask('+7 (999) 999-99-99');
  });

  AOS.init();

  AOS.init({
  disable: function() {
    var maxWidth = 992;
    return window.innerWidth < maxWidth;
  }
});

});