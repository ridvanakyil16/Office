$(document).ready(function() {
    $('.owl-carousel-one').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

$(document).ready(function() {
    $('.owl-carousel-two').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            1000: {
                items: 2
            },
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

$(document).ready(function() {
    $('.owl-carousel-three').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            500: {
                items: 1,
                dots: true,
            },
            768: {
                items: 1,
                dots: true,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 5
            },
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

$(document).ready(function() {
    $('.owl-carousel-four').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

$(document).ready(function() {
    $('.owl-carousel-compare').owlCarousel({
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

$(document).ready(function() {
    $('.owl-carousel-product-details').owlCarousel({
        nav: true,
        dots: false,
        autoplay: true,
        loop: false,
        responsive: {
            0: {
                items: 5,
            }
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});

$(document).ready(function() {
    $('.owl-carousel-product-type').owlCarousel({
        margin: 25,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            550: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        }
    })
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
});