$(document).ready(function(){
	// menu
	$('.header__menu-btn').on('click', function(){
		$('.header__menu ul').toggleClass('menu-active');
		$(this).toggleClass('hamburger-active');
		$('.header').toggleClass('header-active');
        $('.header__form input').toggleClass('mobile-menu_active');
	});

	// sliders
	$('.reviews__slider__items__wrapper').slick({
		infinite:true,
		arrows: true,
		slidesToShow:3,
		speed:800,
		centerPadding:100,
		prevArrow: '<div class="prev"><img src="img/icons/prev.svg" alt="" /></div>',
		nextArrow: '<div class="next"><img src="img/icons/next.svg" alt="" /></div>',
		responsive: [
		    {
		     breakpoint: 769,
		     settings: {
		       slidesToShow: 2
		     }
		   },
		   {
		     breakpoint: 550,
		     settings: {
		       slidesToShow: 1
		     }
		   }
		  ]
	});
	$('.nuclear-power__slider__items__wrapper').slick({
		infinite:true,
		arrows: true,
		slidesToShow:4,
		speed:800,
		prevArrow: '<div class="prev"><img src="img/icons/prev.svg" alt="" /></div>',
		nextArrow: '<div class="next"><img src="img/icons/next.svg" alt="" /></div>',
		responsive: [
		    {
		     breakpoint: 1200,
		     settings: {
		       slidesToShow: 3
		     }
		   },
		    {
		     breakpoint: 769,
		     settings: {
		       slidesToShow: 2
		     }
		   },
		   {
		     breakpoint: 550,
		     settings: {
		       slidesToShow: 1
		     }
		   }
		  ]
	});
	$('.petrochemistry__slider__items__wrapper').slick({
		infinite:true,
		arrows: true,
		slidesToShow:4,
		speed:800,
		prevArrow: '<div class="prev"><img src="img/icons/prev.svg" alt="" /></div>',
		nextArrow: '<div class="next"><img src="img/icons/next.svg" alt="" /></div>',
		responsive: [
		    {
		     breakpoint: 1200,
		     settings: {
		       slidesToShow: 3
		     }
		   },
		    {
		     breakpoint: 769,
		     settings: {
		       slidesToShow: 2
		     }
		   },
		   {
		     breakpoint: 550,
		     settings: {
		       slidesToShow: 1
		     }
		   }
		  ]
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
// vh
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});