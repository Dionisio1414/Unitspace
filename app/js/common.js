$(function() {
	
	/* 
	*
	*	COMING SOON PAGE
	*	
	*/
	
	var $comingSoon = $('.coming-soon'),
		$letterLeft = $('.coming-soon__letter-left'),
		$letterRight = $('.coming-soon__letter-right'),
		$circle = $comingSoon.find('.animation-circle'),
		$bg = $comingSoon.find('.bg');
		
	
	
	$letterLeft.show().addClass('animated slideInLeft delay-2s');
	$letterRight.show().addClass('animated slideInRight delay-2s');
	
//	$comingSoon.delay(3000).animate({
//		"background-position-y": "0"
//	}, 1000);
//	
	$bg.delay(4000).animate({
		opacity: .1
	}, 1200).addClass('animated slideInDown delay-2s');
	
	$circle.delay(6000).animate({
		opacity: 1
	}, 1000, function() {
		$(this).find('.logo').animate({
			opacity: 1
		}, 500);
		$(this).find('p').delay(300).animate({
			opacity: 1
		}, 400);
	});
	
	
	// MAIN PAGES
	
	$('.clients__slider').slick();
	
	var $spriteContainer = $('.clients__slider .hover-container');
	var $imgHeight = $spriteContainer.find('img');
	$imgHeight.each(function(i) {
		var $currentHeight = Math.round($(this).height());
		$spriteContainer.eq(i).height($currentHeight / 2);
	});
	
	
});