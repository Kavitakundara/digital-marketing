(function ($) {
    "use strict";

    function updateScroll() { if ($(window).scrollTop() >= 80) { $(".header").addClass('sticky'); } else { $(".header").removeClass("sticky"); } }
    $(function () {
        $(window).scroll(updateScroll);
        updateScroll();
    });
    $(window).on("load", function () { $('.service--cards').owlCarousel({ items: 4, nav: false, dots: false, autoplay: true, loop: true, center: false, margin: 30, autoplayTimeout: 3000, autoplayHoverPause: true, autoHeight: true, smartSpeed: 2000, responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 2 }, 900: { items: 3 }, 1300: { items: 3 }, 1400: { items: 3 }, 1600: { items: 3 }, } }); });
    $(window).on("load", function () { $('.service-cards').owlCarousel({ items: 6, nav: false, dots: false, autoplay: true, loop: true, center: false, margin: 30, autoplayTimeout: 3000, autoplayHoverPause: true, autoHeight: true, smartSpeed: 2000, responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 900: { items: 4 }, 1300: { items: 3 }, 1400: { items: 3 }, 1600: { items: 3 }, } }); });

    $(window).on("load", function () { $('.work-slide').owlCarousel({ nav: false, navText: false, dots: false, autoplay: true, loop: true, center: false, margin: 40, autoplayTimeout: 2000, autoplayHoverPause: true, autoHeight: true, smartSpeed: 1000, responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 2 }, 1200: { items: 4 }, 1400: { items: 4 }, 1600: { items: 4 }, } }); });


    $(window).on("load", function () { $('.sw-icon-slider').owlCarousel({ nav: false, dots: false, autoplay: true, loop: true, center: false, margin: 20, autoplayTimeout: 3000, autoplayHoverPause: false, autoHeight: true, smartSpeed: 2000, responsive: { 0: { items: 3 }, 520: { items: 3 }, 768: { items: 4 }, 1200: { items: 6 }, 1400: { items: 7 }, 1600: { items: 8 }, } }); });
    $(window).on("load", function () { $('.review-slider').owlCarousel({ nav: true, navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"], dots: false, autoplay: true, loop: true, center: false, margin: 30, autoplayTimeout: 3500, autoplayHoverPause: true, autoHeight: true, smartSpeed: 2000, responsive: { 0: { items: 1 }, 520: { items: 1 }, 768: { items: 1 }, 1200: { items: 2 }, 1400: { items: 3 }, 1600: { items: 3 }, } }); });
    $(window).on("load", function () { $('.clients-logo-table').owlCarousel({ nav: true, navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"], dots: false, autoplay: true, loop: true, center: false, margin: 30, autoplayTimeout: 2000, autoplayHoverPause: false, autoHeight: true, smartSpeed: 2000, responsive: { 0: { items: 2 }, 520: { items: 3 }, 768: { items: 4 }, 1200: { items: 5 }, 1400: { items: 3 }, 1600: { items: 3 }, } }); });

    $(window).on("load", function () { $('.work-slider').owlCarousel({ nav: true, navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"], items: 2, dots: false, autoplay: true, loop: true, center: true, onInitialized: counter, onTranslated: counter, margin: 30, autoplayTimeout: 4500, autoplayHoverPause: true, smartSpeed: 1000, startPosition: 0, slideTransition: 'linear', responsiveClass: true, responsive: { 0: { items: 1, stagePadding: 0, }, 1300: { items: 1, stagePadding: 200, }, 1500: { items: 2 }, } }); });

    function counter(event) {
        if (!event.namespace) { return; }
        var slides = event.relatedTarget;
        $('#counter').html(slides.relative(slides.current()) + 1 + '/' + slides.items().length);
    }
    $('.video-play').magnificPopup({ type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, });
    new WOW().init();
    $(window).on("load", function () {
        $('.grid').isotope({ itemSelector: '.grid-item', });
        $('.filter-button-group').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $('.grid').isotope({ filter: filterValue });
            $('.filter-button-group li').removeClass('active');
            $(this).addClass('active');
        });
    })
    $(window).on("scroll", function () {
        function winScrollPosition() {
            var scrollPos = $(window).scrollTop(),
                winHeight = $(window).height();
            var scrollPosition = Math.round(scrollPos + winHeight / 1.2);
            return scrollPosition;
        }
        $(".odometer").each(function () { var elemOffset = $(this).offset().top; if (elemOffset < winScrollPosition()) { $(this).html($(this).data("count-to")); } });
    });
    $("[data-background]").each(function () { $(this).css("background-image", "url(" + $(this).attr("data-background") + ")") })
    $.scrollUp({ animation: 'fade', scrollImg: { active: true, type: 'background' } });
})(jQuery);


// B2B Slider

$(function () {
    var tickerLength = $('.b2b-buy ul li').length;
    var tickerHeight = $('.b2b-buy ul li').outerHeight();
    $('.b2b-buy ul li:last-child').prependTo('.b2b-buy ul');
    $('.b2b-buy ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.b2b-buy ul ').animate({
            top: -tickerHeight
        }, 600, function () {
            $('.b2b-buy ul li:first-child').appendTo('.b2b-buy ul');
            $('.b2b-buy ul').css('top', '');
        });
    }
    setInterval(function () {
        moveTop();
    }, 3000);
});

$(function () {
    var tickerLength = $('.b2b-buy1 ul li').length;
    var tickerHeight = $('.b2b-buy1 ul li').outerHeight();
    $('.b2b-buy1 ul li:last-child').prependTo('.b2b-buy1 ul');
    $('.b2b-buy1 ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.b2b-buy1 ul ').animate({
            top: -tickerHeight
        }, 600, function () {
            $('.b2b-buy1 ul li:first-child').appendTo('.b2b-buy1 ul');
            $('.b2b-buy1 ul').css('top', '');
        });
    }
    setInterval(function () {
        moveTop();
    }, 3000);
});

// FAQ Section

const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));



