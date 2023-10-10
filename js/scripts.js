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
    			$(this).find('.sub-menu').removeClass('open').hide();
    	} else {
    			$(this).addClass('active');
    			$(this).find('.sub-menu').addClass('open').show();
    	}
    	// $(this).find('.sub-menu').toggleClass('open').slideToggle();
    });
    
    $(document).on('click', function (e) {
     
    	if (!$('.menu-item-has-children a').is(e.target) ){
    			menuChildren.removeClass('active');
    			submenu.removeClass('open').hide();
    	}
    
    });
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
    // const servContainer = document.querySelector(".carousel__serv");
    // const servOptions = { 
    // 	enabled: true,
    //   breakpoints: {
    //     "(max-width: 768px)": {
    //       enabled: false,
    //     },
    //   },
    
    // 	Navigation: false,
    
    // };
    
    // if(servContainer){
    //   const servCarousel = new Carousel(servContainer, servOptions)
    // };
    
    const cardsContainer = document.querySelectorAll(".carousel__cards");
    
    for (i = 0; i < cardsContainer.length; ++i) {
      const cardsOptions = { 
        enabled: true,
        breakpoints: {
          "(min-width: 800px)": {
            enabled: false,
          },
          "(max-width: 450px)": {
            enabled: false,
          },
        },
        // Dots: {
        //   minCount: 2,
        // },
        Navigation: false,
        Dots: false,
        // 'dragFree': true,
        // 'slidesPerPage': 3,
      };
      
      if(cardsContainer){
        new Carousel(cardsContainer[i], cardsOptions)
      };
    }
    
    // service page
    
    const tabsSliderContainer = document.querySelector(".tabs__right-slider");
    const tabsSliderOptions = { 
    	enabled: true,
      breakpoints: {
        "(max-width: 768px)": {
          enabled: true,
        },
      },
      // Dots: false,
    	Navigation: false,
    	// 'dragFree': true,
    	// 'slidesPerPage': 1,
      // infinite: false,
    };
    
    if(tabsSliderContainer) {
      const tabsSliderCarousel = new Carousel(tabsSliderContainer, tabsSliderOptions);
    
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

    $(".input-phone").mask("+375 (99) 999-99-99");

    if($(window).width() < 576){
    
    	$('.footer__title').on('click', function() {
    		$(this).toggleClass('active').next('.footer__menu').slideToggle();
    	});
    
    }
    $.urlParam = function(name) {
    	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    	if (results == null) {
    			return null;
    	} else {
    			return decodeURI(results[1]) || 0;
    	}
    }
    
    function getCookie(c_name) {
    	var i, x, y, ARRcookies = document.cookie.split(";");
    	for (i = 0; i < ARRcookies.length; i++) {
    			x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    			y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    			x = x.replace(/^\s+|\s+$/g, "");
    			if (x == c_name) {
    					return unescape(y);
    			}
    	}
    }
    
    function createCookie(name, value, days) {
    	var expires;
    
    	if (days) {
    			var date = new Date();
    			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    			expires = "; expires=" + date.toGMTString();
    	} else {
    			expires = "";
    	}
    	document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }
    
    var utm_source_cookie = getCookie('utm_source');
    // var utm_campaign_cookie = getCookie('utm_campaign');
    var utm_source_get = $.urlParam('utm_source');
    // var utm_campaign_get = $.urlParam('utm_campaign');
    
    if (!utm_source_cookie && utm_source_get) {
    	createCookie('utm_source', utm_source_get, '365');
    	// createCookie('utm_campaign', utm_campaign_get, '365');
    }
    
    if (!utm_source_cookie && !utm_source_get) return;
    
    var utm_source = utm_source_cookie ? utm_source_cookie : utm_source_get;
    // var utm_campaign = utm_campaign_cookie ? utm_campaign_cookie : utm_campaign_get;
    // console.log(utm_source);
    
    var form_utm_source = $('#utm_source');
    
    if (utm_source) {
    	form_utm_source.val(utm_source);
    }
 
});

document.addEventListener( 'wpcf7mailsent', function( event ) {
    // if(event.detail.contactFormId=="224"){
    // onclick=yaCounter26043108.reachGoal('formsend'); return true;
    // }

    $(".form form").hide();
    $(".form .form__thank").show();

}, false );

// $("input[type=submit]").on('click', function(e){
//     e.preventDefault();
//     $(".form form").hide();
//     $(".form .form__thank").show();
// });