const servContainer = document.querySelector(".carousel__serv");
const servOptions = { 
	enabled: true,
  breakpoints: {
    "(max-width: 768px)": {
      enabled: false,
    },
  },
	// Dots: {
  //   minCount: 2,
  // },
	Navigation: false,
	// 'dragFree': true,
	// 'slidesPerPage': 3,
};

if(servContainer) new Carousel(servContainer, servOptions);

// service page

const tabsSliderContainer = document.querySelector(".tabs__right-slider");
const tabsSliderOptions = { 
	enabled: false,
  breakpoints: {
    "(max-width: 768px)": {
      enabled: true,
    },
  },
  // Dots: false,
	Navigation: false,
	// 'dragFree': true,
	'slidesPerPage': 1,
  infinite: false,
};

if(tabsSliderContainer) {
  var tabsSliderCarousel = new Carousel(tabsSliderContainer, tabsSliderOptions);
}

$(window).resize(function(){
  tabsSliderCarousel.reInit();
})
