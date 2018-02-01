$(function () {

//shrink header
    $(document).on("scroll", function () {
        if
                ($(document).scrollTop() > 150) {
            $(".nav-sticky").addClass("nav-stick-top");
        } else
        {
            $(".nav-sticky").removeClass("nav-stick-top");
        }
    });

//back to top

    /*****maginific popup **/
    $('.popup-container').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });

  
    //smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function (anchor, toggle) {} // Function to run after scrolling
    });

    //particle
    $('#particles').particleground({
        dotColor: '#eee',
        lineColor: '#eee'
    });

    //blog masonry
    var $container = $('#blog-masonry');
    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.post-masonry'
        });
    });

 $(".typed").typed({
                    strings: ["Beautifully", "Easily", "Fast"],
                    typeSpeed: 50,
                    backSpeed: 10,
                    backDelay: 2000,
                    showCursor: false,
                    loop: true
                });

});
