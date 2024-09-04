"use strict";
(self["webpackChunkliebling"] = self["webpackChunkliebling"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var typesense_dist_typesense_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! typesense/dist/typesense.min */ "./node_modules/typesense/dist/typesense.min.js");
/* harmony import */ var typesense_dist_typesense_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typesense_dist_typesense_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isRTL)()) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('dir', 'rtl').addClass('rtl');
  }
  var $body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
  var $header = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-header');
  var $announcementBar = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#announcement-bar-root');
  var $openMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-menu');
  var $closeMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-close-menu');
  var $menu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-menu');
  var $toggleSubmenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-toggle-submenu');
  var $submenuOption = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-submenu-option')[0];
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-submenu');
  var $recentSlider = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-recent-slider');
  var $openSecondaryMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-secondary-menu');
  var $openSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-search');
  var $closeSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-close-search');
  var $search = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search');
  var $inputSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-input-search');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search-results');
  var $searchNoResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-no-results');
  var $toggleDarkMode = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-toggle-darkmode');
  var $closeNotification = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-notification-close');
  var $mainNav = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-main-nav');
  var $mainNavLeft = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-main-nav-left');
  var $newsletterElements = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-newsletter');
  var $nativeComments = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-native-comments > div > iframe')[0];
  var currentSavedTheme = localStorage.getItem('theme');
  var fuse = null;
  var postsCollection = null;
  var submenuIsOpen = false;
  var secondaryMenuTippy = null;
  var showSubmenu = function showSubmenu() {
    $header.addClass('submenu-is-active');
    $toggleSubmenu.addClass('active');
    $submenu.removeClass('closed').addClass('opened');
  };
  var hideSubmenu = function hideSubmenu() {
    $header.removeClass('submenu-is-active');
    $toggleSubmenu.removeClass('active');
    $submenu.removeClass('opened').addClass('closed');
  };
  var toggleScrollVertical = function toggleScrollVertical() {
    $body.toggleClass('no-scroll-y');
  };
  var tryToRemoveNewsletter = function tryToRemoveNewsletter() {
    if (typeof disableNewsletter !== 'undefined' && disableNewsletter) {
      $newsletterElements.remove();
    }
  };
  var trySearchFeature = function trySearchFeature() {
    if (typeof typesenseApiKey !== 'undefined') {
      initTypesense();
    }
  };

  // NOTE: This is not from the liebling theme

  var initTypesense = function initTypesense() {
    var searchClient = new typesense_dist_typesense_min__WEBPACK_IMPORTED_MODULE_6__.SearchClient({
      nodes: [{
        host: 'blog-search.iota.org',
        port: '443',
        protocol: 'https'
      }],
      apiKey: typesenseApiKey,
      connectionTimeoutSeconds: 5,
      cacheSearchResultsForSeconds: 120
    });
    postsCollection = searchClient.collections('posts');
  };
  var typesenseSearch = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
      var params;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            params = {
              query_by: "title, tags, author, text",
              query_by_weights: "3, 3, 1, 2",
              highlight_fields: "text",
              highlight_affix_num_tokens: 4,
              per_page: 100,
              typo_tokens_threshold: 10,
              exclude_fields: "text",
              num_typos: 2
            };
            _context.next = 3;
            return postsCollection.documents().search(_objectSpread({
              q: query
            }, params));
          case 3:
            return _context.abrupt("return", _context.sent);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function typesenseSearch(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var showNotification = function showNotification(typeNotification) {
    var $notification = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".js-alert[data-notification=\"".concat(typeNotification, "\"]"));
    $notification.addClass('opened');
    setTimeout(function () {
      closeNotification($notification);
    }, 5000);
  };
  var closeNotification = function closeNotification($notification) {
    $notification.removeClass('opened');
    var url = window.location.toString();
    if (url.indexOf('?') > 0) {
      var cleanUrl = url.substring(0, url.indexOf('?'));
      window.history.replaceState({}, document.title, cleanUrl);
    }
  };
  var checkForActionParameter = function checkForActionParameter() {
    var action = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getParameterByName)('action');
    var stripe = (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getParameterByName)('stripe');
    if (action === 'subscribe') {
      showNotification('subscribe');
    }
    if (action === 'signup') {
      window.location = "".concat(ghostHost, "/signup/?action=checkout");
    }
    if (action === 'checkout') {
      showNotification('signup');
    }
    if (action === 'signin') {
      showNotification('signin');
    }
    if (stripe === 'success') {
      showNotification('checkout');
    }
  };
  var toggleDesktopTopbarOverflow = function toggleDesktopTopbarOverflow(disableOverflow) {
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isMobile)()) {
      if (disableOverflow) {
        $mainNav.addClass('toggle-overflow');
        $mainNavLeft.addClass('toggle-overflow');
      } else {
        $mainNav.removeClass('toggle-overflow');
        $mainNavLeft.removeClass('toggle-overflow');
      }
    }
  };
  var openExternalLinksInDifferentTab = function openExternalLinksInDifferentTab() {
    var links = jquery__WEBPACK_IMPORTED_MODULE_1___default()('a');
    jquery__WEBPACK_IMPORTED_MODULE_1___default().each(links, function (index, value) {
      if (!value.href.includes(window.location.hostname)) {
        if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(value).parents('#cookieblock', '#cookieblock__banner__wrapper', '#cookieblock__banner').length > 0) {
          value.target = '_self';
        } else {
          value.target = '_blank';
        }
      }
    });
  };
  $openMenu.on('click', function () {
    $header.addClass('mobile-menu-opened');
    $menu.addClass('opened');
    toggleScrollVertical();
  });
  $closeMenu.on('click', function () {
    $header.removeClass('mobile-menu-opened');
    $menu.removeClass('opened');
    toggleScrollVertical();
  });
  $toggleSubmenu.on('click', function () {
    submenuIsOpen = !submenuIsOpen;
    if (submenuIsOpen) {
      showSubmenu();
    } else {
      hideSubmenu();
    }
  });
  $openSearch.on('click', function () {
    $search.addClass('opened');
    setTimeout(function () {
      $inputSearch.trigger('focus');
    }, 400);
    toggleScrollVertical();
  });
  $closeSearch.on('click', function () {
    $inputSearch.trigger('blur');
    $search.removeClass('opened');
    toggleScrollVertical();
  });
  $inputSearch.on('keyup', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var results, htmlString, i, len, date;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!($inputSearch.val().length > 0 && postsCollection)) {
            _context2.next = 8;
            break;
          }
          _context2.next = 3;
          return typesenseSearch($inputSearch.val());
        case 3:
          results = _context2.sent.hits;
          htmlString = '';
          if (results.length > 0) {
            for (i = 0, len = results.length; i < len; i++) {
              date = results[i].document.date * 1000;
              htmlString += "\n          <article class=\"m-result\">            <a href=\"".concat(results[i].document.url, "\" class=\"m-result__link\">              <h3 class=\"m-result__title\">").concat(results[i].document.title, "</h3>              <span class=\"m-result__date\">").concat((0,_helpers__WEBPACK_IMPORTED_MODULE_7__.formatDate)(date), "</span>            </a>          </article>");
            }
            $searchNoResults.hide();
            $searchResults.html(htmlString);
            $searchResults.show();
          } else {
            $searchResults.html('');
            $searchResults.hide();
            $searchNoResults.show();
          }
          _context2.next = 11;
          break;
        case 8:
          $searchResults.html('');
          $searchResults.hide();
          $searchNoResults.hide();
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  $toggleDarkMode.on('change', function () {
    if ($toggleDarkMode.is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
  $toggleDarkMode.on('mouseenter', function () {
    toggleDesktopTopbarOverflow(true);
  });
  $toggleDarkMode.on('mouseleave', function () {
    toggleDesktopTopbarOverflow(true);
  });
  $closeNotification.on('click', function () {
    closeNotification(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parent());
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('click', function (e) {
    if (submenuIsOpen) {
      if ($submenuOption && !$submenuOption.contains(e.target)) {
        submenuIsOpen = false;
        hideSubmenu();
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('keyup', function (e) {
    if (e.key === 'Escape' && $search.hasClass('opened')) {
      $closeSearch.click();
    }
  });
  if (currentSavedTheme) {
    if (currentSavedTheme === 'dark') {
      $toggleDarkMode.each(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('checked', true);
      });
    }
  }
  if ($header.length > 0) {
    var headroom = new (headroom_js__WEBPACK_IMPORTED_MODULE_0___default())($header[0], {
      tolerance: {
        down: 10,
        up: 20
      },
      offset: 15,
      onUnpin: function onUnpin() {
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isMobile)() && secondaryMenuTippy) {
          var desktopSecondaryMenuTippy = secondaryMenuTippy[0];
          if (desktopSecondaryMenuTippy && desktopSecondaryMenuTippy.state.isVisible) {
            desktopSecondaryMenuTippy.hide();
          }
        }
      }
    });
    headroom.init();
  }
  if ($announcementBar.length > 0) {
    $header.addClass('with-announcement-bar');
    setTimeout(function () {
      $header.removeAttr('data-animate');
    }, 500);
    var barMutationObserver = new MutationObserver(function (e) {
      if (e[0].addedNodes.length) {
        $announcementBar.detach().prependTo($header);
        var barHeight = $announcementBar.height();
        document.documentElement.style.setProperty('--announcement-bar-height', "".concat(barHeight, "px"));
      }
      if (e[0].removedNodes.length) {
        document.documentElement.style.setProperty('--announcement-bar-height', '0px');
      }
    });
    var barResizeObserver = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        var barHeight = entry.contentRect.height;
        document.documentElement.style.setProperty('--announcement-bar-height', "".concat(barHeight, "px"));
      });
    });
    barMutationObserver.observe($announcementBar[0], {
      childList: true
    });
    barResizeObserver.observe($announcementBar[0]);
  } else {
    setTimeout(function () {
      $header.removeAttr('data-animate');
    }, 500);
  }
  if ($recentSlider.length > 0) {
    var recentSwiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.js-recent-slider', {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_3__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_3__.A11y],
      freeMode: true,
      slidesPerView: 4,
      gap: 0,
      a11y: true,
      direction: (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isRTL)() ? 'rtl' : 'ltr',
      breakpoints: {
        1024: {
          perView: 3,
          swipeThreshold: 80,
          dragThreshold: 120
        },
        768: {
          perView: 2,
          swipeThreshold: 80,
          dragThreshold: 120,
          peek: {
            before: 0,
            after: 115
          }
        },
        568: {
          perView: 1,
          swipeThreshold: 80,
          dragThreshold: 120,
          peek: {
            before: 0,
            after: 115
          }
        }
      },
      on: {
        init: function init() {
          (0,shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-recent-article-title', 50);
        }
      }
    });
  }
  if ($openSecondaryMenu.length > 0) {
    var template = document.getElementById('secondary-navigation-template');
    secondaryMenuTippy = (0,tippy_js__WEBPACK_IMPORTED_MODULE_8__["default"])('.js-open-secondary-menu', {
      appendTo: document.body,
      content: template.innerHTML,
      allowHTML: true,
      arrow: true,
      trigger: 'click',
      interactive: true,
      onShow: function onShow() {
        toggleDesktopTopbarOverflow(true);
      },
      onHidden: function onHidden() {
        toggleDesktopTopbarOverflow(false);
      }
    });
  }
  (0,tippy_js__WEBPACK_IMPORTED_MODULE_8__["default"])('.js-tooltip');
  (0,shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title', 100);
  (0,shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title-no-image', 250);
  checkForActionParameter();
  tryToRemoveNewsletter();
  trySearchFeature();
  openExternalLinksInDifferentTab();
});

/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustImageGallery: () => (/* binding */ adjustImageGallery),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   getParameterByName: () => (/* binding */ getParameterByName),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   isRTL: () => (/* binding */ isRTL),
/* harmony export */   makeImagesZoomable: () => (/* binding */ makeImagesZoomable),
/* harmony export */   managePostImages: () => (/* binding */ managePostImages)
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
    // TODO: improve sizings for mobile as now is taking images at w1000
    $(this).attr('sizes', '(max-width: 720px) 720px');
    if (!$(this).closest('figure').hasClass('kg-bookmark-card') && !$(this).closest('figure').hasClass('kg-nft-card') && !$(this).parent().is('a') && !$(this).hasClass('kg-product-card-image') && !$(this).hasClass('kg-audio-thumbnail')) {
      $(this).addClass('js-zoomable');
    }
    var $figcaption = $(this).parent().find('figcaption');
    if ($figcaption) {
      $(this).attr('alt', $figcaption.text());
    } else {
      $(this).attr('alt', '');
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);