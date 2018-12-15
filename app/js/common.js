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
	
	/* ALL SECTIONS */
	console.log('window' + $(window).width());
	
//	var $sections = $('section');
//	$sections.each(function(i) {
//		var $sectionHeight = $(this).outerHeight() + "px";
//		$(this).css('min-height', $sectionHeight);
//		console.log($sectionHeight);
//		console.log($(this));
//	});
	
	
	/* HEADER */
	
	$('.main .language a').click(function() {
		$(this).next().fadeToggle();
		return false;
	});
	
	// fixed header
	
	$(window).scroll(function() {
		var $hdr = $('header'), $logo = $hdr.find('.logo-fixed');
		if($(this).scrollTop() > 10) {
			$hdr.addClass('fixed');
			$logo.show().animate({
				opacity: 1
			}, 500);
		} else {
			$hdr.removeClass('fixed');
			$logo.hide().animate({
				opacity: 0
			});
		}
	});
	
	
	/* Clients */
	
	$('.clients__slider').slick();
	
		var $spriteContainer = $('.clients__slider .hover-container');
		var $imgWidth = $spriteContainer.find('img');
		$imgWidth.each(function(i) {
			var $currentWidth = Math.round($(this).width());
			$spriteContainer.eq(i).width($currentWidth / 2);
		});
	
		var $hoverLogo = $('.hover-container');
		console.log($hoverLogo);
		$hoverLogo.hover(function() {
			$(this).css('background-position: -385px 0px');
		});
	
	/* Projects */
	
//	var $projectCards = $('.projects__right-part .row .project-container');
//	$projectCards.each(function(i) {
//		console.log(i);
//		if(i % 2 == 0) {
//			$(this).width(500);
//		}
//	})
	
	
	
});