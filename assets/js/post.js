"use strict";
(self["webpackChunkliebling"] = self["webpackChunkliebling"] || []).push([["/js/post"],{

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

/***/ "./js/post.js":
/*!********************!*\
  !*** ./js/post.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");







var $animationWrapper = null;
var $progressCircle = null;
var lastScrollingY = window.pageYOffset;
var lastWindowHeight = 0;
var lastDocumentHeight = 0;
var circumference = 0;
var isTicking = false;

var onScrolling = function onScrolling() {
  lastScrollingY = window.pageYOffset;
  requestTicking();
};

var adjustShare = function adjustShare(timeout) {
  if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isMobile)('1023px')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('share-menu-displayed');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('share-menu-displayed');
    setTimeout(function () {
      $animationWrapper.removeAttr('data-animate');
    }, timeout);
  }
};

var onResizing = function onResizing() {
  setHeights();
  adjustShare(100);
  setTimeout(function () {
    setCircleStyles();
    requestTicking();
  }, 200);
};

var requestTicking = function requestTicking() {
  if (!isTicking) {
    requestAnimationFrame(updating);
  }

  isTicking = true;
};

var updating = function updating() {
  var progressMax = lastDocumentHeight - lastWindowHeight;
  var percent = Math.ceil(lastScrollingY / progressMax * 100);

  if (percent <= 100) {
    setProgress(percent);
  }

  isTicking = false;
};

var setHeights = function setHeights() {
  lastWindowHeight = window.innerHeight;
  lastDocumentHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height();
};

var setCircleStyles = function setCircleStyles() {
  var svgWidth = $progressCircle.parent().width();
  var radiusCircle = svgWidth / 2;
  var borderWidth = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isMobile)() ? 2 : 3;
  $progressCircle.parent().attr('viewBox', "0 0 ".concat(svgWidth, " ").concat(svgWidth));
  $progressCircle.attr('stroke-width', borderWidth);
  $progressCircle.attr('r', radiusCircle - (borderWidth - 1));
  $progressCircle.attr('cx', radiusCircle);
  $progressCircle.attr('cy', radiusCircle);
  circumference = radiusCircle * 2 * Math.PI;
  $progressCircle[0].style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
  $progressCircle[0].style.strokeDashoffset = circumference;
};

var setProgress = function setProgress(percent) {
  if (percent <= 100) {
    var offset = circumference - percent / 100 * circumference;
    $progressCircle[0].style.strokeDashoffset = offset;
  }
};

var prepareProgressCircle = function prepareProgressCircle() {
  $progressCircle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-progress');
  setHeights();
  setCircleStyles();
  updating();
  setTimeout(function () {
    $progressCircle.parent().css('opacity', 1);
  }, 300);
};

var hideHardCodedFollowUs = function hideHardCodedFollowUs() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("p").filter(function () {
    var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text();
    return text.includes("Follow us on our official channels") || text.includes("Follow the IOTA Foundation on our official channels");
  }).hide().next('p').hide();
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  hideHardCodedFollowUs(); // --> post deprecation

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.disclamer-deprecated-post').length > 0) {
    addNoIndexMetaTag();
  } else {
    var postPublishedDate = new Date(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-date-published')[0].innerText).getTime();
    var today = new Date().getTime(); // if a post is older than two years, add a disclaimer

    if (today - postPublishedDate > 2 * 365 * 24 * 60 * 60 * 1000) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#header').append('<div class="disclamer-deprecated-post">Disclaimer: This blog post has been marked as deprecated, therefore some of the content might be out of date.</div>');
      addNoIndexMetaTag();
    }
  }

  function addNoIndexMetaTag() {
    var metaElement = document.createElement('meta');
    metaElement.setAttribute('name', 'robots');
    metaElement.setAttribute('content', 'noindex, nofollow');
    document.getElementsByTagName('head')[0].prepend(metaElement);
  } // <-- end of post deprecation


  $animationWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-animation-wrapper');
  var $scrollButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-scrolltop');
  var $recommendedSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-recommended-slider');
  fitvids__WEBPACK_IMPORTED_MODULE_1___default()('.js-post-content');
  (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.adjustImageGallery)();
  adjustShare(1000);

  if ($recommendedSlider.length > 0) {
    var recommendedSwiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.js-recommended-slider', {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_3__.A11y],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 1,
      allowTouchMove: true,
      loop: true,
      a11y: true,
      breakpoints: {
        720: {
          slidesPerView: 2,
          allowTouchMove: true,
          loop: true
        },
        1024: {
          slidesPerView: 3,
          allowTouchMove: false,
          loop: false
        }
      },
      on: {
        init: function init() {
          (0,shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title', 100);
          (0,shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title-no-image', 250);
        }
      }
    });
  }

  (0,shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title', 100);
  (0,shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title-no-image', 250);
  $scrollButton.on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
      scrollTop: 0
    }, 500);
  });
  (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.managePostImages)((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
  (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.makeImagesZoomable)((jquery__WEBPACK_IMPORTED_MODULE_0___default()), medium_zoom__WEBPACK_IMPORTED_MODULE_6__["default"]);
  window.addEventListener('scroll', onScrolling, {
    passive: true
  });
  window.addEventListener('resize', onResizing, {
    passive: true
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  prepareProgressCircle();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./js/post.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);