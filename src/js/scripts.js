$(function() {
    //= components/header.js
    //= components/burger.js
    //= components/submenu.js
    //= components/popup.js
    //= components/carousel.js
    //= components/tab.js
    //= components/utm.js

    $("input[type=tel]").mask("+375 (99) 999-99-99");

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