<<<<<<< HEAD
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return r})),n.d(t,"isMobile",(function(){return i})),n.d(t,"isDarkMode",(function(){return o})),n.d(t,"formatDate",(function(){return a})),n.d(t,"getParameterByName",(function(){return u})),n.d(t,"adjustImageGallery",(function(){return s})),n.d(t,"managePostImages",(function(){return c})),n.d(t,"makeImagesZoomable",(function(){return l}));var r=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},o=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},a=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},u=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},s=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var r=e[t].closest(".kg-gallery-image"),i=e[t].attributes.width.value/e[t].attributes.height.value;r.style.flex="".concat(i," 1 0%")}},c=function(e){e(".js-post-content").find("img").each((function(){e(this).attr("sizes","(max-width: 720px) 720px"),e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable");var t=e(this).parent().find("figcaption");t?e(this).attr("alt",t.text()):e(this).attr("alt","")}))},l=function(e,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=e(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},23:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(3),a=n(2),u=n(1);function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}i()((function(){var e=i()(".js-featured-slider");if(e.length>0){var t=e.find(".js-featured-slide").length,n=new a.d(".js-featured-slider",{type:"slider",rewind:!1,gap:0,swipeThreshold:!1,dragThreshold:!1,direction:Object(u.isRTL)()?"rtl":"ltr",breakpoints:{768:{swipeThreshold:1!==t&&80,dragThreshold:1!==t&&120}}});1===t&&e.find(".js-featured-slider-controls").remove(),n.on("mount.after",(function(){Object(o.a)(".js-featured-article-title",200)})),n.mount({Controls:a.b,Swipe:a.c,Breakpoints:a.a,ArrowDisabler:function(e,n){var r="js-featured-slider-controls",i="js-featured-slider-previous",o="js-featured-slider-next";return{mount:function(){e.settings.rewind||1===t||e.on(["mount.after","run"],(function(){var t,a=s(n.Controls.items);try{for(a.s();!(t=a.n()).done;){var u=t.value;if(u.className.includes(r)){var c=u.querySelector(".".concat(i));c&&(0===e.index?c.setAttribute("disabled",""):c.removeAttribute("disabled"));var l=u.querySelector(".".concat(o));if(l)(e.settings.bound?e.index+(e.settings.perView-1):e.index)===n.Sizes.length-1?l.setAttribute("disabled",""):l.removeAttribute("disabled")}}}catch(e){a.e(e)}finally{a.f()}}))}}}}),setTimeout((function(){window.dispatchEvent(new Event("resize"))}),350)}Object(o.a)(".js-featured-article-title",200)}))}},[[23,0,1]]]);
=======
"use strict";(self.webpackChunkliebling=self.webpackChunkliebling||[]).push([[621],{906:(e,t,i)=>{var n=i(755),r=i.n(n),s=i(433),l=i(911);i(350);r()((function(){var e=r()(".js-featured-slider");if(e.length>0){var t=e.find(".swiper-slide").length;new l.ZP(".js-featured-slider",{modules:[l.W_,l.s5],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},a11y:!0,on:{init:function(){(0,s.Z)(".js-featured-article-title",200)}}});1===t&&e.find(".js-featured-slider-button").remove()}(0,s.Z)(".js-featured-article-title",200)}))}},e=>{e.O(0,[898],(()=>{return t=906,e(e.s=t);var t}));e.O()}]);
>>>>>>> v2.1.1
