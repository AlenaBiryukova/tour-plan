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

var myMap;
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {
        center: [25.078276, 55.134926],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });
    document.getElementById('destroyButton').onclick = function () {
        myMap.destroy();
    };
}