$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: false,
    vertical: true,
    autoplay: true,
    // autoplaySpeed: 200,

   
  });
  	$('.second-slider').slick({
		slidesToShow: 3,
 		slidesToScroll: 1,
 		// autoplay: true,
  	// autoplaySpeed: 2000,
    autoplay: true,
     dots: true,
 		 responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1
      }
    },
  ]
	});


});

