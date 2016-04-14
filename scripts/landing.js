var navbarState = 0; // 0 = hidden, 1 = shown

var showNavbar = function() {
    navbarState = 1;
    $('.navbar .about').slideDown("slow");
    $('.navbar .works').slideDown("slow");
};

var hideNavbar = function() {
    navbarState = 0;
    $('.navbar .about').slideUp("slow");
    $('.navbar .works').slideUp("slow");
};

$(window).ready(function() {
    $('.navbar .about').hide();
    $('.navbar .works').hide();
    
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