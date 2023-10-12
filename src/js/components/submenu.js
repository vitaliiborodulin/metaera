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