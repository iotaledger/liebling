import fitvids from 'fitvids';
import $ from 'jquery';
import mediumZoom from 'medium-zoom';
import shave from 'shave';
import Swiper, { A11y, Navigation } from 'swiper';
import 'swiper/css';
import {
  adjustImageGallery,
  isMobile,
  makeImagesZoomable,
  managePostImages
} from './helpers';

let $animationWrapper = null;
let $progressCircle = null;
let lastScrollingY = window.pageYOffset;
let lastWindowHeight = 0;
let lastDocumentHeight = 0;
let circumference = 0;
let isTicking = false;

const onScrolling = () => {
  lastScrollingY = window.pageYOffset;
  requestTicking();
};

const adjustShare = (timeout) => {
  if (!isMobile('1023px')) {
    $('body').removeClass('share-menu-displayed');
  } else {
    $('body').addClass('share-menu-displayed');
    setTimeout(() => {
      $animationWrapper.removeAttr('data-animate');
    }, timeout);
  }
};

const onResizing = () => {
  setHeights();
  adjustShare(100);

  setTimeout(() => {
    setCircleStyles();
    requestTicking();
  }, 200);
};

const requestTicking = () => {
  if (!isTicking) {
    requestAnimationFrame(updating);
  }

  isTicking = true;
};

const updating = () => {
  const progressMax = lastDocumentHeight - lastWindowHeight;
  const percent = Math.ceil((lastScrollingY / progressMax) * 100);

  if (percent <= 100) {
    setProgress(percent);
  }

  isTicking = false;
};

const setHeights = () => {
  lastWindowHeight = window.innerHeight;
  lastDocumentHeight = $(document).height();
};

const setCircleStyles = () => {
  const svgWidth = $progressCircle.parent().width();
  const radiusCircle = svgWidth / 2;
  const borderWidth = isMobile() ? 2 : 3;

  $progressCircle.parent().attr('viewBox', `0 0 ${svgWidth} ${svgWidth}`);
  $progressCircle.attr('stroke-width', borderWidth);
  $progressCircle.attr('r', radiusCircle - (borderWidth - 1));
  $progressCircle.attr('cx', radiusCircle);
  $progressCircle.attr('cy', radiusCircle);

  circumference = radiusCircle * 2 * Math.PI;

  $progressCircle[0].style.strokeDasharray = `${circumference} ${circumference}`;
  $progressCircle[0].style.strokeDashoffset = circumference;
};

const setProgress = percent => {
  if (percent <= 100) {
    const offset = circumference - (percent / 100) * circumference;
    $progressCircle[0].style.strokeDashoffset = offset;
  }
};

const prepareProgressCircle = () => {
  $progressCircle = $('.js-progress');

  setHeights();
  setCircleStyles();
  updating();

  setTimeout(() => {
    $progressCircle.parent().css('opacity', 1);
  }, 300);
};

const hideHardCodedFollowUs = () => {
  $("p").filter(function () {
    const text = $(this).text();
    return text.includes("Follow us on our official channels") || text.includes("Follow the IOTA Foundation on our official channels");
  }).hide().next('p').hide();
}

$(() => {

  hideHardCodedFollowUs() 

  // --> post deprecation
    if ($('.disclamer-deprecated-post').length > 0) {
      addNoIndexMetaTag()
  } else {
    const postPublishedDate = new Date($('.js-date-published')[0].innerText).getTime()
    const today = new Date().getTime()
    // if a post is older than two years, add a disclaimer
    if (today - postPublishedDate > 2 * 365 * 24 * 60 * 60 * 1000) {
      $('#header').append(
        '<div class="disclamer-deprecated-post">Disclaimer: This blog post has been marked as deprecated, therefore some of the content might be out of date.</div>'
      )
      addNoIndexMetaTag()
    }
  }
  function addNoIndexMetaTag() {
    let metaElement = document.createElement('meta')
    metaElement.setAttribute('name', 'robots')
    metaElement.setAttribute('content', 'noindex, nofollow')
    document.getElementsByTagName('head')[0].prepend(metaElement)
  }
  // <-- end of post deprecation
  
  $aosWrapper = $('.js-aos-wrapper')
  $animationWrapper = $('.js-animation-wrapper');
  const $scrollButton = $('.js-scrolltop')
  const $recommendedSlider = $('.js-recommended-slider')

  fitvids('.js-post-content');

  adjustImageGallery();
  adjustShare(1000);

  if ($recommendedSlider.length > 0) {
    const recommendedSwiper = new Swiper('.js-recommended-slider', {
      modules: [Navigation, A11y],
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
        init: function() {
          shave('.js-article-card-title', 100);
          shave('.js-article-card-title-no-image', 250);
        }
      }
    });
  }

  shave('.js-article-card-title', 100);
  shave('.js-article-card-title-no-image', 250);

  $scrollButton.on('click', () => {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      500
    );
  });

  managePostImages($);
  makeImagesZoomable($, mediumZoom);

  window.addEventListener('scroll', onScrolling, { passive: true });
  window.addEventListener('resize', onResizing, { passive: true });
});

$(window).on('load', () => {
  prepareProgressCircle()
})