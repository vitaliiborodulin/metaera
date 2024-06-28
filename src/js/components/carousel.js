// const servContainer = document.querySelector(".carousel__serv");
// const servOptions = { 
// 	enabled: true,
//   breakpoints: {
//     "(max-width: 768px)": {
//       enabled: false,
//     },
//   },

// 	Navigation: false,

// };

// if(servContainer){
//   const servCarousel = new Carousel(servContainer, servOptions)
// };

const cardsContainer = document.querySelectorAll(".carousel__cards");

for (i = 0; i < cardsContainer.length; ++i) {
  const cardsOptions = { 
    enabled: true,
    breakpoints: {
      "(min-width: 800px)": {
        enabled: false,
      },
      "(max-width: 450px)": {
        enabled: false,
      },
    },
    // Dots: {
    //   minCount: 2,
    // },
    Navigation: false,
    Dots: false,
    // 'dragFree': true,
    // 'slidesPerPage': 3,
  };
  
  if(cardsContainer){
    new Carousel(cardsContainer[i], cardsOptions)
  };
}

// service page

const tabsSliderContainer = document.querySelector(".tabs__right-slider");
const tabsSliderOptions = { 
	enabled: true,
  breakpoints: {
    "(max-width: 768px)": {
      enabled: true,
    },
  },
  // Dots: false,
	Navigation: false,
	// 'dragFree': true,
	// 'slidesPerPage': 1,
  // infinite: false,
};

if(tabsSliderContainer) {
  const tabsSliderCarousel = new Carousel(tabsSliderContainer, tabsSliderOptions);

  $(window).resize(function(){
    tabsSliderCarousel.reInit();
  });
}


