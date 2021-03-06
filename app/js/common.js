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
	//console.log('window' + $(window).width());
	
//	var $sections = $('section');
//	$sections.each(function(i) {
//		var $sectionHeight = $(this).outerHeight() + "px";
//		$(this).css('min-height', $sectionHeight);
//		console.log($sectionHeight);
//		console.log($(this));
//	});
	
//	$(document).bind('mousewheel', function (e) { 
//		var nt = $(window).scrollTop()-(e.deltaY*e.deltaFactor*100);  
//		console.log(nt);
//		$(document.body).animate( { 
//			 scrollTop : nt 
//		 } , 500);  
//	} );
	
	

	// custom cursor
	
	var $x = $y = 0;
	function move() {
		$('.us-cursor').css({
			left: $x + 'px',
			top: $y + 'px'
		});
	}
	
	$(document).on('mousemove', function(e) {
		$x = e.clientX;
		$y = e.clientY;
		return false;
	});
	
	setInterval(move, 100);
	
	// end custom cursor
	
	
	/* HEADER */
	
	$('.main .language a').click(function() {
		var $nextLang = $(this).next();
		if(!$nextLang.hasClass('showing')) {
			$nextLang.addClass('showing').animate({
				opacity: 1
			}, 1000);
		} else {
			$nextLang.removeClass('showing').animate({
				opacity: 0
			}, 500);
		}

		return false;
	});
	
	// fixed header
	
	$(window).scroll(function() {
		var $hdr = $('header'), $logo = $hdr.find('.logo-fixed');
		if($(this).scrollTop() > 10 && $(this).width() > 600) {
			$hdr.addClass('fixed');
			$logo.show().animate({
				opacity: 1
			}, 300);
		} else {
			$hdr.removeClass('fixed');
			$logo.hide().animate({
				opacity: 0
			}, 200);
		}
	});
	
	/* Main screen */
	
	$('.main__aside-right .scroll-link a').click(function(e) {
		e.preventDefault();
		var $id = $(this).attr('href'),
			$top = $($id).offset().top;
		
		$('body,html').animate({scrollTop: $top}, 1500);
		console.log($(window).width())
	});
	
	/*End main screen */
	
	// main popup form
	
	var $iconEvent = $('.main__popup-message img'), $contactForm = $('.main__contact-form');
	var $closeButton = $contactForm.find('.close-btn');
	$iconEvent.click(function() {
		$contactForm.fadeIn();
		return false;
	});
	$closeButton.click(function() {
		$contactForm.fadeOut();
	});
	
	
	// end popup form
	
	/* Clients */
	
	$('.clients__slider').slick({
		prevArrow: $('.arrows .prev'),
		nextArrow: $('.arrows .next'),
		responsive: [
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}

		  ]
	});
	
//		var $spriteContainer = $('.clients__slider .hover-container');
//		var $imgWidth = $spriteContainer.find('img');
//		$imgWidth.each(function(i) {
//			var $currentWidth = Math.round($(this).width());
//			$spriteContainer.eq(i).width($currentWidth / 2);
//		});
//	
	
	/* Projects */
	
	var $projectCards = $('.projects__right-part .row .project-container');
	$projectCards.each(function(i) {
		console.log(i);
		if(i % 2 == 0 && $(window).width() > 600) {
			$(this).width('25vw');
		}
	})
	
	/* Team */
	
	var $hoverBlock = $(".team__main-worker"),
		$overlayName = $hoverBlock.find(".name"),
		$overlayPosition = $hoverBlock.find(".position");
	$hoverBlock.hover(function(e) {
		e.preventDefault();
		$(this).find('.overlay').animate({
			opacity: 1
		}, 1000);
		$overlayName.animate({
			bottom: "2.5vw",
			opacity: 1
		}, 500);
		$overlayPosition.animate({
			bottom: "1vw",
			opacity: 1
		}, 500);
	}, function() {
		$(this).find('.overlay').animate({
			opacity: 0
		}, 800);
		$overlayName.animate({
			bottom: 0,
			opacity: 0
		}, 500);
		$overlayPosition.animate({
			bottom: 0,
			opacity: 0
		}, 500);
	});
	
	
	var $hoverBlockSecond = $(".team__worker"),
		$overlayNameSecond = $hoverBlockSecond.find(".name"),
		$overlayPositionSecond = $hoverBlockSecond.find(".position");
	$hoverBlockSecond.hover(function(e) {
		e.preventDefault();
		$(this).find('.overlay').animate({
			opacity: 1
		}, 1000);
		$overlayNameSecond.animate({
			bottom: "2vw",
			opacity: 1
		}, 500);
		$overlayPositionSecond.animate({
			bottom: "0.75vw",
			opacity: 1
		}, 500);
	}, function() {
		$(this).find('.overlay').animate({
			opacity: 0
		}, 800);
		$overlayNameSecond.animate({
			bottom: 0,
			opacity: 0
		}, 500);
		$overlayPositionSecond.animate({
			bottom: 0,
			opacity: 0
		}, 500);
	});
	
	
});