var navbarState = 0; // 0 = hidden, 1 = shown

var showNavbar = function() {
    navbarState = 1;
    $('.navbar .about').slideDown("fast");
    $('.navbar .works').slideDown("fast");
};

var hideNavbar = function() {
    navbarState = 0;
    $('.navbar .about').fadeOut("slow");
    $('.navbar .works').fadeOut("slow");
};

var fadeTitle = function() {
    $('.main-content .main-title .main-title-name').fadeIn(2250);
    $('.main-content .main-title .main-title-title').fadeIn(2750);
};

$(window).ready(function() {
    $('.navbar .about').hide();
    $('.navbar .works').hide();
    $('.main-content .main-title .main-title-name').hide();
    $('.main-content .main-title .main-title-title').hide();
    
    fadeTitle();
    
    $('.navbar').on("mouseover", function() {
        if (navbarState == 0) {
            showNavbar();
        }
    });
    
    $('.navbar').on("mouseleave", function() {
        if (navbarState == 1) {
            setTimeout(function() {
                hideNavbar();
            }, 500);
        }
    });
    
    (function() {
        function scrollHorizontally(e) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.getElementById('scrollThis').scrollLeft -= (delta*70); // Multiplied by 70
            e.preventDefault();
        }
        if (document.getElementById('scrollThis').addEventListener) {
            // IE9, Chrome, Safari, Opera
            document.getElementById('scrollThis').addEventListener("mousewheel", scrollHorizontally, false);
            // Firefox
            document.getElementById('scrollThis').addEventListener("DOMMouseScroll", scrollHorizontally, false);
        } else {
            // IE 6/7/8
            document.getElementById('scrollThis').attachEvent("onmousewheel", scrollHorizontally);
        }
    })();
});