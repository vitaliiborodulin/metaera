$('.reference__menu .menu-item-has-children > a').on('click', function(e) {
	e.preventDefault();
});

var menuRefChildren = $('.reference__menu .menu-item-has-children');


menuRefChildren.on('click', function(e) {
    e.stopPropagation();
	
	if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).find('.sub-menu').removeClass('open').hide();
	} else {
			$(this).addClass('active');
			$(this).find('.sub-menu').addClass('open').show();
	}

});