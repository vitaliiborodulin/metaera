if($(window).width() < 576){

	$('.footer__title').on('click', function() {
		$(this).toggleClass('active').next('.footer__menu').slideToggle();
	});

}