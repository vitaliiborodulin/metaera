$(function() {
    var ss_custom = {
    	"main_bar_sticky": "true"
    };
    
    function animateNav() {
    	var win_scroll = $(window).scrollTop(),
    			win_height = $(window).height(),
    			main_nav = $('.header'),
    			main_nav_offset = '',
    			scroll_by = 120;
    
    	main_nav_offset = $(main_nav).outerHeight();
    
    	if (win_scroll > scroll_by) {
    			$(main_nav).addClass('sticky-nav');
    			window.setTimeout(function() {
    					$(main_nav).addClass('fix');
    			}, 200);
    	} else {
    			$(main_nav).removeClass('sticky-nav fix');
    	}
    
    }
    
    animateNav();
    
    $(window).on('load scroll', function() {
    	animateNav();
    });
    const burger = $('.header__burger');
    // const menu = $('.menu__wrapper');
    
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('header__burger--close');
        // menu.toggleClass('open');
    
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            // menu.removeClass('open');
            burger.removeClass('header__burger--close');
        }
    });
});