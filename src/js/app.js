import Headroom from "headroom.js";
import $ from 'jquery';
import shave from 'shave';
import Swiper, { FreeMode, A11y } from 'swiper';
import 'swiper/css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import * as Typesense from 'typesense/dist/typesense.min';
import {
    formatDate,
    getParameterByName,
    isMobile,
    isRTL
} from './helpers';

$(() => {
    if (isRTL()) {
        $('html').attr('dir', 'rtl').addClass('rtl')
    }

    const $body = $('body')
    const $header = $('.js-header')
    const $announcementBar = $('#announcement-bar-root');
    const $openMenu = $('.js-open-menu')
    const $closeMenu = $('.js-close-menu')
    const $menu = $('.js-menu')
    const $toggleSubmenu = $('.js-toggle-submenu')
    const $submenuOption = $('.js-submenu-option')[0]
    const $submenu = $('.js-submenu')
    const $recentSlider = $('.js-recent-slider');
    const $openSecondaryMenu = $('.js-open-secondary-menu')
    const $openSearch = $('.js-open-search')
    const $closeSearch = $('.js-close-search')
    const $search = $('.js-search')
    const $inputSearch = $('.js-input-search')
    const $searchResults = $('.js-search-results')
    const $searchNoResults = $('.js-no-results')
    const $toggleDarkMode = $('.js-toggle-darkmode')
    const $closeNotification = $('.js-notification-close')
    const $mainNav = $('.js-main-nav')
    const $mainNavLeft = $('.js-main-nav-left')
    const $newsletterElements = $('.js-newsletter')
    const $nativeComments = $('.js-native-comments > div > iframe')[0];
    const currentSavedTheme = localStorage.getItem('theme')

    let fuse = null;
    let postsCollection = null
    let submenuIsOpen = false
    let secondaryMenuTippy = null

    const showSubmenu = () => {
        $header.addClass('submenu-is-active')
        $toggleSubmenu.addClass('active')
        $submenu.removeClass('closed').addClass('opened')
    }

    const hideSubmenu = () => {
        $header.removeClass('submenu-is-active')
        $toggleSubmenu.removeClass('active')
        $submenu.removeClass('opened').addClass('closed')
    }

    const toggleScrollVertical = () => {
        $body.toggleClass('no-scroll-y')
    }

    const tryToRemoveNewsletter = () => {
        if (typeof disableNewsletter !== 'undefined' && disableNewsletter) {
            $newsletterElements.remove()
        }
    }

    const trySearchFeature = () => {
        if (typeof typesenseApiKey !== 'undefined') {
            initTypesense()
        }
    }

    // NOTE: This is not from the liebling theme

    const initTypesense = () => {
        const searchClient = new Typesense.SearchClient({
            nodes: [{
                host: 'blog-search.iota.org',
                port: '443',
                protocol: 'https',
            }],
            apiKey: typesenseApiKey,
            connectionTimeoutSeconds: 5,
            cacheSearchResultsForSeconds: 120,
        });
        postsCollection = searchClient.collections('posts');
    }

    const typesenseSearch = async (query) => {
        const params = {
            query_by: "title, tags, author, text",
            query_by_weights: "3, 3, 1, 2",
            highlight_fields: "text",
            highlight_affix_num_tokens: 4,
            per_page: 100,
            typo_tokens_threshold: 10,
            exclude_fields: "text",
            num_typos: 2,
        };

        return await postsCollection.documents().search({ q: query, ...params });
    }

    const showNotification = (typeNotification) => {
        const $notification = $(`.js-alert[data-notification="${typeNotification}"]`)
        $notification.addClass('opened')
        setTimeout(() => {
            closeNotification($notification)
        }, 5000)
    }

    const closeNotification = ($notification) => {
        $notification.removeClass('opened')
        const url = window.location.toString()

        if (url.indexOf('?') > 0) {
            const cleanUrl = url.substring(0, url.indexOf('?'))
            window.history.replaceState({}, document.title, cleanUrl)
        }
    }

    const checkForActionParameter = () => {
        const action = getParameterByName('action')
        const stripe = getParameterByName('stripe')

        if (action === 'subscribe') {
            showNotification('subscribe')
        }

        if (action === 'signup') {
            window.location = `${ghostHost}/signup/?action=checkout`
        }

        if (action === 'checkout') {
            showNotification('signup')
        }

        if (action === 'signin') {
            showNotification('signin')
        }

        if (stripe === 'success') {
            showNotification('checkout')
        }
    }

    const toggleDesktopTopbarOverflow = (disableOverflow) => {
        if (!isMobile()) {
            if (disableOverflow) {
                $mainNav.addClass('toggle-overflow')
                $mainNavLeft.addClass('toggle-overflow')
            } else {
                $mainNav.removeClass('toggle-overflow')
                $mainNavLeft.removeClass('toggle-overflow')
            }
        }
    }

    const openExternalLinksInDifferentTab = () => {
        let links = $('a');
        $.each(links, function (index, value) {
            if (!value.href.includes(window.location.hostname)) {
                if ($(value).parents('#cookieblock', '#cookieblock__banner__wrapper', '#cookieblock__banner').length > 0) {
                    value.target = '_self';
                } else {
                    value.target = '_blank';
                }
            }
        });
    }

    $openMenu.on('click', () => {
        $header.addClass('mobile-menu-opened')
        $menu.addClass('opened')
        toggleScrollVertical()
    })

    $closeMenu.on('click', () => {
        $header.removeClass('mobile-menu-opened')
        $menu.removeClass('opened')
        toggleScrollVertical()
    })

    $toggleSubmenu.on('click', () => {
        submenuIsOpen = !submenuIsOpen

        if (submenuIsOpen) {
            showSubmenu()
        } else {
            hideSubmenu()

        }
    })

    $openSearch.on('click', () => {
        $search.addClass('opened')
        setTimeout(() => {
            $inputSearch.trigger('focus')
        }, 400);
        toggleScrollVertical()
    })

    $closeSearch.on('click', () => {
        $inputSearch.trigger('blur')
        $search.removeClass('opened')
        toggleScrollVertical()
    })

    $inputSearch.on('keyup', async () => {
        if ($inputSearch.val().length > 0 && postsCollection) {
            const results = (await typesenseSearch($inputSearch.val())).hits

            let htmlString = ''

            if (results.length > 0) {
                for (let i = 0, len = results.length; i < len; i++) {
                    const date = results[i].document.date * 1000
                    htmlString += `
          <article class="m-result">\
            <a href="${results[i].document.url}" class="m-result__link">\
              <h3 class="m-result__title">${results[i].document.title}</h3>\
              <span class="m-result__date">${formatDate(date)}</span>\
            </a>\
          </article>`
                }

                $searchNoResults.hide()
                $searchResults.html(htmlString)
                $searchResults.show()
            } else {
                $searchResults.html('')
                $searchResults.hide()
                $searchNoResults.show()
            }
        } else {
            $searchResults.html('')
            $searchResults.hide()
            $searchNoResults.hide()
        }
    })

    $toggleDarkMode.on('change', () => {
        if ($toggleDarkMode.is(':checked')) {
            $('html').attr('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        } else {
            $('html').attr('data-theme', 'light')
            localStorage.setItem('theme', 'light')
        }
    })

    $toggleDarkMode.on('mouseenter', () => {
        toggleDesktopTopbarOverflow(true)
    })

    $toggleDarkMode.on('mouseleave', () => {
        toggleDesktopTopbarOverflow(true)
    })

    $closeNotification.on('click', function () {
        closeNotification($(this).parent())
    })

    $(window).on('click', (e) => {
        if (submenuIsOpen) {
            if ($submenuOption && !$submenuOption.contains(e.target)) {
                submenuIsOpen = false
                hideSubmenu()
            }
        }
    })

    $(document).on('keyup', (e) => {
        if (e.key === 'Escape' && $search.hasClass('opened')) {
            $closeSearch.click()
        }
    })

    if (currentSavedTheme) {
        if (currentSavedTheme === 'dark') {
          $toggleDarkMode.each(function() {
            $(this).attr('checked', true);
          });
        }
      }

    if ($header.length > 0) {
        const headroom = new Headroom($header[0], {
            tolerance: {
                down: 10,
                up: 20
            },
            offset: 15,
            onUnpin: () => {
                if (!isMobile() && secondaryMenuTippy) {
                    const desktopSecondaryMenuTippy = secondaryMenuTippy[0]

                    if (
                        desktopSecondaryMenuTippy && desktopSecondaryMenuTippy.state.isVisible
                    ) {
                        desktopSecondaryMenuTippy.hide()
                    }
                }
            }
        })
        headroom.init()
    }

    if ($announcementBar.length > 0) {
      $header.addClass('with-announcement-bar');
  
      setTimeout(() => {
        $header.removeAttr('data-animate');
      }, 500);
  
      const barMutationObserver = new MutationObserver((e) => {
        if (e[0].addedNodes.length) {
          $announcementBar.detach().prependTo($header);
          const barHeight = $announcementBar.height();
          document.documentElement.style.setProperty('--announcement-bar-height', `${barHeight}px`);
        }
  
        if (e[0].removedNodes.length) {
          document.documentElement.style.setProperty('--announcement-bar-height', '0px');
        }
      });
  
      const barResizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          const barHeight = entry.contentRect.height;
          document.documentElement.style.setProperty('--announcement-bar-height', `${barHeight}px`);
        })
      });
  
      barMutationObserver.observe($announcementBar[0], { childList: true });
      barResizeObserver.observe($announcementBar[0]);
    } else {
      setTimeout(() => {
        $header.removeAttr('data-animate');
      }, 500);
    }

    if ($recentSlider.length > 0) {
        const recentSwiper = new Swiper('.js-recent-slider', {
            modules: [FreeMode, A11y],
            freeMode: true,
            slidesPerView: 4,
            gap: 0,
            a11y: true,
            direction: isRTL() ? 'rtl' : 'ltr',
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
                    peek: { before: 0, after: 115 }
                },
                568: {
                    perView: 1,
                    swipeThreshold: 80,
                    dragThreshold: 120,
                    peek: { before: 0, after: 115 }
                }
            },
            on: {
              init: function() {
                shave('.js-recent-article-title', 50);
              }
            }
          });
    }

    if ($openSecondaryMenu.length > 0) {
        const template = document.getElementById('secondary-navigation-template')

        secondaryMenuTippy = tippy('.js-open-secondary-menu', {
            appendTo: document.body,
            content: template.innerHTML,
            allowHTML: true,
            arrow: true,
            trigger: 'click',
            interactive: true,
            onShow() {
                toggleDesktopTopbarOverflow(true)
            },
            onHidden() {
                toggleDesktopTopbarOverflow(false)
            }
        })
    }

    tippy('.js-tooltip')

    shave('.js-article-card-title', 100)
    shave('.js-article-card-title-no-image', 250)

    checkForActionParameter()
    tryToRemoveNewsletter()
    trySearchFeature()
    openExternalLinksInDifferentTab()
})