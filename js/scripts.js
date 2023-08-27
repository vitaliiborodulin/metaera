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
    $('.menu-item-has-children > a').on('click', function(e) {
    	e.preventDefault();
    });
    
    var submenu =  $('.sub-menu');
    var menuChildren = $('.menu-item-has-children');
    
    
    menuChildren.on('click', function() {
    	
    	if ($(this).hasClass('active')){
    			$(this).removeClass('active');
    			$(this).find('.sub-menu').removeClass('open').slideUp();
    	} else {
    			$(this).addClass('active');
    			$(this).find('.sub-menu').addClass('open').slideDown();
    	}
    	// $(this).find('.sub-menu').toggleClass('open').slideToggle();
    });
    
    // $(document).on('click', function (e) {
    
        
    // 	if (   !$('.menu-item-has-children a').is(e.target) ){
    // 					menuChildren.removeClass('active');
    // 					submenu.removeClass('open').slideUp();
    // 	}
    
    // });
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
    const servContainer = document.querySelector(".carousel__serv");
    const servOptions = { 
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
    
    if(servContainer) new Carousel(servContainer, servOptions);
    
    // service page
    
    const tabsSliderContainer = document.querySelector(".tabs__right-slider");
    const tabsSliderOptions = { 
    	enabled: false,
      breakpoints: {
        "(max-width: 768px)": {
          enabled: true,
        },
      },
      // Dots: false,
    	Navigation: false,
    	// 'dragFree': true,
    	'slidesPerPage': 1,
      infinite: false,
    };
    
    if(tabsSliderContainer) {
      var tabsSliderCarousel = new Carousel(tabsSliderContainer, tabsSliderOptions);
    
      $(window).resize(function(){
        tabsSliderCarousel.reInit();
      });
    }
    const tabCards = $('.tab__cards .tab__card');
    
    tabCards.on('click', function(){
    
    	tabCards.removeClass('active');
    	$(this).addClass('active');
    
    	var id = $(this).data('open');
    
    	var imageTabs = $('.tabs__right-slider .f-carousel__slide')
    
    	imageTabs.slideUp(200);
    	$('.tabs__right-slider .f-carousel__slide[data-id='+id+']').slideDown(200);
    
    });
});