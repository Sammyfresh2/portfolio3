$(document).ready(function(){
// hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        autoplay: true,
        autoplayTimeout:4000,
        smartSpeed: 1000,
        dots: false,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{

            },
            600:{
            },
            1000:{
            }
        }
    })

})