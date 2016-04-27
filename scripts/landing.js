var navbarState = 0; // 0 = hidden, 1 = shown
var $currentMainContent = $('.main-content .main-title');
var mainTitleShown = true;
var $mainContentClass = "";

var startState = function() {
    $('.navbar .works').hide();
    $('.main-content .main-title .main-title-name').hide();
    $('.main-content .main-title .main-title-title').hide();
    $('.lower-indicator').hide();
    $('.main-about').hide();
    $('.main-works').hide();
};

var fadeTitleIn = function() {
    $('.main-content .main-title .main-title-name').fadeIn(2250);
    $('.main-content .main-title .main-title-title').fadeIn(2750);
    $('.lower-indicator').fadeIn(2750);
};

var showNavbar = function() {
    navbarState = 1;
    $('.navbar .works').slideDown("fast");
};

var hideNavbar = function() {
    navbarState = 0;
    $('.navbar .works').fadeOut("slow");
};

var hideIndicator = function() {
    $('.lower-indicator').fadeOut("fast");
};

var showIndicator = function() {
    setTimeout(function() {
        $('.lower-indicator').fadeIn("slow");
    }, 1000);
};

$(window).ready(function() {
    $currentMainContent = $('.main-content .main-title');
    startState();    
    fadeTitleIn();
    
    $('.navbar').on("mouseover", function() {
        if (navbarState == 0) {
            showNavbar();
            hideIndicator();
        }
    });
    
    $('.navbar').on("mouseleave", function() {
        if (navbarState == 1) {
            setTimeout(function() {
                hideNavbar();
            }, 500);
            showIndicator();
        }
    });
    
    $('.main-content .main-title').on("click", function() {
        $currentMainContent.fadeOut("slow");
        $currentMainContent = $('.main-content .main-about');
        mainTitleShown = false;
        $('.main-content .main-about').fadeIn("slow");
    });
    
    $('.main-content .main-about .main-about-close').on("click", function() {
        $currentMainContent.fadeOut("slow");
        $currentMainContent = $('.main-content .main-title');
        mainTitleShown = true;
        $('.main-content .main-title').fadeIn("slow");
    });
    
    $('.navbar .works .examples').on("click", function() {
        if ($mainContentClass != $(this).data('main-class')) {
            $currentMainContent.fadeOut("slow");
            $mainContentClass = $(this).data('main-class');
            $currentMainContent = $('.main-content .' + $mainContentClass);
            $('.main-content .' + $mainContentClass).fadeIn("slow");
            $('.main-content .main-works-close').fadeIn("slow");
            mainTitleShown = false;
        }
    });
    
    $('.main-content .main-works-container .main-works-close').on("click", function() {
        $('.main-content .main-works-close').fadeOut("slow");
        $currentMainContent.fadeOut("slow");
        $currentMainContent = $('.main-content .main-title');
        mainTitleShown = true;
        $('.main-content .main-title').fadeIn("slow");
    });
    
    $('.main-content .main-content-closer').on("click", function() {
        if (mainTitleShown == false) {
            $('.main-content .main-works-close').fadeOut("slow");
            $currentMainContent.fadeOut("slow");
            $currentMainContent = $('.main-content .main-title');
            $('.main-content .main-title').fadeIn("slow");
            mainTitleShown = true;
        }
    })
    
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('scrollThis').scrollLeft -= (delta*85); // Multiplied by 85
        e.preventDefault();
    };
    if (document.getElementById('scrollThis').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('scrollThis').addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById('scrollThis').addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('scrollThis').attachEvent("onmousewheel", scrollHorizontally);
    };
});