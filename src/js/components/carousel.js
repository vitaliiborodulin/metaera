const container = document.querySelector(".carousel__serv");
const options = { 
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

new Carousel(container, options);