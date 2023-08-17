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