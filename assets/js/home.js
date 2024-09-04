"use strict";
(self["webpackChunkliebling"] = self["webpackChunkliebling"] || []).push([["/js/home"],{

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");




jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var $featuredSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-featured-slider');

  if ($featuredSlider.length > 0) {
    var numSlides = $featuredSlider.find('.swiper-slide').length;
    var featuredSwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.js-featured-slider', {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_2__.A11y],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      a11y: true,
      on: {
        init: function init() {
          (0,shave__WEBPACK_IMPORTED_MODULE_1__["default"])('.js-featured-article-title', 200);
        }
      }
    });

    if (numSlides === 1) {
      $featuredSlider.find('.js-featured-slider-button').remove();
    }
  }

  (0,shave__WEBPACK_IMPORTED_MODULE_1__["default"])('.js-featured-article-title', 200);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./js/home.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);