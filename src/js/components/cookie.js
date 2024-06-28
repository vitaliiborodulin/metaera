const cookieDialog = $('.cookie');
const cookieCloseBtn = $('.cookie__btn--close');

const cookieRejectBtn = $('.cookie__btn--reject');
const cookieAcceptAllBtn = $('.cookie__btn--accept-all');
const cookieSettingsBtn = $('.cookie__btn--settings');
const cookieSaveSettingsBtn = $('.cookie__btn--save-settings');

const cookieOnePage = $('.cookie__one');
const cookieTwoPage = $('.cookie__two');

cookieAcceptAllBtn.on('click', function(){
    cookieDialog.hide();
});

cookieRejectBtn.on('click', function(){
    cookieDialog.hide();
});

cookieCloseBtn.on('click', function(){
    cookieDialog.hide();
});

cookieSettingsBtn.on('click', function(){
    cookieOnePage.hide();
    cookieTwoPage.show();
})

// cookieSaveSettingsBtn.on('click', function(){
//     cookieTwoPage.hide();
//     cookieOnePage.show();
// })