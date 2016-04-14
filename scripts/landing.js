var navbarState = 0; // 0 = hidden, 1 = shown

var showNavbar = function() {
    navbarState = 1;
    $('.navbar .about').slideDown("fast");
    $('.navbar .works').slideDown("fast");
};

var hideNavbar = function() {
    navbarState = 0;
    $('.navbar .about').slideUp("slow");
    $('.navbar .works').slideUp("slow");
};

var fadeTitle = function() {
    $('.main-content .main-title').fadeIn(2250);
};

$(window).ready(function() {
    $('.navbar .about').hide();
    $('.navbar .works').hide();
    $('.main-content .main-title').hide();
    
    fadeTitle();
    
    $('.navbar').on("mouseover", function() {
        if (navbarState == 0) {
            showNavbar();
        }
    });
    
    $('.navbar').on("mouseleave", function() {
        if (navbarState == 1) {
            hideNavbar();
        }
    });
});