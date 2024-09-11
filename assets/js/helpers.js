"use strict";
(self["webpackChunkliebling"] = self["webpackChunkliebling"] || []).push([["/js/helpers"],{

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustImageGallery": () => (/* binding */ adjustImageGallery),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "getParameterByName": () => (/* binding */ getParameterByName),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isRTL": () => (/* binding */ isRTL),
/* harmony export */   "makeImagesZoomable": () => (/* binding */ makeImagesZoomable),
/* harmony export */   "managePostImages": () => (/* binding */ managePostImages)
/* harmony export */ });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
};
var isMobile = function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var adjustImageGallery = function adjustImageGallery() {
  var images = document.querySelectorAll('.kg-gallery-image img');

  for (var i = 0, len = images.length; i < len; i++) {
    var container = images[i].closest('.kg-gallery-image');
    var width = images[i].attributes.width.value;
    var height = images[i].attributes.height.value;
    var ratio = width / height;
    container.style.flex = "".concat(ratio, " 1 0%");
  }
};
var managePostImages = function managePostImages($) {
  $('.js-post-content').find('img').each(function () {
    if (!$(this).closest('figure').hasClass('kg-bookmark-card') && !$(this).closest('figure').hasClass('kg-nft-card') && !$(this).parent().is('a') && !$(this).hasClass('kg-product-card-image') && !$(this).hasClass('kg-audio-thumbnail')) {
      $(this).addClass('js-zoomable');
    }
  });
};
var makeImagesZoomable = function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('opened', function () {
    setTimeout(function () {
      var $mediumZoomImages = $('.medium-zoom-image--opened');

      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide();
      }
    }, 10);
  });
};

/***/ }),

/***/ "./sass/tags.scss":
/*!************************!*\
  !*** ./sass/tags.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/404.scss":
/*!***********************!*\
  !*** ./sass/404.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/app.scss":
/*!***********************!*\
  !*** ./sass/app.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/home.scss":
/*!************************!*\
  !*** ./sass/home.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/listing.scss":
/*!***************************!*\
  !*** ./sass/listing.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/post.scss":
/*!************************!*\
  !*** ./sass/post.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/newsletter.scss":
/*!******************************!*\
  !*** ./sass/newsletter.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/newsletter","css/post","css/listing","css/home","css/app","css/404","css/tags"], () => (__webpack_exec__("./js/helpers.js"), __webpack_exec__("./sass/app.scss"), __webpack_exec__("./sass/home.scss"), __webpack_exec__("./sass/listing.scss"), __webpack_exec__("./sass/post.scss"), __webpack_exec__("./sass/newsletter.scss"), __webpack_exec__("./sass/tags.scss"), __webpack_exec__("./sass/404.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);