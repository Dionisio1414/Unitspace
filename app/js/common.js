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
	$bg.delay(3000).animate({
		opacity: .1
	}, 1200).addClass('animated slideInDown');
	
	$circle.delay(4500).animate({
		opacity: 1
	}, 1000, function() {
		$(this).find('.logo').animate({
			opacity: 1
		}, 800);
		$(this).find('p').delay(300).animate({
			opacity: 1
		}, 400);
	});
	
	
	// MAIN PAGES
	
	/* HEADER */
	
	$('.main .language a').click(function() {
		$(this).next().fadeToggle();
		return false;
	});
	
	// fixed header
	
	$(window).scroll(function() {
		var $hdr = $('header'), $logo = $hdr.find('.logo-fixed');
		if($(this).scrollTop() > 1) {
			$hdr.addClass('fixed');
			$logo.animate({
				opacity: 1
			}, 500);
		} else {
			$hdr.removeClass('fixed');
			$logo.animate({
				opacity: 0
			}, 400);
		}
	});
	
	
	/* Clients */
	
	$('.clients__slider').slick();
	
	var $spriteContainer = $('.clients__slider .hover-container');
	var $imgHeight = $spriteContainer.find('img');
	$imgHeight.each(function(i) {
		var $currentHeight = Math.round($(this).height());
		$spriteContainer.eq(i).height($currentHeight / 2);
	});
	
	
});