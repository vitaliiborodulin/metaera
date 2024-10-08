// utm
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

// if (!utm_source_cookie && !utm_source_get) return; 

var utm_source = utm_source_cookie ? utm_source_cookie : utm_source_get;
// var utm_campaign = utm_campaign_cookie ? utm_campaign_cookie : utm_campaign_get;
// console.log(utm_source);

var form_utm_source = $('#utm_source');

if (utm_source) {
	form_utm_source.val(utm_source);
}

// cookie popup

const cookieResetBtn = $('.cookie__btn--reset');
cookieResetBtn.on('click', function(){
    if (confirm('Вы действительно хотите удалить куки сайта?')) {
        createCookie('show_cookie', null);
		window.location.reload();
	}
});


let showCookie = getCookie('show_cookie');
if(showCookie != 'no'){

    const cookieDialog = $('.cookie');

    // setTimeout(function(){
        cookieDialog.show();
    // }, 2000); 

    // cookie btns
    const cookieRejectBtn = $('.cookie__btn--reject');
    const cookieAcceptAllBtn = $('.cookie__btn--accept-all');
    const cookieSettingsBtn = $('.cookie__btn--settings');
    const cookieSaveSettingsBtn = $('.cookie__btn--save-settings');
    const cookieCloseBtn = $('.cookie__btn--close');

    const cookieOnePage = $('.cookie__one');
    const cookieTwoPage = $('.cookie__two');


    cookieAcceptAllBtn.on('click', function(){
        cookieDialog.hide();
        createCookie('show_cookie', 'no', '365');
    });

    cookieRejectBtn.on('click', function(){
        window.location.href = 'https://google.com';
    });

    cookieCloseBtn.on('click', function(){
        cookieDialog.hide();
        createCookie('show_cookie', 'no', '365');
    });

    cookieSettingsBtn.on('click', function(){
        cookieOnePage.hide();
        cookieTwoPage.show();
    });

    cookieSaveSettingsBtn.on('click', function(){
        // cookieTwoPage.hide();
        // cookieOnePage.show();
        cookieDialog.hide();
        createCookie('show_cookie', 'no', '365');
    });

}