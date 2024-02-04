// *************************************************************************//
// ! This is main JS file that contains custom scripts used in this website*/
// *************************************************************************//
/**
	Navigation File

	01. Carousel
	02. Grid Masonry
	03. Fixed Header
	04. Slick Carousel
	05. Mobile Button
	06. Blog details Input Field
	07. Contact input
	08. Lightbox popup

 */

$(document).ready(function () {
	"use strict";

	// **********************************************************************//
	// 01. Carousel
	// **********************************************************************//
	$("#news-owl-carousel").owlCarousel({
		items: 3,
		pullDrag: true,
		margin: 10,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		responsiveClass: true,
		touchDrag: true,
		lazyLoad: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});

	// **********************************************************************//
	// 02. Grid Masonry
	// **********************************************************************//

	var $masonry_grid = $('.grid');
	$masonry_grid.imagesLoaded(function () {
		$masonry_grid.masonry({
			itemSelector: '.grid-item'
		});
	});


	// **********************************************************************//
	// 03. Fixed Header
	// **********************************************************************//

	$(window).on('scroll', function () {
		var sc = $(window).scrollTop()
		var header = $('header');
		if (sc > 60) {
			header.addClass("fixed")
		} else {
			header.removeClass("fixed")
		}
	});

	// **********************************************************************//
	// 04. Slick Carousel
	// **********************************************************************//
	$('.team-slider').slick({
		slidesToShow: 4,
		centerMode: true,
		infinite: true,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		],
		nextArrow: '<div class="next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="15" viewBox="0 0 38 28"><defs><path id="vl9xa" d="M1500.64 5486.14a1.21 1.21 0 0 1 0 1.7l-12.67 12.8a1.2 1.2 0 0 1-1.7 0 1.22 1.22 0 0 1 0-1.71l10.63-10.73h-32.7a1.2 1.2 0 0 1-1.2-1.2c0-.68.54-1.22 1.2-1.22h32.7l-10.63-10.72a1.22 1.22 0 0 1 0-1.72 1.2 1.2 0 0 1 1.7 0z"/></defs><g><g transform="translate(-1463 -5473)"><use fill="#20add0" xlink:href="#vl9xa"/></g></g></svg></div>',
		prevArrow: '<div class="prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="15" viewBox="0 0 38 28"><defs><path id="nvcba" d="M1377.36 5486.14a1.21 1.21 0 0 0 0 1.7l12.67 12.8a1.2 1.2 0 0 0 1.7 0c.47-.47.47-1.24 0-1.71l-10.63-10.73h32.7a1.2 1.2 0 1 0 0-2.42h-32.7l10.63-10.72c.47-.48.47-1.24 0-1.72a1.2 1.2 0 0 0-1.7 0z"/></defs><g><g transform="translate(-1377 -5473)"><use fill="#20add0" xlink:href="#nvcba"/></g></g></svg></div>',
	});



	// **********************************************************************//
	// 05. Mobile Button
	// **********************************************************************//
	var menu = $('.header-block');
	$('.mobile-btn').on('click', function () {
		menu.toggle("slow");
		$(this).toggleClass('active');
	});

	$('.list-inline-item.top-sub-menu').on('click', function () {
		$(this).find('.sub-menu').toggleClass('active');
		$(this).toggleClass('active');
	});


	// **********************************************************************//
	// 06. Blog details input field
	// **********************************************************************//

	$('#open-reply-field').on('click', function () {
		$('.reply-field').css({
			'display': 'block'
		});
	});

	// **********************************************************************//
	// 07. Contact input
	// **********************************************************************//
	$('form.custom-form').find('input, textarea').on('keyup blur focus', function (e) {
		var $this = $(this),
			label = $this.prev('label');
		if (e.type === 'keyup') {
			if ($this.val() === '') {
				label.removeClass('active highlight');
			} else {
				label.addClass('active highlight');
			}
		} else if (e.type === 'blur') {
			if ($this.val() === '') {
				label.removeClass('active highlight');
			} else {
				label.removeClass('highlight');
			}
		} else if (e.type === 'focus') {
			if ($this.val() === '') {
				label.removeClass('highlight');
			} else if ($this.val() !== '') {
				label.addClass('highlight');
			}
		}
	});

	// **********************************************************************//
	// 08. Lighbox Popup
	// **********************************************************************//
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	//  $('#home-main-video video').on('ended', function () {
	//  	$('.video-message').css("opacity", "1");
	//  });
	//  $('#home-main-video video').on('play', function () {
	//  	$('.video-message').css("opacity", "0");
	//  });
});