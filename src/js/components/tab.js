const tabCards = $('.tab__cards .tab__card');

tabCards.on('click', function(){

	tabCards.removeClass('active');
	$(this).addClass('active');

	var id = $(this).data('open');

	var imageTabs = $('.tabs__right-slider .f-carousel__slide')

	imageTabs.slideUp(200);
	$('.tabs__right-slider .f-carousel__slide[data-id='+id+']').slideDown(200);

});