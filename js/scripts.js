$(function() {
    var ss_custom = {
    	"main_bar_sticky": "true"
    };
    
    function animateNav() {
    	var win_scroll = $(window).scrollTop(),
    			win_height = $(window).height(),
    			main_nav = $('.header'),
    			main_nav_offset = '',
    			scroll_by = 100;
    
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
    const menu = $('.navigation');
    
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('header__burger--close');
        menu.toggleClass('open');
        $('html, body').toggleClass('overflow');
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            menu.removeClass('open');
            burger.removeClass('header__burger--close');
            $('html, body').removeClass('overflow');
        }
    });
    
    // $('body').on('click', '.navigation__menu a[href*="#"]', function(e) {
    // 	var fixed_offset = 70;
    
    // 	$('html,body').stop().animate({
    // 			scrollTop: $(this.hash).offset().top - fixed_offset
    // 	}, 500);
    
    // 	e.preventDefault();
    // 	menu.removeClass('open');
    // 	burger.removeClass('header__burger--close');
    // });
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
    const container = document.querySelector(".carousel__serv");
    const options = { 
    	enabled: true,
      breakpoints: {
        "(max-width: 768px)": {
          enabled: false,
        },
      },
    	// Dots: {
      //   minCount: 2,
      // },
    	Navigation: false,
    	// 'dragFree': true,
    	// 'slidesPerPage': 3,
    };
    
    new Carousel(container, options);
});