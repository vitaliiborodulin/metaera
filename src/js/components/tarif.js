$('.tarif__more').on('click', function () {
    $(this).toggleClass('active').next().slideToggle();
});