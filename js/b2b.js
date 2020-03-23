$(document).ready(function(){
	$('.reviews__slider__items__wrapper').slick({
		infinite:true,
		arrows: true,
		slidesToShow:3,
		slidesToScroll:1,
		speed:800
	});
	$('.slider-mini').slick({
		infinite:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:1,
		speed:800,
		asNavFor: '.slider-big',
		responsive: [
		    {
		     breakpoint: 1101,
		     settings: {
		       slidesToShow: 3,
		       slidesToScroll:1
		     }
		   },
		    {
		     breakpoint: 916,
		     settings: {
		       slidesToShow: 3
		     }
		   },
		   {
		     breakpoint: 801,
		     settings: {
		       slidesToShow: 3
		     }
		   }
		  ]
	});
});